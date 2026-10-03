import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section id="danh-gia" className="bg-zinc-950 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          dark
          eyebrow="Đánh giá"
          title="Khách hàng nói gì?"
          desc="90% khách mới của xưởng đến từ giới thiệu của khách cũ."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-amber-400">★★★★★</div>
              <blockquote className="mt-4 text-sm leading-6 text-zinc-200">
                “{t.content}”
              </blockquote>
              <figcaption className="mt-5 border-t border-white/10 pt-4">
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-xs text-zinc-400">{t.project}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
