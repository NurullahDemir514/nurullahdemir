interface Project {
    title: string;
    description: string;
    technologies: string[];
    github?: string;
    demo?: string;
}

export const projects: Project[] = [
    {
        title: "Bütçem",
        description: "Kişisel finans yönetimi için geliştirilmiş web uygulaması. Gelir-gider takibi, bütçe planlaması ve finansal raporlama özellikleri sunar.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
        github: "https://github.com/username/butcem",
        demo: "https://xn--btem-1oa8j.com"
    }
]; 