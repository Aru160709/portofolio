export type Project = { title: string; description: string; image: string; tech: string[]; demo?: string; source?: string };
export type Skill = { name: string; logo?: string };
export type SkillGroup = { category: string; note: string; items: Skill[] };
export type EducationItem = { level: string; school: string; major?: string; focus?: string[] };
export type Service = { title: string; description: string; icon: "globe" | "smartphone" | "layout" | "wrench" | "figma" };
