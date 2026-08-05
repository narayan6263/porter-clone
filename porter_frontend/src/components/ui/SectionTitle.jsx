export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-blue-700">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-base text-slate-600 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
