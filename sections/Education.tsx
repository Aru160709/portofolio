import { BookOpen, GraduationCap, School } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { education } from "@/data/site";

const icons = { SD: BookOpen, SMP: School, SMK: GraduationCap } as Record<string, typeof BookOpen>;

export default function Education() {
  return (
    <section id="education" className="bg-sand px-5 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="Education" />
        <ol className="relative ml-5 border-l-2 border-ink">
          {education.map((e) => {
            const Icon = icons[e.level] ?? School;
            return (
              <li key={e.level} className="relative pb-10 pl-8 last:pb-0">
                <span className="absolute -left-5 top-0 grid h-10 w-10 place-items-center rounded-full border-2 border-ink bg-sun text-ink"><Icon size={18} /></span>
                <Reveal>
                  <p className="text-sm font-semibold text-volt">{e.level}</p>
                  <h3 className="font-display text-xl font-semibold text-ink">{e.school}</h3>
                  {e.major && <p className="mt-1 text-mist">{e.major}</p>}
                  {e.focus && <ul className="mt-4 flex flex-wrap gap-2">{e.focus.map((f) => <li key={f} className="rounded-full border-2 border-ink bg-white px-3 py-1 text-sm">{f}</li>)}</ul>}
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
