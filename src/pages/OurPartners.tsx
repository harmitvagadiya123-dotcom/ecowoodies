import React from 'react';
import { Calendar, Users, Globe, Leaf } from 'lucide-react';

const OurPartners: React.FC = () => {
  return (
    <div className="partners-page" style={{ padding: '60px 5% 80px', background: '#fafbfa' }}>
      {/* Header */}
      <div className="section-header" style={{ marginBottom: '50px', textAlign: 'center' }}>
        <h4 className="section-subtitle" style={{ color: 'var(--primary-green)', letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 700, marginBottom: '12px' }}>OUR PARTNERS</h4>
        <h1 className="section-title" style={{ fontSize: '2.8rem', color: '#111', fontWeight: 800, lineHeight: 1.25, marginBottom: '16px' }}>Trusted Collaborations.<br />Global Excellence.</h1>
        <p className="section-description" style={{ maxWidth: '650px', margin: '0 auto', color: 'var(--text-light)', fontSize: '0.98rem', lineHeight: '1.6' }}>
          We are proud to collaborate with leading brands and businesses worldwide who share our values of quality, sustainability and innovation.
        </p>
      </div>

      {/* Grid of Logos */}
      <div className="partners-logo-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '24px', 
        maxWidth: '1200px', 
        margin: '0 auto 60px' 
      }}>
        {/* Logo 1: FRONTGATE */}
        <div className="partner-logo-card" style={{ background: '#fff', borderRadius: '12px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1.5px solid #f2f2f2' }}>
          <svg width="180" height="60" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 36L22 22L28 29L38 16L48 36H12Z" stroke="#333" strokeWidth="3" strokeLinejoin="round" fill="none" />
            <path d="M22 22L28 29L38 16" stroke="#FFB300" strokeWidth="3" strokeLinecap="round" />
            <text x="56" y="38" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="15" fill="#333" letterSpacing="0.5">FRONT</text>
            <text x="108" y="38" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="15" fill="#FFB300" letterSpacing="0.5">GATE</text>
          </svg>
        </div>

        {/* Logo 2: WOODAARD */}
        <div className="partner-logo-card" style={{ background: '#fff', borderRadius: '12px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1.5px solid #f2f2f2' }}>
          <svg width="180" height="60" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="90" cy="18" r="10" stroke="#8D6E63" strokeWidth="2" fill="none" />
            <path d="M85 18C85 14 95 14 95 18" stroke="#8D6E63" strokeWidth="2" fill="none" />
            <text x="90" y="44" fontFamily="'Georgia', serif" fontStyle="italic" fontWeight="bold" fontSize="21" fill="#8D6E63" textAnchor="middle" letterSpacing="1">WOODAARD</text>
          </svg>
        </div>

        {/* Logo 3: HOUER */}
        <div className="partner-logo-card" style={{ background: '#fff', borderRadius: '12px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1.5px solid #f2f2f2' }}>
          <svg width="180" height="60" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M74 34C80 20 100 20 106 34" stroke="#1976D2" strokeWidth="3" strokeLinecap="round" />
            <path d="M80 30C85 22 95 22 100 30" stroke="#00BCD4" strokeWidth="2" strokeLinecap="round" />
            <text x="90" y="45" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="14" fill="#0D47A1" textAnchor="middle">HOUER</text>
            <text x="90" y="53" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="7" fill="#666" textAnchor="middle" letterSpacing="0.5">EASY FINANCE</text>
          </svg>
        </div>

        {/* Logo 4: AC */}
        <div className="partner-logo-card" style={{ background: '#fff', borderRadius: '12px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1.5px solid #f2f2f2' }}>
          <svg width="180" height="60" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="90" y="38" fontFamily="'Georgia', serif" fontWeight="300" fontSize="36" fill="#111" textAnchor="middle">AC</text>
            <path d="M64 26C74 24 84 34 94 32" stroke="#333" strokeWidth="1" strokeLinecap="round" />
            <path d="M72 20C73 24 71 28 68 29" stroke="#333" strokeWidth="1" strokeLinecap="round" />
            <text x="90" y="48" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="6" fill="#333" textAnchor="middle" letterSpacing="0.8">ARTISANAL COLLECTION</text>
          </svg>
        </div>

        {/* Logo 5: ICHASE */}
        <div className="partner-logo-card" style={{ background: '#fff', borderRadius: '12px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1.5px solid #f2f2f2' }}>
          <svg width="180" height="60" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="34" cy="24" r="7" fill="#FFA000" />
            <path d="M34 31V37" stroke="#333" strokeWidth="2" />
            <text x="47" y="33" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="22" fill="#333" letterSpacing="-0.5">ICHASE</text>
            <text x="48" y="44" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="8" fill="#777" letterSpacing="2">HOMEMADE</text>
          </svg>
        </div>

        {/* Logo 6: HOME */}
        <div className="partner-logo-card" style={{ background: '#1c2d37', borderRadius: '12px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1.5px solid #1c2d37' }}>
          <svg width="180" height="60" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M90 14L104 26H76L90 14Z" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
            <rect x="81" y="26" width="18" height="14" stroke="#fff" strokeWidth="2.5" fill="none" />
            <text x="90" y="48" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="12" fill="#fff" textAnchor="middle" letterSpacing="2">HOME</text>
            <text x="90" y="55" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="6" fill="#8BC34A" textAnchor="middle" letterSpacing="0.8">FURNITURE</text>
          </svg>
        </div>

        {/* Logo 7: PACIFIC RESORT */}
        <div className="partner-logo-card" style={{ background: '#000', borderRadius: '12px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1.5px solid #000' }}>
          <svg width="180" height="60" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 18H38V22H30V18Z" fill="#8BC34A" />
            <text x="90" y="32" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="15" fill="#fff" textAnchor="middle" letterSpacing="0.5">PACIFIC</text>
            <text x="90" y="48" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="15" fill="#fff" textAnchor="middle" letterSpacing="0.5">RESORT</text>
          </svg>
        </div>

        {/* Logo 8: ik */}
        <div className="partner-logo-card" style={{ background: '#fff', borderRadius: '12px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1.5px solid #f2f2f2' }}>
          <svg width="180" height="60" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="90" cy="30" r="22" fill="#B08953" />
            <text x="90" y="38" fontFamily="'Georgia', serif" fontWeight="normal" fontSize="24" fill="#fff" textAnchor="middle">ik</text>
          </svg>
        </div>

        {/* Logo 9: homezone */}
        <div className="partner-logo-card" style={{ background: '#fff', borderRadius: '12px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1.5px solid #f2f2f2' }}>
          <svg width="180" height="60" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 36C22 24 38 24 38 36" stroke="#4CAF50" strokeWidth="3" strokeLinecap="round" />
            <path d="M27 33C27 27 33 27 33 33" stroke="#8BC34A" strokeWidth="2" strokeLinecap="round" />
            <text x="44" y="34" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="16" fill="#2E7D32" letterSpacing="-0.5">homezone</text>
            <text x="45" y="44" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="7" fill="#4CAF50" letterSpacing="1">ECO FURNITURE</text>
          </svg>
        </div>

        {/* Logo 10: SANIYA HOMEZ */}
        <div className="partner-logo-card" style={{ background: '#111', borderRadius: '12px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1.5px solid #111' }}>
          <svg width="180" height="60" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="90" y="32" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="24" fill="#fff" textAnchor="middle">SH</text>
            <line x1="75" y1="36" x2="105" y2="36" stroke="#FFD54F" strokeWidth="2" />
            <text x="90" y="48" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="8" fill="#FFD54F" textAnchor="middle" letterSpacing="1">SANIYA HOMEZ</text>
          </svg>
        </div>

        {/* Logo 11: BLOSTER */}
        <div className="partner-logo-card" style={{ background: '#0a0a0a', borderRadius: '12px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1.5px solid #0a0a0a' }}>
          <svg width="180" height="60" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="90" y="38" fontFamily="'Impact', 'Arial Black', sans-serif" fontWeight="900" fontSize="26" fill="#fff" textAnchor="middle" letterSpacing="1">BLOSTER</text>
            <line x1="40" y1="15" x2="40" y2="45" stroke="#fff" strokeWidth="1.5" />
            <line x1="140" y1="15" x2="140" y2="45" stroke="#fff" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Logo 12: URBAN FITTERS */}
        <div className="partner-logo-card" style={{ background: '#fff', borderRadius: '12px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1.5px solid #f2f2f2' }}>
          <svg width="180" height="60" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="90" cy="18" r="8" fill="#555" />
            <circle cx="82" cy="24" r="8" fill="#777" />
            <circle cx="98" cy="24" r="8" fill="#999" />
            <text x="90" y="44" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="11" fill="#333" textAnchor="middle" letterSpacing="1">URBAN FITTERS</text>
          </svg>
        </div>
      </div>

      {/* Stats Banner / CTA */}
      <div className="partner-banner-wrapper" style={{ 
        background: '#fff', 
        borderRadius: '16px', 
        padding: '30px 40px', 
        boxShadow: '0 4px 20px rgba(0,0,0,0.02)', 
        border: '1.5px solid #eaeaea',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '40px'
      }}>
        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: '1' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#f1f8ee', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', color: 'var(--primary-green)', flexShrink: 0, border: '1.5px solid var(--primary-green)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#111', margin: '0 0 6px 0' }}>Stronger Together.<br />Building a Sustainable Future.</h3>
            <button className="quote-btn" style={{ fontSize: '0.85rem', padding: '8px 18px', background: 'var(--primary-green)', border: 'none', borderRadius: '4px', color: 'white', fontWeight: 600, cursor: 'pointer' }} onClick={() => window.location.href = '/contact'}>Partner With Us</button>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', flex: '1.8' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Calendar size={24} style={{ color: 'var(--primary-green)', flexShrink: 0 }} />
            <div>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#111', margin: 0 }}>40+</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', margin: 0 }}>Years of Experience</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Users size={24} style={{ color: 'var(--primary-green)', flexShrink: 0 }} />
            <div>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#111', margin: 0 }}>2500+</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', margin: 0 }}>Skilled Artisans</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Globe size={24} style={{ color: 'var(--primary-green)', flexShrink: 0 }} />
            <div>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#111', margin: 0 }}>30+</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', margin: 0 }}>Countries Worldwide</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Leaf size={24} style={{ color: 'var(--primary-green)', flexShrink: 0 }} />
            <div>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#111', margin: 0 }}>80%</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', margin: 0 }}>Tailor-made Creations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
