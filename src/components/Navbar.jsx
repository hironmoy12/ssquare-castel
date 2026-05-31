import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    if (location.pathname === '/' && !location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (!location.hash) return

    const target = document.getElementById(location.hash.slice(1))
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.pathname, location.hash])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/#projects', label: 'Projects' },
    { path: '/#about', label: 'About' },
    { path: '/#construction', label: 'Construction' },
    { path: '/#contact', label: 'Contact' },
  ]

  const isActiveLink = (path) => {
    if (path === '/') {
      return location.pathname === '/' && !location.hash
    }

    return `${location.pathname}${location.hash}` === path
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <img src="/assets/castle-logo.png" alt="" width={150}/>
        </Link>

        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`navbar__link ${isActiveLink(link.path) ? 'navbar__link--active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar__cta">
          <a href="tel:+917997133144" className="navbar__phone">
            <Phone size={14} />
         +91 79971 33144
          </a>
          <Link to="/" className="btn-primary">Schedule Viewing</Link>
        </div>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className={`navbar__mobile-link ${isActiveLink(link.path) ? 'active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
        <a href="tel:+917997133144" className="navbar__mobile-phone">
          <Phone size={14} />
          +91 79971 33144
        </a>
        <Link to="/contact" className="btn-primary" style={{ marginTop: '1rem', justifyContent: 'center' }}>
          Schedule Viewing
        </Link>
      </div>
    </nav>
  )
}
