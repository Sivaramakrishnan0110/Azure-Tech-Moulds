export default function MachineSpecCard({ machine }) {
  return (
    <div className="border border-steel-line bg-white flex flex-col md:flex-row">
      {machine.image && (
        <div className="md:w-2/5 bracket-frame shrink-0">
          <img
            src={machine.image}
            alt={machine.name}
            loading="lazy"
            className="h-56 md:h-full w-full object-cover"
          />
        </div>
      )}
      <div className="flex-1 p-6 sm:p-7 flex flex-col gap-4">
        <div>
          <p className="text-xs font-semibold tracking-wide text-maroon uppercase">
            {machine.category}
          </p>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-ink mt-1">
            {machine.name}
          </h3>
        </div>
        <dl className="grid grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-3">
          {machine.specs.map((spec) => (
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
    </div>
  );
}
