export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    url: string;
    linkText: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Bütçem",
        description: "Kişisel finans yönetimi için geliştirilmiş web uygulaması. Gelir-gider takibi, bütçe planlaması ve finansal raporlama özellikleri sunar.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
        url: "https://xn--btem-1oa8j.com",
        linkText: "Siteyi Ziyaret Et"
    }
]; 