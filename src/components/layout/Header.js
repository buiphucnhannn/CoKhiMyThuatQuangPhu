"use client";

// Header sticky + menu mobile — JS thuần
import { useState } from "react";
import { NAV_LINKS, SITE_INFO } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
      {/* Top bar */}
      <div className="hidden bg-zinc-950 text-xs text-zinc-300 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <p>
            📍 {SITE_INFO.address} • ⏰ {SITE_INFO.workingHours}
          </p>
          <a
            href={SITE_INFO.phoneHref}
            className="font-semibold text-amber-400 hover:text-amber-300"
          >
            📞 {SITE_INFO.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#trang-chu" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-xl font-black text-zinc-950">
            QP
          </div>
          <div className="leading-tight">
            <p className="text-sm font-bold text-zinc-900 dark:text-white sm:text-base">
              {SITE_INFO.name}
            </p>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
              {SITE_INFO.slogan}
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-600 hover:text-amber-600 dark:text-zinc-300 dark:hover:text-amber-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#lien-he">Báo giá miễn phí</Button>
        </div>

        {/* Hamburger mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-zinc-700 hover:bg-zinc-100 lg:hidden dark:text-zinc-200 dark:hover:bg-zinc-800"
          aria-label="Mở menu"
        >
          {open ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-zinc-200 bg-white px-4 py-3 lg:hidden dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2">
              <Button
                href="#lien-he"
                className="w-full"
              >
                📞 {SITE_INFO.phone}
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
