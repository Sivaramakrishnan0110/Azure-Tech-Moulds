import { useId } from "react";
import logo from "../assets/brand/logo.jpg";

export default function Logo({ className = "", alt = "" }) {
  const filterId = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="140 170 620 545"
      className={className}
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : "true"}
    >
      <defs>
        <filter id={filterId} colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -1 -1 -1 0 3"
          />
        </filter>
      </defs>
      <image
        href={logo}
        x="0"
        y="0"
        width="900"
        height="906"
        preserveAspectRatio="none"
        filter={`url(#${filterId})`}
      />
    </svg>
  );
}