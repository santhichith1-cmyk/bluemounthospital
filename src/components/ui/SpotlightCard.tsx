import type { CSSProperties, HTMLAttributes } from "react";

import { trackSpotlight } from "@/lib/spotlight";

import "./SpotlightCard.css";

type SpotlightCardProps = HTMLAttributes<HTMLDivElement> & {
  /** Fill colour of the light. Defaults to brand violet. */
  spotlightColor?: string;
  /** Colour of the edge highlight. Defaults to brand gold. */
  edgeColor?: string;
  /** Diameter of the light in px. */
  size?: number;
};

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor,
  edgeColor,
  size,
  style,
  ...rest
}: SpotlightCardProps) {
  const vars = {
    ...(spotlightColor ? { "--spot-color": spotlightColor } : {}),
    ...(edgeColor ? { "--spot-edge": edgeColor } : {}),
    ...(size ? { "--spot-size": `${size}px` } : {}),
    ...style,
  } as CSSProperties;

  return (
    <div
      {...rest}
      className={`spotlight-card ${className}`}
      style={vars}
      onPointerMove={trackSpotlight}
    >
      {children}
    </div>
  );
}
