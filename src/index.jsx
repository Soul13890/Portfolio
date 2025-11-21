import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import About from './pages/About/about'
import Projects from './pages/Projects/projects'
import Contact from './pages/Contact/contact'
import Footer from './components/Footer/footer'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/projects/:id" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  </StrictMode>,
)
