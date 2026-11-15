import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

// Fixed Call / Book bar for phones. Stays hidden while the hero's own
// buttons are on screen, then slides in once the user scrolls past them.
export function MobileActionBar() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!shown}
      className={`fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-3 border-t border-border bg-background/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur transition-transform duration-300 md:hidden ${
        shown ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a href="tel:+918618249192" tabIndex={shown ? 0 : -1} className="btn-secondary uppercase">
        <Phone size={16} aria-hidden /> Call
      </a>
      <a href="/#contact" tabIndex={shown ? 0 : -1} className="btn-primary uppercase">
        Book
      </a>
    </div>
  );
}
