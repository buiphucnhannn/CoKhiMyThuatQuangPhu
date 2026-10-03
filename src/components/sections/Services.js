import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="dich-vu" className="bg-zinc-50 py-20 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Dịch vụ"
          title="Thi công trọn gói từ A–Z"
          desc="Từ tư vấn mẫu, gia công tại xưởng đến lắp đặt tận nơi — bạn chỉ cần gọi, còn lại để Quang Phú lo."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 text-2xl">
                {s.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {s.desc}
              </p>
              <a
                href="#lien-he"
                className="mt-4 inline-block text-sm font-semibold text-amber-600 hover:text-amber-500"
              >
                Tư vấn mẫu này →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
