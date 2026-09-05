export default function Contact() {
  function handleContact (formData: FormData) {
    const name = String(formData.get('name') ?? '')
    const email = String(formData.get('email') ?? '')
    const subject = String(formData.get('subject') ?? '')
    const message = String(formData.get('message') ?? '')
  
    const body = [
      `Nome: ${name}`,
      `E-mail: ${email}`,
      '',
      message,
    ].join('\n')
  
    const mailtoUrl = `mailto:montalvaneglezier@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  
    window.location.href = mailtoUrl
  }

  

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

          <div className="contact-links">
            <a href="mailto:montalvaneglezier@gmail.com">
              montalvaneglezier@gmail.com
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
        </div>

        <form className="contact-form" action={handleContact}>
          <label>
            Nome
            <input name="name" type="text" required />
          </label>

          <label>
            E-mail
            <input name="email" type="email" required />
          </label>

          <label>
            Assunto
            <input name="subject" type="text" required />
          </label>

          <label>
            Mensagem
            <textarea name="message" rows={5} required />
          </label>

          <button className="button button-primary" type="submit">
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  )
}
