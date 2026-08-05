export default function Sidebar({
  roleName = "User",
  accentClass = "from-orange-500 to-amber-400",
  navItems = ["Dashboard", "Bookings", "Orders", "Support"],
  quickActions = ["Book a ride", "Track live order", "Pay invoice"],
}) {
  return (
    <aside className="hidden w-[280px] shrink-0 rounded-[28px] border border-white/10 bg-slate-900/80 p-5 shadow-2xl shadow-slate-950/40 lg:block">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 text-lg font-black text-slate-950">
          P
        </div>
        <div>
          <p className="text-lg font-semibold">Porter</p>
          <p className="text-xs text-slate-400">Smart mobility platform</p>
        </div>
      </div>

      <div className="mb-6 rounded-2xl bg-gradient-to-r p-[1px] shadow-lg shadow-orange-500/10">
        <div className={`rounded-2xl bg-gradient-to-r ${accentClass} p-4 text-slate-950`}>
          <p className="text-xs font-semibold uppercase tracking-[0.22em]">Role</p>
          <p className="mt-2 text-2xl font-bold">{roleName}</p>
          <p className="mt-1 text-sm font-medium">Operations panel</p>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map((item, index) => (
          <button
            key={item}
            className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition ${
              index === 0
                ? "bg-white/10 text-white"
                : "text-slate-300 hover:bg-white/5 hover:text-white"
            }`}
          >
            <span>{item}</span>
            <span className="text-xs text-slate-400">0{index + 1}</span>
          </button>
        ))}
      </nav>

      <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900/70 p-4">
        <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Quick actions</p>
        <div className="mt-3 space-y-2">
          {quickActions.map((action) => (
            <div key={action} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
              {action}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
