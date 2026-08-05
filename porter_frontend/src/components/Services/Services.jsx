// import { ArrowRight, Building2, ShieldCheck, Wallet, Users } from "lucide-react";

// const services = [
//   {
//     title: "Porter Enterprise",
//     text: "Streamlining operations to drive business growth with connected logistics.",
//     icon: Building2,
//     accent: "from-violet-500 to-indigo-600",
//   },
//   {
//     title: "API Integration",
//     text: "Automate bookings with seamless integrations for powerful business workflows.",
//     icon: ShieldCheck,
//     accent: "from-emerald-500 to-teal-600",
//   },
//   {
//     title: "Two-Wheelers",
//     text: "Reliable local transport for fast-moving city deliveries and short trips.",
//     icon: Wallet,
//     accent: "from-pink-500 to-rose-500",
//   },
//   {
//     title: "Packers & Movers",
//     text: "Complete moving solutions for households and office relocation support.",
//     icon: Users,
//     accent: "from-blue-500 to-cyan-500",
//   },
// ];

// export default function Services() {
//   return (
//     <section id="services" className="bg-slate-100 py-16 md:py-20">
//       <div className="mx-auto max-w-7xl px-4 md:px-6">
//         <div className="mb-10 text-center">
//           <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Our services</p>
//           <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Premium logistics solutions for every business</h2>
//         </div>

//         <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
//           {services.map((item) => {
//             const Icon = item.icon;
//             return (
//               <div key={item.title} className={`rounded-[28px] bg-gradient-to-br ${item.accent} p-[1px] shadow-lg`}>
//                 <div className="flex h-full flex-col rounded-[27px] bg-slate-950/95 p-6 text-white">
//                   <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
//                     <Icon size={22} />
//                   </div>
//                   <h3 className="text-xl font-bold">{item.title}</h3>
//                   <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{item.text}</p>
//                   <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-white">
//                     Learn more <ArrowRight size={16} />
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
const services = [
  {
    title: "Porter Enterprise",
    text: "Streamlining operations to drive business growth",
    gradient: "from-violet-600 to-purple-700",
  },
  {
    title: "API Integration",
    text: "Automate the transportation of your goods by integrating our APIs",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Two-Wheelers",
    text: "Reliable goods transportation services for up to 20 kg",
    gradient: "from-indigo-600 to-blue-700",
  },
  {
    title: "Trucks",
    text: "Hassle-free goods transportation up to 2500 kg",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    title: "Packers & Movers",
    text: "House shift Ho Jayega",
    gradient: "from-fuchsia-600 to-pink-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-[0.35em] text-slate-500">
          Our services
        </p>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {services.map((item) => (
            <div
              key={item.title}
              className={`min-h-[240px] rounded-[1.6rem] bg-gradient-to-br ${item.gradient} p-6 text-white shadow-lg`}
            >
              <p className="mb-4 text-[13px] font-medium opacity-90">{item.title}</p>
              <h3 className="mb-10 text-[1.35rem] font-semibold leading-snug">{item.text}</h3>
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-lg transition hover:bg-white/30">
                →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}