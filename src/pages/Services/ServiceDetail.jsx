import { useParams, Navigate, Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import SEO from "../../components/SEO";
import SectionTitle from "../../components/SectionTitle";
import CTA from "../../components/CTA";
import { getServiceBySlug, services } from "../../data/services";
import { mouldTypes } from "../../data/mouldTypes";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  return (
    <>
      <SEO title={service.seoTitle} description={service.metaDescription} />

      {/* Hero */}
      <section className="relative">
        <div className="relative h-[46vh] min-h-[340px] max-h-[520px] overflow-hidden">
          <img
            src={service.heroImage}
            alt={service.navLabel}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/50 to-graphite/10" />
          <div className="relative h-full mx-auto max-w-7xl px-5 sm:px-8 flex items-end pb-12">
            <div className="max-w-2xl text-white">
              <p className="text-xs font-semibold tracking-wide text-maroon-bright uppercase mb-3">
                Service
              </p>
              <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
                {service.navLabel}
              </h1>
              <p className="mt-4 text-metal text-base sm:text-lg max-w-xl">
                {service.summary}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + capabilities */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-5">
            {service.intro.map((para) => (
              <p key={para} className="text-[15.5px] text-steel leading-relaxed">
                {para}
              </p>
            ))}
          </div>
          <div className="border border-steel-line bg-white p-7 h-fit">
            <h3 className="font-display font-bold text-lg text-ink mb-5">
              Capabilities
            </h3>
            <ul className="flex flex-col gap-3">
              {service.capabilities.map((cap) => (
                <li key={cap} className="flex gap-2.5 text-[14px] text-steel leading-snug">
                  <CheckCircle2 size={16} className="text-maroon shrink-0 mt-0.5" />
                  {cap}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Detail sections */}
      {service.sections?.map((section, i) => (
        <section key={section.heading} className={i % 2 === 1 ? "bg-paper-dim" : ""}>
          <div className="py-16 sm:py-20 mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-10 items-center">
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <img
                src={section.image}
                alt={section.heading}
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-ink leading-tight">
                {section.heading}
              </h2>
              <p className="mt-4 text-[15px] text-steel leading-relaxed">
                {section.body}
              </p>
            </div>
          </div>
        </section>
      ))}

      {/* Mould types reference (only for mould-and-dies) */}
      {service.mouldTypesIntro && (
        <section className="py-16 sm:py-24 bg-paper-dim">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionTitle title="Tooling forms we work with" description={service.mouldTypesIntro} size="sm" />
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mouldTypes.map((type) => (
                <div key={type.id} className="border border-steel-line bg-white">
                  <img src={type.image} alt={type.name} className="h-44 w-full object-cover" loading="lazy" />
                  <p className="p-4 font-medium text-sm text-ink">{type.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Types (press tool types) */}
      {service.types && (
        <section className="py-16 sm:py-24 bg-paper-dim">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionTitle title="Types of press tools we build" size="sm" />
            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              {service.types.map((type) => (
                <div key={type.name} className="border border-steel-line bg-white p-6">
                  <h3 className="font-display font-bold text-ink">{type.name}</h3>
                  <p className="mt-2 text-[14px] text-steel leading-relaxed">{type.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Applications */}
      {service.applications && (
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionTitle title="Where these parts are used" size="sm" />
            <ul className="mt-8 grid sm:grid-cols-3 gap-6">
              {service.applications.map((app) => (
                <li key={app} className="border-t-2 border-maroon pt-4 text-[14.5px] text-steel leading-relaxed">
                  {app}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Process (mould-and-dies uses plain strings) */}
      {service.process && (
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionTitle title="How a tooling project runs" size="sm" />
            <ol className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.process.map((step, i) => (
                <li key={step} className="border border-steel-line p-6 bg-white">
                  <span className="font-data-num text-maroon text-sm font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-[14.5px] text-steel leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Workflow (structured object steps) */}
      {service.workflow && (
        <section className="py-16 sm:py-24 bg-paper-dim">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionTitle title="Workflow" size="sm" />
            <ol className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.workflow.map((step, i) => (
                <li key={step.title} className="border border-steel-line p-6 bg-white">
                  <span className="font-data-num text-maroon text-sm font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display font-bold text-ink mt-2">{step.title}</h3>
                  <p className="mt-2 text-[14px] text-steel leading-relaxed">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-3 gap-12">
          <SectionTitle title="Frequently asked questions" size="sm" />
          <div className="lg:col-span-2 flex flex-col divide-y divide-steel-line border-t border-steel-line">
            {service.faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none font-medium text-ink text-[15px]">
                  {faq.q}
                  <span className="text-maroon text-xl group-open:rotate-45 transition-transform ml-4 shrink-0">+</span>
                </summary>
                <p className="mt-3 text-[14.5px] text-steel leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title={`Need ${service.navLabel.toLowerCase()}?`}
        description={service.cta}
      />

      {/* Other services */}
      <section className="py-16 sm:py-20 bg-paper-dim">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display font-bold text-xl text-ink mb-6">Other services</h2>
          <div className="flex flex-wrap gap-4">
            {services
              .filter((s) => s.id !== service.id)
              .map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.slug}`}
                  className="border border-steel-line bg-white px-5 py-3 text-sm font-medium text-ink hover:border-maroon hover:text-maroon transition-colors"
                >
                  {s.navLabel}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
