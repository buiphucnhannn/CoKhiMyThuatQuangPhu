"use client";

import { Phone, ArrowUp, MapPin } from "lucide-react";
import { scrollToSection } from "@/lib/smoothScroll";

export default function Footer({ onOpenConsultation }) {
  const scrollToTop = () => {
    scrollToSection("hero");
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    scrollToSection(targetId);
  };

  return (
    <footer id="lien-he" className="w-full bg-[#090A0D] text-white border-t border-white/8 relative z-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-6 sm:py-7">
        <div className="reveal-on-scroll reveal-fade-down flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          {/* ============================================================== */}
          {/* CÁNH TẢ: LOGO GP ĐỎ + TÊN CÔNG TY + ĐỊA CHỈ TRỤ SỞ             */}
          {/* ============================================================== */}
          <div className="flex items-center gap-4 sm:gap-5 flex-shrink-0">
            {/* Logo GP Đỏ đặc trưng */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "hero")}
              className="flex-shrink-0 transition-transform hover:scale-105 cursor-pointer"
            >
              <img
                src="/images/logo_brand.png"
                alt="Cơ khí mỹ thuật Quảng Phú"
                className="h-11 sm:h-12 w-auto object-contain drop-shadow-[0_2px_10px_rgba(230,0,0,0.4)]"
              />
            </a>

            {/* Thông tin pháp nhân & Địa chỉ (Bỏ icon, đính kèm link Google Maps) */}
            <div className="flex flex-col text-left">
              <h3 className="font-sans font-bold text-white text-[13px] sm:text-[14px] lg:text-[14.5px] tracking-wide uppercase leading-snug">
                CÔNG TY TNHH CƠ KHÍ MỸ THUẬT QUẢNG PHÚ
              </h3>
              <div className="text-zinc-400 text-[11.5px] sm:text-[12px] mt-1 leading-snug">
                <a
                  href="https://maps.app.goo.gl/3jSzaGFSzLRdym8LA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E5C158] hover:underline transition-colors"
                  title="Xem vị trí trên Google Maps"
                >
                  Thôn Quảng Bố, Xã Quảng Phú, Huyện Lương Tài, Tỉnh Bắc Ninh, Việt Nam
                </a>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* TRUNG TÂM: HOTLINE ZALO + CÁC BIỂU TƯỢNG MẠNG XÃ HỘI          */}
          {/* ============================================================== */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 text-[12.5px] sm:text-[13px] text-zinc-300 w-full lg:w-auto py-2.5 lg:py-0 border-y border-white/8 lg:border-none">
            {/* Hotline Zalo (Đầy đủ số 0 ở đầu) */}
            <a
              href="tel:0961031318"
              className="flex items-center gap-2 text-zinc-200 hover:text-[#E5C158] transition-colors font-medium whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#E5C158] fill-[#E5C158]" />
              <span>0961 031 318 </span>
            </a>

            {/* Vạch ngăn cách */}
            <span className="text-zinc-600">|</span>

            {/* Bộ 5 nút biểu tượng kết nối dạng tròn mini (Phone, Zalo, Google Maps, Facebook, YouTube) */}
            <div className="flex items-center gap-2">
              {/* Nút Gọi điện thoại */}
              <a
                href="tel:0961031318"
                aria-label="Gọi điện thoại"
                className="w-7 h-7 rounded-full bg-zinc-800/80 hover:bg-[#C1121F] border border-white/10 hover:border-[#C1121F] flex items-center justify-center text-zinc-300 hover:text-white transition-all"
                title="Gọi ngay: 0961 031 318"
              >
                <Phone className="w-3 h-3 fill-current" />
              </a>

              {/* Nút Zalo */}
              <a
                href="https://zalo.me/0961031318"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zalo"
                className="w-7 h-7 rounded-full bg-zinc-800/80 hover:bg-[#0068FF] border border-white/10 hover:border-[#0068FF] flex items-center justify-center text-zinc-300 hover:text-white transition-all shadow-sm"
                title="Nhắn Zalo: 0961 031 318"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M12.49 10.2722v-.4496h1.3467v6.3218h-.7704a.576.576 0 01-.5763-.5729l-.0006.0005a3.273 3.273 0 01-1.9372.6321c-1.8138 0-3.2844-1.4697-3.2844-3.2823 0-1.8125 1.4706-3.2822 3.2844-3.2822a3.273 3.273 0 011.9372.6321l.0006.0005zM6.9188 7.7896v.205c0 .3823-.051.6944-.2995 1.0605l-.03.0343c-.0542.0615-.1815.206-.2421.2843L2.024 14.8h4.8948v.7682a.5764.5764 0 01-.5767.5761H0v-.3622c0-.4436.1102-.6414.2495-.8476L4.8582 9.23H.1922V7.7896h6.7266zm8.5513 8.3548a.4805.4805 0 01-.4803-.4798v-7.875h1.4416v8.3548H15.47zM20.6934 9.6C22.52 9.6 24 11.0807 24 12.9044c0 1.8252-1.4801 3.306-3.3066 3.306-1.8264 0-3.3066-1.4808-3.3066-3.306 0-1.8237 1.4802-3.3044 3.3066-3.3044zm-10.1412 5.253c1.0675 0 1.9324-.8645 1.9324-1.9312 0-1.065-.865-1.9295-1.9324-1.9295s-1.9324.8644-1.9324 1.9295c0 1.0667.865 1.9312 1.9324 1.9312zm10.1412-.0033c1.0737 0 1.945-.8707 1.945-1.9453 0-1.073-.8713-1.9436-1.945-1.9436-1.0753 0-1.945.8706-1.945 1.9436 0 1.0746.8697 1.9453 1.945 1.9453z" />
                </svg>
              </a>

              {/* Nút Google Maps chỉ đường */}
              <a
                href="https://maps.app.goo.gl/3jSzaGFSzLRdym8LA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
                className="w-7 h-7 rounded-full bg-zinc-800/80 hover:bg-[#EA4335] border border-white/10 hover:border-[#EA4335] flex items-center justify-center text-zinc-300 hover:text-white transition-all shadow-sm"
                title="Vị trí trên Google Maps"
              >
                <MapPin className="w-3.5 h-3.5" />
              </a>

              {/* Nút Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-7 h-7 rounded-full bg-zinc-800/80 hover:bg-[#1877F2] border border-white/10 hover:border-[#1877F2] flex items-center justify-center text-zinc-300 hover:text-white transition-all text-xs font-bold font-serif"
                title="Facebook"
              >
                f
              </a>

              {/* Nút Youtube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Youtube"
                className="w-7 h-7 rounded-full bg-zinc-800/80 hover:bg-[#FF0000] border border-white/10 hover:border-[#FF0000] flex items-center justify-center text-zinc-300 hover:text-white transition-all"
                title="Youtube"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ============================================================== */}
          {/* CÁNH HỮU: DANH SÁCH MENU ĐỒNG BỘ THEO THỨ TỰ TRÊN TRANG + NÚT LÊN ĐẦU */}
          {/* ============================================================== */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center lg:justify-end w-full lg:w-auto">
            <nav className="flex items-center gap-4 sm:gap-6 text-[12px] sm:text-[13px] text-zinc-400 font-medium flex-wrap justify-center">
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, "hero")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Trang chủ
              </a>
              <a
                href="#ve-quang-phu"
                onClick={(e) => handleNavClick(e, "ve-quang-phu")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Giới thiệu
              </a>
              <a
                href="#du-an-noi-bat"
                onClick={(e) => handleNavClick(e, "du-an-noi-bat")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Dự án
              </a>
              <a
                href="#dich-vu"
                onClick={(e) => handleNavClick(e, "dich-vu")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Dịch vụ
              </a>
              <a
                href="#lien-he"
                onClick={(e) => handleNavClick(e, "lien-he")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Liên hệ
              </a>
            </nav>

            {/* Nút Cuộn lên đầu trang hình tròn thanh lịch */}
            <button
              onClick={scrollToTop}
              aria-label="Cuộn lên đầu trang"
              className="w-8 h-8 rounded-full border border-zinc-700 hover:border-[#D4AF37] bg-zinc-900/80 hover:bg-[#D4AF37]/20 flex items-center justify-center text-zinc-400 hover:text-[#D4AF37] transition-all transform hover:-translate-y-0.5 shrink-0"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
