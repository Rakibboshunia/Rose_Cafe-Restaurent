import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Send, Coffee } from 'lucide-react';

export default function Footer({ onShowSuccess }) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    onShowSuccess('Subscribed Successfully!', 'Thank you for subscribing to our newsletter.');
    setEmail('');
  };

  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <Coffee style={{ display: 'inline', marginRight: '8px', color: '#d4a373' }} size={24} />
            ROSE <span>CAFE</span>
          </div>
          <p>
            Bringing you the finest selection of hand-roasted coffee beans, delicious freshly baked pastries, and savory gourmet food in a warm, friendly atmosphere.
          </p>
          <div className="footer-socials">
            <a href="#" className="footer-social-btn" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="footer-social-btn" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href="#" className="footer-social-btn" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#menu">Cafe Menu</a></li>
            <li><a href="#reservation">Book Table</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Support</h4>
          <ul className="footer-links">
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#blog">Blog Articles</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-col footer-newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe to get special discounts, recipe updates, and event notifications.</p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-primary" aria-label="Subscribe">
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Rose Cafe & Restaurant. All rights reserved.
        </p>
        <div className="footer-nav">
          <a href="#">Security</a>
          <a href="#">Sitemap</a>
          <a href="#">Careers</a>
        </div>
      </div>
    </footer>
  );
}
