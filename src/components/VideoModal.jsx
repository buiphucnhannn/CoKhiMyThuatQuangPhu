"use client";

import { useEffect } from "react";
import { X, Play, Volume2, ShieldCheck } from "lucide-react";

export default function VideoModal({ isOpen, onClose }) {
  // Khóa thanh cuộn trang web bên ngoài khi video mở
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Phím Escape để đóng nhanh
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-fadeIn cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#141519] border border-white/20 rounded-none overflow-hidden shadow-2xl cursor-default max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-colors"
          aria-label="Đóng video"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Frame */}
        <div className="relative aspect-video w-full bg-black overflow-hidden group">
          <img
            src="/images/1790914174280_3763498134712611457_3763498134712611457_f4251df77b0e623de3471c6cc5f761b7.jpg"
            alt="Quảng Phú qua những đại lễ"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
            {/* Pulsing Play Button */}
            <div className="w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center shadow-[0_0_40px_rgba(211,47,47,0.7)] transform group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
            <span className="text-white text-sm font-semibold tracking-wider uppercase mt-4 bg-black/50 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur">
              Phim tư liệu: Cơ Khí Mỹ Thuật Quảng Phú (02:15)
            </span>
          </div>

          {/* Bottom video controls simulation */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/60 to-transparent flex items-center justify-between text-xs text-white">
            <div className="flex items-center gap-3">
              <span className="font-mono">00:45 / 02:15</span>
              <Volume2 className="w-4 h-4 text-zinc-300" />
            </div>
            <div className="flex items-center gap-2 text-zinc-300 text-[11px]">
              <ShieldCheck className="w-4 h-4 text-[#C1121F]" />
              <span>Chất lượng hình ảnh 4K HDR</span>
            </div>
          </div>
        </div>

        {/* Video Info Footer */}
        <div className="p-4 sm:p-6 bg-[#18191E] flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <div>
            <h4 className="font-serif text-base sm:text-lg font-bold text-white">
              Hành Trình Chế Tác Xe Nghi Trượng Cho Các Dịp Đại Lễ Cấp Quốc Gia
            </h4>
            <p className="text-xs text-zinc-400 mt-1 text-justify sm:text-left">
              Ghi lại quá trình thiết kế kết cấu, gò đúc chi tiết đồng nghệ thuật và nghiệm thu trực tiếp trên quảng trường Ba Đình.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs font-bold flex-shrink-0 transition-colors cursor-pointer text-center"
          >
            Đóng video
          </button>
        </div>
      </div>
    </div>
  );
}
