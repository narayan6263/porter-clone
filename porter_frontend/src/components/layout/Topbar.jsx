export default function Topbar({
  roleName = "User",
  title = "Dashboard",
  subtitle = "Your transport workspace",
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 rounded-[24px] border border-white/10 bg-slate-950/70 p-4 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm text-orange-300">{roleName} experience</p>
        <h1 className="text-3xl font-bold text-white md:text-4xl">{title}</h1>
        <p className="mt-1 text-slate-400">{subtitle}</p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
          Live status: <span className="font-semibold text-emerald-400">Online</span>
        </div>
        <button className="rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400 px-4 py-2 text-sm font-semibold text-slate-950">
          {roleName} panel
        </button>
      </div>
    </div>
  );
}
