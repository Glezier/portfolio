import { technologyCategories } from '../data/technologies.js'

export default function Technologies() {
  return (
    <section
      id="tecnologias"
      className="section technologies-section"
      aria-labelledby="technologies-title"
    >
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Competências técnicas</p>
          <h2 id="technologies-title">Tecnologias</h2>

          <p>
            Ferramentas e tecnologias utilizadas na construção dos meus
            projetos.
          </p>
        </div>

        <div className="technologies-grid">
          {technologyCategories.map((category) => (
            <article className="technology-category" key={category.id}>
              <h3>{category.title}</h3>

              <ul>
                {category.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}