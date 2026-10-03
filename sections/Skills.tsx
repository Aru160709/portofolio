import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { Network } from "lucide-react";
import { skills } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills" className="bg-sand px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Skills & technologies" text="Teknologi yang aku pelajari dan pakai untuk membuat website dan aplikasi." />
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((g, i) => (
            <Reveal key={g.category} delay={i * 0.05}>
              <div className="card h-full rounded-3xl p-6">
                <h3 className="font-display text-xl font-semibold text-ink">{g.category}</h3>
                <p className="mt-1 text-sm text-mist">{g.note}</p>
                <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {g.items.map((s) => (
                    <li key={s.name} className="flex flex-col items-center gap-2 rounded-2xl border-2 border-line bg-paper px-2 py-4 text-center transition hover:-translate-y-1 hover:border-volt">
                      {s.logo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={s.logo} alt="" width={40} height={40} loading="lazy" className="h-10 w-10 object-contain" />
                      ) : (
                        <Network size={36} className="text-volt" aria-hidden />
                      )}
                      <span className="text-sm font-medium text-ink">{s.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
