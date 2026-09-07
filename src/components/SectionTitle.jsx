export default function SectionTitle({
  title,
  description,
  align = "left",
  light = false,
  size = "md",
}) {
  const alignClass =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const titleSize =
    size === "lg"
      ? "text-4xl sm:text-5xl"
      : size === "sm"
      ? "text-2xl sm:text-3xl"
      : "text-3xl sm:text-4xl";

  return (
    <div className={`flex flex-col ${alignClass} max-w-2xl gap-4`}>
      <h2
        className={`font-display font-bold leading-[1.08] ${titleSize} ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-[15px] sm:text-base leading-relaxed ${
            light ? "text-metal" : "text-steel"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
