"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { scrollToSection } from "@/lib/smoothScroll";

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check active section
      const sections = [
        "hero",
        "ve-quang-phu",
        "du-an-noi-bat",
        "dich-vu",
        "lien-he",
      ];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Khóa thanh cuộn trang khi menu mobile mở
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Trang chủ", href: "#hero", id: "hero" },
    { label: "Giới thiệu", href: "#ve-quang-phu", id: "ve-quang-phu" },
    { label: "Dự án", href: "#du-an-noi-bat", id: "du-an-noi-bat" },
    { label: "Dịch vụ", href: "#dich-vu", id: "dich-vu" },
    { label: "Liên hệ", href: "#lien-he", id: "lien-he" },
  ];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    scrollToSection(targetId);
  };

  const handleMobileNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollToSection(targetId);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-2.5 sm:py-3.5 transition-all duration-500">
        {/* Seamless backdrop that ONLY appears when scrolled: absolutely zero line or artifact at page top */}
        <div
          className={`absolute inset-0 -z-10 transition-opacity duration-300 ${
            isScrolled
              ? "bg-[#0C0D10]/95 backdrop-blur-md border-b border-white/8 shadow-lg opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        />
        <div className="max-w-[1360px] mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo matching favicon.ico exactly */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
          >
            <img
              src="/images/logo_brand.png"
              alt="Cơ Khí Mỹ Thuật Quảng Phú"
              className="h-9 sm:h-11 w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(211,47,47,0.4)] transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col border-l border-white/20 pl-2 sm:pl-2.5">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.22em] text-red-500 font-extrabold leading-tight">
                CƠ KHÍ MỸ THUẬT
              </span>
              <span className="text-[7.5px] sm:text-[8px] uppercase tracking-wider text-zinc-400 font-normal">
                QUẢNG PHÚ
              </span>
            </div>
          </a>

          {/* Center Navigation Links (5 nút gọn gàng, thanh thoát) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`relative text-[13.5px] tracking-wide transition-colors py-1 cursor-pointer ${
                    isActive
                      ? "text-white font-medium"
                      : "text-zinc-300 hover:text-white font-normal"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#C1121F] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Consultation CTA */}
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#C1121F] hover:bg-[#A30F1A] text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-[#C1121F]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Nhận tư vấn</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-zinc-200 bg-white/10 border border-white/20 cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0C0D10]/95 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-20 px-6 pb-8 animate-fadeIn">
          <div className="flex flex-col">
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold mb-4 pb-2 border-b border-white/10">
              DANH MỤC ĐIỀU HƯỚNG
            </div>
            <nav className="flex flex-col gap-1 text-base">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleMobileNavClick(e, link.id)}
                    className={`flex items-center justify-between font-medium py-3 px-3 rounded-xl transition-all cursor-pointer ${
                      isActive
                        ? "text-white bg-[#C1121F]/20 border border-[#C1121F]/40 font-semibold"
                        : "text-zinc-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#E5B842] shadow-[0_0_8px_rgba(229,184,66,0.8)]" />
                    )}
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3.5 rounded-full text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #C1121F 0%, #9E0B0F 100%)",
                boxShadow: "0 8px 24px rgba(193,18,31,0.45)",
              }}
            >
              <span>Nhận tư vấn & Báo giá</span>
            </button>
            <a
              href="tel:0961031318"
              className="w-full py-3 rounded-full border border-white/20 bg-white/5 text-center text-zinc-200 font-medium text-sm flex items-center justify-center gap-2 hover:bg-white/10"
            >
              <Phone className="w-3.5 h-3.5 text-[#E5B842] fill-[#E5B842]" />
              <span>Hotline: 0961 031 318</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
