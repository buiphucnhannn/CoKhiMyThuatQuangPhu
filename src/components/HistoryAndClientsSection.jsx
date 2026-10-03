"use client";

import { ArrowRight, Building2, Calendar, Landmark, Users, Briefcase } from "lucide-react";
import { WaveLightToDark } from "./SectionDividers";

export default function HistoryAndClientsSection({ onOpenConsultation }) {
  const milestones = [
    { year: "1930", label: "Thành lập Đảng" },
    { year: "1945", label: "Quốc khánh 2/9" },
    { year: "1954", label: "Điện Biên Phủ" },
    { year: "2024 – 2025", label: "A80", active: true },
  ];

  const clients = [
    {
      icon: Building2,
      title: "Cơ quan Nhà nước",
      desc: "Các bộ ban ngành, UBND tỉnh/thành phố.",
    },
    {
      icon: Calendar,
      title: "Ban tổ chức sự kiện",
      desc: "Đại lễ kỷ niệm cấp quốc gia và địa phương.",
    },
    {
      icon: Landmark,
      title: "Ban quản lý di tích",
      desc: "Đền chùa, khu tưởng niệm danh nhân, lịch sử.",
    },
    {
      icon: Users,
      title: "Gia đình, dòng họ",
      desc: "Đúc tượng chân dung thờ ông bà cha mẹ truyền đời.",
    },
    {
      icon: Briefcase,
      title: "Doanh nghiệp, tập đoàn",
      desc: "Quà tặng cơ khí mỹ thuật độc bản và biểu trưng.",
    },
  ];

  return (
    <section id="dai-le" className="relative bg-[#121316] text-white overflow-hidden pb-16">
      {/* Curved transition from preceding light section */}
      <WaveLightToDark />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Card: Mỗi đại lễ một dấu ấn */}
          <div className="lg:col-span-6 rounded-3xl bg-[#17181D] border border-white/10 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            {/* Header Text */}
            <div className="mb-6 z-10">
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                MỖI ĐẠI LỄ <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-white">
                  MỘT DẤU ẤN
                </span>
              </h3>
              <p className="mt-2 text-zinc-300 text-xs sm:text-sm font-light">
                Đồng hành cùng những sự kiện lịch sử của dân tộc.
              </p>
              <button
                onClick={onOpenConsultation}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold backdrop-blur transition-all"
              >
                <span>Khám phá hành trình</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Parade Image */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden my-4 bg-black/60 border border-white/10">
              <img
                src="/images/1790914174255_3763498134712611457_3763498134712611457_0f99173e49b66b0cdab3a7e22a6b3eba.jpg"
                alt="Đại lễ Ba Đình diễu binh diễu hành"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            </div>

            {/* Timeline Track at bottom */}
            <div className="pt-4 border-t border-white/10">
              <div className="relative flex items-center justify-between">
                {/* Horizontal line */}
                <div className="absolute left-2 right-2 top-2 h-[2px] bg-white/15" />

                {milestones.map((m, idx) => (
                  <div key={idx} className="relative z-10 flex flex-col items-center">
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center ${
                        m.active
                          ? "bg-red-500 ring-4 ring-red-500/30 shadow-[0_0_12px_rgba(239,68,68,0.8)]"
                          : "bg-zinc-600"
                      }`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                    <span
                      className={`text-[11px] font-mono mt-2 ${
                        m.active ? "text-amber-300 font-bold" : "text-zinc-400"
                      }`}
                    >
                      {m.year}
                    </span>
                    {m.active && (
                      <span className="text-xs font-bold text-white tracking-wider">
                        {m.label}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card: Khách hàng của chúng tôi */}
          <div className="lg:col-span-6 rounded-3xl bg-gradient-to-br from-[#801010] via-[#6B0D0D] to-[#4A0808] border border-red-500/30 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Background subtle watermark */}
            <div className="absolute right-[-60px] bottom-[-60px] w-64 h-64 opacity-10 pointer-events-none">
              <img
                src="/images/generated/trong_dong.jpg"
                alt="Watermark"
                className="w-full h-full object-contain filter invert"
              />
            </div>

            {/* Header Text */}
            <div className="mb-6 z-10">
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                KHÁCH HÀNG <br />
                CỦA CHÚNG TÔI
              </h3>
              <p className="mt-2 text-red-100/90 text-xs sm:text-sm font-light">
                Đồng hành cùng các cơ quan, tổ chức và doanh nghiệp trên toàn quốc.
              </p>
            </div>

            {/* 5 Customer Segments in Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 my-auto z-10">
              {clients.map((c, idx) => {
                const Icon = c.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center p-3 rounded-xl bg-black/20 hover:bg-black/35 border border-white/10 transition-all transform hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-amber-200 mb-2">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <span className="text-xs font-semibold text-white leading-tight">
                      {c.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Bottom Guarantee Note */}
            <div className="pt-6 border-t border-red-400/20 flex items-center justify-between text-xs text-red-200/90 z-10">
              <span>Cam kết chất lượng chuẩn thần thái & đúng tiến độ</span>
              <button
                onClick={onOpenConsultation}
                className="font-bold text-white underline hover:text-amber-200 transition-colors"
              >
                Gửi yêu cầu ngay →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
