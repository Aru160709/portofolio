"use client";
import TikTokIcon from "@/components/TikTokIcon";
import { ArrowUp, Github, Instagram, Linkedin } from "lucide-react";
import { profile } from "@/data/site";

export default function Footer() {
  const social = [{ i: Github, l: "GitHub", h: profile.github }, { i: Linkedin, l: "LinkedIn", h: profile.linkedin }, { i: Instagram, l: "Instagram", h: profile.instagram }, { i: TikTokIcon, l: "TikTok", h: profile.tiktok }];
  return (
    <footer className="border-t border-line px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-xl font-bold text-ink">RAFFI<span className="text-volt">.</span></p>
          <p className="mt-1 text-sm text-mist">© {new Date().getFullYear()} Raffi Gani Jabbaaru. Designed &amp; Developed by Raffi</p>
        </div>
        <div className="flex items-center gap-2">
          {social.map(({ i: Icon, l, h }) => <a key={l} href={h} target="_blank" rel="noreferrer" aria-label={l} className="grid h-11 w-11 place-items-center rounded-full border border-line text-mist transition hover:border-volt hover:text-ink"><Icon size={18} /></a>)}
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="ml-2 inline-flex h-11 items-center gap-2 rounded-full bg-volt px-4 text-sm font-medium text-snow"><ArrowUp size={16} />Back to Top</button>
        </div>
      </div>
    </footer>
  );
}
