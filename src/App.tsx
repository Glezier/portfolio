import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Technologies from './components/Technologies'
import Experiences from './components/Experiences'
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

        <Experiences />

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