import SEO from "../../components/SEO";
import SectionTitle from "../../components/SectionTitle";
import ServiceCard from "../../components/ServiceCard";
import CTA from "../../components/CTA";
import { services } from "../../data/services";

export default function ServicesIndex() {
  return (
    <>
      <SEO
        title="Services"
        description="Precision machined parts, mould and die manufacturing, mechanical assembly and press tool assembly services from Azure Tech Moulds, Ranipet."
      />

      <section className="pt-16 sm:pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            size="lg"
            title="Machining, tooling and assembly under one roof"
            description="Four capability areas built around the equipment on our own shop floor \u2013 each one covers a distinct stage of getting a component or tool into production."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
