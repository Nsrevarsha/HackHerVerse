import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      closeMenu()
    }
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">
          <Link to="/" onClick={() => scrollToSection('hero')}>HackHerVerse</Link>
        </div>
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        </button>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <span className="close-icon"></span>
          <a href="#about" onClick={() => scrollToSection('about')}>About</a>
          <a href="#prizes" onClick={() => scrollToSection('prizes')}>Prizes</a>
          <a href="#tracks" onClick={() => scrollToSection('tracks')}>Tracks</a>
          <a href="#judges" onClick={() => scrollToSection('judges')}>Judges</a>
          <a href="#faq" onClick={() => scrollToSection('faq')}>FAQ</a>
          <a href="#sponsors" onClick={() => scrollToSection('sponsors')}>Sponsors</a>
          <button href="#register" onClick={() => scrollToSection('register')} className="register-button">Register Now</button>
        </div>
      </nav>
      <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={closeMenu}></div>
    </>
  )
}

export default Navbar