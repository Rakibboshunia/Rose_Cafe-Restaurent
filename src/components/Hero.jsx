import React from 'react';
import { ChevronRight, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    
    <section id="home" className="hero-section">
      <div className="hero-content animate-fade-in-up">
        <div className="hero-rating-badge">
          <span className="stars">★★★★★</span>
          <span className="badge-text">4.9 Rated (1,200+ Reviews)</span>
        </div>
        
        <span className="hero-tagline">Now You Can Feel The Energy</span>
        <h1 className="hero-title text-gradient">
          Start Your Day With A <br />
          Perfect <span>Black Coffee</span>
        </h1>
        <p className="hero-description">
          Welcome to Rose Cafe, where every brew is crafted with passion. Experience the finest selection of roasted beans, artisanal pastries, and savory meals in a cozy, elegant atmosphere.
        </p>
        <div className="hero-buttons">
          <a href="#menu" className="btn-primary">
            Order Menu
            <ChevronRight size={18} />
          </a>
          <a href="#reservation" className="btn-secondary">
            <Calendar size={18} />
            Book a Table
          </a>
        </div>
      </div>

      <a href="#services" className="scroll-indicator" aria-label="Scroll down to services">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span className="scroll-text">Scroll Down</span>
      </a>
    </section>
  );
}
