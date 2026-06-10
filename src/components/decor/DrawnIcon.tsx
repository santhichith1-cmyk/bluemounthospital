import { Children, cloneElement, isValidElement, useEffect, useRef, useState, type ReactElement, type ReactNode } from "react";

export function DrawnIcon({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setDrawn(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const items = Children.toArray(children).filter(isValidElement) as ReactElement<Record<string, unknown>>[];

  return (
    <svg
      ref={ref}
      viewBox="0 0 48 48"
      width={40}
      height={40}
      fill="none"
      stroke="#059669"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      style={{ pointerEvents: "none" }}
    >
      {items.map((el, i) =>
        cloneElement(el, {
          key: i,
          className: `draw-path${drawn ? " is-drawn" : ""}`,
          style: { transitionDelay: `${i * 0.25}s`, ...((el.props.style as object) ?? {}) },
        }),
      )}
    </svg>
  );
}