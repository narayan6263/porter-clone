// // import { ArrowRight, CircleDot, MapPin, PackageCheck, Truck } from "lucide-react";
// // import { motion } from "framer-motion";

// // const vehicleCards = [
// //   { title: "Truck", icon: Truck, bg: "from-amber-400 to-orange-500" },
// //   { title: "Two Wheeler", icon: CircleDot, bg: "from-cyan-400 to-blue-600" },
// //   { title: "Packers & Movers", icon: PackageCheck, bg: "from-violet-500 to-fuchsia-500" },
// // ];

// // export default function Hero() {
// //   return (
// //     <section className="relative overflow-hidden bg-slate-950">
// //       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.22),_transparent_25%)]" />

// //       <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="relative z-10"
// //         >
// //           <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
// //             <MapPin size={14} />
// //             City logistics made simple
// //           </span>

// //           <h1 className="mt-6 max-w-2xl text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
// //             Delivery Aapki, <br className="hidden md:block" />
// //             Transport Hamara
// //           </h1>

// //           <p className="mt-5 max-w-xl text-lg text-slate-300">
// //             Porter brings premium city transport, truck booking, and moving services into one trusted platform.
// //           </p>

// //           <div className="mt-8 flex flex-wrap gap-3">
// //             <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800">
// //               Book now
// //               <ArrowRight size={16} />
// //             </a>
// //             <a href="#faq" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
// //               Explore services
// //             </a>
// //           </div>
// //         </motion.div>

// //         <motion.div
// //           initial={{ opacity: 0, scale: 0.96 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //           transition={{ duration: 0.6, delay: 0.1 }}
// //           className="relative z-10 rounded-[32px] border border-white/10 bg-white/5 p-4 backdrop-blur"
// //         >
// //           <div className="rounded-[28px] bg-gradient-to-br from-slate-900 to-slate-800 p-5">
// //             <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-200">
// //               <MapPin size={16} className="text-blue-400" />
// //               City: Indore
// //             </div>

// //             <div className="grid gap-3 md:grid-cols-3">
// //               {vehicleCards.map(({ title, icon: Icon, bg }) => (
// //                 <div key={title} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-center">
// //                   <div className={`mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${bg} text-white shadow-lg`}>
// //                     <Icon size={28} />
// //                   </div>
// //                   <p className="text-sm font-semibold text-white">{title}</p>
// //                 </div>
// //               ))}
// //             </div>

// //             <div className="mt-4 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-600 p-[1px]">
// //               <div className="grid items-center gap-4 rounded-2xl bg-slate-950 p-4 md:grid-cols-[1.15fr_0.85fr]">
// //                 <div>
// //                   <p className="text-sm text-slate-400">Get an estimate</p>
// //                   <p className="mt-1 text-xl font-bold text-white">Takes 2-5 mins</p>
// //                 </div>
// //                 <button className="rounded-2xl bg-white px-4 py-3 text-sm font-bold text-blue-700 transition hover:bg-slate-100">
// //                   Estimate now
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }
// import { MapPin, Truck, Bike, Package } from "lucide-react";
// import bg from "../../assets/bg.png"; // path apne folder structure ke hisab se change karo

// const options = [
//   { title: "Truck", icon: Truck },
//   { title: "Two Wheeler", icon: Bike },
//   { title: "Packers & Movers", icon: Package },
// ];

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-50">
//       {/* Background decorative images simulation */}
//      <div
//   className="absolute inset-0 bg-cover bg-center opacity-20"
//   style={{ backgroundImage: `url(${bg})` }}
// />
    
//       <div className="absolute inset-0 bg-cover bg-center blur-md scale-110" />

//       <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
//         <div className="max-w-2xl">
//           <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 md:text-5xl lg:text-[56px]">
//             Delivery Aapki,
//             <br />
//             <span className="text-slate-900">Transport Hamara</span>
//           </h1>
//         </div>

//         {/* Booking Card */}
//         <div className="mt-10 max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60 md:p-6">
//           <div className="mb-5 flex items-center gap-2 text-[15px] font-medium text-slate-700">
//             <MapPin size={18} className="text-[#1A56DB]" />
//             City: <span className="font-semibold text-slate-900">Indore</span>
//             <span className="text-slate-400">▾</span>
//           </div>

//           <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//             <div className="flex gap-3">
//               {options.map((item) => {
//                 const Icon = item.icon;
//                 return (
//                   <button
//                     key={item.title}
//                     className="flex w-[90px] flex-col items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-4 transition hover:border-[#1A56DB] hover:bg-blue-50"
//                   >
//                     <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white shadow-sm">
//                       <Icon size={22} className="text-slate-700" />
//                     </div>
//                     <span className="text-center text-[13px] font-medium text-slate-800">
//                       {item.title}
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>

//             <button className="flex items-center justify-center gap-2 rounded-xl bg-[#1A56DB] px-6 py-4 text-[15px] font-semibold text-white transition hover:bg-blue-800">
//                Estimate
//               <span className="text-blue-200 text-sm font-normal">(takes ~2 mins)</span>
//               <span className="ml-1">→</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { MapPin, Truck, Bike, Package } from "lucide-react";
import bg from "../../assets/bg.png";

const options = [
  { title: "Truck", icon: Truck },
  { title: "Two Wheeler", icon: Bike },
  { title: "Packers & Movers", icon: Package },
];

export default function Hero() {
  return (
    <section className="relative h-[520px] overflow-hidden md:h-[620px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 md:px-6">
        <div className="w-full">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-light text-white md:text-6xl lg:text-[4.2rem]">
              Delivery Aapki,
            </h2>
            <h1 className="mt-2 text-5xl font-bold leading-[0.95] text-white md:text-7xl lg:text-[5.5rem]">
              Transport Hamara
            </h1>
          </div>

          <div className="mt-10 w-full max-w-5xl rounded-[1.9rem] bg-white p-5 shadow-2xl shadow-slate-900/20 md:p-7">
            <div className="mb-6 flex items-center gap-2 text-[15px] text-slate-700 md:text-lg">
              <MapPin className="text-blue-700" size={18} />
              <span>City:</span>
              <span className="font-semibold text-slate-900">Indore</span>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1fr_220px] lg:items-center">
              <div className="grid gap-3 sm:grid-cols-3">
                {options.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.title}
                      className="flex min-h-[118px] flex-col items-center justify-center rounded-xl bg-slate-100 py-5 transition hover:bg-blue-50 hover:text-blue-700"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white shadow-sm">
                        <Icon size={30} className="text-slate-700" />
                      </div>
                      <span className="mt-3 text-sm font-medium text-slate-800">
                        {item.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              <button className="flex h-full min-h-[118px] flex-col items-center justify-center rounded-xl bg-[#1A56DB] px-6 py-4 text-center text-white transition hover:bg-blue-800">
                <span className="text-[1.2rem] font-semibold leading-tight">Get an Estimate</span>
                <span className="mt-1 text-sm font-medium text-blue-100">(takes ~2 mins)</span>
                <span className="mt-2 text-lg">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}