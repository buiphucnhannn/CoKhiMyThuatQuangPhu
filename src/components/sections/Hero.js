import Button from "@/components/ui/Button";
import { SITE_INFO, STATS } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="trang-chu" className="relative overflow-hidden bg-zinc-950">
      {/* Background decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.18),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(245,158,11,0.12),transparent_50%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-2 lg:py-28">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <span className="mb-4 w-fit rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400">
            ⚙️ Xưởng cơ khí trực tiếp
          </span>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Cơ khí mỹ thuật
            <span className="block text-amber-400">bền – đẹp – đúng hẹn</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
            {SITE_INFO.name} chuyên cổng sắt mỹ thuật, lan can, cầu thang, mái
            che và nhà xưởng. Khảo sát tận nơi, báo giá trong 24h, bảo hành đến
            36 tháng.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#lien-he">📞 Nhận báo giá miễn phí</Button>
            <Button href="#du-an" variant="outlineWhite">
              Xem dự án thực tế →
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
              >
                <p className="text-2xl font-black text-amber-400">{s.value}</p>
                <p className="mt-1 text-xs text-zinc-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form báo giá nhanh */}
        <div className="flex items-center">
          <div className="w-full rounded-3xl bg-white p-6 shadow-2xl sm:p-8 dark:bg-zinc-900">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              Yêu cầu báo giá nhanh
            </h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Để lại thông tin, xưởng gọi lại trong 30 phút (giờ hành chính).
            </p>
            <form className="mt-6 space-y-4" action="#lien-he">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Họ tên
                </label>
                <input
                  type="text"
                  placeholder="VD: Anh Minh"
                  className="w-full rounded-xl border border-zinc-300 px-4 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  placeholder="09xx xxx xxx"
                  className="w-full rounded-xl border border-zinc-300 px-4 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Nhu cầu
                </label>
                <select className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-amber-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white">
                  <option>Cổng / hàng rào</option>
                  <option>Lan can / cầu thang</option>
                  <option>Mái che / nhà xưởng</option>
                  <option>Nội thất sắt</option>
                  <option>Sửa chữa khác</option>
                </select>
              </div>
              <Button href="#lien-he" className="w-full">
                Gửi yêu cầu →
              </Button>
              <p className="text-center text-xs text-zinc-500">
                Hoặc gọi trực tiếp:{" "}
                <a
                  href={SITE_INFO.phoneHref}
                  className="font-bold text-amber-600"
                >
                  {SITE_INFO.phone}
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
