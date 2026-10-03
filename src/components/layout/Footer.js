import { NAV_LINKS, SITE_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-xl font-black text-zinc-950">
              QP
            </div>
            <p className="font-bold text-white">{SITE_INFO.name}</p>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-zinc-400">
            Chuyên thi công cổng, lan can, cầu thang, mái che, nhà xưởng và nội
            thất sắt mỹ thuật. Xưởng trực tiếp – báo giá minh bạch – bảo hành
            dài hạn.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <p>📞 {SITE_INFO.phone}</p>
            <p>📍 {SITE_INFO.address}</p>
            <p>⏰ {SITE_INFO.workingHours}</p>
          </div>
        </div>

        {/* Links */}
        <div>
          <p className="mb-4 font-semibold text-white">Liên kết nhanh</p>
          <ul className="space-y-2.5 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-amber-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services summary */}
        <div>
          <p className="mb-4 font-semibold text-white">Dịch vụ chính</p>
          <ul className="space-y-2.5 text-sm text-zinc-400">
            <li>Cổng & hàng rào mỹ thuật</li>
            <li>Lan can – cầu thang</li>
            <li>Mái che – nhà xưởng</li>
            <li>Nội thất sắt decor</li>
            <li>Sửa chữa – bảo trì</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-zinc-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE_INFO.name}. All rights reserved.
          </p>
          <p>Thiết kế bởi Next.js + TailwindCSS</p>
        </div>
      </div>
    </footer>
  );
}
