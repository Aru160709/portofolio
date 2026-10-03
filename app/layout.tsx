import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "Raffi Gani Jabbaaru | Web Developer",
  description: "Portofolio Raffi Gani Jabbaaru, web developer yang membangun website modern, responsif, dan interaktif.",
  keywords: ["Web Developer", "Next.js", "React", "Laravel", "Flutter", "Portfolio", "Malang"],
  authors: [{ name: "Raffi Gani Jabbaaru" }],
  openGraph: { title: "Raffi Gani Jabbaaru | Web Developer", description: "Website modern, responsif, dan interaktif.", type: "website", locale: "id_ID" },
};
export const viewport: Viewport = { themeColor: "#FFFBF2", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
