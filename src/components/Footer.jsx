import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__brand">
              <div className="footer__logo">
                <div className="footer__logo-image"></div>
              </div>
              <p className="footer__tagline">
                <span className="footer__tagline-title">"Where Dreams Meet Distinction"</span>
                Premium real estate developments in Kharagpur, crafted for those who demand the extraordinary.
                Building lasting legacies, one home at a time.
              </p>
              <div className="footer__brand-contact">
                <a href="tel:+917997133144" className="footer__brand-contact-link">
                  <Phone size={14} />
                  <span>+91 79971 33144</span>
                </a>
                <a href="mailto:info@ssquarecastle.com" className="footer__brand-contact-link">
                  <Mail size={14} />
                  <span>info@ssquarecastle.com</span>
                </a>
              </div>
              <div className="footer__social">
                <a href="#" aria-label="Instagram" className="footer__social-link"><Instagram size={18} /></a>
                <a href="#" aria-label="LinkedIn" className="footer__social-link"><Linkedin size={18} /></a>
                <a href="#" aria-label="Facebook" className="footer__social-link"><Facebook size={18} /></a>
              </div>
            </div>

            <div className="footer__col">
              <h4 className="footer__col-title">Company</h4>
              <ul className="footer__links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/construction">Construction</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer__col">
              <h4 className="footer__col-title">Our Projects</h4>
              <ul className="footer__links">
                <li><Link to="/projects">One Square</Link></li>
                <li><Link to="/projects">Two Square</Link></li>
                <li><Link to="/projects">Three Square</Link></li>
              </ul>
            </div>

            <div className="footer__col">
              <h4 className="footer__col-title">Visit Us</h4>
              <ul className="footer__contact">
                <li>
                  <MapPin size={14} />
                  <span>Barbetia, Kharagpur<br />West Bengal - 721301<br />India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} LUXE Estate. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
