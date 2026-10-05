"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  Phone,
  ArrowUp,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { SITE_INFO } from "@/lib/constants";
import { scrollToSection } from "@/lib/smoothScroll";

function FooterHeading({ children }) {
  return (
    <div>
      <h4 className="font-sans font-bold text-[12px] tracking-[0.18em] uppercase text-white">
        {children}
      </h4>
      <div className="mt-2.5 h-[2px] w-8 bg-[#C1121F]" />
    </div>
  );
}

export default function Footer({ onOpenConsultation }) {
  const pathname = usePathname();
  const router = useRouter();

  const scrollToTop = () => {
    if (pathname === "/") {
      scrollToSection("hero");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (targetId === "ve-chung-toi") {
      if (pathname === "/ve-chung-toi" || pathname === "/gioithieu") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/ve-chung-toi");
      }
      return;
    }
    if (targetId === "du-an") {
      if (pathname === "/du-an" || pathname === "/duan") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/du-an");
      }
      return;
    }
    if (targetId === "dich-vu") {
      if (pathname === "/dich-vu" || pathname === "/dichvu") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/dich-vu");
      }
      return;
    }
    if (targetId === "tin-tuc") {
      if (pathname === "/tin-tuc" || pathname === "/tintuc") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/tin-tuc");
      }
      return;
    }
    if (pathname === "/") {
      scrollToSection(targetId);
    } else {
      router.push(`/#${targetId}`);
    }
  };

  const navItems = [
    { label: "Trang chủ", id: "hero" },
    { label: "Về chúng tôi", id: "ve-chung-toi" },
    { label: "Dự án", id: "du-an" },
    { label: "Dịch vụ", id: "dich-vu" },
    { label: "Tin tức", id: "tin-tuc" },
    { label: "Liên hệ", id: "lien-he" },
  ];

  return (
    <footer id="lien-he" className="w-full bg-[#0B0C0E] text-white relative z-20">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C1121F]/70 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 lg:pt-9 pb-4">
        {/* 3 CỘT: brand | khám phá | liên hệ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-8 xl:gap-20">
          {/* ----- CỘT 1: THƯƠNG HIỆU (mẫu header) ----- */}
          <div className="xl:col-span-5">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "hero")}
              className="flex items-center gap-3 cursor-pointer group w-fit"
            >
              <img
                src="/images/logo_brand.png"
                alt="Cơ Khí Mỹ Thuật Quảng Phú"
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className="flex flex-col border-l border-white/20 pl-3">
                <span className="text-[10px] uppercase tracking-[0.22em] text-red-500 font-extrabold leading-tight">
                  CƠ KHÍ MỸ THUẬT
                </span>
                <span className="text-[8px] uppercase tracking-wider text-zinc-400 font-normal mt-0.5">
                  QUẢNG PHÚ
                </span>
              </span>
            </a>

            <h3 className="mt-3.5 font-sans font-bold text-white text-[13px] leading-snug uppercase">
              {SITE_INFO.legalName}
            </h3>
            <p className="mt-1 text-[11px] tracking-[0.14em] uppercase text-red-500 font-semibold">
              Hoạt động từ {SITE_INFO.establishedDate}
            </p>

            <p className="mt-3.5 text-zinc-400 text-[12.5px] leading-[1.75] max-w-[320px]">
              {SITE_INFO.slogan}. Xưởng đúc trực tiếp – báo giá minh bạch –
              bảo hành dài hạn.
            </p>
          </div>

          {/* ----- CỘT 2: KHÁM PHÁ ----- */}
          <div className="xl:col-span-3">
            <FooterHeading>Khám phá</FooterHeading>
            <nav className="mt-4 border-t border-white/10">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.id === "lien-he" ? "#lien-he" : `#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="group flex items-center justify-between py-[7px] border-b border-white/10 text-[12.5px] text-zinc-300 hover:text-white transition-colors cursor-pointer"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover:text-red-500 transition-all" />
                </a>
              ))}
            </nav>
          </div>

          {/* ----- CỘT 3: LIÊN HỆ ----- */}
          <div className="xl:col-span-4">
            <FooterHeading>Liên hệ trực tiếp</FooterHeading>
            <div className="mt-4 border-t border-white/10 pt-3.5">
              <p className="text-[10.5px] uppercase tracking-[0.14em] text-zinc-500 font-semibold">
                Hotline / Zalo
              </p>
              <a
                href={SITE_INFO.phoneHref}
                className="mt-1 flex items-center gap-2 text-white hover:text-red-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-red-500" />
                <span className="text-[21px] font-extrabold tracking-wide leading-none">
                  {SITE_INFO.phone}
                </span>
              </a>
              <a
                href={SITE_INFO.landlineHref}
                className="mt-2 block text-[12.5px] text-zinc-300 hover:text-white transition-colors"
              >
                Máy bàn:{" "}
                <span className="font-semibold text-zinc-100">
                  {SITE_INFO.landline}
                </span>
              </a>
            </div>

            <p className="mt-3 flex items-center gap-2 text-[12.5px] text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>{SITE_INFO.workingHours}</span>
            </p>

            <div className="mt-3.5 grid grid-cols-2 gap-2">
              <a
                href={SITE_INFO.phoneHref}
                className="h-9 bg-[#C1121F] hover:bg-[#A30F1A] text-white text-[12.5px] font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                Gọi ngay
              </a>
              {onOpenConsultation ? (
                <button
                  onClick={onOpenConsultation}
                  className="h-9 border border-white/15 hover:border-[#C1121F]/60 text-[12.5px] font-semibold text-zinc-200 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  Tư vấn
                </button>
              ) : (
                <a
                  href={SITE_INFO.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 bg-[#0068FF] hover:bg-[#0052CC] border border-[#0068FF] hover:border-[#0052CC] text-[12.5px] font-semibold text-white flex items-center justify-center transition-colors"
                >
                  Nhắn Zalo
                </a>
              )}
            </div>
          </div>
        </div>

        {/* DẢI ĐỊA CHỈ */}
        <div className="mt-7 border-t border-white/10 pt-3.5 flex flex-col lg:flex-row lg:items-center gap-x-6 gap-y-1.5 text-[12px] text-zinc-400">
          <span className="flex items-start gap-2 leading-relaxed">
            <MapPin className="w-3.5 h-3.5 mt-0.5 text-red-500 shrink-0" />
            <span>
              {SITE_INFO.taxAddress}
            </span>
          </span>
          <a
            href={SITE_INFO.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-red-500 hover:text-red-400 transition-colors shrink-0 lg:ml-auto"
          >
            Chỉ đường
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* THANH DƯỚI */}
        <div className="mt-3.5 pt-3.5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11.5px] text-zinc-500">
          <p className="text-center sm:text-left leading-relaxed">
            © {new Date().getFullYear()} {SITE_INFO.legalName}
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 font-semibold text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            Về đầu trang
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
