import { useState } from "react"
import Menu from "../assets/menu.png"

const navigationLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
]

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Glezier',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gleziermontalvane/',
  },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOPen] = useState(false);

  function closeMenu(){
    setIsMenuOPen(false);
  }

  return (
    <header className="site-header">
      <nav className="container nav-content" aria-label="Navegação principal">
        <a className="logo" href="#inicio" aria-label="Voltar ao início">
          GM
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOPen((atual) => !atual)}
        >
          <img src={Menu} className="icon" />
        </button>

        <ul 
          id='mobile-navigation'
          className={isMenuOpen ? 'nav-links nav-links-open': 'nav-links'}
        >
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-social-links" aria-label="Links sociais">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}