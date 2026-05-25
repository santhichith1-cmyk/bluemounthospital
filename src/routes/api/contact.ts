import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(10),
  subject: z.string().min(5).max(100),
  message: z.string().min(10).max(2000),
});

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const data = contactFormSchema.parse(body);

          console.log("Contact form submission:", {
            timestamp: new Date().toISOString(),
            ...data,
          });

          return Response.json({
            success: true,
            message: "Your message has been sent successfully.",
          });
        } catch (error) {
          if (error instanceof z.ZodError) {
            return Response.json(
              { error: "Invalid form data", details: error.errors },
              { status: 400 }
            );
          }
          console.error("Contact form error:", error);
          return Response.json(
            { error: "Internal server error" },
            { status: 500 }
          );
        }
      },
    },
  },
});

// Helper function to escape HTML (kept for future email integration)
function _escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

/*
// Example Resend integration (uncomment and add RESEND_API_KEY secret)
const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
  body: JSON.stringify({ ... }),
});
*/
