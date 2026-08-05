import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const roleConfig = {
  user: {
    name: "User",
    accent: "from-orange-500 to-amber-400",
    badge: "Ready for pickup",
    stats: [
      { label: "Active bookings", value: "04" },
      { label: "Today trips", value: "08" },
      { label: "Saved money", value: "₹1.1k" },
    ],
    nav: ["Dashboard", "Bookings", "Orders", "Support"],
    quickActions: ["Book a ride", "Track live order", "Pay invoice"],
    featured: {
      title: "Your everyday mobility is ready",
      text: "Book a truck, city ride, or package delivery in a few taps.",
    },
  },
  driver: {
    name: "Driver",
    accent: "from-sky-500 to-cyan-400",
    badge: "On-route today",
    stats: [
      { label: "Delivered", value: "17" },
      { label: "Earnings", value: "₹6.8k" },
      { label: "Accept rate", value: "96%" },
    ],
    nav: ["Dashboard", "Trips", "Earnings", "Wallet"],
    quickActions: ["Accept next ride", "View routes", "Withdraw payout"],
    featured: {
      title: "Stay efficient on every trip",
      text: "Monitor deliveries, maximize acceptance, and manage your daily earnings.",
    },
  },
  admin: {
    name: "Admin",
    accent: "from-violet-500 to-fuchsia-400",
    badge: "Operations overview",
    stats: [
      { label: "Fleet live", value: "142" },
      { label: "Orders today", value: "286" },
      { label: "Revenue", value: "₹24.8k" },
    ],
    nav: ["Dashboard", "Users", "Drivers", "Analytics"],
    quickActions: ["Review growth", "Manage payouts", "Alert center"],
    featured: {
      title: "Control the full platform at a glance",
      text: "Keep services balanced, spot trends, and manage the Porter network smoothly.",
    },
  },
};

export default function DashboardShell({
  role = "user",
  title,
  subtitle,
  cards = [],
  highlights = [],
}) {
  const config = roleConfig[role] || roleConfig.user;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-[1600px] gap-4 p-4 lg:p-6">
        <Sidebar
          roleName={config.name}
          accentClass={config.accent}
          navItems={config.nav}
          quickActions={config.quickActions}
        />

        <main className="flex-1 rounded-[28px] border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-slate-950/40 md:p-6">
          <Topbar
            roleName={config.name}
            title={title}
            subtitle={subtitle}
          />

          <section className="mb-6 grid gap-4 md:grid-cols-3">
            {config.stats.map((item) => (
              <div
                key={item.label}
                className="rounded-[22px] border border-white/10 bg-slate-950/60 p-4"
              >
                <p className="text-sm text-slate-400">{item.label}</p>
                <p className="mt-3 text-3xl font-bold text-white">{item.value}</p>
              </div>
            ))}
          </section>

          <section className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-5">
              <div className={`rounded-[20px] bg-gradient-to-r ${config.accent} p-[1px]`}>
                <div className="rounded-[19px] bg-slate-950/95 p-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Featured objective
                  </p>
                  <h2 className="mt-3 text-2xl font-bold">{config.featured.title}</h2>
                  <p className="mt-2 max-w-2xl text-sm text-slate-300">{config.featured.text}</p>
                </div>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {cards.map((card) => (
                  <div key={card.title} className="rounded-[20px] border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-slate-400">{card.title}</p>
                    <p className="mt-2 text-xl font-semibold text-white">{card.value}</p>
                    <p className="mt-1 text-sm text-slate-300">{card.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-[20px] border border-white/10 bg-slate-950/60 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm text-slate-400">{item.title}</p>
                      <p className="mt-1 text-lg font-semibold text-white">{item.value}</p>
                    </div>
                    <span className="rounded-full bg-orange-500/15 px-3 py-1 text-xs font-semibold text-orange-300">
                      {item.tag}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-300">{item.note}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
