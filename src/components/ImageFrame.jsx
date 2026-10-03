/**
 * Reusable image container for consistent product/machine/banner fitting.
 *
 * variant:
 *  - product | machine | gallery → contain + paper background (default)
 *  - banner → dark frame for designed service banners
 *  - cover → intentional full-bleed crop (hero/atmosphere)
 *  - dim → paper-dim background
 *
 * tight: slight scale-up for source photos with large empty margins
 */
export default function ImageFrame({
  src,
  alt = "",
  variant = "product",
  tight = false,
  aspectClass = "",
  className = "",
  imgClassName = "",
  loading = "lazy",
  decoding = "async",
}) {
  const variantClass =
    {
      product: "image-frame--product",
      machine: "image-frame--machine",
      gallery: "image-frame--gallery",
      banner: "image-frame--banner",
      cover: "image-frame--cover",
      dim: "image-frame--dim",
    }[variant] || "image-frame--product";

  return (
    <div
      className={[
        "image-frame",
        variantClass,
        tight ? "image-frame--tight" : "",
        aspectClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        className={["image-frame__img", imgClassName].filter(Boolean).join(" ")}
      />
    </div>
  );
}
