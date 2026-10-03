import SectionHeading from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  return (
    <section id="quy-trinh" className="bg-white py-20 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Quy trình"
          title="4 bước rõ ràng, không lo phát sinh"
          desc="Bạn luôn biết thợ đang làm gì, vật tư nào được dùng và khi nào bàn giao."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((s) => (
            <div
              key={s.step}
              className="relative rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <p className="text-4xl font-black text-amber-500/30">{s.step}</p>
              <h3 className="mt-2 font-bold text-zinc-900 dark:text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
