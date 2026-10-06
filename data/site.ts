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
  cv: "/cv/CV_Raffi_Gani_Jabbaaru.pdf",
  available: true,
  // Angka statistik bisa diedit sesuai kenyataan.
  yearsLearning: 3,
};

export const navItems = ["home", "about", "skills", "projects", "education", "contact"] as const;

// demo/source: isi URL asli. Jika kosong, tombol tampil nonaktif (tidak ada link palsu).
export const projects: Project[] = [
  { title: "Balai Semut", description: "A community website built to bring friends together, share moments, and strengthen connections through a simple and engaging digital platform.", image: "/images/balai.png", tech: [], demo: "https://balaisemut.vercel.app/", source: "https://github.com/Aru160709/balai.semut" },
  { title: "Karang Taruna Graha Laksana Tidar", description: "A website for a local youth organization, designed to introduce the organization, showcase activities and events, and provide information about its community programs.", image: "/images/karang.png", tech: ["HTML", "CSS", "JavaScript", "Bootstrap"], demo: "", source: "https://github.com/Aru160709/karang-taruna-glt" },
  { title: "Aplikasi Face Recognition", description: "A face recognition system that uses facial data to identify and recognize individuals. This project explores computer vision and data processing to create an automated recognition system.", image: "/images/face revisi.png", tech: ["Python"], demo: "", source: "https://github.com/Aru160709/face-recognition-project" },
  { title: "Aplikasi Chat", description: "A mobile chat application designed for communication between users, featuring a simple and intuitive interface for sending and receiving messages.", image: "/images/project-4.svg", tech: ["Dart"], demo: "", source: "https://github.com/Aru160709/projectchat" },
  { title: "Aplikasi Kalkulator", description: "A simple and functional calculator application designed to perform basic mathematical operations with a clean and user-friendly interface.", image: "/images/project-5.svg", tech: ["Dart"], demo: "", source: "https://github.com/Aru160709/calculator-app" }
];

export const skills: SkillGroup[] = [
  { category: "Frontend", note: "The part of the website interface that users see..", items: [{ name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" }, { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }, { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }, { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }, { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }, { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }, { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }, { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }] },
  { category: "Backend", note: "The server-side part: data, logic, and APIs.", items: [{ name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" }, { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" }, { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }, { name: "REST API" }, { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }] },
  { category: "Mobile", note: "Android and iOS applications.", items: [{ name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" }, { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" }] },
  { category: "Tools", note: "Daily work tools.", items: [{ name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }, { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }, { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }, { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }] },
];

export const education: EducationItem[] = [
  // Ganti nama SD dan SMP dengan yang asli.
  { level: "SD", school: "MI Khadijah" },
  { level: "SMP", school: "SMP Negeri 30 Malang" },
  { level: "SMK", school: "SMK Negeri 5 Malang", major: "Pengembangan Perangkat Lunak dan Gim (PPLG)", focus: ["Web Development", "Programming", "Database", "Software Development"] },
];

export const services: Service[] = [
  { title: "Website Development", description: "Building websites from scratch, ranging from landing pages to web applications.", icon: "globe" },
  { title: "Responsive Web Design", description: "Creating websites that adapt seamlessly to different screen sizes and devices.", icon: "smartphone" },
  { title: "Frontend Development", description: "Developing interactive user interfaces with React and Next.js.", icon: "layout" },
  { title: "Website Maintenance", description: "Providing ongoing support and updates for existing websites.", icon: "wrench" },
  { title: "UI Implementation", description: "Transforming Figma designs into functional web pages.", icon: "figma" },
];
