import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.union([z.literal(""), z.string().email()]).optional(),
  phone: z.string().min(10),
  message: z.string().min(10).max(2000),
});

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
            <p><strong>Email:</strong> ${data.email ? escapeHtml(data.email) : "Not provided"}</p>
            <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
            <h3>Message:</h3>
            <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
          `;

          const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              from: "onboarding@resend.dev",
              to: "bluemountclinic@gmail.com",
              ...(data.email ? { reply_to: data.email } : {}),
              subject: `New enquiry from ${data.name}`,
              html,
            }),
          });

          if (!res.ok) {
            const errText = await res.text();
            console.error("Resend send failed:", res.status, errText);
            return Response.json({ error: "Failed to send message. Please try again." }, { status: 502 });
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
