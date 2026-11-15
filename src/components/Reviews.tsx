import { Reveal } from "@/components/Reveal";
import GradientText from "@/components/ui/GradientText";
import { trackSpotlight } from "@/lib/spotlight";
import { GOOGLE_REVIEWS_URL, reviews } from "@/lib/reviews";
import "@/components/ui/SpotlightCard.css";

function Stars() {
  return (
    <div className="flex gap-1 text-gold" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" width="18" height="18" fill="currentColor" aria-hidden>
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-accent mb-4 block">
              — Patient Reviews
            </span>
            <h2 className="font-serif text-5xl md:text-6xl">
              What our <GradientText className="italic">patients</GradientText> say
            </h2>
          </div>
          <span className="font-mono text-xs text-accent">[ FROM GOOGLE REVIEWS ]</span>
        </Reveal>

        <div className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {reviews.map((r) => (
            <figure
              key={r.name}
              onPointerMove={trackSpotlight}
              className="spotlight-card flex w-[85%] shrink-0 snap-center flex-col rounded-sm border border-border bg-card p-8 md:w-auto"
            >
              <Stars />
              <blockquote className="mt-6 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-5">
                <div className="font-serif text-xl">{r.name}</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  Google review
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary uppercase"
          >
            Read all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
