export default function Button({ children, variant = "primary", className = "", ...props }) {
  const variants = {
    primary: "bg-blue-700 text-white hover:bg-blue-800",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50",
    dark: "bg-slate-950 text-white hover:bg-slate-900",
    ghost: "bg-transparent text-white border border-white/30 hover:bg-white/10",
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
