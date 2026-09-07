import { stats } from "../data/company";

export default function StatBand() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="border-l-2 border-maroon-bright pl-4">
            <p className="font-display font-bold text-2xl sm:text-3xl font-data-num">
              {stat.value}
            </p>
            <p className="text-metal text-[13px] sm:text-sm mt-1.5 leading-snug">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
