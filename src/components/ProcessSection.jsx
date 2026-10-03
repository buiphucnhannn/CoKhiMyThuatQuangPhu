"use client";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Tư vấn",
      subtitle: "& tiếp nhận yêu cầu",
      image: "/images/generated/step_1_consultation.jpg",
    },
    {
      num: "02",
      title: "Thiết kế",
      subtitle: "3D, mô hình",
      image: "/images/generated/step_2_3d_design.jpg",
    },
    {
      num: "03",
      title: "Chế tác",
      subtitle: "cơ khí mỹ thuật",
      image: "/images/generated/step_3_welding.jpg",
    },
    {
      num: "04",
      title: "Hoàn thiện",
      subtitle: "& kiểm tra chất lượng",
      image: "/images/generated/step_4_finishing.jpg",
    },
    {
      num: "05",
      title: "Bàn giao",
      subtitle: "tận nơi",
      image: "/images/generated/step_5_delivery.jpg",
    },
  ];

  return (
    <section
      id="quy-trinh"
      className="relative w-full bg-[#FAF7F0] text-zinc-900 pt-0 pb-0 overflow-hidden select-none z-10 -mt-[1px]"
    >

      {/* NỀN TRANH THỦY MẶC NON NƯỚC MỜ ẢO TRÊN GIẤY KEM CỔ ĐIỂN — phủ cả divider để dưới cong không còn dải trắng mất nền */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25 mix-blend-multiply">
        <img
          src="/images/generated/projects_ink_wash_bg.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-bottom filter saturate-90 contrast-95"
        />
      </div>

      {/* VÒM CONG TRÊN NỐI TỪ DỊCH VỤ (TỐI) SANG QUY TRÌNH (SÁNG) — phần trên cong là nền tối, phần dưới cong trong suốt để lộ nền giấy + vân thủy mặc của Quy Trình */}
      <div className="w-full pointer-events-none leading-none z-10 relative -mb-[1px]">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[52px] sm:h-[68px] lg:h-[80px] block"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="processTopGoldTrim" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8A5E10" stopOpacity="0.55" />
              <stop offset="22%" stopColor="#D4AF37" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#FFF4D0" stopOpacity="1" />
              <stop offset="78%" stopColor="#D4AF37" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#8A5E10" stopOpacity="0.55" />
            </linearGradient>
            <filter id="processTopWaveGlow" x="-10%" y="-60%" width="120%" height="220%">
              <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#C9A227" floodOpacity="0.55" />
            </filter>

            {/* Dải chuyển sắc sơn mài đồng đúc nối liền từ đáy Dịch Vụ (#140904) xuống sống vàng */}
            <linearGradient id="servicesBottomBronzeBlend" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#140904" />
              <stop offset="40%" stopColor="#1E0D06" />
              <stop offset="75%" stopColor="#2E1409" />
              <stop offset="100%" stopColor="#441E0F" />
            </linearGradient>

            {/* Quầng sáng hổ phách ấm lan tỏa ngay trên dải uốn lượn đáy */}
            <radialGradient id="bottomCurveWarmGlow" cx="50%" cy="65%" r="60%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#B57B28" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#140904" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Khối phía trên đường cong — nối liền tuyệt đối từ đáy Dịch Vụ (#140904) xuống với màu đồng ấm áp */}
          <path
            d="M 0 0 H 1440 V 34 C 1300 26, 1120 31, 920 44 C 620 62, 300 58, 0 34 Z"
            fill="url(#servicesBottomBronzeBlend)"
          />

          {/* Lớp ánh kim hổ phách tỏa nhẹ ngay trên dải uốn lượn đáy */}
          <path
            d="M 0 0 H 1440 V 34 C 1300 26, 1120 31, 920 44 C 620 62, 300 58, 0 34 Z"
            fill="url(#bottomCurveWarmGlow)"
          />

          {/* Sợi chỉ vàng cong mềm full-width */}
          <path
            d="M 0 34 C 300 58, 620 62, 920 44 C 1120 31, 1300 26, 1440 34"
            stroke="url(#processTopGoldTrim)"
            strokeWidth="3.2"
            strokeLinecap="round"
            filter="url(#processTopWaveGlow)"
          />

          {/* Sống sáng kim cương trắng mảnh trên viền vàng */}
          <path
            d="M 0 34 C 300 58, 620 62, 920 44 C 1120 31, 1300 26, 1440 34"
            stroke="#FFFFFF"
            strokeWidth="1.1"
            strokeLinecap="round"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* ============================================================== */}
      {/* NỘI DUNG CHÍNH SECTION QUY TRÌNH                               */}
      {/* ============================================================== */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 relative z-20">
        {/* HÀNG TIÊU ĐỀ: BÊN TRÁI TIÊU ĐỀ, BÊN PHẢI ĐOẠN MÔ TẢ (CĂN NGANG) */}
        <div className="reveal-on-scroll reveal-fade-down flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Cánh tả: Tag & Tiêu đề 2 dòng sang trọng */}
          <div className="flex flex-col items-start max-w-xl">
            {/* Tag nhãn đỏ thắm */}
            <span className="text-[#B5181C] text-[11px] sm:text-xs font-extrabold tracking-[0.24em] uppercase mb-1.5 sm:mb-2">
              QUY TRÌNH CHẾ TÁC
            </span>

            {/* Tiêu đề chính */}
            <h2 className="font-serif text-[#22130F] font-bold tracking-tight leading-[1.12] text-[28px] sm:text-[34px] lg:text-[40px]">
              <span className="block">Từ ý tưởng</span>
              <span className="block mt-0.5 sm:mt-1">đến tác phẩm hoàn chỉnh.</span>
            </h2>
          </div>

          {/* Cánh hữu: Đoạn văn mô tả */}
          <div className="max-w-md lg:text-right">
            <p className="text-[12.5px] sm:text-[13.5px] text-zinc-700 leading-[1.65] font-normal text-pretty">
              Mỗi công trình là sự kết hợp giữa kinh nghiệm, kỹ thuật và tâm huyết của đội ngũ nghệ&nbsp;nhân.
            </p>
          </div>
        </div>

        {/* ============================================================== */}
        {/* TIMELINE 5 BƯỚC NỐI LIỀN MẠCH — HÌNH ẢNH RÕ NÉT ĐỘ PHÂN GIẢI CAO */}
        {/* ============================================================== */}
        <div className="relative pt-2 sm:pt-4">
          {/* Sợi chỉ vàng kim loại kết nối ngang qua các bước (Desktop/Tablet) */}
          <div className="hidden sm:block absolute top-[18px] sm:top-[20px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37] to-[#D4AF37]/20 z-0" />

          {/* Lưới 5 bước */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-5 sm:gap-3.5 lg:gap-5 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`reveal-on-scroll reveal-step-cascade reveal-delay-${idx + 1} group flex flex-col items-center text-center`}
              >
                {/* Nút huy hiệu tròn đánh số bước 01 - 05 */}
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-serif font-bold text-white text-[13px] sm:text-[14px] shadow-[0_3px_10px_rgba(0,0,0,0.18)] border-2 border-[#FAF7F0] transition-all duration-300 group-hover:scale-115 group-hover:shadow-[0_0_16px_rgba(212,175,55,0.7)] mb-3"
                  style={{
                    background: "linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #9E6D14 100%)",
                  }}
                >
                  {step.num}
                </div>

                {/* Thẻ ảnh bo tròn dạng capsule (con nhộng) sắc nét độ phân giải cao */}
                <div
                  className="w-full max-w-[260px] sm:max-w-none aspect-[16/10] max-h-[120px] sm:max-h-[135px] lg:max-h-[145px] rounded-[20px] sm:rounded-[24px] overflow-hidden bg-white shadow-[0_4px_16px_rgba(0,0,0,0.14)] border border-[#D4AF37]/40 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.22),0_0_16px_rgba(212,175,55,0.35)] group-hover:border-[#D4AF37]"
                >
                  <img
                    src={step.image}
                    alt={`${step.title} ${step.subtitle}`}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Tiêu đề & phụ đề bước thực hiện */}
                <div className="mt-3 flex flex-col items-center">
                  <h3 className="font-sans font-bold text-[#1A1A1A] text-[14px] sm:text-[15px] leading-tight group-hover:text-[#B5181C] transition-colors">
                    {step.title}
                  </h3>
                  <span className="text-[11.5px] sm:text-[12px] text-zinc-600 font-normal mt-0.5 leading-snug">
                    {step.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* VÒM CONG DƯỚI: TRONG SUỐT PHÍA TRÊN (HÒA 100% VỚI NỀN QUY TRÌNH) */}
      {/* PHÍA DƯỚI PHỦ NỀN ĐEN BÊN TRÁI & ẢNH ĐẠI LỄ BÊN PHẢI (KHÔNG VỆT ĐEN) */}
      {/* ============================================================== */}
      <div className="w-full pointer-events-none leading-none z-20 relative -mb-[1px]">
        <svg
          viewBox="0 0 1440 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[45px] sm:h-[58px] lg:h-[70px] block"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="processBottomGoldTrim" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8A5E10" stopOpacity="0.55" />
              <stop offset="22%" stopColor="#D4AF37" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#FFF4D0" stopOpacity="1" />
              <stop offset="78%" stopColor="#D4AF37" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#8A5E10" stopOpacity="0.55" />
            </linearGradient>

            <filter id="processBottomWaveGlow" x="-10%" y="-60%" width="120%" height="220%">
              <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#C9A227" floodOpacity="0.5" />
            </filter>
          </defs>

          {/* Vùng dưới đường cong chuyển tiếp liền mạch tuyệt đối vào Khách Hàng (#111217) */}
          <path
            d="M 0 28 C 300 50, 620 54, 920 38 C 1120 26, 1300 22, 1440 28 L 1440 70 L 0 70 Z"
            fill="#111217"
          />

          {/* Sợi chỉ vàng uốn lượn sắc sảo */}
          <path
            d="M 0 28 C 300 50, 620 54, 920 38 C 1120 26, 1300 22, 1440 28"
            stroke="url(#processBottomGoldTrim)"
            strokeWidth="3.2"
            strokeLinecap="round"
            filter="url(#processBottomWaveGlow)"
          />

          {/* Sống sáng kim cương trắng */}
          <path
            d="M 0 29 C 300 51, 620 55, 920 39 C 1120 27, 1300 23, 1440 29"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.45"
          />
        </svg>
      </div>
    </section>
  );
}
