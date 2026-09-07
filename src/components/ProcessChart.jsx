const mainSteps = [
  { id: "customer1", label: "Customer" },
  { id: "order", label: "Order Handling" },
  { id: "manufacturing", label: "Manufacturing" },
  { id: "inspection", label: "Inspection & Delivery" },
  { id: "customer2", label: "Customer" },
];

export default function ProcessChart() {
  return (
    <div className="border border-steel-line bg-white p-6 sm:p-10">
      <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-10 items-center">
        {/* Left support */}
        <div className="flex flex-col gap-4 order-2 lg:order-1">
          <SupportBox label="Stores & Maintenance" />
          <SupportBox label="Business Planning" />
        </div>

        {/* Main flow */}
        <div className="flex flex-col items-stretch gap-0 order-1 lg:order-2 w-full lg:w-72">
          {mainSteps.map((step, i) => (
            <div key={step.id} className="flex flex-col items-center">
              <div
                className={`w-full text-center px-5 py-3.5 font-medium text-sm ${
                  step.label === "Customer"
                    ? "bg-maroon text-white"
                    : "bg-graphite text-white"
                }`}
              >
                {step.label}
              </div>
              {i < mainSteps.length - 1 && (
                <div className="h-6 w-px bg-steel-line" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        {/* Right support */}
        <div className="flex flex-col gap-4 order-3">
          <SupportBox label="Admin" />
          <SupportBox label="Subcon Plating & Testing" />
          <SupportBox label="Review and Improvement" />
        </div>
      </div>
    </div>
  );
}

function SupportBox({ label }) {
  return (
    <div className="border border-steel-line px-5 py-3.5 text-center text-sm font-medium text-steel bg-paper">
      {label}
    </div>
  );
}
