import { Github, Instagram, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import TikTokIcon from "@/components/TikTokIcon";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/site";

const links = [
  { icon: Phone, name: "Telepon", value: profile.phone, href: `tel:${profile.phone.replace(/[^+0-9]/g, "")}` },
  { icon: MessageCircle, name: "WhatsApp", value: profile.phone, href: `https://wa.me/${profile.whatsapp}` },
  { icon: Mail, name: "Gmail", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Github, name: "GitHub", value: "Lihat repository", href: profile.github },
  { icon: Instagram, name: "Instagram", value: "Ikuti di Instagram", href: profile.instagram },
  { icon: TikTokIcon, name: "TikTok", value: "Lihat di TikTok", href: profile.tiktok },
  { icon: Linkedin, name: "LinkedIn", value: "Terhubung di LinkedIn", href: profile.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Let&apos;s work together</h2>
          <p className="mt-3 max-w-md text-mist">Have a website idea or need frontend help? Contact me via one of the methods below.</p>
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map(({ icon: Icon, name, value, href }, i) => (
            <li key={name}>
              <Reveal delay={(i % 3) * 0.05}>
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="card flex min-h-[72px] items-center gap-4 rounded-2xl p-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border-2 border-ink bg-sun"><Icon size={22} /></span>
                  <span className="min-w-0">
                    <span className="block font-display font-semibold text-ink">{name}</span>
                    <span className="block truncate text-sm text-mist">{value}</span>
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
