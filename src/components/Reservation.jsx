
import React, { useState } from 'react';
import { Calendar, Clock, Users, Wifi, ShieldCheck, Heart } from 'lucide-react';

export default function Reservation({ onShowSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    date: '',
    time: '12:00 PM',
    notes: ''
  });

  const [errors, setErrors] = useState({});

  const timeSlots = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
    '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM'
  ];

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
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.date) newErrors.date = 'Date is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate API call success
      onShowSuccess('Reservation Confirmed!', `We look forward to hosting ${formData.name} for ${formData.guests} guests on ${formData.date} at ${formData.time}.`);
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: '2',
        date: '',
        time: '12:00 PM',
        notes: ''
      });
    }
  };

  return (
    <section id="reservation" style={{ background: 'linear-gradient(rgba(13, 9, 7, 0.95), rgba(13, 9, 7, 0.95)), url(\'/cover/cover.jpg\') center center/cover attachment-fixed' }}>
      <div className="reservation-container">
        
        <div className="reservation-info">
          <span className="section-subtitle" style={{ display: 'inline-block', marginBottom: '10px' }}>Book A Table</span>
          <h2 className="text-gradient">Experience Fine Dining & Coffee</h2>
          <p>
            Reserve your table at Rose Cafe to experience fine hospitality, premium specialty brews, and delicious meals made with love. Walk-ins are welcome, but bookings guarantee your perfect spot, especially during live music weekends!
          </p>

          <div className="reservation-features">
            <div className="reservation-feature">
              <div className="res-icon">
                <Wifi size={20} />
              </div>
              <div className="res-text">
                <h4>Free High-Speed WiFi</h4>
                <p>Perfect environment for digital nomads and remote meetings.</p>
              </div>
            </div>

            <div className="reservation-feature">
              <div className="res-icon">
                <ShieldCheck size={20} />
              </div>
              <div className="res-text">
                <h4>Safe & Private Parking</h4>
                <p>Spacious, monitored parking area for all customers.</p>
              </div>
            </div>

            <div className="reservation-feature">
              <div className="res-icon">
                <Heart size={20} />
              </div>
              <div className="res-text">
                <h4>Cozy Ambiance</h4>
                <p>Warm aesthetics, soft lighting, and live piano on Friday evenings.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel reservation-form-wrapper">
          <h3 style={{ color: 'var(--white)', fontSize: '1.8rem', marginBottom: '24px', textAlign: 'center' }}>Reservation Form</h3>
          <form className="reservation-form" onSubmit={handleSubmit}>
            
            <div className="form-group form-group-full">
              <label htmlFor="res-name">Full Name</label>
              <input
                type="text"
                id="res-name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                style={{ borderColor: errors.name ? 'var(--accent-orange)' : '' }}
              />
              {errors.name && <span style={{ color: 'var(--accent-orange)', fontSize: '0.8rem' }}>{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="res-email">Email Address</label>
              <input
                type="email"
                id="res-email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleInputChange}
                style={{ borderColor: errors.email ? 'var(--accent-orange)' : '' }}
              />
              {errors.email && <span style={{ color: 'var(--accent-orange)', fontSize: '0.8rem' }}>{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="res-phone">Phone Number</label>
              <input
                type="tel"
                id="res-phone"
                name="phone"
                placeholder="Enter phone"
                value={formData.phone}
                onChange={handleInputChange}
                style={{ borderColor: errors.phone ? 'var(--accent-orange)' : '' }}
              />
              {errors.phone && <span style={{ color: 'var(--accent-orange)', fontSize: '0.8rem' }}>{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="res-guests">Number of Guests</label>
              <select
                id="res-guests"
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
              >
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
                <option value="5">5 Persons</option>
                <option value="6">6 Persons</option>
                <option value="7+">7+ Persons (Group)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="res-date">Choose Date</label>
              <input
                type="date"
                id="res-date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                style={{ borderColor: errors.date ? 'var(--accent-orange)' : '' }}
              />
              {errors.date && <span style={{ color: 'var(--accent-orange)', fontSize: '0.8rem' }}>{errors.date}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="res-time">Choose Time</label>
              <select
                id="res-time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
              >
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>

            <div className="form-group form-group-full">
              <label htmlFor="res-notes">Special Requests / Notes</label>
              <textarea
                id="res-notes"
                name="notes"
                rows="3"
                placeholder="Dietary requirements, high-chair for baby, window seat, etc."
                value={formData.notes}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group-full" style={{ marginTop: '10px' }}>
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                <Calendar size={18} />
                Confirm Table Booking
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
