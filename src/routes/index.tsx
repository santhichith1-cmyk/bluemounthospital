import { Instagram, Menu, X, Phone } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import heroAtrium from "@/assets/hero-atrium-updated.jpg";
import philosophyImg from "@/assets/philosophy.avif";
import logo from "@/assets/logo.avif";
import { systems } from "@/lib/systems";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { LotusMandala } from "@/components/decor/LotusMandala";
import { DrawnIcon } from "@/components/decor/DrawnIcon";
import { EcgDivider } from "@/components/decor/EcgDivider";
import { BreathingBlob } from "@/components/decor/BreathingBlob";

const systemIcons: Record<string, ReactNode> = {
  ayurveda: (
    <>
      <path d="M24 40 C 12 34, 8 20, 14 10 C 28 12, 36 22, 34 36 C 31 39, 27 40, 24 40 Z" />
      <path d="M16 34 C 20 26, 26 20, 32 16" />
    </>
  ),
  "keraleya-panchakarma": (
    <>
      <path d="M24 8 C 30 16, 34 21, 34 27 a10 10 0 1 1 -20 0 C 14 21, 18 16, 24 8 Z" />
      <path d="M12 42 C 16 39, 20 39, 24 42 C 28 45, 32 45, 36 42" />
    </>
  ),
  "siddha-medicine": (
    <>
      <path d="M10 22 H38 C 38 32, 32 38, 24 38 C 16 38, 10 32, 10 22 Z" />
      <path d="M30 8 L20 24" />
      <path d="M16 44 H32" />
    </>
  ),
  acupuncture: (
    <>
      <path d="M38 10 L18 30" />
      <path d="M18 30 L12 40 L14 42 L24 36" />
      <circle cx="34" cy="20" r="1.5" />
      <circle cx="28" cy="26" r="1.5" />
      <circle cx="40" cy="26" r="1.5" />
    </>
  ),
  "chiropractic-care": (
    <>
      <path d="M24 6 C 28 12, 28 16, 24 20 C 20 24, 20 28, 24 32 C 28 36, 28 40, 24 44" />
      <path d="M18 12 H30 M17 22 H31 M18 32 H30 M19 40 H29" />
    </>
  ),
  "modern-clinical-medicine": (
    <>
      <path d="M12 8 V18 a8 8 0 0 0 16 0 V8" />
      <path d="M20 26 V32 a8 8 0 0 0 16 0 V28" />
      <circle cx="36" cy="24" r="4" />
    </>
  ),
};

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";
  const [n, setN] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(target);
      setDone(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            io.disconnect();
            const start = performance.now();
            const dur = 1400;
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.round(target * eased));
              if (p < 1) requestAnimationFrame(tick);
              else setDone(true);
            };
            requestAnimationFrame(tick);
            break;
          }
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <span ref={ref} style={done ? undefined : { color: "#059669" }}>
      {n}
      {suffix}
    </span>
  );
}

