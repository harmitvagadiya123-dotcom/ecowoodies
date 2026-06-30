import React from 'react';
import { Leaf, ShieldCheck, Users, LayoutGrid } from 'lucide-react';
import craftsmanship1 from '../assets/craftsmanship_1.png';
import servicesCustomization from '../assets/services_customization.png';
import servicesQuality from '../assets/services_quality.png';
import servicesDesign from '../assets/services_design.png';

const Services: React.FC = () => {
  return (
    <div className="services-page" style={{ background: '#fdfdfd', paddingBottom: '60px', position: 'relative', overflow: 'hidden' }}>
      {/* Floating Leaf Background Decoration */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '-50px',
        opacity: '0.08',
        color: 'var(--primary-green)',
        transform: 'rotate(-15deg)',
        pointerEvents: 'none',
        zIndex: 0
      }}>
        <svg width="400" height="400" viewBox="0 0 100 100" fill="currentColor">
          <path d="M80,20 C70,10 50,15 40,25 C30,35 25,50 30,65 C35,80 50,85 60,80 C70,75 75,60 70,45 C65,30 85,25 80,20 Z M50,45 C45,35 55,25 60,35 C65,45 55,55 50,45 Z" />
        </svg>
      </div>

      {/* Header */}
      <section className="services-header" style={{ padding: '60px 5% 40px', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h4 style={{ color: 'var(--primary-green)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1.5px', marginBottom: '12px' }}>OUR SERVICES</h4>
        <h1 style={{ fontSize: '3rem', lineHeight: '1.2', fontWeight: 800, color: '#111', marginBottom: '24px' }}>Expertise. Quality.<br />Sustainability.</h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-light)', lineHeight: '1.6', maxWidth: '500px', margin: 0 }}>
          From craftsmanship to customization, every service we offer reflects our commitment to quality, innovation, and sustainability.
        </p>
      </section>

      {/* Service Cards Row */}
      <section className="services-list" style={{ padding: '0 5%', maxWidth: '1200px', margin: '20px auto 60px', display: 'flex', flexDirection: 'column', gap: '40px', position: 'relative', zIndex: 1 }}>
        
        {/* Card 1: Manufacturing and Production */}
        <div className="service-card-row" style={{ 
          background: 'white', 
          borderRadius: '16px', 
          boxShadow: '0 4px 25px rgba(0,0,0,0.02)', 
          border: '1.5px solid #f2f2f2',
          display: 'flex',
          overflow: 'hidden'
        }}>
          {/* Text Column */}
          <div style={{ width: '50%', padding: '48px', display: 'flex', flexDirection: 'column', justifyItems: 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-green)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.95rem' }}>01</div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#111', margin: 0 }}>Manufacturing and Production</h2>
            </div>
            <div style={{ width: '40px', height: '3px', background: 'var(--primary-green)', marginBottom: '24px' }}></div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-light)', lineHeight: '1.7', margin: 0 }}>
              In our Production and Manufacturing section, we take pride in our specialization in bamboo product innovation and custom product development. With a legacy of 40 years in manufacturing furniture and handicrafts, we have established ourselves as experts in indoor and outdoor rattan, cane, sarkanda, and bamboo products. Our journey began by collaborating with local artisans, and today we are renowned for our customization capabilities. We are committed to sustainability, using waste and recycling eco-friendly materials in our manufacturing process. Every product we create is not only beautifully crafted but also environmentally safe. Experience our exceptional production and manufacturing expertise as we bring your vision to life with the highest quality bamboo products.
            </p>
          </div>
          {/* Image Column */}
          <div style={{ width: '50%', height: '380px' }}>
            <img src={craftsmanship1} alt="Manufacturing and Production" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Card 2: Customization */}
        <div className="service-card-row" style={{ 
          background: 'white', 
          borderRadius: '16px', 
          boxShadow: '0 4px 25px rgba(0,0,0,0.02)', 
          border: '1.5px solid #f2f2f2',
          display: 'flex',
          overflow: 'hidden',
          flexDirection: 'row-reverse'
        }}>
          {/* Text Column */}
          <div style={{ width: '50%', padding: '48px', display: 'flex', flexDirection: 'column', justifyItems: 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-green)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.95rem' }}>02</div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#111', margin: 0 }}>Customization</h2>
            </div>
            <div style={{ width: '40px', height: '3px', background: 'var(--primary-green)', marginBottom: '24px' }}></div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-light)', lineHeight: '1.7', margin: 0 }}>
              Our Customization Product process is the heart of our business. With decades of experience, we specialize in bamboo product innovation and custom development. Collaborating with local artisans, we have carved a niche in delivering a meticulously tailored and customer-centric furniture and handicrafts using rattan, cane, sarkanda, and bamboo. Our dedication to customization ensures that 80% of our portfolio is tailored to your preferences. We take pride in our sustainable approach, using waste and recyclable materials to create environmentally safe products.
            </p>
          </div>
          {/* Image Column */}
          <div style={{ width: '50%', height: '380px' }}>
            <img src={servicesCustomization} alt="Customization" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Card 3: Quality Control */}
        <div className="service-card-row" style={{ 
          background: 'white', 
          borderRadius: '16px', 
          boxShadow: '0 4px 25px rgba(0,0,0,0.02)', 
          border: '1.5px solid #f2f2f2',
          display: 'flex',
          overflow: 'hidden'
        }}>
          {/* Text Column */}
          <div style={{ width: '50%', padding: '48px', display: 'flex', flexDirection: 'column', justifyItems: 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-green)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.95rem' }}>03</div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#111', margin: 0 }}>Quality Control</h2>
            </div>
            <div style={{ width: '40px', height: '3px', background: 'var(--primary-green)', marginBottom: '24px' }}></div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-light)', lineHeight: '1.7', margin: 0 }}>
              In our Quality Control section, we prioritize delivering flawless products by implementing rigorous testing and assurance measures at every stage of production. We understand the importance of ensuring that our customers receive the highest quality bamboo furniture and handicrafts. From the initial stages of material selection to the final inspection before packaging, our dedicated team conducts comprehensive quality checks to minimize defects and ensure exceptional craftsmanship. We employ advanced testing techniques and adhere to strict industry standards to guarantee that each item meets our stringent quality criteria. Our uncompromising focus on quality control process, we strive to provide you with products that not only elevate your lives, allowing you to enjoy the beauty and durability of our creations with complete confidence.
            </p>
          </div>
          {/* Image Column */}
          <div style={{ width: '50%', height: '380px' }}>
            <img src={servicesQuality} alt="Quality Control" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Card 4: Design and Development */}
        <div className="service-card-row" style={{ 
          background: 'white', 
          borderRadius: '16px', 
          boxShadow: '0 4px 25px rgba(0,0,0,0.02)', 
          border: '1.5px solid #f2f2f2',
          display: 'flex',
          overflow: 'hidden',
          flexDirection: 'row-reverse'
        }}>
          {/* Text Column */}
          <div style={{ width: '50%', padding: '48px', display: 'flex', flexDirection: 'column', justifyItems: 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-green)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.95rem' }}>04</div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#111', margin: 0 }}>Design and Development</h2>
            </div>
            <div style={{ width: '40px', height: '3px', background: 'var(--primary-green)', marginBottom: '24px' }}></div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-light)', lineHeight: '1.7', margin: 0 }}>
              In our Design and Development section, we bring decades of expertise in bamboo product innovation to create exceptional furniture and handicrafts. Our team of skilled artisans specializes in crafting indoor and outdoor products using rattan, cane, sarkanda, and bamboo. With a focus on sustainability, we collaborate closely with clients to deliver tailored solutions that reflect their unique style and preferences. By using waste and recyclable materials, we ensure our designs are not only visually stunning but also environmentally friendly.
            </p>
          </div>
          {/* Image Column */}
          <div style={{ width: '50%', height: '380px' }}>
            <img src={servicesDesign} alt="Design and Development" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

      </section>

      {/* Bottom Service Assurance Features Bar */}
      <section className="services-assurances" style={{
        borderTop: '1px solid #eaeaea',
        paddingTop: '30px',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '24px',
        paddingLeft: '5%',
        paddingRight: '5%'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: '1', minWidth: '220px' }}>
          <div style={{ color: 'var(--primary-green)' }}><Leaf size={28} /></div>
          <div>
            <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#111', margin: '0 0 4px 0' }}>Sustainable Materials</h4>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', margin: 0 }}>Eco-friendly & responsibly sourced</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: '1', minWidth: '220px' }}>
          <div style={{ color: 'var(--primary-green)' }}><ShieldCheck size={28} /></div>
          <div>
            <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#111', margin: '0 0 4px 0' }}>Quality Assured</h4>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', margin: 0 }}>Every product is quality certified</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: '1', minWidth: '220px' }}>
          <div style={{ color: 'var(--primary-green)' }}><Users size={28} /></div>
          <div>
            <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#111', margin: '0 0 4px 0' }}>Skilled Artisans</h4>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', margin: 0 }}>40+ years of craft expertise</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: '1', minWidth: '220px' }}>
          <div style={{ color: 'var(--primary-green)' }}><LayoutGrid size={28} /></div>
          <div>
            <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#111', margin: '0 0 4px 0' }}>Custom Solutions</h4>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', margin: 0 }}>Tailored to your unique needs</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
