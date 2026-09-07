import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group flex flex-col border border-steel-line bg-white hover:border-maroon transition-colors"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.heroImage}
          alt={service.navLabel}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1 border-t border-steel-line">
        <h3 className="font-display font-bold text-xl text-ink leading-snug group-hover:text-maroon transition-colors">
          {service.navLabel}
        </h3>
        <p className="text-[14.5px] text-steel leading-relaxed flex-1">
          {service.summary}
        </p>
        <span className="text-sm font-semibold text-ink border-b border-ink w-fit group-hover:text-maroon group-hover:border-maroon transition-colors">
          Learn more
        </span>
      </div>
    </Link>
  );
}
