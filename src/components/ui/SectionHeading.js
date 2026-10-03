// Tiêu đề dùng chung cho các section
export default function SectionHeading({
  eyebrow,
  title,
  desc,
  align = "center",
  dark = false,
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = dark ? "text-white" : "text-zinc-900 dark:text-white";
  const descColor = dark
    ? "text-zinc-300"
    : "text-zinc-600 dark:text-zinc-400";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className="mb-3 inline-block rounded-full bg-amber-500/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${titleColor}`}
      >
        {title}
      </h2>
      {desc && <p className={`mt-4 text-base leading-7 ${descColor}`}>{desc}</p>}
    </div>
  );
}
