import { Project } from '@/data/projects';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="mb-8 bg-surface/30 backdrop-blur-sm p-6 rounded-xl border border-surface-dark/50 hover:border-accent/30 transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <h3 className="text-2xl font-light text-text-primary">{project.title}</h3>
                <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm text-text-secondary hover:text-accent rounded-lg hover:bg-surface-dark/30 transition-all duration-300 tracking-wide"
                >
                    {project.linkText}
                </a>
            </div>
            <p className="text-text-secondary mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 text-sm text-text-secondary bg-surface-dark/50 rounded-lg"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
} 