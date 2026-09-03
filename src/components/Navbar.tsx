export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="container" aria-label="Navegação principal">
        <a className="logo" href="#inicio" aria-label="Voltar ao início">
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
  )
}