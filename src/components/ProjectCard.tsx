import type { Project } from '../types/Project';

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard ({ project }: ProjectCardProps){
    return (
        <article className={
            project.featured
            ? 'project-card project-card-featured'
            : 'project-card'
        }>
            {project.image ? (
                <div className="project-image-wrapper">
                    <img
                        className="project-image"
                        src={project.image}
                        alt={project.imageAlt ?? `Interface do projeto ${project.title}`}
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            ) : null}

            <div className="project-content">
                <p className="project-category">{project.category}</p>

                <h3>{project.title}</h3>

                <p className="project-description">{project.description}</p>

                <ul className="technology-list" aria-label="Tecnologias utilizadas">
                    {project.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                    ))}
                </ul>


                {project.githubUrl ? (
                    <a
                        className="project-link"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Ver código
                    </a>
                ) : null}

                {project.liveUrl ? (
                    <a
                        className="project-link"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Ver aplicação
                    </a>
                ) : null}
            </div>
        </article>
    )
}