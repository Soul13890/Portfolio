import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import About from './pages/About/about'
import Projects from './pages/Projects/projects'
import Contact from './pages/Contact/contact'
import Error from './pages/Error/error'
import Footer from './components/Footer/footer'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename='/Portfolio/'>      
      <main aria-label="Contenu principal du site">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/projects/:id" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  </StrictMode>,
)
