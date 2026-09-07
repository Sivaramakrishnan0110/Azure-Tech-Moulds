import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import MachineSpecCard from "../components/MachineSpecCard";
import CTA from "../components/CTA";
import {
  vmcMachines,
  turningMachine,
  edmMachine,
  rotaryTable,
  powerGripUnit,
} from "../data/machinery";
import {
  supportEquipment,
  handlingEquipment,
  measuringInstruments,
} from "../data/equipment";

export default function Infrastructure() {
  return (
    <>
      <SEO
        title="Infrastructure & Machinery"
        description="VMC machining centres, CNC turning, CNC EDM sparking, 4th axis rotary tables, handling equipment and measuring instruments at Azure Tech Moulds, Ranipet."
      />

      <section className="pt-16 sm:pt-24 pb-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            size="lg"
            title="The floor behind every quotation"
            description="Vertical machining centres, CNC turning, CNC EDM sparking and 4th axis rotary work, backed by dedicated handling equipment and calibrated measuring instruments."
          />
        </div>
      </section>

      {/* VMC machines */}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display font-bold text-2xl text-ink mb-8">
            Vertical Machining Centres
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {vmcMachines.map((machine) => (
              <MachineSpecCard key={machine.id} machine={machine} />
            ))}
          </div>
        </div>
      </section>

      {/* Turning + EDM */}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display font-bold text-2xl text-ink mb-8">
            CNC Turning &amp; EDM Sparking
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            <MachineSpecCard machine={turningMachine} />
            <MachineSpecCard machine={edmMachine} />
          </div>
        </div>
      </section>

      {/* 4th axis + power grip */}
      <section className="pb-16 sm:pb-20 bg-paper-dim py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display font-bold text-2xl text-ink mb-8">
            Rotary &amp; Tool Clamping
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {[rotaryTable, powerGripUnit].map((item) => (
              <div key={item.id} className="border border-steel-line bg-white p-6 sm:p-7">
                <p className="text-xs font-semibold tracking-wide text-maroon uppercase">
                  {item.category}
                </p>
                <h3 className="font-display font-bold text-xl text-ink mt-1">
                  {item.name}
                </h3>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-3 mt-5">
                  {item.specs.map((spec) => (
                    <div key={spec.label} className="border-t border-steel-line pt-2.5">
                      <dt className="text-[11.5px] uppercase tracking-wide text-steel">
                        {spec.label}
                      </dt>
                      <dd className="font-data-num text-[15px] text-ink mt-0.5">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support equipment */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display font-bold text-2xl text-ink mb-8">
            Supporting Equipment
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportEquipment.map((eq) => (
              <div key={eq.id} className="border border-steel-line bg-white">
                <img src={eq.image} alt={eq.name} className="h-48 w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <h3 className="font-display font-bold text-ink text-[15px]">{eq.name}</h3>
                  <p className="text-[13.5px] text-steel mt-1.5 leading-relaxed">{eq.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Handling equipment */}
      <section className="py-16 sm:py-20 bg-paper-dim">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display font-bold text-2xl text-ink mb-8">
            Material Handling
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {handlingEquipment.map((eq) => (
              <div key={eq.id} className="border border-steel-line bg-white">
                <img src={eq.image} alt={eq.name} className="h-44 w-full object-contain bg-white p-4" loading="lazy" />
                <div className="p-5 border-t border-steel-line">
                  <h3 className="font-display font-bold text-ink text-[15px]">{eq.name}</h3>
                  <p className="text-[13.5px] text-steel mt-1 font-data-num">{eq.capacity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Measuring instruments */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display font-bold text-2xl text-ink mb-8">
            Measuring Instruments
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {measuringInstruments.map((inst) => (
              <div key={inst.id} className="border border-steel-line bg-white">
                <img src={inst.image} alt={inst.name} className="h-40 w-full object-contain bg-white p-4" loading="lazy" />
                <div className="p-5 border-t border-steel-line">
                  <h3 className="font-display font-bold text-ink text-[14px]">{inst.name}</h3>
                  <p className="text-[13px] text-steel mt-1">{inst.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Have a drawing that needs the right machine?"
        description="Share your specification and we'll match it to the right process on our floor."
      />
    </>
  );
}
