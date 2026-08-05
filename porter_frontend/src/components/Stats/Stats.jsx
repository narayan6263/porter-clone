// const stats = [
//   { value: "21+", label: "Cities" },
//   { value: "7.5L+", label: "Driver partners" },
//   { value: "10K+", label: "Enterprise clients" },
//   { value: "100%", label: "Reliable operations" },
// ];

// export default function Stats() {
//   return (
//     <section className="bg-slate-950 py-16 text-white md:py-20">
//       <div className="mx-auto max-w-7xl px-4 md:px-6">
//         <div className="mb-10 text-center">
//           <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-400">Growing network</p>
//           <h2 className="mt-3 text-3xl font-bold md:text-4xl">We are transforming cities every day</h2>
//         </div>

//         <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
//           {stats.map((item) => (
//             <div key={item.label} className="rounded-[24px] border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
//               <div className="text-4xl font-black text-white">{item.value}</div>
//               <div className="mt-2 text-sm font-medium text-slate-300">{item.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
const stats = [
  { value: "3", label: "Countries" },
  { value: "15 Lakh+", label: "Driver Partners" },
  { value: "1 Crore+", label: "Customers" },
  { value: "10 Crore+", label: "Trips" },
];

export default function Stats() {
  return (
    <section className="bg-slate-950 py-16 text-white md:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="border-l border-white/10 first:border-l-0">
              <div className="text-[2.6rem] font-extrabold md:text-[3.4rem]">{item.value}</div>
              <div className="mt-1 text-base text-slate-300 md:text-lg">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}