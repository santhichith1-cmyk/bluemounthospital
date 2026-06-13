import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Bluemount Hospital & Research Institute" },
      {
        name: "description",
        content:
          "Read the Terms of Use for Bluemount Hospital & Research Institute. These terms govern your use of our website and services.",
      },
      {
        property: "og:title",
        content: "Terms of Use — Bluemount Hospital & Research Institute",
      },
      {
        property: "og:description",
        content:
          "Read the Terms of Use for Bluemount Hospital & Research Institute.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-serif text-sm uppercase tracking-tighter text-foreground hover:opacity-80 transition-opacity">
            Bluemount Hospital &amp; Research Institute
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-24">
        <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-accent block mb-4">
          — Legal
        </span>
        <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-16">
          Terms of <span className="italic text-gold">Use</span>
        </h1>

        <div className="space-y-12 text-muted-foreground leading-relaxed font-light">
          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Bluemount Hospital & Research Institute website ("Website"), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this Website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">2. Medical Disclaimer</h2>
            <p>
              The content on this Website is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this Website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">3. Use of Services</h2>
            <p>
              Our online services, including appointment booking and contact forms, are provided for your convenience. We reserve the right to modify, suspend, or discontinue any part of the Website or services at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">4. Intellectual Property</h2>
            <p>
              All content on this Website, including text, graphics, logos, images, and software, is the property of Bluemount Hospital & Research Institute or its content suppliers and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">5. User Conduct</h2>
            <p>
              You agree not to use this Website for any unlawful purpose or in any way that could damage, disable, overburden, or impair the Website. You may not attempt to gain unauthorized access to any part of the Website or any systems or networks connected to it.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">6. Limitation of Liability</h2>
            <p>
              Bluemount Hospital & Research Institute and its affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of this Website. This includes damages for errors, omissions, interruptions, defects, delays, computer viruses, or loss of profits.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">7. Third-Party Links</h2>
            <p>
              This Website may contain links to third-party websites. These links are provided solely for your convenience. We do not endorse or assume any responsibility for the content or practices of any linked websites.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">8. Governing Law</h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in Mysuru, Karnataka.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">9. Changes to Terms</h2>
            <p>
              We reserve the right to update or modify these Terms of Use at any time without prior notice. Your continued use of the Website after any changes indicates your acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Use, please contact us at{" "}
              <a href="tel:+918618249192" className="text-accent hover:underline">
                +91 86182 49192
              </a>{" "}
              or visit us at our facility in Mysuru.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-foreground/80 py-16 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-between items-center text-[10px] font-mono uppercase tracking-widest opacity-50">
          <span>© {new Date().getFullYear()} Bluemount Hospital & Research Institute</span>
          <div className="flex gap-6">
            <Link to="/terms" className="text-gold">Terms of Use</Link>
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
