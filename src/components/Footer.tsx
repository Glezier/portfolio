const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <p className="footer-name">Glezier Montalvane</p>
          <p className="footer-role">Full Stack Developer</p>
        </div>

        <div className="footer-links" aria-label="Links do rodapé">
          <a href="mailto:montalvaneglezier@gmail.com">
            E-mail
          </a>

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

        <p className="footer-copy">
          © {currentYear} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}