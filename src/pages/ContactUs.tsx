import React, { useState } from 'react';
import { MapPin, Phone, Mail, Building, Home, Factory, ArrowRight, MessageCircle } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: 'Alix Duc',
    phone: '+61 44444444',
    email: 'a@b.com',
    message: 'How can we help you?'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent.`);
  };

  return (
    <div className="contact-page" style={{ background: '#fdfdfd', padding: '60px 5% 80px', position: 'relative' }}>
      
      {/* Title */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '40px' }}>
        <div style={{ width: '30px', height: '1.5px', background: 'var(--primary-green)' }}></div>
        <h1 style={{ color: '#111', fontSize: '2rem', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', margin: 0 }}>SEND US A MESSAGE</h1>
        <div style={{ width: '30px', height: '1.5px', background: 'var(--primary-green)' }}></div>
      </div>

      {/* Main Container */}
      <div className="contact-main-card" style={{
        background: '#fff',
        borderRadius: '16px',
        border: '1.5px solid #f2f2f2',
        boxShadow: '0 8px 30px rgba(0,0,0,0.02)',
        maxWidth: '1100px',
        margin: '0 auto 60px',
        display: 'flex',
        overflow: 'hidden'
      }}>
        {/* Left Form Column */}
        <form onSubmit={handleSubmit} style={{ width: '55%', padding: '50px', borderRight: '1.5px solid #f2f2f2', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div style={{ display: 'flex', gap: '20px' }}>
            {/* Name Input */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#333', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: 'var(--primary-green)' }}>&#9679;</span> Name
              </label>
              <input 
                type="text" 
                name="name"
                value={formData.name} 
                onChange={handleInputChange}
                style={{
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1.5px solid #eaeaea',
                  outline: 'none',
                  fontSize: '0.9rem',
                  color: '#444'
                }}
              />
            </div>

            {/* Phone Input */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#333', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: 'var(--primary-green)' }}>&#9679;</span> Phone number
              </label>
              <input 
                type="text" 
                name="phone"
                value={formData.phone} 
                onChange={handleInputChange}
                style={{
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1.5px solid #eaeaea',
                  outline: 'none',
                  fontSize: '0.9rem',
                  color: '#444'
                }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {/* Email Input */}
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#333', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: 'var(--primary-green)' }}>&#9679;</span> Email address
            </label>
            <input 
              type="email" 
              name="email"
              value={formData.email} 
              onChange={handleInputChange}
              style={{
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1.5px solid #eaeaea',
                outline: 'none',
                fontSize: '0.9rem',
                color: '#444'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {/* Message Input */}
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#333', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: 'var(--primary-green)' }}>&#9679;</span> Message
            </label>
            <textarea 
              name="message"
              rows={4}
              value={formData.message} 
              onChange={handleInputChange}
              style={{
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1.5px solid #eaeaea',
                outline: 'none',
                fontSize: '0.9rem',
                color: '#444',
                resize: 'none'
              }}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" style={{
            background: 'var(--primary-green)',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            padding: '12px 24px',
            fontWeight: 700,
            fontSize: '0.92rem',
            cursor: 'pointer',
            alignSelf: 'center',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: '10px',
            boxShadow: '0 4px 12px rgba(76,175,80,0.2)'
          }}>
            Send Message <ArrowRight size={16} />
          </button>
        </form>

        {/* Right Info Column */}
        <div style={{ width: '45%', padding: '50px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
          
          {/* Address */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#f1f8ee', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-green)', flexShrink: 0 }}>
              <MapPin size={18} />
            </div>
            <div>
              <p style={{ fontSize: '0.88rem', color: '#333', margin: 0, fontWeight: 500, lineHeight: '1.4' }}>
                A-97, Shalimar Garden Main, Sahibabad, Ghaziabad, UP -201005, INDIA.
              </p>
            </div>
          </div>

          {/* Phone */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#f1f8ee', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-green)', flexShrink: 0 }}>
              <Phone size={18} />
            </div>
            <div>
              <p style={{ fontSize: '0.88rem', color: '#333', margin: 0, fontWeight: 500 }}>
                +91 9586722949
              </p>
            </div>
          </div>

          {/* Email */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#f1f8ee', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-green)', flexShrink: 0 }}>
              <Mail size={18} />
            </div>
            <div>
              <p style={{ fontSize: '0.88rem', color: '#333', margin: 0, fontWeight: 500 }}>
                info@ecowoodies.com
              </p>
            </div>
          </div>

          {/* Welcome Description */}
          <p style={{ fontSize: '0.82rem', color: 'var(--text-light)', lineHeight: '1.7', margin: 0, borderTop: '1px solid #f2f2f2', paddingTop: '20px' }}>
            Welcome to Ecowoodies, your one-stop-shop for high-quality bamboo and cane furniture. We understand that furniture is an important investment and we are committed to providing you with exceptional customer service. Our sales team will guide you through the entire process, from selecting the right pieces to arranging delivery and installation, ensuring a hassle-free experience. So why wait? Connect with our sales team today and discover the many benefits of our beautiful and sustainable bamboo and cane furniture. We look forward to hearing from you!
          </p>

        </div>
      </div>

      {/* Bottom Offices Row */}
      <div className="contact-offices-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {/* Bangalore Card */}
        <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '1.5px solid #f2f2f2', boxShadow: '0 4px 15px rgba(0,0,0,0.01)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#f1f8ee', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-green)' }}>
              <Building size={20} />
            </div>
            <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#111', margin: 0 }}>Marketing Office - Bangalore</h4>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.78rem', color: 'var(--text-light)', lineHeight: '1.4' }}>
              <MapPin size={14} style={{ color: 'var(--primary-green)', marginTop: '2px', flexShrink: 0 }} />
              <span>#01035, Varthur, Panathur Main Road, Whitefield, Bangalore - 560087, India</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: 'var(--text-light)' }}>
              <Phone size={14} style={{ color: 'var(--primary-green)', flexShrink: 0 }} />
              <span>+91 9310618686</span>
            </div>
          </div>
        </div>

        {/* Garh Mukteshwar Card */}
        <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '1.5px solid #f2f2f2', boxShadow: '0 4px 15px rgba(0,0,0,0.01)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#f1f8ee', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-green)' }}>
              <Home size={20} />
            </div>
            <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#111', margin: 0 }}>Workshop - Garh Mukteshwar</h4>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.78rem', color: 'var(--text-light)', lineHeight: '1.4' }}>
            <MapPin size={14} style={{ color: 'var(--primary-green)', marginTop: '2px', flexShrink: 0 }} />
            <span>No. 3/35 Ahela Basti Banu, Garh Mukteshwar, Uttar Pradesh - 245205, India</span>
          </div>
        </div>

        {/* Tripura Card */}
        <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '1.5px solid #f2f2f2', boxShadow: '0 4px 15px rgba(0,0,0,0.01)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#f1f8ee', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-green)' }}>
              <Factory size={20} />
            </div>
            <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#111', margin: 0 }}>Workshop - Tripura</h4>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.78rem', color: 'var(--text-light)', lineHeight: '1.4' }}>
            <MapPin size={14} style={{ color: 'var(--primary-green)', marginTop: '2px', flexShrink: 0 }} />
            <span>967, Business Netaji Nagar, Teliamura, Khowai, Tripura - 799205, India</span>
          </div>
        </div>
      </div>

      {/* Floating Green WhatsApp Badge */}
      <div 
        onClick={() => window.open('https://wa.me/919586722949', '_blank')}
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          zIndex: 1000,
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
          cursor: 'pointer',
          transition: 'all 0.2s'
        }}
        className="whatsapp-float-btn"
      >
        <MessageCircle size={28} fill="white" />
      </div>

    </div>
  );
};

export default ContactUs;
