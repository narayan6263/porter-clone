// // import { Menu, Phone, Search } from "lucide-react";
// // import { Link } from "react-router-dom";

// // const navItems = [
// //   { label: "For Enterprise", href: "#enterprise" },
// //   { label: "Driver Partner", href: "#driver" },
// //   { label: "Support", href: "#support" },
// // ];

// // export default function Navbar() {
// //   return (
// //     <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
// //       <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
// //         <Link to="/" className="text-3xl font-black tracking-tight text-blue-800">
// //           PORTER<span className="text-blue-600">°</span>
// //         </Link>

// //         <nav className="hidden items-center gap-8 md:flex">
// //           {navItems.map((item) => (
// //             <a key={item.label} href={item.href} className="text-sm font-semibold text-slate-700 transition hover:text-blue-700">
// //               {item.label}
// //             </a>
// //           ))}
// //         </nav>

// //         <div className="hidden items-center gap-3 md:flex">
// //           <button className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-blue-700 hover:text-blue-700">
// //             <Search size={18} />
// //           </button>
// //           <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800">
// //             <Phone size={16} />
// //             Contact
// //           </a>
// //         </div>

// //         <button className="rounded-full border border-slate-200 p-2 text-slate-700 md:hidden">
// //           <Menu size={18} />
// //         </button>
// //       </div>
// //     </header>
// //   );
// // }


// import { Menu } from "lucide-react";

// const navItems = [
//   { label: "For Enterprise", href: "#enterprise" },
//   { label: "Driver Partner", href: "#driver" },
//   { label: "Support", href: "#support" },
// ];

// export default function Navbar() {
//   return (
//     <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 md:px-6">
//         {/* Logo */}
//         <a href="/" className="text-[28px] font-black tracking-tight text-[#1A56DB]">
//           PORTER<span className="text-[#3B82F6]">°</span>
//         </a>

//         {/* Desktop Nav */}
//         <nav className="hidden items-center gap-8 md:flex">
//           {navItems.map((item) => (
//             <a
//               key={item.label}
//               href={item.href}
//               className="text-[15px] font-medium text-slate-700 transition hover:text-[#1A56DB]"
//             >
//               {item.label}
//             </a>
//           ))}
//         </nav>

//         {/* Mobile menu button */}
//         <button className="rounded-lg p-2 text-slate-700 md:hidden">
//           <Menu size={22} />
//         </button>
//       </div>
//     </header>
//   );
// }

import { Menu } from "lucide-react";

const navItems = [
  {
    label: "For Enterprise",
    href: "#",
  },
  {
    label: "Driver Partner",
    href: "#",
  },
  {
    label: "Support",
    href: "#",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        <h1 className="text-[2rem] font-black tracking-tight text-[#1A56DB] md:text-[2.4rem]">
          PORTER<span className="text-[#3B82F6]">°</span>
        </h1>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[15px] font-semibold text-slate-700 transition hover:text-blue-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button className="rounded-lg p-2 text-slate-700 md:hidden">
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}