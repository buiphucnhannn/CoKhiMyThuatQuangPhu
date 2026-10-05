"use client";

import { useState, useEffect, useRef } from "react";
import { X, ArrowRight, ChevronLeft, ChevronRight, Phone } from "lucide-react";

export default function ProjectLightboxModal({
  project,
  items = [],
  currentIndex = 0,
  onClose,
  onNavigate,
}) {
  // Use either the items array with currentIndex, or fallback to single project object
  const activeList = items && items.length > 0 ? items : project ? [project] : [];
  const validIndex = Math.max(0, Math.min(currentIndex, activeList.length - 1));
  const currentItem = activeList[validIndex] || null;

  // Touchpad wheel throttle
  const wheelTimeoutRef = useRef(0);

  // Mouse & Touch drag state
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const currentDragRef = useRef(0);

  const handlePrev = () => {
    if (!activeList.length) return;
    const nextIdx = (validIndex - 1 + activeList.length) % activeList.length;
    onNavigate?.(nextIdx);
  };

  const handleNext = () => {
    if (!activeList.length) return;
    const nextIdx = (validIndex + 1) % activeList.length;
    onNavigate?.(nextIdx);
  };

  // Keyboard navigation (<> arrow keys and Escape)
  useEffect(() => {
    if (!currentItem) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [validIndex, activeList]);

  // Khóa thanh cuộn trang web bên ngoài khi mở lightbox xem chi tiết
  useEffect(() => {
    if (currentItem) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [currentItem]);

  if (!currentItem) return null;

  // Touchpad horizontal swipe
  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > 25 && Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      const now = Date.now();
      if (now - wheelTimeoutRef.current > 350) {
        wheelTimeoutRef.current = now;
        if (e.deltaX > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    // Only drag with primary mouse button
    if (e.button !== 0) return;
    setIsDragging(true);
    startXRef.current = e.clientX;
    currentDragRef.current = 0;
    setDragOffset(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - startXRef.current;
    currentDragRef.current = diff;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 55;
    if (currentDragRef.current < -threshold) {
      handleNext();
    } else if (currentDragRef.current > threshold) {
      handlePrev();
    }
    setDragOffset(0);
    currentDragRef.current = 0;
  };

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    if (!e.touches?.[0]) return;
    setIsDragging(true);
    startXRef.current = e.touches[0].clientX;
    currentDragRef.current = 0;
    setDragOffset(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !e.touches?.[0]) return;
    const diff = e.touches[0].clientX - startXRef.current;
    currentDragRef.current = diff;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  return (
    <div
      onClick={onClose}
      onWheel={handleWheel}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-md animate-fadeIn select-none"
    >
      {/* Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#16171B] border border-white/20 rounded-none overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col"
      >
        {/* Header bar: Counter & Close button */}
        <div className="absolute top-4 inset-x-4 z-40 flex items-center justify-between pointer-events-none">
          {activeList.length > 1 ? (
            <div className="px-3.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[12px] sm:text-[13px] text-[#FDE8B5] font-mono shadow-lg pointer-events-auto">
              {validIndex + 1} / {activeList.length}
            </div>
          ) : (
            <div />
          )}

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-black/70 hover:bg-black/95 text-white flex items-center justify-center border border-white/20 hover:border-white/50 transition-all hover:scale-105 pointer-events-auto cursor-pointer shadow-lg"
            aria-label="Đóng chi tiết"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nút lướt sang trái (<) */}
        {activeList.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-5 top-[38%] -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/65 hover:bg-black/95 text-white flex items-center justify-center border border-white/25 hover:border-[#D4AF37] transition-all hover:scale-110 shadow-2xl cursor-pointer"
            aria-label="Xem mục trước"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </button>
        )}

        {/* Nút lướt sang phải (>) */}
        {activeList.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-5 top-[38%] -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/65 hover:bg-black/95 text-white flex items-center justify-center border border-white/25 hover:border-[#D4AF37] transition-all hover:scale-110 shadow-2xl cursor-pointer"
            aria-label="Xem mục tiếp theo"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </button>
        )}

        {/* Big Image Viewer with live drag / swipe gesture support */}
        <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative aspect-[16/11] sm:aspect-[16/9] w-full bg-black overflow-hidden cursor-grab active:cursor-grabbing flex items-center justify-center"
        >
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              transform: `translateX(${dragOffset * 0.45}px)`,
              transition: isDragging ? "none" : "transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
          >
            <img
              src={currentItem.image}
              alt={currentItem.title}
              draggable={false}
              className="w-full h-full object-contain pointer-events-none"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#16171B] via-[#16171B]/50 to-transparent pointer-events-none" />
        </div>

        {/* Details Section — Bỏ hoàn toàn badge bo tròn màu đỏ theo yêu cầu */}
        <div className="p-4 sm:p-8 bg-[#16171B] flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 border-t border-white/8">
          <div className="flex-1">
            {currentItem.subtitle && (
              <span className="text-[#D4AF37] text-xs font-semibold tracking-wider uppercase mb-1.5 block">
                {currentItem.subtitle}
              </span>
            )}
            <h3 className="font-serif text-lg sm:text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {currentItem.title}
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm mt-1.5 sm:mt-2 leading-relaxed max-w-2xl">
              {currentItem.desc ||
                currentItem.description ||
                "Công trình cơ khí mỹ thuật tinh hoa do Công ty TNHH Cơ Khí Mỹ Thuật Quảng Phú trực tiếp thiết kế, chế tác và hoàn thiện đúng tiến độ."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full sm:w-auto">
            <a
              href="tel:0961031318"
              className="w-full sm:w-auto px-6 py-3 rounded-none text-white font-bold text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              style={{
                background: "linear-gradient(135deg, #B5181C 0%, #850E12 100%)",
                boxShadow: "0 6px 20px rgba(181,24,28,0.45)",
              }}
            >
              <Phone className="w-4 h-4 fill-current text-[#FFE8A3]" />
              <span>Hotline: 0961 031 318</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
