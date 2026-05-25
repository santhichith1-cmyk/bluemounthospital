import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(10),
  subject: z.string().min(5).max(100),
  message: z.string().min(10).max(2000),
});

const PRIMARY_RECIPIENT = "contactus@bluemounthospital.com";
const TEST_RECIPIENT = "mkt@bluemounthospital.com";
const DEFAULT_FROM = "onboarding@resend.dev";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const data = contactFormSchema.parse(body);

          const apiKey = process.env.RESEND_API_KEY;
          if (!apiKey) {
            console.error("RESEND_API_KEY not configured");
            return Response.json({ error: "Email service not configured" }, { status: 500 });
          }

          const html = `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
            <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
            <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
            <h3>Message:</h3>
            <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
          `;

          const primarySend = await sendWithResend({
            apiKey,
            to: PRIMARY_RECIPIENT,
            replyTo: data.email,
            subject: `New Contact Form: ${data.subject}`,
            html,
          });

          if (!primarySend.ok) {
            const resendMessage = await primarySend.response.text();

            if (isResendTestingRestriction(primarySend.response.status, resendMessage)) {
              const fallbackSend = await sendWithResend({
                apiKey,
                to: TEST_RECIPIENT,
                replyTo: data.email,
                subject: `[Forwarded test inbox] New Contact Form: ${data.subject}`,
                html,
              });

              if (!fallbackSend.ok) {
                const fallbackError = await fallbackSend.response.text();
                console.error("Resend fallback send failed:", fallbackSend.response.status, fallbackError);
                return Response.json({ error: "Failed to send message. Please try again." }, { status: 502 });
              }

              console.warn(
                `Contact form email delivered to ${TEST_RECIPIENT} because Resend is still limited to its testing inbox.`
              );
            } else {
              console.error("Resend send failed:", primarySend.response.status, resendMessage);
              return Response.json({ error: "Failed to send message. Please try again." }, { status: 502 });
            }
          }

          return Response.json({
            success: true,
            message: "Your message has been sent successfully.",
          });
        } catch (error) {
          if (error instanceof z.ZodError) {
            return Response.json({ error: "Invalid form data", details: error.errors }, { status: 400 });
          }
          console.error("Contact form error:", error);
          return Response.json({ error: "Internal server error" }, { status: 500 });
        }
      },
    },
  },
});

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

async function sendWithResend({
  apiKey,
  to,
  replyTo,
  subject,
  html,
}: {
  apiKey: string;
  to: string;
  replyTo: string;
  subject: string;
  html: string;
}) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: DEFAULT_FROM,
      to,
      reply_to: replyTo,
      subject,
      html,
    }),
  });

  return {
    ok: response.ok,
    response,
  };
}

function isResendTestingRestriction(status: number, message: string) {
  return status === 403 && message.includes("You can only send testing emails to your own email address");
}
