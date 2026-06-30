import React from 'react';
import { Leaf } from 'lucide-react';
import designerViren from '../assets/designer_viren.png';
import designerMonika from '../assets/designer_monika.png';

const OurDesigners: React.FC = () => {
  return (
    <div className="designers-page" style={{ padding: '60px 5% 80px', background: '#fdfdfd' }}>
      {/* Header */}
      <div className="section-header" style={{ marginBottom: '50px', textAlign: 'center' }}>
        <h4 className="section-subtitle" style={{ color: 'var(--primary-green)', letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 700, marginBottom: '12px' }}>OUR DESIGNERS</h4>
        <h1 className="section-title" style={{ fontSize: '2.8rem', color: '#111', fontWeight: 800, lineHeight: 1.25, marginBottom: '24px' }}>Creativity. Expertise.<br />Crafted to Inspire.</h1>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-light)', fontSize: '0.98rem', lineHeight: '1.7', textAlign: 'center' }}>
          <p style={{ marginBottom: '20px' }}>
            Our team of professional furniture designers brings a wealth of creativity and expertise to our company. They are instrumental in providing innovative designs for our wide range of wooden, bamboo, and rattan products.
          </p>
          <p style={{ marginBottom: '20px' }}>
            With a keen eye for detail and a passion for craftsmanship, our designers excel in creating unique and aesthetically pleasing furniture pieces that not only meet the highest standards of quality but also align with the latest trends and design principles.
          </p>
          <p style={{ marginBottom: '0' }}>
            Their commitment to innovation and their ability to blend traditional craftsmanship with contemporary aesthetics make our furniture pieces stand out in the market.
          </p>
        </div>
      </div>

      {/* Profiles */}
      <div className="designers-list" style={{ maxWidth: '1100px', margin: '60px auto 0', display: 'flex', flexDirection: 'column', gap: '50px' }}>
        
        {/* Profile 1: Viren K */}
        <div className="designer-profile-card" style={{ 
          background: 'white', 
          borderRadius: '16px', 
          boxShadow: '0 8px 30px rgba(0,0,0,0.03)', 
          border: '1.5px solid #f2f2f2',
          display: 'flex',
          overflow: 'hidden'
        }}>
          {/* Photo Column */}
          <div style={{ width: '45%', position: 'relative', height: '480px' }}>
            <img src={designerViren} alt="Viren K" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            {/* Logo Overlay */}
            <div style={{ 
              position: 'absolute', 
              bottom: '20px', 
              left: '20px', 
              background: 'rgba(255,255,255,0.9)', 
              padding: '6px 12px', 
              borderRadius: '4px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
            }}>
              <span style={{ fontFamily: "'Georgia', serif", fontWeight: 'bold', fontSize: '1.1rem', color: '#555' }}>V</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#777', textTransform: 'uppercase', letterSpacing: '1px' }}>Viren</span>
            </div>
          </div>

          {/* Details Column */}
          <div style={{ width: '55%', padding: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#f1f8ee', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', color: 'var(--primary-green)', border: '1.5px solid var(--primary-green)' }}>
                <Leaf size={16} />
              </div>
              <div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#111', margin: 0 }}>Viren K</h2>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary-green)', textTransform: 'uppercase', letterSpacing: '1px' }}>DESIGNER</span>
              </div>
            </div>
            
            <div style={{ color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: '1.65' }}>
              <p style={{ marginBottom: '16px' }}>
                Introducing Viren, our seasoned designer who brings a wealth of expertise to the realm of furniture manufacturing. With a Bachelor and Master's degree in Fine Arts, a postgraduate degree in Law, a diploma in Naturopathy & Yoga Science, and a Diploma in Cinematography & Film making. Viren's diverse educational background fosters a multidimensional perspective to his work.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Passionate about fostering global cultural relations, Viren approaches the world with love, compassion, and forgiveness. His portfolio showcases his exceptional talent in designing art, architecture, cultural, and educational projects. Additionally, Viren is an accomplished audio. Beyond his creative pursuits, Viren is deeply committed to youth empowerment and environmental conservation. He actively engages in a transformative project in Ladakh Himalaya.
              </p>
              <p style={{ marginBottom: 0 }}>
                Viren's exceptional skills, extensive experience, and dedication to his craft make him a true master in innovative furniture products. His unique perspective and profound understanding of global cultures enable him to create designs that inspire and captivate.
              </p>
            </div>
          </div>
        </div>

        {/* Profile 2: Monika */}
        <div className="designer-profile-card" style={{ 
          background: 'white', 
          borderRadius: '16px', 
          boxShadow: '0 8px 30px rgba(0,0,0,0.03)', 
          border: '1.5px solid #f2f2f2',
          display: 'flex',
          overflow: 'hidden'
        }}>
          {/* Details Column */}
          <div style={{ width: '55%', padding: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#f1f8ee', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', color: 'var(--primary-green)', border: '1.5px solid var(--primary-green)' }}>
                <Leaf size={16} />
              </div>
              <div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#111', margin: 0 }}>Monika</h2>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary-green)', textTransform: 'uppercase', letterSpacing: '1px' }}>DESIGNER</span>
              </div>
            </div>
            
            <div style={{ color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: '1.65' }}>
              <p style={{ marginBottom: '16px' }}>
                Monika is a highly skilled and accomplished furniture designer with a passion for innovation and creativity. With over a decade of experience in the industry, she brings a unique blend of artistic vision and functional expertise to her work.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Monika holds a Bachelor's degree in Fine Arts with a specialization in Applied Art, as well as a Master's degree in Fine Arts with a focus on graphics designing. She is currently pursuing her PhD in Applied Arts from Delhi University.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Monika's impressive portfolio includes working on prestigious projects such as the National Cancer Institute for Department and serving as an art director for canteen designing for the Korean embassy. Monika has conducted workshops for the Center for Cultural Resources and Training (CCRT) and has been a freelance columnist for Art Times Newspaper. Additionally, she has showcased her artwork in numerous exhibitions and workshops across the country.
              </p>
              <p style={{ marginBottom: 0 }}>
                With a deep understanding of design principles and a commitment to delivering exceptional results, Monika continues to push the boundaries of furniture innovation. Her ability to blend aesthetics with functionality is evident in every piece she designs is not only visually striking but also practical for everyday use. Monika's passion for her craft, coupled with her extensive experience, makes her an invaluable asset to our furniture design team.
              </p>
            </div>
          </div>

          {/* Photo Column */}
          <div style={{ width: '45%', position: 'relative', height: '480px' }}>
            <img src={designerMonika} alt="Monika" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default OurDesigners;
