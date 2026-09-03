import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Technologies from './components/Technologies'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Projects />

        <About />

        <Technologies />

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