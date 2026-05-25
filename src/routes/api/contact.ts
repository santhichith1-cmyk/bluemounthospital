import { json } from "@tanstack/react-start";
import { createAPIFileRoute } from "@tanstack/react-start/server";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(10),
  subject: z.string().min(5).max(100),
  message: z.string().min(10).max(2000),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const APIRoute = createAPIFileRoute("/api/contact").default(
  async (req) => {
    if (req.method !== "POST") {
      return json(
        { error: "Method not allowed" },
        { status: 405 }
      );
    }

    try {
      const body = await req.json();
      const data = contactFormSchema.parse(body);

      // Send email using a service (Resend, SendGrid, etc.)
      // For now, we'll log it and return success
      // You can replace this with actual email service

      console.log("Contact form submission:", {
        timestamp: new Date().toISOString(),
        ...data,
      });

      // Option 1: Using Resend (recommended for Cloudflare)
      // Uncomment and add your Resend API key to environment variables
      /*
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "noreply@bluemounthospital.com",
          to: "info@bluemounthospital.com",
          replyTo: data.email,
          subject: `New Contact Form Submission: ${data.subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
            <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
            <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
            <h3>Message:</h3>
            <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
          `,
        }),
      });

      if (!emailResponse.ok) {
        console.error("Email send failed:", await emailResponse.text());
        return json(
          { error: "Failed to send email" },
          { status: 500 }
        );
      }

      // Send confirmation email to user
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "noreply@bluemounthospital.com",
          to: data.email,
          subject: "We received your message - Bluemount Hospital",
          html: `
            <h2>Thank you, ${escapeHtml(data.name)}!</h2>
            <p>We've received your message and will get back to you within 24 hours.</p>
            <p>In the meantime, feel free to call us at <strong>+91 86182 49192</strong></p>
            <hr>
            <h3>Your Message Summary:</h3>
            <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
            <hr>
            <p style="color: #999; font-size: 12px;">
              Best regards,<br>
              Bluemount Hospital & Research Institute<br>
              Ring Road, Mysuru, Karnataka 570019
            </p>
          `,
        }),
      });
      */

      return json({
        success: true,
        message: "Your message has been sent successfully.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return json(
          { error: "Invalid form data", details: error.errors },
          { status: 400 }
        );
      }

      console.error("Contact form error:", error);
      return json(
        { error: "Internal server error" },
        { status: 500 }
      );
    }
  }
);

// Helper function to escape HTML
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
