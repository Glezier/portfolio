import curriculo from '../assets/curriculo_glezier.pdf'

export default function Hero() {
  return (
    <section id="inicio" className="hero section">
      <div className="container">
        <p className="eyebrow">Olá, eu sou</p>

        <h1>Glezier Montalvane</h1>

        <h2>Full Stack Developer</h2>

        <p className="hero-description">
          Desenvolvedor focado na construção de aplicações web, APIs e
          soluções completas de software, do banco de dados à interface.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projetos">
            Ver projetos
          </a>

          <a className="button button-secondary" href="#contato">
            Entrar em contato
          </a>

          <a
          className="button button-resume"
          href={curriculo}
          download="Curriculo-Glezier-Montalvane.pdf"
          aria-label="Baixar currículo de Glezier Montalvane em PDF"
        >
          Baixar currículo
        </a>
        </div>
      </div>
    </section>
  )
}