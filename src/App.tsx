import './App.css'

export default function App() {
  return (
    <>
      <header className="site-header">
        <nav className="container" aria-label="Navegação principal">
          <a className="logo" href="#inicio">
            GM
          </a>

          <ul className="nav-links">
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
            <li>
              <a href="#tecnologias">Tecnologias</a>
            </li>
            <li>
              <a href="#experiencia">Experiência</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero section">
          <div className="container">
            <p className="eyebrow">Olá, eu sou</p>

            <h1>Glezier Montalvane</h1>

            <h2>Full Stack Developer</h2>

            <p className="hero-description">
              Desenvolvedor focado na construção de aplicações web, APIs
              e soluções completas de software, do banco de dados à
              interface.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">
                Ver projetos
              </a>

              <a className="button button-secondary" href="#contato">
                Entrar em contato
              </a>
            </div>
          </div>
        </section>

        <section id="projetos" className="section">
          <div className="container">
            <h2>Projetos</h2>
            <p>Projetos selecionados serão apresentados aqui.</p>
          </div>
        </section>

        <section id="sobre" className="section">
          <div className="container">
            <h2>Sobre</h2>
            <p>Minha apresentação profissional será construída aqui.</p>
          </div>
        </section>

        <section id="tecnologias" className="section">
          <div className="container">
            <h2>Tecnologias</h2>
            <p>As tecnologias serão organizadas por categoria.</p>
          </div>
        </section>

        <section id="experiencia" className="section">
          <div className="container">
            <h2>Experiência</h2>
            <p>Experiências acadêmicas e profissionais aparecerão aqui.</p>
          </div>
        </section>

        <section id="contato" className="section">
          <div className="container">
            <h2>Vamos desenvolver algo juntos?</h2>
            <p>
              Disponível para oportunidades profissionais, projetos
              freelance e colaborações em software.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>Glezier Montalvane</p>
        </div>
      </footer>
    </>
  )
}