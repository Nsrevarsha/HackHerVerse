import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import './styles/App.css'

function App() {
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          
          // Enhanced animation timing
          const animElements = entry.target.querySelectorAll('.scroll-animate')
          animElements.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add('active')
              el.style.transitionDelay = `${i * 100}ms`
            }, 50)
          })
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, { 
      threshold: 0.2,
      rootMargin: '0px'
    })

    // Observe both sections and individual animate elements
    document.querySelectorAll('section, .scroll-animate').forEach(element => {
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
