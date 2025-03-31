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

  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">
          <Link to="/">HackHerVerse</Link>
        </div>
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        </button>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            <span className="close-icon"></span>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/overview" onClick={closeMenu}>Overview</Link>
          <a href="#register" className="register-link" onClick={closeMenu}>Register Now</a>
        </div>
      </nav>
      <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={closeMenu}></div>
    </>
  )
}

export default Navbar 