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
        className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-xl border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Bluemount Hospital"
              width={48}
              height={48}
              className="size-12 object-contain transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110 drop-shadow-[0_0_18px_oklch(0.62_0.22_280/0.6)]"
            />
            <span
              className="font-serif text-sm tracking-tight font-semibold uppercase leading-tight hidden sm:block"
              style={{ color: "oklch(0.97 0.01 280)" }}
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
            <a href="#contact" className="text-foreground font-bold border-b-2 border-primary pb-1">
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
        className="relative min-h-[100dvh] flex items-center px-6 overflow-hidden bg-grad-radial grain"
      >
        {/* floating ambient blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-32 size-[560px] rounded-full bg-primary/30 blur-3xl float-slow"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/3 -right-32 size-[480px] rounded-full bg-accent/20 blur-3xl float-slower"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.97 0.01 280 / 0.4) 1px, transparent 1px), linear-gradient(90deg, oklch(0.97 0.01 280 / 0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-accent mb-6 inline-flex items-center gap-3">
              <span className="size-1.5 rounded-full bg-accent pulse-ring" /> Est. Mysuru · Integrated Medical Sciences
            </span>
            <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[9.5rem] leading-[0.88] text-balance mb-8 tracking-tight font-medium">
              <span className="block gradient-text">Bluemount</span>
              <span className="block text-foreground">Hospital</span>
              <span className="block italic text-gold text-[0.32em] mt-4 font-normal tracking-wide">
                &amp; Research Institute
              </span>
            </h1>
            <p className="max-w-lg text-xl text-muted-foreground leading-relaxed text-pretty mb-12 font-light">
              Where advanced modern medicine meets the foundational wisdom of Ayurveda, Siddha, Naturopathy and
              rehabilitation science — under one integrated roof in Mysuru.
            </p>
            <div className="flex flex-wrap gap-5">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="px-10 py-5 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 shadow-[0_20px_60px_-15px_oklch(0.62_0.22_280/0.7)] hover:shadow-[0_30px_80px_-15px_oklch(0.62_0.22_280/0.9)] rounded-sm"
              >
                Schedule Diagnostic
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="#systems"
                className="px-10 py-5 border border-foreground/30 text-sm font-bold uppercase tracking-widest hover:bg-foreground/5 hover:border-accent text-foreground transition-colors rounded-sm backdrop-blur-sm"
              >
                Our Systems
              </motion.a>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
              {[
                { k: "9", v: "Healing Systems" },
                { k: "5+", v: "Expert specialists doctors" },
                { k: "1", v: "Integrated Roof" },
              ].map((s) => (
                <div key={s.v} className="border-l border-accent/40 pl-4">
                  <div className="font-serif text-3xl text-gold">{s.k}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                    {s.v}
                  </div>
                </div>
              ))}
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
              className="absolute -inset-10 bg-gradient-to-br from-primary/60 via-transparent to-accent/40 blur-3xl rounded-full"
              aria-hidden
            />
            <div className="relative">
              <motion.img
                style={{ scale: heroImgScale }}
                src={heroAtrium}
                alt="Bluemount Hospital main atrium with daylight and oak furnishings"
                width={800}
                height={1024}
                className="relative w-full aspect-[3/4] object-cover ring-1 ring-accent/30 rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-background/90 backdrop-blur-xl border border-accent/30 px-6 py-4 rounded-sm shadow-2xl">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-1">Now Welcoming</div>
                <div className="font-serif text-lg italic">New patients</div>
              </div>
              <div className="absolute -top-4 -right-4 size-20 rounded-full border border-accent/40 flex items-center justify-center font-mono text-[10px] text-accent uppercase tracking-widest rotate-12 bg-background/40 backdrop-blur">
                Estd
                <br />
                2024
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Healing Systems */}
      <section id="systems" className="py-32 px-6 bg-card border-y border-border relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 size-[600px] rounded-full bg-primary/10 blur-3xl"
        />
        <div className="max-w-7xl mx-auto">
          <Reveal className="flex justify-between items-end mb-20 gap-6 flex-wrap">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-accent mb-4 block">
                — The Practice
              </span>
              <h2 className="font-serif text-5xl md:text-6xl mb-4">
                Healing <span className="italic text-gold">Systems</span>
              </h2>
              <p className="text-muted-foreground max-w-sm font-light text-lg">
                Unified disciplines working in clinical concert.
              </p>
            </div>
            <span className="font-mono text-xs text-accent mb-2">[ 9 DEPARTMENTS ]</span>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 border border-border">
            {systems.map((s, i) => (
              <motion.article
                key={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-card p-10 group hover:bg-secondary transition-colors cursor-pointer card-lift relative"
              >
                <span className="font-mono text-[10px] text-accent mb-8 block">{s.code}</span>
                <h3 className="font-serif text-3xl mb-4 group-hover:text-gold transition-colors duration-500">
                  {s.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-light">{s.desc}</p>
                <Link
                  to="/systems/$slug"
                  params={{ slug: s.slug }}
                  className="inline-flex items-center gap-2 mb-6 text-xs font-mono uppercase tracking-widest text-accent border-b border-accent/40 pb-1 hover:border-accent transition-all group/link"
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
                    className="w-full aspect-video object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-32 px-6 relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-40 size-[600px] rounded-full bg-accent/10 blur-3xl"
        />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <Reveal>
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary/50 via-accent/30 to-transparent blur-2xl"
                />
                <motion.img
                  whileHover={{ rotate: 2, scale: 1.02 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  src={philosophyImg}
                  alt="View through a circular clinical window"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="relative aspect-square w-full object-cover rounded-full ring-1 ring-accent/30 shadow-2xl"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent mb-6 block">
                — Our Philosophy
              </span>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] mb-8">
                Bridging <span className="italic text-gold">ancient intuition</span> and modern proof.
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed font-light text-lg">
                Bluemount Hospital & Research Institute was founded on a singular premise: that true healing is neither
                purely technological nor purely traditional — it is the synthesis of both. We treat the root cause
                through evidence-based natural therapies, medically supervised recovery and advanced diagnostics.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 pb-6 border-b border-border group">
                  <span className="font-mono text-accent pt-1">01</span>
                  <div>
                    <h4 className="font-serif text-xl mb-1 group-hover:text-gold transition-colors">
                      Data-Verified Outcomes
                    </h4>
                    <p className="text-sm text-muted-foreground font-light">
                      Every traditional treatment is tracked via physiological data points.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <span className="font-mono text-accent pt-1">02</span>
                  <div>
                    <h4 className="font-serif text-xl mb-1 group-hover:text-gold transition-colors">
                      Holistic Continuity
                    </h4>
                    <p className="text-sm text-muted-foreground font-light">
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
      <section id="contact" className="relative py-32 px-6 border-t border-border overflow-hidden bg-card">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grad-radial opacity-60" />
        <div className="relative max-w-7xl mx-auto">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-accent mb-4 block">
              — Let's Connect
            </span>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight mb-4">
              Begin your <span className="italic text-gold">integrated</span> care journey.
            </h2>
            <p className="text-muted-foreground text-lg font-light">
              Fill out the form below or reach out directly. We're here to answer your questions and help you find the
              right treatment path.
            </p>
          </Reveal>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-secondary text-foreground/80 py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <img
                src={logo}
                alt=""
                width={32}
                height={32}
                className="size-8 object-contain bg-foreground/10 rounded-sm p-1"
              />
              <span className="font-serif text-sm uppercase tracking-tighter text-foreground">
                Bluemount Hospital
                <br />& Research Institute
              </span>
            </div>
            <p className="max-w-xs text-sm text-foreground/50 leading-relaxed font-light">
              An integrative healthcare and wellness institution in Mysuru combining traditional sciences with modern
              clinical medicine.
            </p>
          </div>
          <div>
            <h3 className="text-[11px] font-mono uppercase tracking-widest text-accent mb-6">Contact</h3>
            <a
              href="https://maps.app.goo.gl/vAiLtyi2LYWG5di89"
              target="_blank"
              rel="noopener noreferrer"
              className="not-italic text-sm space-y-2 text-foreground/60 block hover:text-foreground transition-colors"
            >
              Ring Road, opposite VTU Mysore
              <br />
              Regional Centre, Sathagalli Layout,
              <br />
              Rammanahalli, Mysuru,
              <br />
              Karnataka 570019, India
            </a>
            <span className="text-sm text-foreground/60">+91 86182 49192</span>
          </div>
          <div>
            <h3 className="text-[11px] font-mono uppercase tracking-widest text-accent mb-6">Hours</h3>
            <div className="text-sm space-y-2 text-foreground/60">
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
            <h3 className="text-[11px] font-mono uppercase tracking-widest text-accent mb-6">Socials</h3>
            <a
              href="https://www.instagram.com/bluemountayush/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              <Instagram size={18} />
              <span>@bluemountayush</span>
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16">
          <h3 className="text-[11px] font-mono uppercase tracking-widest text-accent mb-6">Find Us</h3>
          <div className="aspect-[16/9] w-full overflow-hidden rounded-sm border border-foreground/10">
            <iframe
              title="Bluemount Hospital location"
              src="https://www.google.com/maps?q=Bluemount+Hospital+Mysuru&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.6) contrast(1.1) invert(0.9) hue-rotate(180deg)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-foreground/10 flex flex-wrap gap-4 justify-between items-center text-[10px] font-mono uppercase tracking-widest opacity-50">
          <span>© {new Date().getFullYear()} Bluemount Hospital & Research Institute</span>
          <span className="text-gold">Precision · Presence · Peace</span>
        </div>
      </footer>
    </div>
  );
}
