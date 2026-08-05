import { Truck, Bike, Package } from "lucide-react";

const tabs = [
  {
    title: "Truck",
    description: "City and intercity logistics for large cargo loads.",
    icon: Truck,
    color: "from-amber-400 to-orange-500",
  },
  {
    title: "Two Wheeler",
    description: "Fast, efficient service for urgent local deliveries.",
    icon: Bike,
    color: "from-cyan-400 to-blue-600",
  },
  {
    title: "Packers & Movers",
    description: "Home shifting and business relocation with reliable support.",
    icon: Package,
    color: "from-violet-500 to-fuchsia-500",
  },
];

export default function VehicleTabs() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Our fleet</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Transport solutions built for every need</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {tabs.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className={`mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
