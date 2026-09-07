import { Factory, Cog, Hammer, Zap, Building2, Pill } from "lucide-react";
import { targetClients } from "../data/targetClients";

const icons = {
  automobile: Factory,
  molding: Cog,
  "press-tool": Hammer,
  power: Zap,
  construction: Building2,
  pharma: Pill,
};

export default function TargetClients() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-steel-line border border-steel-line">
      {targetClients.map((client) => {
        const Icon = icons[client.id] || Factory;
        return (
          <div
            key={client.id}
            className="bg-white p-6 sm:p-7 flex flex-col gap-4 min-h-[150px] justify-between hover:bg-paper transition-colors"
          >
            <Icon size={26} strokeWidth={1.5} className="text-maroon" />
            <p className="font-medium text-[15px] text-ink leading-snug">
              {client.name}
            </p>
          </div>
        );
      })}
    </div>
  );
}