const heroEase = [0.2, 0.8, 0.2, 1] as const;

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const heroRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-3">
          <a href="#top" aria-label="Bluemount Hospital home" className="flex items-center gap-3 group min-w-0">
            <img
              src={logo}
              alt="Bluemount Hospital"
              width={48}
              height={48}
              className="size-11 shrink-0 object-contain transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110 drop-shadow-[0_0_18px_oklch(0.62_0.22_280/0.6)]"
            />
            <span
              className="font-serif text-sm tracking-tight font-semibold uppercase leading-tight hidden sm:block truncate"
              style={{ color: "oklch(0.97 0.01 280)" }}
            >
              Bluemount Hospital
              <br />
              <span className="text-muted-foreground text-xs font-normal tracking-wide normal-case">
                & Research Institute
              </span>
            </span>
          </a>
          <nav aria-label="Primary" className="hidden md:flex items-center gap-8 text-[13px] font-medium uppercase tracking-widest">
            {[
              { href: "#top", label: "Home" },
              { href: "#systems", label: "Treatments" },
              { href: "#philosophy", label: "Philosophy" },
              { href: "#contact", label: "Contact" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="tel:+918618249192"
              aria-label="Call Bluemount Hospital"
              className="hidden sm:inline-flex items-center justify-center size-11 rounded-full border border-foreground/20 text-foreground hover:border-accent"
            >
              <Phone size={18} />
            </a>
            <a href="#contact" className="btn-primary-sm">
              Book Appointment
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center size-11 rounded-md text-foreground hover:bg-foreground/10"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden border-t border-border transition-[max-height,opacity] duration-300 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <nav aria-label="Mobile" className="px-4 py-4 flex flex-col">
            {[
              { href: "#top", label: "Home" },
              { href: "#systems", label: "Treatments" },
              { href: "#philosophy", label: "Philosophy" },
              { href: "#contact", label: "Contact" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="min-h-12 flex items-center text-base font-medium tracking-wide text-foreground border-b border-border/60"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-4 w-full"
            >
              Book Your Consultation
            </a>
            <a
              href="tel:+918618249192"
              className="btn-secondary mt-3 w-full"
            >
              <Phone size={16} aria-hidden /> Call +91 86182 49192
            </a>
          </nav>
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
          <div className="lg:col-span-7 relative">
            <LotusMandala className="hidden md:block absolute top-1/2 left-1/2 -translate-x-[55%] -translate-y-1/2 w-[560px] h-[560px] opacity-[0.12] pointer-events-none z-0" />
            <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: heroEase }}
              className="font-mono text-[11px] uppercase tracking-[0.4em] text-accent mb-6 inline-flex items-center gap-3"
            >
              <span className="size-1.5 rounded-full bg-accent pulse-ring" /> Est. Mysuru · Integrated Medical Sciences
            </motion.span>
            <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[9.5rem] leading-[0.88] text-balance mb-8 tracking-tight font-medium">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12, ease: heroEase }}
                className="block gradient-text"
              >
                Bluemount
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.24, ease: heroEase }}
                className="block text-foreground"
              >
                Hospital
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.36, ease: heroEase }}
                className="block italic text-gold text-[0.32em] mt-4 font-normal tracking-wide"
              >
                &amp; Research Institute
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.76, ease: heroEase }}
              className="max-w-lg text-xl text-muted-foreground leading-relaxed text-pretty mb-12 font-light"
            >
              Where advanced modern medicine meets the foundational wisdom of Ayurveda, Siddha, Acupuncture and
              chiropractic care — under one integrated roof in Mysuru.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.76, ease: heroEase }}
              className="flex flex-wrap gap-5"
            >
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
            </motion.div>
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
              {[
                { k: "6", v: "Healing Systems" },
                { k: "5+", v: "Expert specialist doctors" },
                { k: "1", v: "Integrated Roof" },
              ].map((s) => (
                <div key={s.v} className="border-l border-accent/40 pl-4">
                  <div className="font-serif text-3xl text-gold">
                    <CountUp value={s.k} />
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
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
            <span className="font-mono text-xs text-accent mb-2">[ 6 DEPARTMENTS ]</span>
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
                <DrawnIcon className="mb-4">{systemIcons[s.slug]}</DrawnIcon>
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
                <BreathingBlob className="absolute -bottom-[10%] -left-[10%] w-[115%] h-[115%] z-0" />
                <div
                  aria-hidden
                  className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary/50 via-accent/30 to-transparent blur-2xl z-0"
                />
                <motion.img
                  whileHover={{ rotate: 2, scale: 1.02 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  src={philosophyImg}
                  alt="View through a circular clinical window"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="relative z-10 aspect-square w-full object-cover rounded-full ring-1 ring-accent/30 shadow-2xl"
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
      <div className="px-6 max-w-7xl mx-auto py-8 hidden md:block">
        <EcgDivider />
      </div>
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
