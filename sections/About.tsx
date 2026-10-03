import Image from "next/image";
import { Code2, Lightbulb, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profile, projects, skills } from "@/data/site";

const stats = [
  { label: "Projects Completed", value: "10+" },
  { label: "Technologies Learned", value: skills.reduce((n, g) => n + g.items.length, 0) },
  { label: "Years of Learning", value: profile.yearsLearning },
];
const highlights = [
  { icon: Code2, text: "Menulis kode yang rapi dan mudah dirawat" },
  { icon: Sparkles, text: "Peduli pada tampilan dan kemudahan penggunaan" },
  { icon: Lightbulb, text: "Cepat belajar teknologi baru" },
];

export default function About() {
  return (
    <section id="about" className="px-5 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <Image src="/images/about.svg" alt="Ilustrasi workspace coding" width={800} height={640} unoptimized className="aspect-[5/4] w-full rounded-3xl border-2 border-ink object-cover" />
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading title="About me" />
          <p className="-mt-4 text-mist">Saya membangun website modern, responsif, dan interaktif dengan menggabungkan teknologi dan desain yang menarik.</p>
          <ul className="mt-6 space-y-3">
            {highlights.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3"><Icon size={18} className="shrink-0 text-volt" />{text}</li>
            ))}
          </ul>
          <dl className="mt-8 grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl card p-4">
                <dd className="font-display text-3xl font-semibold text-ink">{s.value}</dd>
                <dt className="mt-1 text-xs text-mist">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
