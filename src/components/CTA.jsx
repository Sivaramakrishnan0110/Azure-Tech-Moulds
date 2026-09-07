import { Link } from "react-router-dom";
import { company } from "../data/company";

export default function CTA({
  title = "Looking for a reliable partner for your next component?",
  description = company.responseWindow + ".",
  primaryLabel = "Request a Quote",
  primaryTo = "/contact",
}) {
  return (
    <section className="bg-graphite text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight">
            {title}
          </h2>
          <p className="mt-3 text-metal text-base">{description}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Link
            to={primaryTo}
            className="bg-maroon hover:bg-maroon-bright transition-colors text-white text-center font-semibold px-7 py-4"
          >
            {primaryLabel}
          </Link>
          <a
            href={`tel:+91${company.phones[0]}`}
            className="border border-white/30 hover:border-white transition-colors text-white text-center font-semibold px-7 py-4"
          >
            Call {company.phones[0]}
          </a>
        </div>
      </div>
    </section>
  );
}
