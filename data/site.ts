import type { Project, SkillGroup, Service, EducationItem } from "@/types";

export const profile = {
  name: "Raffi Gani Jabbaaru",
  role: "Web Developer",
  // Ganti dengan URL asli. Kosongkan jika belum ada.
  email: "raffiganijabbaaru160709@gmail.com", // ganti dengan Gmail aslimu
  phone: "+62 8953-6670-02004", // ganti dengan nomor aslimu (tampilan)
  tiktok: "https://www.tiktok.com/@iniaruuuu",
  whatsapp: "62895366702004", // format internasional tanpa +
  github: "https://github.com/Aru160709",
  linkedin: "https://www.linkedin.com/",
  instagram: "https://www.instagram.com/raffi_jabbaaru/",
  cv: "/cv/Raffi-Gani-Jabbaaru-CV.pdf",
  available: true,
  // Angka statistik bisa diedit sesuai kenyataan.
  yearsLearning: 3,
};

export const navItems = ["home", "about", "skills", "projects", "education", "contact"] as const;

// demo/source: isi URL asli. Jika kosong, tombol tampil nonaktif (tidak ada link palsu).
export const projects: Project[] = [
  { title: "Balai Semut", description: "Website Balai Semut. (Ganti deskripsi ini di data/site.ts.)", image: "/images/balai.png", tech: [], demo: "", source: "https://github.com/Aru160709/balai.semut" },
  { title: "Karang Taruna Graha Laksana Tidar", description: "Website organisasi perumahan dengan informasi kegiatan, galeri, dan lokasi.", image: "/images/karang.png", tech: ["HTML", "CSS", "JavaScript", "Bootstrap"], demo: "", source: "https://github.com/Aru160709/karang-taruna-glt" },
  { title: "Aplikasi Face Recognition", description: "Aplikasi pengenalan wajah yang dibuat menggunakan Python.", image: "/images/face.png", tech: ["Python"], demo: "", source: "https://github.com/Aru160709/face-recognition-project" },
  { title: "Aplikasi Chat", description: "Aplikasi chat yang dibuat menggunakan Dart.", image: "/images/project-4.svg", tech: ["Dart"], demo: "", source: "https://github.com/Aru160709/projectchat" },
  { title: "Aplikasi Kalkulator", description: "Aplikasi kalkulator yang dibuat menggunakan Dart.", image: "/images/project-5.svg", tech: ["Dart"], demo: "", source: "https://github.com/Aru160709/calculator-app" }
];

export const skills: SkillGroup[] = [
  { category: "Frontend", note: "Bagian tampilan website yang dilihat pengguna.", items: [{ name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" }, { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }, { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }, { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }, { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }, { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }, { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }, { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }] },
  { category: "Backend", note: "Bagian server: data, logika, dan API.", items: [{ name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" }, { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" }, { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }, { name: "REST API" }, { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }] },
  { category: "Mobile", note: "Aplikasi Android dan iOS.", items: [{ name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" }, { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" }] },
  { category: "Tools", note: "Alat kerja sehari-hari.", items: [{ name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }, { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }, { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }, { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }] },
];

export const education: EducationItem[] = [
  // Ganti nama SD dan SMP dengan yang asli.
  { level: "SD", school: "MI Khadijah" },
  { level: "SMP", school: "SMP Negeri 30 Malang" },
  { level: "SMK", school: "SMK Negeri 5 Malang", major: "Pengembangan Perangkat Lunak dan Gim (PPLG)", focus: ["Web Development", "Programming", "Database", "Software Development"] },
];

export const services: Service[] = [
  { title: "Website Development", description: "Membangun website dari nol, dari landing page sampai aplikasi web.", icon: "globe" },
  { title: "Responsive Web Design", description: "Tampilan rapi di ponsel, tablet, dan desktop.", icon: "smartphone" },
  { title: "Frontend Development", description: "Antarmuka interaktif dengan React dan Next.js.", icon: "layout" },
  { title: "Website Maintenance", description: "Perbaikan bug dan pembaruan konten website yang sudah ada.", icon: "wrench" },
  { title: "UI Implementation", description: "Mengubah desain Figma menjadi halaman yang berfungsi.", icon: "figma" },
];
