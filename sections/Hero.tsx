"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/site";

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28">
      <div aria-hidden className="orb absolute -left-32 top-10 h-96 w-96 rounded-full bg-sun/70 blur-3xl" />
      <div aria-hidden className="orb absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blush/60 blur-3xl [animation-delay:-6s]" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}>
          {profile.available && (
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-3 py-1.5 text-sm text-volt backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Available for Opportunities
            </p>
          )}
          <p className="text-lg text-mist">Hello, I&apos;m</p>
          <h1 className="mt-1 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl xl:text-7xl">{profile.name}</h1>
          <p className="mt-4"><span className="inline-block -rotate-1 rounded-lg border-2 border-ink bg-sun px-3 py-1 font-display text-xl font-semibold text-ink sm:text-2xl">{profile.role}</span></p>
          <p className="mt-5 max-w-lg text-mist">Developer yang tertarik membangun website modern, responsif, dan interaktif.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-full bg-volt px-6 py-3 font-medium text-snow transition hover:-translate-y-0.5 hover:bg-ink">Explore My Work</a>
            <a href="#contact" className="rounded-full border-2 border-ink px-6 py-3 font-medium text-ink transition hover:-translate-y-0.5 hover:border-ink">Contact Me</a>
          </div>
        </motion.div>
        <div className="relative mx-auto w-full max-w-sm">
          <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border-2 border-ink bg-blush" />
          <Image src="/images/Profile.png" alt="Foto profil Raffi Gani Jabbaaru" width={640} height={800} priority unoptimized className="relative aspect-[4/5] w-full rounded-3xl border-2 border-ink object-cover" />
        </div>
      </div>
    </section>
  );
}
