export default function Contact() {
  return (
    <section
      id="contato"
      className="section contact-section"
      aria-labelledby="contact-title"
    >
      <div className="container contact-layout">
        <div className="section-heading">
          <p className="eyebrow">Contato</p>
          <h2 id="contact-title">Vamos desenvolver algo juntos?</h2>

          <p>
            Disponível para oportunidades profissionais, projetos freelance e
            colaborações em software.
          </p>
        </div>

        <div className="contact-card">
          <a href="mailto:montalvaneglezier@gmail.com">montalvaneglezier@gmail.com</a>

          <a
            href="https://github.com/Glezier"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/gleziermontalvane/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}