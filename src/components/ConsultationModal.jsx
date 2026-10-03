"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle2, Phone, Send } from "lucide-react";

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Khối xe nghi trượng",
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Khóa thanh cuộn trang web bên ngoài khi modal mở
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      service: "Khối xe nghi trượng",
      note: "",
    });
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[480px] bg-[#18191E] border border-white/15 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-2xl overflow-hidden my-auto"
      >
        {/* Decorative corner light */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/15 rounded-full blur-[60px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Đóng"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            {/* Header: Logo + Tên thương hiệu đồng bộ góc trái Header, căn giữa trang nhã */}
            <div className="mb-4 sm:mb-5 text-center flex flex-col items-center">
              <div className="flex items-center justify-center gap-2.5 mb-2.5">
                <img
                  src="/images/logo_brand.png"
                  alt="Cơ Khí Mỹ Thuật Quảng Phú"
                  className="h-8 sm:h-9 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(211,47,47,0.4)]"
                />
                <div className="flex flex-col border-l border-white/20 pl-2.5 text-left">
                  <span className="text-[9.5px] uppercase tracking-[0.22em] text-red-500 font-extrabold leading-tight">
                    CƠ KHÍ MỸ THUẬT
                  </span>
                  <span className="text-[8px] uppercase tracking-wider text-zinc-400 font-normal">
                    QUẢNG PHÚ
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight text-center">
                Nhận Tư Vấn <span className="font-sans font-semibold text-white px-0.5">&</span> Báo Giá
              </h3>
              <p className="text-zinc-400 text-xs sm:text-[13px] mt-1 leading-relaxed text-center max-w-sm mx-auto">
                Để lại thông tin, nghệ nhân Quảng Phú sẽ liên hệ tư vấn kỹ thuật và báo giá tối ưu trong 24 giờ.
              </p>
            </div>

            {/* Form: Chiều cao gọn gàng, vừa vặn màn hình */}
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
              <div>
                <label className="block text-[11.5px] sm:text-xs font-medium text-zinc-300 mb-1">
                  Họ và tên quý khách <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Nguyễn Văn A"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11.5px] sm:text-xs font-medium text-zinc-300 mb-1">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ví dụ: 0987 654 321"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11.5px] sm:text-xs font-medium text-zinc-300 mb-1">
                  Dịch vụ / Hạng mục quan tâm
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#202228] border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-red-500 transition-colors cursor-pointer"
                >
                  <option value="Khối xe nghi trượng (A05 – A80)">Khối xe nghi trượng (A05 – A80)</option>
                  <option value="Tượng Chủ tịch Hồ Chí Minh">Tượng Chủ tịch Hồ Chí Minh</option>
                  <option value="Tượng chân dung thờ (Ông bà, cha mẹ)">Tượng chân dung thờ (Ông bà, cha mẹ)</option>
                  <option value="Công trình tượng đài mỹ thuật">Công trình tượng đài mỹ thuật</option>
                  <option value="Tượng quà tặng & Mỹ thuật trang trí">Tượng quà tặng & Mỹ thuật trang trí</option>
                </select>
              </div>

              <div>
                <label className="block text-[11.5px] sm:text-xs font-medium text-zinc-300 mb-1">
                  Ghi chú hoặc yêu cầu kích thước / chất liệu
                </label>
                <textarea
                  rows={2}
                  placeholder="Kích thước dự kiến, thời gian cần bàn giao hoặc địa điểm thi công..."
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-white/15 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-red-500 transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs sm:text-sm shadow-xl shadow-red-950/60 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer mt-1"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Đang gửi yêu cầu...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Gửi yêu cầu tư vấn ngay</span>
                  </>
                )}
              </button>
            </form>

            {/* Quick Hotline direct call */}
            <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between text-[11.5px] sm:text-xs text-zinc-400">
              <span>Hỗ trợ nhanh 24/7:</span>
              <a
                href="tel:0961031318"
                className="inline-flex items-center gap-1.5 text-red-400 font-bold hover:text-red-300"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>0961 031 318 (Đỗ Hà Phương)</span>
              </a>
            </div>
          </div>
        ) : (
          /* Success confirmation state */
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 flex items-center justify-center mb-5 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Gửi Yêu Cầu Thành Công!
            </h3>
            <p className="mt-2 text-zinc-300 text-sm leading-relaxed max-w-sm">
              Cảm ơn quý khách <strong className="text-white">{formData.name}</strong>. Nghệ nhân Quảng Phú đã tiếp nhận thông tin và sẽ liên hệ qua số điện thoại <strong className="text-red-400">{formData.phone}</strong> sớm nhất.
            </p>
            <button
              onClick={handleReset}
              className="mt-6 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all"
            >
              Hoàn tất & Đóng
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
