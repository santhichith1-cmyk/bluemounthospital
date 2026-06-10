import { useEffect, useRef, useState } from "react";

export function EcgDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="w-full flex justify-center"
      style={{ pointerEvents: "none" }}
    >
      <svg
        viewBox="0 0 680 70"
        width="100%"
        height={70}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style={{ maxWidth: "100%" }}
      >
        <path
          d="M0 35 H170 L185 35 L195 12 L205 58 L215 35 H300 L315 35 L325 8 L337 62 L349 35 H520"
          stroke="#16315C"
          strokeWidth={2}
          opacity={0.35}
        />
        <path
          className={`ecg-pulse${visible ? " is-visible" : ""}`}
          d="M0 35 H170 L185 35 L195 12 L205 58 L215 35 H300 L315 35 L325 8 L337 62 L349 35 H520"
          stroke="#059669"
          strokeWidth={2.5}
          strokeLinecap="round"
        />
        <g transform="translate(520,35)">
          <path d="M0 0 C 20 -28, 56 -28, 64 0 C 56 22, 20 22, 0 0 Z" stroke="#059669" strokeWidth={2} />
          <path d="M4 0 C 24 -6, 44 -6, 60 0" stroke="#1B3B6F" strokeWidth={1.5} />
        </g>
      </svg>
    </div>
  );
}