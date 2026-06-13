import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Bluemount Hospital & Research Institute" },
      {
        name: "description",
        content:
          "Read the Privacy Policy for Bluemount Hospital & Research Institute. Learn how we collect, use, and protect your personal information.",
      },
      {
        property: "og:title",
        content: "Privacy Policy — Bluemount Hospital & Research Institute",
      },
      {
        property: "og:description",
        content:
          "Read the Privacy Policy for Bluemount Hospital & Research Institute.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
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
          Privacy <span className="italic text-gold">Policy</span>
        </h1>

        <div className="space-y-12 text-muted-foreground leading-relaxed font-light">
          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">1. Introduction</h2>
            <p>
              Bluemount Hospital & Research Institute ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our Website or use our services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-foreground">Personal Information:</strong> Name, phone number, email address, and other contact details you provide when booking appointments or contacting us.
              </li>
              <li>
                <strong className="text-foreground">Health Information:</strong> Medical history, symptoms, and treatment details shared during consultations or through forms.
              </li>
              <li>
                <strong className="text-foreground">Usage Data:</strong> Information about how you interact with our Website, including IP address, browser type, pages visited, and time spent.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="mb-3">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide medical consultations, treatments, and healthcare services</li>
              <li>Schedule and manage appointments</li>
              <li>Communicate with you about your care, appointments, and our services</li>
              <li>Improve our Website and services</li>
              <li>Comply with legal and regulatory obligations</li>
              <li>Protect the security and integrity of our systems</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">4. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong className="text-foreground">Healthcare Providers:</strong> Doctors, specialists, and staff involved in your care.
              </li>
              <li>
                <strong className="text-foreground">Service Providers:</strong> Trusted third parties who assist us in operating our Website and services (e.g., hosting, analytics).
              </li>
              <li>
                <strong className="text-foreground">Legal Compliance:</strong> When required by law, court order, or to protect our rights and safety.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">6. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your personal information, subject to legal obligations</li>
              <li>Object to or restrict certain processing of your data</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, please contact us using the details below.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">7. Cookies and Tracking</h2>
            <p>
              Our Website may use cookies and similar technologies to enhance your browsing experience, analyze traffic, and understand user behavior. You can adjust your browser settings to refuse cookies, though this may affect some functionality.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">8. Children's Privacy</h2>
            <p>
              Our Website and services are not directed to children under 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post the revised policy on this page with an updated effective date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">10. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="mt-4 space-y-2 text-foreground/80">
              <p>
                <strong className="text-foreground">Phone:</strong>{" "}
                <a href="tel:+918618249192" className="text-accent hover:underline">
                  +91 86182 49192
                </a>
              </p>
              <p>
                <strong className="text-foreground">Address:</strong> Ring Road, opposite VTU Mysore Regional Centre, Sathagalli Layout, Rammanahalli, Mysuru, Karnataka 570019, India
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-foreground/80 py-16 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-between items-center text-[10px] font-mono uppercase tracking-widest opacity-50">
          <span>© {new Date().getFullYear()} Bluemount Hospital & Research Institute</span>
          <div className="flex gap-6">
            <Link to="/terms" className="hover:text-gold transition-colors">Terms of Use</Link>
            <Link to="/privacy" className="text-gold">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
