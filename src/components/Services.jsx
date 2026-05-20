import React from 'react';
import { Coffee, UtensilsCrossed, Sparkles } from 'lucide-react';

const SERVICES_DATA = [
  {
    id: 1,
    title: 'Artisanal Coffee Brewing',
    image: '/service/ser1.jpg',
    description: 'We source high-quality organic beans globally and roast them locally. Enjoy pour-overs, nitro cold brews, and classic espressos crafted by master baristas.',
    icon: <Coffee size={24} />
  },
  {
    id: 2,
    title: 'Fine Gourmet Foods',
    image: '/service/ser2.jpg',
    description: 'Indulge in freshly baked pastries, sourdough sandwiches, wood-fired pizzas, and gourmet burgers prepared daily with local organic ingredients.',
    icon: <UtensilsCrossed size={24} />
  },
  {
    id: 3,
    title: 'Private Event Catering',
    image: '/service/ser.3.jpg',
    description: 'Host your special gatherings, birthday celebrations, or corporate meetups at our cafe, or enjoy our professional catering delivered to your venue.',
    icon: <Sparkles size={24} />
  }
];

export default function Services() {
  return (
    <section id="services">
      <div className="section-header">
        <span className="section-subtitle">What We Offer</span>
        <h2 className="section-title text-gradient">Our Special Services</h2>
      </div>

      <div className="services-grid">
        {SERVICES_DATA.map((service) => (
          <div key={service.id} className="glass-card service-card">
            <div className="service-img-wrapper">
              <img src={service.image} alt={service.title} />
              <div className="service-icon-floating">
                {service.icon}
              </div>
            </div>
            <div className="service-info">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
