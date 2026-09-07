import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Timer,
  Settings2,
  Award,
  ArrowRight,
} from "lucide-react";
import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import StatBand from "../components/StatBand";
import TargetClients from "../components/TargetClients";
import CTA from "../components/CTA";
import heroInstall from "../assets/brand/hero-install.jpg";
import factoryExterior from "../assets/company/factory-exterior.jpg";
import { company } from "../data/company";
import { services } from "../data/services";
import { vmcMachines, turningMachine, edmMachine } from "../data/machinery";

const whyChooseUs = [
  {
    icon: Award,
    title: "ISO 9001:2015 Certified",
    body: "Quality management system certified for the manufacture of die, mould and CNC machined automobile components.",
  },
  {
    icon: Settings2,
    title: "In-House Machining Chain",
    body: "VMC, CNC turning, CNC EDM sparking and 4th axis rotary machining under one roof, from roughing to finishing.",
  },
  {
    icon: Timer,
    title: "48-Hour Response",
    body: "Every enquiry is reviewed and answered within 48 hours, with development starting on quotation approval.",
  },
  {
    icon: ShieldCheck,
    title: "TAGMA India Member",
    body: "Registered with the Tool and Gauge Manufacturers Association of India, the national body for the tooling industry.",
  },
];

const machinePreview = [vmcMachines[0], turningMachine, edmMachine];

export default function Home() {
  return (
    <>
      <SEO
        title="Precision Die, Mould & CNC Machining in Ranipet"
        description="Azure Tech Moulds manufactures die, mould and CNC machined automobile components from Ranipet, Tamil Nadu \u2013 VMC machining, CNC turning, EDM sparking, 4th axis, mechanical and press tool assembly."
      />

      {/* Hero */}
      <section className="relative bg-graphite">
        <div className="relative h-[78vh] min-h-[560px] max-h-[820px] overflow-hidden">
          <img
            src={heroInstall}
            alt="STM vertical machining centre installed on the Azure Tech Moulds shop floor"
            className="absolute inset-0 h-full w-full object-cover object-[60%_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/40 to-graphite/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-graphite/80 sm:from-graphite/70 via-transparent to-transparent" />

          <div className="relative h-full mx-auto max-w-7xl px-5 sm:px-8 flex items-end pb-14 sm:pb-20">
            <div className="max-w-xl text-white">
              <p className="text-sm font-semibold tracking-wide text-maroon-bright uppercase mb-4">
                Die &middot; Mould &middot; CNC Machined Components
              </p>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.06]">
                Precision tooling, built to run on the production floor.
              </h1>
              <p className="mt-5 text-metal text-base sm:text-lg leading-relaxed max-w-lg">
                Azure Tech Moulds machines dies, moulds and CNC components for
                automotive and industrial manufacturers from Ranipet, Tamil
                Nadu &mdash; from raw drawing to inspected, ready-to-run tooling.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-maroon hover:bg-maroon-bright transition-colors text-white font-semibold px-7 py-4"
                >
                  Request a Quote
                </Link>
                <Link
                  to="/services"
                  className="border border-white/40 hover:border-white transition-colors text-white font-semibold px-7 py-4"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="bracket-frame">
            <img
              src={factoryExterior}
              alt="Azure Tech Moulds factory building at Sri Venkateswara Industrial Complex"
              className="w-full h-[420px] object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <SectionTitle
              title="A precision job shop for die, mould and automobile components"
              description={`${company.description}. Working out of Sholinghur Taluk, Ranipet District, our floor pairs VMC and CNC turning with EDM sparking, 4th axis rotary work and in-house assembly so tooling leaves ready to run.`}
            />
            <ul className="mt-8 flex flex-col gap-4">
              {[
                "ISO 9001:2015 certified quality management system",
                "Precision Machined Parts, Mould & Die Manufacturing, Mechanical and Press Tool Assembly under one roof",
                "Serving automobile, moulding, press tool, power, construction and pharmaceutical industries",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-steel">
                  <span className="mt-2 h-1.5 w-1.5 bg-maroon shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-ink border-b border-ink hover:text-maroon hover:border-maroon transition-colors"
            >
              More about our facility <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <StatBand />

      {/* Services */}
      <section className="py-20 sm:py-28 bg-paper-dim">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <SectionTitle
              title="What we manufacture"
              description="Four capability areas covering machining, tooling and assembly, built around the equipment on our own shop floor."
            />
            <Link
              to="/services"
              className="shrink-0 text-sm font-semibold text-ink border-b border-ink hover:text-maroon hover:border-maroon transition-colors w-fit"
            >
              View all services
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            title="Why manufacturers work with us"
            description="Advantages built into how the shop actually runs, not marketing claims."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-steel-line border border-steel-line">
            {whyChooseUs.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white p-7 flex flex-col gap-4">
                <Icon size={26} strokeWidth={1.5} className="text-maroon" />
                <h3 className="font-display font-bold text-lg text-ink leading-snug">
                  {title}
                </h3>
                <p className="text-[14px] text-steel leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machinery preview */}
      <section className="py-20 sm:py-28 bg-paper-dim">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <SectionTitle
              title="On the shop floor"
              description="A working sample of the machines behind every quotation \u2013 the full list covers VMC, CNC turning, EDM and support equipment."
            />
            <Link
              to="/infrastructure"
              className="shrink-0 text-sm font-semibold text-ink border-b border-ink hover:text-maroon hover:border-maroon transition-colors w-fit"
            >
              View infrastructure
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {machinePreview.map((m) => (
              <div key={m.id} className="border border-steel-line bg-white">
                <img
                  src={m.image}
                  alt={m.name}
                  className="h-52 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <p className="text-xs font-semibold text-maroon uppercase tracking-wide">
                    {m.category}
                  </p>
                  <h3 className="font-display font-bold text-ink mt-1">{m.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target clients */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            title="Industries we serve"
            description="Target sectors for our die, mould and CNC machined components."
          />
          <div className="mt-12">
            <TargetClients />
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
