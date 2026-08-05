// import { ArrowUpRight, Globe, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
// const quickLinks = ["API Integrations", "Packers & Movers", "Two Wheelers", "Trucks", "Porter Enterprise"];
// const supportLinks = ["Contact Us", "Privacy Policy", "Terms of Service", "Insurance FAQs"];
// const cities = ["Delhi NCR", "Hyderabad", "Bangalore", "Mumbai", "Vadodara", "Chandigarh", "Jaipur", "Chennai", "Kolkata", "Indore", "Ahmedabad", "Surat", "Nagpur", "Lucknow", "Pune", "Coimbatore", "Kochi", "Ludhiana", "Nashik", "Kanpur", "Visakhapatnam", "Trivandrum"];

// export default function Footer() {
//   return (
//     <footer className="bg-slate-950 text-white">
//       <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
//         <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr]">
//           <div>
//             <div className="text-4xl font-black tracking-tight text-blue-500">PORTER<span className="text-blue-300">°</span></div>
//             <div className="mt-6 space-y-3 text-sm text-slate-300">
//               <p className="flex items-center gap-2"><MapPin size={16} /> Mumbai, India</p>
//               <p className="flex items-center gap-2"><Phone size={16} /> 080 4410 4410</p>
//             </div>
//             <div className="mt-6 flex gap-3">
//               <a href="#" className="rounded-full border border-white/20 p-2 hover:bg-white/10"><Globe size={16} /></a>
//               <a href="#" className="rounded-full border border-white/20 p-2 hover:bg-white/10"><MessageCircle size={16} /></a>
//               <a href="#" className="rounded-full border border-white/20 p-2 hover:bg-white/10"><Mail size={16} /></a>
//               <a href="#" className="rounded-full border border-white/20 p-2 hover:bg-white/10"><Send size={16} /></a>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-lg font-bold">Company</h3>
//             <ul className="mt-4 space-y-3 text-sm text-slate-300">
//               <li>About Us</li>
//               <li>Careers</li>
//               <li>Blog</li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-bold">Quick Links</h3>
//             <ul className="mt-4 space-y-3 text-sm text-slate-300">
//               {quickLinks.map((item) => (
//                 <li key={item}>{item}</li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-bold">Support</h3>
//             <ul className="mt-4 space-y-3 text-sm text-slate-300">
//               {supportLinks.map((item) => (
//                 <li key={item}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div className="mt-10 border-t border-white/10 pt-8">
//           <h3 className="text-2xl font-bold">Domestic Cities</h3>
//           <div className="mt-5 grid gap-3 text-sm text-slate-300 sm:grid-cols-3 lg:grid-cols-5">
//             {cities.map((city) => (
//               <div key={city}>{city}</div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
//           Registered Office: © 2026 SmartShift Logistics Solutions Pvt. Ltd.
//         </div>
//       </div>
//     </footer>
//   );
// }
import { Globe, Mail, MessageCircle, Send } from "lucide-react";

const cities = [
  "Delhi NCR", "Hyderabad", "Bangalore", "Mumbai", "Vadodara",
  "Chandigarh", "Jaipur", "Chennai", "Kolkata", "Indore",
  "Ahmedabad", "Surat", "Nagpur", "Lucknow", "Pune",
  "Coimbatore", "Kochi", "Ludhiana", "Nashik", "Kanpur",
  "Visakhapatnam", "Trivandrum",
];

const socialIcons = [
  { icon: Globe },
  { icon: MessageCircle },
  { icon: Mail },
  { icon: Send },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-3xl font-black text-[#3B82F6]">
              PORTER<span className="text-blue-400">°</span>
            </div>
            <p className="mt-4 text-sm text-slate-400">Follow us on</p>
            <div className="mt-3 flex gap-3">
              {socialIcons.map((item, index) => {
                const Icon = item.icon;
                return (
                  <span
                    key={index}
                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/15 text-slate-300 transition hover:border-white/40 hover:text-white"
                  >
                    <Icon size={15} />
                  </span>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="cursor-pointer hover:text-white">About Us</li>
              <li className="cursor-pointer hover:text-white">Careers</li>
              <li className="cursor-pointer hover:text-white">Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>API Integrations</li>
              <li>Packers & Movers</li>
              <li>Two Wheelers</li>
              <li>Trucks</li>
              <li>Porter Enterprise</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Insurance FAQs</li>
              <li>Driver Partner Terms & Conditions</li>
              <li>Zero Tolerance Policy</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <h4 className="mb-5 text-lg font-semibold">Domestic Cities</h4>
          <div className="grid grid-cols-2 gap-y-2 text-sm text-slate-400 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {cities.map((city) => (
              <div key={city} className="cursor-pointer hover:text-white">
                {city}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-500">
          <p>Registered Office:</p>
          <p className="mt-1">
            © 2026 SmartShift Logistics Solutions Pvt. Ltd.
            No. A-501, A-502, B-504, B-505 and B-506, Fifth Floor at Universal Business Park,
            Chandivali Farm Road, off. Saki Vihar Road, Andheri (East), Mumbai, Maharashtra - 400072
          </p>
          <p className="mt-1">CIN: U74999MH2014PTC306120</p>
        </div>
      </div>
    </footer>
  );
}