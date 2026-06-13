import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getSystem, systems } from "@/lib/systems";
import logo from "@/assets/logo.avif";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/systems/$slug")({
  loader: ({ params }) => {
    const system = getSystem(params.slug);
    if (!system) throw notFound();
    return { system };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.system;
    const title = s
      ? `${s.name} — Bluemount Hospital & Research Institute`
      : "Department — Bluemount Hospital";
    const description = s?.intro ?? "Integrated medical sciences in Mysuru.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(s ? [{ property: "og:image", content: s.img }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">404</p>
        <h1 className="font-serif text-3xl mb-6">Department not found</h1>
        <Link to="/" className="text-primary underline">Return home</Link>
      </div>
    </div>
  ),
  errorComponent: () => (
    <div className="min-h-screen flex items-center justify-center px-6">
      <p className="text-muted-foreground">Something went wrong.</p>
    </div>
  ),
  component: SystemPage,
});

function SystemPage() {
  const { system } = Route.useLoaderData();
  const others = systems.filter((s) => s.slug !== system.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Bluemount Hospital" width={40} height={40} className="size-10 object-contain" />
            <span className="font-mono text-[11px] tracking-tighter font-medium uppercase leading-tight">
              Bluemount Hospital<br /><span className="text-muted-foreground">& Research Institute</span>
            </span>
          </Link>
          <Link to="/" className="text-[13px] font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
            ← All Systems
          </Link>
        </div>
      </nav>

      <header className="relative px-6 pt-24 pb-16 overflow-hidden bg-grad-radial">
        <div aria-hidden className="pointer-events-none absolute -top-32 -left-24 size-[420px] rounded-full bg-primary/10 blur-3xl float-slow" />
        <div aria-hidden className="pointer-events-none absolute top-20 -right-24 size-[360px] rounded-full bg-accent/10 blur-3xl float-slower" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-6 block">
              {system.code}
            </span>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight italic mb-8">
              {system.name}
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              {system.tagline}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl rounded-sm" aria-hidden />
            <img
              src={system.img}
              alt={system.name}
              width={768}
              height={512}
              className="relative w-full aspect-[4/3] object-cover ring-1 ring-black/5 rounded-sm shadow-2xl"
            />
          </motion.div>
        </div>
      </header>

      <section className="px-6 py-20 bg-card border-y border-border">
        <Reveal className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent mb-6 block">
              Overview
            </span>
            <p className="font-serif text-2xl md:text-3xl leading-snug mb-10 text-pretty">
              {system.intro}
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              {system.approach}
            </p>
          </div>
          <aside>
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-6">
              Conditions Treated
            </h3>
            <ul className="space-y-3">
              {system.conditions.map((c: string, i: number) => (
                <motion.li
                  key={c}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="flex gap-3 text-sm"
                >
                  <span className="text-primary font-mono">—</span>
                  <span>{c}</span>
                </motion.li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <Reveal className="flex justify-between items-end mb-12 flex-wrap gap-4">
            <h2 className="font-serif text-4xl">Treatments & Therapies</h2>
            <span className="font-mono text-xs text-muted-foreground">
              [{system.treatments.length} OFFERINGS]
            </span>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {system.treatments.map((t: string, i: number) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className="bg-card p-8 card-lift group"
              >
                <span className="font-mono text-[10px] text-muted-foreground mb-4 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-serif text-xl group-hover:text-primary transition-colors duration-500">{t}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-card border-y border-border">
        <Reveal className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight max-w-xl">
            Consult with our <span className="italic text-shimmer">{system.name}</span> team.
          </h2>
          <div className="flex flex-col gap-4 lg:items-end">
            <a href="tel:+918618249192" className="font-mono text-lg md:text-xl tracking-tight">
              +91 86182 49192
            </a>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <a href="/#contact" className="btn-primary uppercase">Book Your Consultation</a>
              <a href="tel:+918618249192" className="btn-secondary uppercase">Call Us Now</a>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <Reveal><h2 className="font-serif text-3xl mb-10">Explore other systems</h2></Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {others.map((o, i) => (
              <motion.div
                key={o.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <Link
                  to="/systems/$slug"
                  params={{ slug: o.slug }}
                  className="block bg-card p-8 group hover:bg-secondary transition-colors card-lift"
                >
                  <span className="font-mono text-[10px] text-muted-foreground mb-4 block">
                    {o.code}
                  </span>
                  <h3 className="font-serif text-xl mb-3 group-hover:text-primary transition-colors">{o.name}</h3>
                  <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary border-b border-primary/30 pb-1 group-hover:border-primary">
                    Explore <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background/80 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-6 justify-between items-center text-[10px] font-mono uppercase tracking-widest opacity-60">
          <span>© {new Date().getFullYear()} Bluemount Hospital & Research Institute</span>
          <Link to="/" className="hover:opacity-100">Return Home →</Link>
        </div>
      </footer>
    </div>
  );
}