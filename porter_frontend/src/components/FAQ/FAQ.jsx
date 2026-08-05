// import { useState } from "react";
// import { ChevronDown } from "lucide-react";

// const faqs = [
//   {
//     question: "What is Porter Enterprise?",
//     answer: "Porter Enterprise is a business-grade logistics solution helping companies move goods, manage fleets, and improve delivery visibility.",
//   },
//   {
//     question: "How does Porter help businesses with logistics transport?",
//     answer: "We provide reliable on-demand transportation, transparent pricing, and citywide operations designed for enterprise-grade fulfillment.",
//   },
//   {
//     question: "How long does it take to activate my Enterprise account?",
//     answer: "Typically, activation can be completed quickly after your onboarding details are submitted and verified by the team.",
//   },
//   {
//     question: "Do you provide a dashboard to keep track of account activity?",
//     answer: "Yes, the enterprise workflow is designed to give businesses better tracking, visibility, and control across operations.",
//   },
// ];

// export default function FAQ() {
//   const [openIndex, setOpenIndex] = useState(0);

//   return (
//     <section id="faq" className="bg-slate-100 py-16 md:py-20">
//       <div className="mx-auto max-w-4xl px-4 md:px-6">
//         <div className="mb-10 text-center">
//           <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-700">FAQ</p>
//           <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Frequently asked questions</h2>
//         </div>

//         <div className="space-y-3">
//           {faqs.map((item, index) => (
//             <div key={item.question} className="rounded-2xl border border-slate-200 bg-white">
//               <button
//                 onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
//                 className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
//               >
//                 <span className="text-base font-semibold text-slate-900">{item.question}</span>
//                 <ChevronDown className={`transition ${openIndex === index ? "rotate-180" : ""}`} size={18} />
//               </button>
//               {openIndex === index ? <p className="px-5 pb-5 text-slate-600">{item.answer}</p> : null}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is Porter App?",
    a: "Porter is India's leading on-demand logistics platform that connects customers with reliable drivers for goods transportation using trucks, two-wheelers, and packers & movers services.",
  },
  {
    q: "How do I use Porter App?",
    a: "Simply select your city, choose the vehicle type, enter pickup & drop locations, get an instant estimate, and book. A driver will be assigned shortly.",
  },
  {
    q: "What are the items that are prohibited by Porter?",
    a: "Porter does not allow transportation of hazardous materials, illegal substances, live animals, and certain restricted items as per local laws.",
  },
  {
    q: "What are the charges for goods transportation services by truck and two-wheelers?",
    a: "Charges depend on distance, vehicle type, and time. You get a transparent estimate before booking.",
  },
  {
    q: "Does Porter provide Packers and Movers services?",
    a: "Yes, Porter offers complete Packers & Movers services for house shifting and office relocation.",
  },
  {
    q: "What types of goods does Porter transport?",
    a: "Almost all types of non-prohibited goods — household items, furniture, commercial cargo, e-commerce packages, etc.",
  },
  {
    q: "How long does it take to transport goods via Porter?",
    a: "Most intra-city deliveries are completed within a few hours. Exact time depends on distance and traffic.",
  },
  {
    q: "Does Porter provide mini trucks like Tata Ace on monthly contract?",
    a: "Yes, Porter Enterprise offers flexible monthly and long-term contracts for businesses.",
  },
  {
    q: "How does an API Integration with Porter work?",
    a: "You can integrate Porter’s APIs into your system to automate booking, tracking, and billing for seamless logistics operations.",
  },
  {
    q: "How does an API integration solve business problems?",
    a: "It reduces manual work, improves visibility, lowers costs, and helps scale delivery operations efficiently.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">FAQ</p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white shadow-sm">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <span className="text-[15px] font-medium text-slate-800">{item.q}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-slate-500 transition ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <p className="px-5 pb-4 text-sm leading-relaxed text-slate-600">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}