import { createFileRoute } from "@tanstack/react-router";
import heroAtrium from "@/assets/hero-atrium.jpg";
import philosophyImg from "@/assets/philosophy.jpg";
import logo from "@/assets/logo.avif";
import sysAyurveda from "@/assets/sys-ayurveda.jpg";
import sysSiddha from "@/assets/sys-siddha.jpg";
import sysAcupuncture from "@/assets/sys-acupuncture.jpg";
import sysChiropractic from "@/assets/sys-chiropractic.jpg";
import sysNaturopathy from "@/assets/sys-naturopathy.jpg";

import sysPhysiotherapy from "@/assets/sys-physiotherapy.jpg";
import sysRehabilitation from "@/assets/sys-rehabilitation.jpg";
import sysMedicine from "@/assets/sys-medicine.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const systems = [
  {
    code: "01 / VEDA",
    name: "Kerala Ayurveda",
    desc: "Authentic Panchakarma detoxification and rejuvenation protocols, supervised by classically trained vaidyas.",
    img: sysAyurveda,
  },
  {
    code: "02 / SIDDHA",
    name: "Siddha Medicine",
    desc: "Time-honoured Tamil therapies integrated with modern metabolic and lifestyle screening.",
    img: sysSiddha,
  },
  {
    code: "03 / ACU",
    name: "Acupuncture",
    desc: "Precise meridian-mapped neuromuscular stimulation for chronic pain and neurological recovery.",
    img: sysAcupuncture,
  },
  {
    code: "04 / CHIRO",
    name: "Chiropractic Care",
    desc: "Evidence-based spinal alignment therapy for long-term structural and postural health.",
    img: sysChiropractic,
  },
  {
    code: "05 / NATURO",
    name: "Naturopathy",
    desc: "Bio-dynamic nutrition, hydrotherapy and lifestyle medicine for sustainable wellness.",
    img: sysNaturopathy,
  },
  {
    code: "06 / PHYSIO",
    name: "Physiotherapy",
    desc: "Movement-based recovery programs for musculoskeletal injury, mobility and pain relief.",
    img: sysPhysiotherapy,
  },
  {
    code: "07 / REHAB",
    name: "Neuro Rehabilitation",
    desc: "Medically supervised neurological rehabilitation for stroke, spinal and post-surgical recovery.",
    img: sysRehabilitation,
  },
  {
    code: "08 / MED",
    name: "Modern Clinical Medicine",
    desc: "Allopathic consultation, chronic disease management and integrative care planning.",
    img: sysMedicine,
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Bluemount Hospital" width={40} height={40} className="size-10 object-contain" />
            <span className="font-mono text-[11px] tracking-tighter font-medium uppercase leading-tight">
              Bluemount Hospital<br /><span className="text-muted-foreground">& Research Institute</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-10 text-[13px] font-medium uppercase tracking-widest text-muted-foreground">
            <a href="#systems" className="hover:text-foreground transition-colors">Systems</a>
            <a href="#philosophy" className="hover:text-foreground transition-colors">Philosophy</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
            <a href="#book" className="text-foreground font-bold border-b border-primary pb-1">Book Now</a>
          </div>
          <a href="tel:+918618249192" className="hidden sm:block text-sm font-mono font-medium">
            +91 86182 49192
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header id="top" className="relative pt-24 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 animate-reveal">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-6 block">
              Integrated Medical Sciences
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-balance mb-8 tracking-tight italic">
              Healing is a <span className="text-primary not-italic">deliberate</span> precision.
            </h1>
            <p className="max-w-md text-lg text-muted-foreground leading-relaxed text-pretty mb-10">
              Where advanced modern medicine meets the foundational wisdom of Ayurveda, Siddha, Naturopathy and rehabilitation science — under one integrated roof in Mysuru.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#book"
                className="px-8 py-4 bg-foreground text-background text-sm font-medium uppercase tracking-widest hover:bg-primary transition-colors duration-300"
              >
                Schedule Diagnostic
              </a>
              <a
                href="#systems"
                className="px-8 py-4 border border-border text-sm font-medium uppercase tracking-widest hover:bg-card transition-colors"
              >
                Our Systems
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 animate-reveal [animation-delay:200ms]">
            <img
              src={heroAtrium}
              alt="Bluemount Hospital main atrium with daylight and oak furnishings"
              width={800}
              height={1024}
              className="w-full aspect-[4/5] object-cover ring-1 ring-black/5 rounded-sm shadow-2xl"
            />
          </div>
        </div>
      </header>

      {/* Healing Systems */}
      <section id="systems" className="py-32 px-6 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 gap-6 flex-wrap">
            <div>
              <h2 className="font-serif text-4xl mb-4">Healing Systems</h2>
              <p className="text-muted-foreground max-w-sm">
                Unified disciplines working in clinical concert.
              </p>
            </div>
            <span className="font-mono text-xs text-muted-foreground mb-2">[8 DEPARTMENTS]</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {systems.map((s) => (
              <article
                key={s.code}
                className="bg-card p-10 group hover:bg-secondary transition-colors cursor-pointer"
              >
                <span className="font-mono text-[10px] text-muted-foreground mb-8 block">
                  {s.code}
                </span>
                <h3 className="font-serif text-2xl mb-4">{s.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {s.desc}
                </p>
                <a
                  href="#book"
                  className="inline-block mb-6 text-xs font-mono uppercase tracking-widest text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors"
                >
                  Explore
                </a>
                <img
                  src={s.img}
                  alt={s.name}
                  loading="lazy"
                  width={768}
                  height={512}
                  className="w-full aspect-video object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <img
              src={philosophyImg}
              alt="View through a circular clinical window"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-square w-full object-cover rounded-full ring-1 ring-border"
            />
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent mb-6 block">
                Our Philosophy
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
                Bridging the gap between ancient intuition and modern proof.
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Bluemount Hospital & Research Institute was founded on a singular premise: that true healing is neither purely technological nor purely traditional — it is the synthesis of both. We treat the root cause through evidence-based natural therapies, medically supervised recovery and advanced diagnostics.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 pb-6 border-b border-border">
                  <span className="font-mono text-primary pt-1">01</span>
                  <div>
                    <h4 className="font-medium mb-1">Data-Verified Outcomes</h4>
                    <p className="text-sm text-muted-foreground">
                      Every traditional treatment is tracked via physiological data points.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-mono text-primary pt-1">02</span>
                  <div>
                    <h4 className="font-medium mb-1">Holistic Continuity</h4>
                    <p className="text-sm text-muted-foreground">
                      A single patient record shared across all specialist departments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book / Contact CTA */}
      <section id="book" className="py-24 px-6 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight max-w-xl">
            Begin your <span className="italic text-primary">integrated</span> care journey.
          </h2>
          <div className="flex flex-col gap-4 lg:items-end">
            <a
              href="tel:+918618249192"
              className="font-mono text-lg md:text-xl tracking-tight"
            >
              +91 86182 49192
            </a>
            <a
              href="tel:+918618249192"
              className="inline-block px-8 py-4 bg-foreground text-background text-sm font-medium uppercase tracking-widest hover:bg-primary transition-colors w-fit"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-foreground text-background/80 py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <img src={logo} alt="" width={32} height={32} className="size-8 object-contain bg-background rounded-sm p-1" />
              <span className="font-mono text-xs uppercase tracking-tighter">
                Bluemount Hospital<br />& Research Institute
              </span>
            </div>
            <p className="max-w-xs text-sm text-background/50 leading-relaxed">
              An integrative healthcare and wellness institution in Mysuru combining traditional sciences with modern clinical medicine.
            </p>
          </div>
          <div>
            <h3 className="text-[11px] font-mono uppercase tracking-widest text-background mb-6">
              Contact
            </h3>
            <address className="not-italic text-sm space-y-2 text-background/60">
              Ring Road, opposite VTU Mysore
              <br />
              Regional Centre, Sathagalli Layout,
              <br />
              Rammanahalli, Mysuru,
              <br />
              Karnataka 570019, India
              <br />
              <span>+91 86182 49192</span>
            </address>
          </div>
          <div>
            <h3 className="text-[11px] font-mono uppercase tracking-widest text-background mb-6">
              Hours
            </h3>
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
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-background/10 flex flex-wrap gap-4 justify-between items-center text-[10px] font-mono uppercase tracking-widest opacity-40">
          <span>© {new Date().getFullYear()} Bluemount Hospital & Research Institute</span>
          <span>Precision. Presence. Peace.</span>
        </div>
      </footer>
    </div>
  );
}
