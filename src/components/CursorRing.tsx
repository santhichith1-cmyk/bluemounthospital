import { useEffect, useRef } from "react";

// A gold ring that trails the mouse and grows over links and buttons.
// Desktop only: it does nothing on touch devices or with reduced motion,
// and the normal cursor stays visible.
export function CursorRing() {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return undefined;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduce) return undefined;

    let x = 0;
    let y = 0;
    let tx = 0;
    let ty = 0;
    let raf = 0;
    let started = false;

    let last = 0;

    // Time-based easing, so the ring keeps up on slow frame rates too.
    const tick = (now: number) => {
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      const k = 1 - Math.exp(-dt * 14);
      x += (tx - x) * k;
      y += (ty - y) * k;
      ring.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.1 ? requestAnimationFrame(tick) : 0;
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      tx = event.clientX;
      ty = event.clientY;
      if (!started) {
        started = true;
        x = tx;
        y = ty;
      }
      ring.dataset.visible = "true";
      const target = event.target instanceof Element ? event.target : null;
      const active = target?.closest("a, button, [role='button'], input, textarea, select, label");
      ring.dataset.active = active ? "true" : "false";
      if (!raf) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };
    const onLeave = () => {
      ring.dataset.visible = "false";
    };
    const onDown = () => {
      ring.dataset.pressed = "true";
    };
    const onUp = () => {
      ring.dataset.pressed = "false";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <div ref={ringRef} className="cursor-ring" aria-hidden />;
}
