
import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Rakib Boshunia',
    role: 'Owner & Founder',
    image: '/team/team1.jpg',
    socials: { facebook: '#', twitter: '#', instagram: '#' }
  },
  {
    id: 2,
    name: 'Samantha Rose',
    role: 'Head Chef / Kitchen Manager',
    image: '/team/team2.jpg',
    socials: { facebook: '#', twitter: '#', instagram: '#' }
  },
  {
    id: 3,
    name: 'Ethan Hunt',
    role: 'Lead Roaster & Barista',
    image: '/team/team3.jpg',
    socials: { facebook: '#', twitter: '#', instagram: '#' }
  },
  {
    id: 4,
    name: 'Maya Lin',
    role: 'Head Pastry Chef',
    image: '/team/team4.jpg',
    socials: { facebook: '#', twitter: '#', instagram: '#' }
  },
  {
    id: 5,
    name: 'Oliver Queen',
    role: 'Beverage Specialist',
    image: '/team/team5.jpg',
    socials: { facebook: '#', twitter: '#', instagram: '#' }
  },
  {
    id: 6,
    name: 'Aria Stark',
    role: 'Dessert Designer',
    image: '/team/team6.jpg',
    socials: { facebook: '#', twitter: '#', instagram: '#' }
  },
  {
    id: 7,
    name: 'Lucas Scott',
    role: 'Guest Relations Host',
    image: '/team/team7.jpg',
    socials: { facebook: '#', twitter: '#', instagram: '#' }
  }
];

export default function Team() {
  return (
    <section id="team">
      <div className="section-header">
        <span className="section-subtitle">Meet Our Professionals</span>
        <h2 className="section-title text-gradient">The Culinary Dream Team</h2>
      </div>

      <div className="team-grid">
        {TEAM_MEMBERS.map((member) => (
          <div key={member.id} className="glass-card team-card">
            <div className="team-img-wrapper">
              <img src={member.image} alt={member.name} />
              
              <div className="team-socials">
                <a href={member.socials.facebook} className="team-social-link" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href={member.socials.twitter} className="team-social-link" aria-label="Twitter">
                  <Twitter size={18} />
                </a>
                <a href={member.socials.instagram} className="team-social-link" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
