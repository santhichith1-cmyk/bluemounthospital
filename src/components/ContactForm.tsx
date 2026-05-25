import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+?[\d\s\-()]+$/, "Invalid phone number").min(10),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(100),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Call the serverless function
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! We've received your message and will contact you soon.",
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div>
          <h3 className="font-serif text-3xl md:text-4xl mb-4 leading-tight">
            Get in <span className="italic">touch</span> with us.
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Have questions about our integrated healthcare services? We'd love to hear from you. 
            Reach out and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-6">
          {/* Phone */}
          <a
            href="tel:+918618249192"
            className="flex items-start gap-4 group cursor-pointer"
          >
            <div className="mt-1 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Phone size={20} className="text-primary" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Call Us</h4>
              <p className="text-sm text-muted-foreground">+91 86182 49192</p>
              <p className="text-xs text-muted-foreground mt-1">Available 8:00 AM - 8:00 PM</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:info@bluemounthospital.com"
            className="flex items-start gap-4 group cursor-pointer"
          >
            <div className="mt-1 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Mail size={20} className="text-primary" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Email</h4>
              <p className="text-sm text-muted-foreground">info@bluemounthospital.com</p>
              <p className="text-xs text-muted-foreground mt-1">We'll respond within 24 hours</p>
            </div>
          </a>

          {/* Location */}
          <a
            href="https://maps.app.goo.gl/vAiLtyi2LYWG5di89"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 group cursor-pointer"
          >
            <div className="mt-1 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <MapPin size={20} className="text-primary" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Visit Us</h4>
              <p className="text-sm text-muted-foreground">
                Ring Road, opposite VTU<br />
                Mysuru, Karnataka 570019<br />
                India
              </p>
            </div>
          </a>
        </div>

        {/* Hours */}
        <div className="bg-card p-6 rounded-lg border border-border">
          <h4 className="font-medium mb-4">Operating Hours</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>Monday – Friday</span>
              <span className="font-medium text-foreground">08:00 – 20:00</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday</span>
              <span className="font-medium text-foreground">09:00 – 18:00</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday</span>
              <span className="font-medium text-foreground">Emergencies Only</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-card p-8 rounded-lg border border-border">
          {/* Status Messages */}
          {submitStatus.type && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg flex items-start gap-3 ${
                submitStatus.type === "success"
                  ? "bg-emerald-500/10 border border-emerald-500/20"
                  : "bg-red-500/10 border border-red-500/20"
              }`}
            >
              {submitStatus.type === "success" ? (
                <CheckCircle size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
              )}
              <p
                className={`text-sm ${
                  submitStatus.type === "success"
                    ? "text-emerald-700"
                    : "text-red-700"
                }`}
              >
                {submitStatus.message}
              </p>
            </motion.div>
          )}

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              placeholder="Your full name"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              {...register("phone")}
              type="tel"
              id="phone"
              placeholder="+91 12345 67890"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
            />
            {errors.phone && (
              <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              {...register("subject")}
              type="text"
              id="subject"
              placeholder="How can we help?"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
            />
            {errors.subject && (
              <p className="text-sm text-red-500 mt-1">{errors.subject.message}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register("message")}
              id="message"
              placeholder="Tell us more about your inquiry..."
              rows={5}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none"
            />
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium uppercase tracking-widest rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>

          <p className="text-xs text-muted-foreground text-center">
            We'll get back to you within 24 hours. Your information is secure and won't be shared.
          </p>
        </form>
      </motion.div>
    </div>
  );
}
