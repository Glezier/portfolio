import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Technologies from './components/Technologies'
import Experiences from './components/Experiences'
import Services from './components/Services'
import Contact from './components/Contact'
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

        <Services />

        <Contact />
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>Glezier Montalvane</p>
        </div>
      </footer>
    </>
  )
}