import { Globe, Smartphone, LayoutDashboard, Wrench, Figma } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/site";

const icons = { globe: Globe, smartphone: Smartphone, layout: LayoutDashboard, wrench: Wrench, figma: Figma };

export default function Services() {
  return (
    <section id="services" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="What I do" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.06}>
                <div className="h-full rounded-3xl card p-6">
                  <Icon className="text-volt" />
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-mist">{s.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
