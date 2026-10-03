import SectionHeading from "@/components/ui/SectionHeading";
import { PROJECTS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Gallery() {
  return (
    <section id="du-an" className="bg-zinc-50 py-20 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Dự án thực tế"
          title="Công trình đã bàn giao"
          desc="Hình ảnh minh họa — bạn thay bằng ảnh thật của xưởng trong thư mục public/images."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
            >
              {/* Khung ảnh — thay bằng <Image src="/images/..." /> */}
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950 text-5xl">
                🏗️
              </div>
              <div className="p-5">
                <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs font-bold text-amber-600 dark:text-amber-400">
                  {p.tag}
                </span>
                <h3 className="mt-3 font-bold text-zinc-900 dark:text-white">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {p.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="#lien-he" variant="secondary">
            Gửi mẫu bạn thích để báo giá →
          </Button>
        </div>
      </div>
    </section>
  );
}
