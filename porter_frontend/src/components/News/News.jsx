// const news = [
//   {
//     title: "On-demand intra-city logistics provider Porter has raised ₹750 crore",
//     tag: "Funding",
//   },
//   {
//     title: "Reliable goods transportation with full clarity, speed, and control",
//     tag: "Business",
//   },
//   {
//     title: "Enterprise operations now powered by smarter delivery workflows",
//     tag: "Growth",
//   },
// ];

// export default function News() {
//   return (
//     <section className="bg-white py-16 md:py-20">
//       <div className="mx-auto max-w-7xl px-4 md:px-6">
//         <div className="mb-10 text-center">
//           <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-700">News</p>
//           <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">What’s happening at Porter</h2>
//         </div>

//         <div className="grid gap-5 lg:grid-cols-3">
//           {news.map((item) => (
//             <article key={item.title} className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
//               <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">{item.tag}</span>
//               <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title}</h3>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
export default function News() {
  return (
    <section className="bg-slate-950 py-16 text-white md:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
        <p className="mb-8 text-sm uppercase tracking-[0.35em] text-slate-400">In the news</p>
        <blockquote className="mx-auto max-w-4xl text-[1.55rem] font-medium leading-relaxed text-slate-100 md:text-[2.3rem]">
          “On-demand intra-city logistics provider Porter has raised ₹750 crore in a Series E funding round led by Tiger Global Management and Vitruvian Partners. The latest funding round valued the startup at ₹3,750 crore.”
        </blockquote>
        <button className="mt-10 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
          Read Article →
        </button>
      </div>
    </section>
  );
}