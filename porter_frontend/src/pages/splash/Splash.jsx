import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="rounded-[28px] border border-orange-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-10 py-8 text-center shadow-2xl shadow-orange-500/10">
        <div className="mb-3 text-4xl font-black tracking-[0.25em] text-orange-400">PORTER</div>
        <div className="text-sm uppercase tracking-[0.3em] text-slate-400">Launching your workspace</div>
      </div>
    </div>
  );
}