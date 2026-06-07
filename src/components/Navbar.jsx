
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Coffee } from 'lucide-react';

export default function Navbar({ cartCount, onCartClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ['home', 'services', 'menu', 'team', 'reservation', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Cafe Menu', href: '#menu', id: 'menu' },
    { name: 'Team', href: '#team', id: 'team' },
    { name: 'Reservation', href: '#reservation', id: 'reservation' },
    { name: 'Blog', href: '#blog', id: 'blog' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="nav-logo">
        <Coffee style={{ display: 'inline', marginRight: '8px', color: '#d4a373' }} size={24} />
        ROSE <br />
        <span>CAFE</span>
      </a>

      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className={activeSection === link.id ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <button className="cart-icon-btn" onClick={onCartClick} aria-label="Open Cart">
          <ShoppingCart size={24} />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
}
