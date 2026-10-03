"use client";

/**
 * Seamless SVG section dividers with organic, flowing curves.
 * Each divider matches exact adjacent section background colors.
 * Uses dual-layered curves for a more natural, premium transition.
 */

// Hero → About (dark photo → ivory #FAF7F0)
// Đặt STATIC ở đầu About (nằm hoàn toàn dưới fold) nên landing vẫn full hero 100svh.
// Sóng màu tối (tông đáy hero) lượn xuống nền ngà — cong nhẹ, không thẳng ngang.
export function HeroBottomWave({ className = "" }) {
  return (
    <div className={`w-full overflow-hidden leading-none block pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-8 sm:h-10 block"
        preserveAspectRatio="none"
      >
        {/* Lớp bóng mờ tạo chiều sâu */}
        <path
          d="M0 0H1440V22C1200 48 900 12 620 30C420 42 200 40 0 26V0Z"
          fill="#100E0C"
          opacity="0.35"
        />
        <path
          d="M0 0H1440V30C1180 56 860 20 580 38C380 50 180 48 0 34V0Z"
          fill="#100E0C"
        />
      </svg>
    </div>
  );
}

// Hero → About (dark photo → ivory #FAF7F0)
export function HeroToAboutCurve({ className = "" }) {
  return (
    <div className={`w-full overflow-hidden leading-none block pointer-events-none select-none -mb-[1px] ${className}`}>
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-10 sm:h-14 md:h-16 lg:h-20 block"
        preserveAspectRatio="none"
      >
        {/* Subtle shadow curve behind main for depth */}
        <path
          d="M0 38C200 10 480 60 760 30C1040 0 1260 50 1440 26V80H0V38Z"
          fill="#EDE8DC"
          opacity="0.5"
        />
        <path
          d="M0 42C280 14 540 56 800 28C1060 2 1300 44 1440 24V80H0V42Z"
          fill="#FAF7F0"
        />
      </svg>
    </div>
  );
}

// About ivory → Stats dark (#111010) — paper curving down into dark
export function AboutToStatsCurve({ className = "" }) {
  return (
    <div className={`w-full overflow-hidden leading-none block -mb-[1px] relative z-20 ${className}`}>
      <svg
        viewBox="0 0 1440 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 sm:h-16 md:h-20 lg:h-24 block"
        preserveAspectRatio="none"
      >
        <path
          d="M0 35C360 80 740 10 1100 50C1260 68 1370 40 1440 22V90H0V35Z"
          fill="#111010"
        />
      </svg>
    </div>
  );
}

// Top of Stats section — ivory paper folding over the dark background
export function StatsTopCurve({ className = "" }) {
  return (
    <div className={`w-full overflow-hidden leading-none block relative z-20 ${className}`}>
      <svg
        viewBox="0 0 1440 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 sm:h-16 md:h-20 lg:h-[80px] block"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0H1440V36C1220 28 1020 48 780 52C540 56 300 32 0 34Z"
          fill="#FAF7F0"
        />
      </svg>
    </div>
  );
}

// Stats dark (#111010) → Services ivory (#FAF7F0)
export function StatsToServicesCurve({ className = "" }) {
  return (
    <div className={`w-full overflow-hidden leading-none block -mb-[1px] relative z-20 ${className}`}>
      <svg
        viewBox="0 0 1440 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 sm:h-16 md:h-20 lg:h-24 block"
        preserveAspectRatio="none"
      >
        <path
          d="M0 45C300 8 680 78 1060 38C1220 22 1360 52 1440 62V90H0V45Z"
          fill="#FAF7F0"
        />
      </svg>
    </div>
  );
}

// Process ivory (#FAF7F0) → Gallery dark (#0C0D10)
export function ProcessToGalleryCurve({ className = "" }) {
  return (
    <div className={`w-full overflow-hidden leading-none block -mb-[1px] relative z-20 ${className}`}>
      <svg
        viewBox="0 0 1440 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 sm:h-16 md:h-20 lg:h-24 block"
        preserveAspectRatio="none"
      >
        <path
          d="M0 40C400 86 800 12 1180 58C1300 70 1380 42 1440 24V90H0V40Z"
          fill="#0C0D10"
        />
      </svg>
    </div>
  );
}

// Timeline dark → Clients ivory (#FAF7F0)
export function TimelineToClientsCurve({ className = "" }) {
  return (
    <div className={`w-full overflow-hidden leading-none block -mb-[1px] relative z-20 ${className}`}>
      <svg
        viewBox="0 0 1440 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 sm:h-16 md:h-20 lg:h-22 block"
        preserveAspectRatio="none"
      >
        <path
          d="M0 48C340 82 720 12 1080 52C1240 66 1360 38 1440 18V85H0V48Z"
          fill="#FAF7F0"
        />
      </svg>
    </div>
  );
}

// Clients ivory (#FAF7F0) → CTA crimson (#7C0A0A)
export function ClientsToCtaCurve({ className = "" }) {
  return (
    <div className={`w-full overflow-hidden leading-none block -mb-[1px] relative z-20 ${className}`}>
      <svg
        viewBox="0 0 1440 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 sm:h-16 md:h-20 lg:h-24 block"
        preserveAspectRatio="none"
      >
        <path
          d="M0 34C380 82 780 12 1140 52C1280 66 1380 42 1440 28V90H0V34Z"
          fill="#7C0A0A"
        />
      </svg>
    </div>
  );
}

// CTA crimson → Footer dark (#0A0A0C)
export function CtaToFooterCurve({ className = "" }) {
  return (
    <div className={`w-full overflow-hidden leading-none block -mb-[1px] relative z-20 ${className}`}>
      <svg
        viewBox="0 0 1440 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-10 sm:h-14 md:h-18 block"
        preserveAspectRatio="none"
      >
        <path
          d="M0 28C360 62 740 10 1100 42C1260 56 1370 36 1440 22V75H0V28Z"
          fill="#0A0A0C"
        />
      </svg>
    </div>
  );
}
