import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact({ onShowSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onShowSuccess('Message Sent!', 'Thank you for contacting us. We will get back to you shortly.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  };

  return (
    <section id="contact">
      <div className="section-header">
        <span className="section-subtitle">Get In Touch</span>
        <h2 className="section-title text-gradient">Contact Us</h2>
      </div>

      <div className="contact-container">
        
        <div className="contact-details">
          <div className="glass-card contact-card">
            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin size={22} />
                </div>
                <div className="contact-info-content">
                  <h4>Our Location</h4>
                  <p>123 Coffee Street, Gourmet District, Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Phone size={22} />
                </div>
                <div className="contact-info-content">
                  <h4>Phone Number</h4>
                  <p>+880 1234 567890<br />+880 9876 543210</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Mail size={22} />
                </div>
                <div className="contact-info-content">
                  <h4>Email Address</h4>
                  <p>info@rosecafe.com<br />support@rosecafe.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card hours-card">
            <h3 className="hours-title">
              <Clock size={20} style={{ color: 'var(--accent-gold)' }} />
              Opening Hours
            </h3>
            <ul className="hours-list">
              <li className="hours-row">
                <span>Monday - Friday</span>
                <span>08:00 AM - 10:00 PM</span>
              </li>
              <li className="hours-row">
                <span>Saturday</span>
                <span>09:00 AM - 11:00 PM</span>
              </li>
              <li className="hours-row">
                <span>Sunday</span>
                <span>10:00 AM - 10:00 PM</span>
              </li>
              <li className="hours-row" style={{ borderBottom: 'none' }}>
                <span>Holidays</span>
                <span>12:00 PM - 08:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="glass-card contact-form-card">
          <h3 className="contact-form-title">Send Us A Message</h3>
          <p className="contact-form-subtitle">Have questions or feedback? Drop us a note below and our team will respond within 24 hours.</p>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleInputChange}
                style={{ borderColor: errors.name ? 'var(--accent-orange)' : '' }}
              />
              {errors.name && <span style={{ color: 'var(--accent-orange)', fontSize: '0.8rem' }}>{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email Address</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleInputChange}
                style={{ borderColor: errors.email ? 'var(--accent-orange)' : '' }}
              />
              {errors.email && <span style={{ color: 'var(--accent-orange)', fontSize: '0.8rem' }}>{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                type="text"
                id="contact-subject"
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleInputChange}
                style={{ borderColor: errors.subject ? 'var(--accent-orange)' : '' }}
              />
              {errors.subject && <span style={{ color: 'var(--accent-orange)', fontSize: '0.8rem' }}>{errors.subject}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleInputChange}
                style={{ borderColor: errors.message ? 'var(--accent-orange)' : '' }}
              />
              {errors.message && <span style={{ color: 'var(--accent-orange)', fontSize: '0.8rem' }}>{errors.message}</span>}
            </div>

            <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: '10px' }}>
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
