import type { Experience } from '../types/Experience'

interface ExperienceCardProps {
  experience: Experience
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="experience-card">
      <div className="experience-marker" aria-hidden="true" />

      <div className="experience-content">
        <p className="experience-period">{experience.period}</p>

        <h3>{experience.title}</h3>

        <p className="experience-organization">
          {experience.organization}
        </p>

        <p className="experience-description">
          {experience.description}
        </p>

        {experience.highlights ? (
          <ul className="experience-highlights">
            {experience.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        ) : null}

        {experience.link ? (
          <a
            className="experience-link"
            href={experience.link.url}
            target="_blank"
            rel="noreferrer"
          >
            {experience.link.label}
          </a>
        ) : null}
      </div>
    </article>
  )
}