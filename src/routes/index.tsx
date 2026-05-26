import { Instagram } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import heroAtrium from "@/assets/hero-atrium-updated.jpg";
import philosophyImg from "@/assets/philosophy.avif";
import logo from "@/assets/logo.avif";
import { systems } from "@/lib/systems";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const heroRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);
  const heroImgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.08]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Bluemount Hospital"
              width={48}
              height={48}
              className="size-12 object-contain transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110"
            />
            <span
              className="font-serif text-sm tracking-tight font-semibold uppercase leading-tight hidden sm:block"
              style={{ color: "#1B3B6F" }}
            >
              Bluemount Hospital
              <br />
              <span className="text-muted-foreground text-xs font-normal tracking-wide normal-case">
                & Research Institute
              </span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-10 text-[13px] font-medium uppercase tracking-widest text-muted-foreground">
            {[
              { href: "#systems", label: "Systems" },
              { href: "#philosophy", label: "Philosophy" },
              { href: "#contact", label: "Contact" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative hover:text-foreground transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="text-foreground font-bold border-b border-primary pb-1">
              Book Now
            </a>
          </div>
          <a href="tel:+918618249192" className="hidden sm:flex items-center gap-2 text-sm font-mono font-medium">
            <span className="inline-block size-2 rounded-full bg-primary pulse-ring" aria-hidden />
            +91 86182 49192
          </a>
        </div>
      </motion.nav>

      {/* Hero */}
      <header
        id="top"
        ref={heroRef}
        className="relative min-h-[100dvh] flex items-center px-6 overflow-hidden bg-grad-radial"
      >
        {/* floating ambient blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-32 size-[500px] rounded-full bg-primary/15 blur-3xl float-slow"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/3 -right-32 size-[450px] rounded-full bg-accent/15 blur-3xl float-slower"
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Integrated Medical Sciences
            </span>
            <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] text-balance mb-8 tracking-tight font-bold">
              <span className="block text-[#1B3B6F]">Bluemount</span>
              <span className="block text-[#1B3B6F]">Hospital</span>
              <span className="block text-emerald-600 text-[0.45em] mt-2 not-italic font-normal tracking-wide">
                & Research Institute
              </span>
            </h1>
            <p className="max-w-lg text-xl text-muted-foreground leading-relaxed text-pretty mb-12">
              Where advanced modern medicine meets the foundational wisdom of Ayurveda, Siddha, Naturopathy and
              rehabilitation science — under one integrated roof in Mysuru.
            </p>
            <div className="flex flex-wrap gap-5">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="px-10 py-5 bg-foreground text-background text-sm font-bold uppercase tracking-widest hover:bg-primary transition-colors duration-300 shadow-xl shadow-primary/15"
              >
                Schedule Diagnostic
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="#systems"
                className="px-10 py-5 border-2 border-border text-sm font-bold uppercase tracking-widest hover:bg-card transition-colors"
              >
                Our Systems
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: heroImgY }}
            className="lg:col-span-5 relative"
          >
            <div
              className="absolute -inset-8 bg-gradient-to-br from-primary/25 via-transparent to-accent/25 blur-2xl rounded-sm"
              aria-hidden
            />
            <motion.img
              style={{ scale: heroImgScale }}
              src={heroAtrium}
              alt="Bluemount Hospital main atrium with daylight and oak furnishings"
              width={800}
              height={1024}
              className="relative w-full aspect-[3/4] object-cover ring-1 ring-black/5 rounded-sm shadow-2xl"
            />
          </motion.div>
        </div>
      </header>

      {/* Healing Systems */}
      <section id="systems" className="py-32 px-6 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <Reveal className="flex justify-between items-end mb-16 gap-6 flex-wrap">
            <div>
              <h2 className="font-serif text-4xl mb-4">Healing Systems</h2>
              <p className="text-muted-foreground max-w-sm">Unified disciplines working in clinical concert.</p>
            </div>
            <span className="font-mono text-xs text-muted-foreground mb-2">[8 DEPARTMENTS]</span>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {systems.map((s, i) => (
              <motion.article
                key={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-card p-10 group hover:bg-secondary transition-colors cursor-pointer card-lift"
              >
                <span className="font-mono text-[10px] text-muted-foreground mb-8 block">{s.code}</span>
                <h3 className="font-serif text-2xl mb-4 group-hover:text-primary transition-colors duration-500">
                  {s.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <Link
                  to="/systems/$slug"
                  params={{ slug: s.slug }}
                  className="inline-flex items-center gap-2 mb-6 text-xs font-mono uppercase tracking-widest text-primary border-b border-primary/30 pb-1 hover:border-primary transition-all group/link"
                >
                  Explore{" "}
                  <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>
                </Link>
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={s.img}
                    alt={s.name}
                    loading="lazy"
                    width={768}
                    height={512}
                    className="w-full aspect-video object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <Reveal>
              <motion.img
                whileHover={{ rotate: 2, scale: 1.02 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                src={philosophyImg}
                alt="View through a circular clinical window"
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-square w-full object-cover rounded-full ring-1 ring-border shadow-2xl"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent mb-6 block">
                Our Philosophy
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
                Bridging the gap between ancient intuition and modern proof.
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Bluemount Hospital & Research Institute was founded on a singular premise: that true healing is neither
                purely technological nor purely traditional — it is the synthesis of both. We treat the root cause
                through evidence-based natural therapies, medically supervised recovery and advanced diagnostics.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 pb-6 border-b border-border group">
                  <span className="font-mono text-primary pt-1">01</span>
                  <div>
                    <h4 className="font-medium mb-1 group-hover:text-primary transition-colors">
                      Data-Verified Outcomes
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Every traditional treatment is tracked via physiological data points.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <span className="font-mono text-primary pt-1">02</span>
                  <div>
                    <h4 className="font-medium mb-1 group-hover:text-primary transition-colors">Holistic Continuity</h4>
                    <p className="text-sm text-muted-foreground">
                      A single patient record shared across all specialist departments.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="relative py-24 px-6 border-t border-border overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grad-radial opacity-20" />
        <div className="relative max-w-7xl mx-auto">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-4 block">
              Let's Connect
            </span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-4">
              Begin your <span className="italic text-shimmer">integrated</span> care journey.
            </h2>
            <p className="text-muted-foreground text-lg">
              Fill out the form below or reach out directly. We're here to answer your questions and help you find the
              right treatment path.
            </p>
          </Reveal>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-foreground text-background/80 py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <img
                src={logo}
                alt=""
                width={32}
                height={32}
                className="size-8 object-contain bg-background rounded-sm p-1"
              />
              <span className="font-mono text-xs uppercase tracking-tighter" style={{ color: "#1B3B6F" }}>
                Bluemount Hospital
                <br />& Research Institute
              </span>
            </div>
            <p className="max-w-xs text-sm text-background/50 leading-relaxed">
              An integrative healthcare and wellness institution in Mysuru combining traditional sciences with modern
              clinical medicine.
            </p>
          </div>
          <div>
            <h3 className="text-[11px] font-mono uppercase tracking-widest text-background mb-6">Contact</h3>
            <a
              href="https://maps.app.goo.gl/vAiLtyi2LYWG5di89"
              target="_blank"
              rel="noopener noreferrer"
              className="not-italic text-sm space-y-2 text-background/60 block hover:text-background transition-colors"
            >
              Ring Road, opposite VTU Mysore
              <br />
              Regional Centre, Sathagalli Layout,
              <br />
              Rammanahalli, Mysuru,
              <br />
              Karnataka 570019, India
            </a>
            <span className="text-sm text-background/60">+91 86182 49192</span>
          </div>
          <div>
            <h3 className="text-[11px] font-mono uppercase tracking-widest text-background mb-6">Hours</h3>
            <div className="text-sm space-y-2 text-background/60">
              <div className="flex justify-between">
                <span>Mon – Fri</span> <span>08:00 – 20:00</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span> <span>09:00 – 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span> <span>Emergencies Only</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-[11px] font-mono uppercase tracking-widest text-background mb-6">Socials</h3>
            <a
              href="https://www.instagram.com/bluemountayush/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors"
            >
              <Instagram size={18} />
              <span>@bluemountayush</span>
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16">
          <h3 className="text-[11px] font-mono uppercase tracking-widest text-background mb-6">Find Us</h3>
          <div className="aspect-[16/9] w-full overflow-hidden rounded-sm border border-background/10">
            <iframe
              title="Bluemount Hospital location"
              src="https://www.google.com/maps?q=Bluemount+Hospital+Mysuru&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.3) contrast(1.05)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-background/10 flex flex-wrap gap-4 justify-between items-center text-[10px] font-mono uppercase tracking-widest opacity-40">
          <span>© {new Date().getFullYear()} Bluemount Hospital & Research Institute</span>
          <span>Precision. Presence. Peace.</span>
        </div>
      </footer>
    </div>
  );
}
