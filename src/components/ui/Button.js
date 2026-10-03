// Button dùng chung — JS thuần
import Link from "next/link";

export default function Button({
  children,
  href = "#lien-he",
  variant = "primary",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200";

  const variants = {
    primary:
      "bg-amber-500 text-zinc-950 hover:bg-amber-400 shadow-lg shadow-amber-500/20",
    secondary:
      "border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800",
    outlineWhite:
      "border border-white/40 text-white hover:bg-white hover:text-zinc-900",
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  // Nếu href là anchor (#...) thì dùng thẻ <a> thường để scroll mượt
  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
