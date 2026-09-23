import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import ProcessChart from "../components/ProcessChart";
import CTA from "../components/CTA";
import { certifications } from "../data/certifications";
import {
  company,
  tradeOffer,
  qualityCommitment,
  qualityPolicyTamil,
} from "../data/company";
import office1 from "../assets/company/office-1.jpg";
import office2 from "../assets/company/office-2.jpg";
import factoryExterior from "../assets/company/factory-exterior.jpg";

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Azure Tech Moulds (formerly New Tech Moulds) is an ISO 9001:2015 certified manufacturer of die, mould and CNC machined automobile components based in Ranipet, Tamil Nadu."
      />

      {/* Intro */}
      <section className="pt-16 sm:pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              size="lg"
              title="Built on the shop floor, not just on paper"
              description={`${company.name} manufactures die, mould and CNC machined automobile components from Sholinghur Taluk, Ranipet District, Tamil Nadu. The facility operates under proprietor ${company.proprietor}, and was previously registered as ${company.legalPreviousName} \u2013 the same works, team and equipment continue under the new name.`}
            />
            <p className="mt-6 text-[15px] text-steel leading-relaxed max-w-xl">
              Our floor combines vertical machining centres, CNC turning, CNC
              EDM sparking and 4th axis rotary work with in-house mechanical
              and press tool assembly, so components and tooling can move from
              drawing to dispatch without leaving the building.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 image-frame aspect-[16/9]">
              <img
                src={factoryExterior}
                alt="Factory building exterior"
                className="img-fit-contain"
                loading="lazy"
              />
            </div>
            <div className="image-frame aspect-[4/3]">
              <img
                src={office1}
                alt="Engineering office"
                className="img-fit-contain"
                loading="lazy"
              />
            </div>
            <div className="image-frame aspect-[4/3]">
              <img
                src={office2}
                alt="Front office"
                className="img-fit-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trade offer / commitment */}
      <section className="py-16 sm:py-24 bg-paper-dim">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionTitle title="Quality, our commitment" size="sm" />
            <ul className="mt-6 flex flex-col gap-4">
              {qualityCommitment.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-steel leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 bg-maroon shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitle title="Trade offer" size="sm" />
            <ul className="mt-6 flex flex-col gap-4">
              {tradeOffer.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-steel leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 bg-maroon shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 mt-14">
          <div className="border border-steel-line bg-white p-7 sm:p-9">
            <p className="text-xs font-semibold tracking-wide text-maroon uppercase mb-4">
              தரக் கொள்கை &middot; Quality Policy
            </p>
            <ul className="flex flex-col gap-3">
              {qualityPolicyTamil.map((line) => (
                <li key={line} className="text-[15px] text-ink leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            title="Business process"
            description="Every order moves through the same reviewed path, supported by stores, admin, sub-contracted plating and testing, and continuous review."
          />
          <div className="mt-10">
            <ProcessChart />
          </div>
        </div>
      </section>

      <CTA
        title="Want to see the floor before you commit?"
        description="We're happy to walk you through our process, machinery and quality records."
      />
    </>
  );
}
