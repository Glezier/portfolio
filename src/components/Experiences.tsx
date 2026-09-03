import { experiences } from '../data/experiences'
import { ExperienceCard } from './ExperienceCard'

export default function Experiences() {
  return (
    <section
      id="experiencia"
      className="section"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Minha trajetória</p>
          <h2 id="experience-title">Experiência</h2>

          <p>
            Formação e atividades que contribuíram para meu desenvolvimento
            técnico e profissional.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
            />
          ))}
        </div>
      </div>
    </section>
  )
}