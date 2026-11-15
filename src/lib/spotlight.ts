import type { PointerEvent } from "react";

/**
 * Pointer handler that moves the spotlight. Use it with the `spotlight-card`
 * class on any element (for example a motion.article) that cannot be wrapped.
 */
export function trackSpotlight(event: PointerEvent<HTMLElement>) {
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
  el.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
}
