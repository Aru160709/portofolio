"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { navItems, profile } from "@/data/site";

export default function Navbar() {
  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navItems.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); obs.disconnect(); };
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled || open ? "border-b border-line bg-paper/80 backdrop-blur-xl" : ""}`}>
      <nav aria-label="Utama" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-display text-xl font-bold text-ink">RAFFI<span className="text-volt">.</span></a>
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((id) => (
            <li key={id} className="relative">
              <a href={`#${id}`} className={`block px-3 py-2 text-sm capitalize transition-colors ${active === id ? "text-ink" : "text-mist hover:text-ink"}`}>
                {id}
                {active === id && <motion.span layoutId="nav-dot" className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-volt" />}
              </a>
            </li>
          ))}
        </ul>
        <a href={profile.cv} download className="hidden items-center gap-2 rounded-full bg-volt px-4 py-2 text-sm font-medium text-snow transition hover:bg-ink md:inline-flex">
          <Download size={16} /> Download CV
        </a>
        <button className="grid h-11 w-11 place-items-center rounded-lg text-ink md:hidden" aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-line px-5 pb-5 md:hidden">
          {navItems.map((id) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className={`block py-3 text-lg capitalize ${active === id ? "text-ink" : "text-mist"}`}>{id}</a>
          ))}
          <a href={profile.cv} download className="mt-3 inline-flex items-center gap-2 rounded-full bg-volt px-5 py-3 font-medium text-snow"><Download size={16} /> Download CV</a>
        </div>
      )}
    </header>
  );
}
