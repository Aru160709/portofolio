import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/site";

const base = "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium";

export default function Projects() {
  return (
    <section id="projects" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Featured projects" text="Gambar saat ini placeholder. Ganti dengan screenshot asli di public/images." />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08} className={i === 0 ? "md:col-span-2" : ""}>
              <article className="group overflow-hidden rounded-3xl card transition hover:border-volt/70">
                <div className="overflow-hidden">
                  <Image src={p.image} alt={`Preview ${p.title}`} width={1200} height={750} unoptimized className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03] md:aspect-[16/8]" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 text-mist">{p.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="rounded-full bg-volt/10 px-3 py-1 text-xs text-volt">{t}</li>)}</ul>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {p.demo ? <a href={p.demo} target="_blank" rel="noreferrer" className={`${base} bg-volt text-snow hover:bg-ink`}><ExternalLink size={15} />Live Demo</a>
                      : <span aria-disabled className={`${base} cursor-not-allowed bg-line text-mist`}><ExternalLink size={15} />Live Demo segera</span>}
                    {p.source ? <a href={p.source} target="_blank" rel="noreferrer" className={`${base} border border-line text-ink hover:border-ink`}><Github size={15} />Source Code</a>
                      : <span aria-disabled className={`${base} cursor-not-allowed border border-line text-mist`}><Github size={15} />Source Code</span>}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
