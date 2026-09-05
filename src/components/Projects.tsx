import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects(){
    return (
        <section id="projetos" className="section projects-section">
            <div className="container">
                <div className="section-heading">
                    <p className="eyebrow">Trabalhos selecionados</p>
                    <h2>Projetos</h2>

                    <p>
                        Aplicações que demonstram minhas decisões técnicas e minha
                        experiência no desenvolvimento de software.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                <div className="projects-more">
                    <p>
                        Além dos projetos destacados aqui, mantenho outros estudos,
                        experimentos e aplicações no GitHub.
                    </p>

                    <a
                        className="button button-secondary"
                        href="https://github.com/Glezier"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Ver mais no GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}