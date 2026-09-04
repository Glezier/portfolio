import { services } from "../data/services"

export default function Services() {
  return (
    <section
      id="servicos"
      className="section services-section"
      aria-labelledby="services-title"
    >
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Como posso ajudar</p>
          <h2 id="services-title">Serviços</h2>

          <p>
            Soluções que posso desenvolver com foco em clareza, manutenção e
            aplicação prática.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.id}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}