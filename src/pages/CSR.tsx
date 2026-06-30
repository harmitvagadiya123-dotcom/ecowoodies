import React from 'react';
import { Leaf, Users, ShieldCheck, Heart, Globe, Handshake, ShoppingBag, TreePine, CheckCircle2, ArrowRight } from 'lucide-react';
import csrHero from '../assets/csr_hero.png';
import csrLandscape from '../assets/csr_landscape.png';
import focus1 from '../assets/workshop_warehouse.png';
import focus2 from '../assets/workshop_finishing.png';
import focus3 from '../assets/workshop_quality.png';
import focus4 from '../assets/workshop_packing.png';
import focus5 from '../assets/workshop_shipment.png';
import workshopWeaving from '../assets/workshop_weaving.png';
import workshopBulk from '../assets/workshop_bulk.png';

const CSR: React.FC = () => {
  const highlights = [
    { icon: <Users size={18} />, text: "Supporting traditional rural communities" },
    { icon: <Leaf size={18} />, text: "Promoting sustainable and ethical production" },
    { icon: <ShieldCheck size={18} />, text: "Using renewable and recyclable materials" },
    { icon: <Handshake size={18} />, text: "Building long-term community partnerships" }
  ];

  const focusAreas = [
    {
      title: "Empowering People",
      desc: "Creating fair employment opportunities and supporting artisan skills development.",
      image: focus1,
      icon: <Users size={20} />
    },
    {
      title: "Sustainable Materials",
      desc: "We use rattan, seagrass, water hyacinth, and wood from renewable sources.",
      image: focus2,
      icon: <Leaf size={20} />
    },
    {
      title: "Community Well-being",
      desc: "Investing in education, health, and basic needs for stronger communities.",
      image: focus3,
      icon: <Heart size={20} />
    },
    {
      title: "Responsible Production",
      desc: "Minimizing waste and reducing our environmental footprint at every step.",
      image: focus4,
      icon: <Globe size={20} />
    },
    {
      title: "Long-term Partnerships",
      desc: "Building trust and growth through transparent and ethical collaborations.",
      image: focus5,
      icon: <Handshake size={20} />
    }
  ];

  const impacts = [
    { icon: <Users size={24} style={{ color: 'var(--primary-green)' }} />, number: "500+", text: "Artisans & Families Empowered" },
    { icon: <ShoppingBag size={24} style={{ color: 'var(--primary-green)' }} />, number: "50,000+", text: "Handmade Products Created Annually" },
    { icon: <Leaf size={24} style={{ color: 'var(--primary-green)' }} />, number: "100%", text: "Renewable & Natural Materials Used" },
    { icon: <Globe size={24} style={{ color: 'var(--primary-green)' }} />, number: "30+", text: "Countries We Export To" },
    { icon: <TreePine size={24} style={{ color: 'var(--primary-green)' }} />, number: "1,000+", text: "Trees Planted (And Counting)" }
  ];

  return (
    <div className="csr-page" style={{ background: '#fdfdfd', paddingBottom: '60px' }}>
      
      {/* Hero Section */}
      <section className="csr-hero-section" style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'space-between', padding: '60px 5%', gap: '40px', background: '#fff' }}>
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
            <h4 style={{ color: 'var(--primary-green)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1.5px', margin: 0 }}>OUR COMMITMENT</h4>
            <div style={{ width: '32px', height: '2px', background: 'var(--primary-green)' }}></div>
          </div>
          <h1 style={{ fontSize: '3rem', lineHeight: '1.2', fontWeight: 800, color: '#111', marginBottom: '24px' }}>Crafting Impact.<br />Empowering Communities.</h1>
          <p style={{ fontSize: '1rem', color: 'var(--text-light)', lineHeight: '1.65', maxWidth: '500px', margin: 0 }}>
            At Ecowoodies, we believe business growth and community well-being go hand in hand. Through responsible practices and meaningful partnerships, we strive to create a positive impact on people and the planet.
          </p>
        </div>

        {/* Hero image and overlay card */}
        <div style={{ flex: '1.4', display: 'flex', position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.06)' }}>
          <div style={{ width: '60%', height: '400px' }}>
            <img src={csrHero} alt="Crafting impact" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          {/* Highlights panel */}
          <div style={{ width: '40%', background: 'var(--primary-green)', color: 'white', padding: '40px 30px', display: 'flex', flexDirection: 'column' }}>
            <h4 style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '8px' }}>HIGHLIGHTS</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {highlights.map((h, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.15)', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{h.icon}</div>
                  <span style={{ fontSize: '0.78rem', lineHeight: '1.4', fontWeight: 500 }}>{h.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="csr-focus-section" style={{ padding: '60px 5% 40px', background: '#fafbfa', borderTop: '1px solid #f2f2f2', borderBottom: '1px solid #f2f2f2' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '35px' }}>
          <div style={{ width: '30px', height: '1.5px', background: 'var(--primary-green)' }}></div>
          <h4 style={{ color: 'var(--primary-green)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', margin: 0 }}>OUR FOCUS AREAS</h4>
          <div style={{ width: '30px', height: '1.5px', background: 'var(--primary-green)' }}></div>
        </div>

        {/* 5 columns details */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '30px', maxWidth: '1200px', margin: '0 auto 40px' }}>
          {focusAreas.map((area, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#f1f8ee', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-green)', marginBottom: '16px', border: '1.5px solid var(--primary-green)' }}>
                {area.icon}
              </div>
              <h3 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#111', marginBottom: '10px' }}>{area.title}</h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', lineHeight: '1.5', margin: 0 }}>{area.desc}</p>
            </div>
          ))}
        </div>

        {/* 5 images row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          {focusAreas.map((area, i) => (
            <div key={i} style={{ height: '140px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
              <img src={area.image} alt={area.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="csr-impact-section" style={{ padding: '60px 5% 40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '35px' }}>
          <div style={{ width: '30px', height: '1.5px', background: 'var(--primary-green)' }}></div>
          <h4 style={{ color: 'var(--primary-green)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', margin: 0 }}>OUR IMPACT</h4>
          <div style={{ width: '30px', height: '1.5px', background: 'var(--primary-green)' }}></div>
        </div>

        <div style={{ 
          background: 'white', 
          borderRadius: '16px', 
          padding: '30px 40px', 
          boxShadow: '0 4px 25px rgba(0,0,0,0.02)', 
          border: '1.5px solid #eaeaea',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid', 
          gridTemplateColumns: 'repeat(5, 1fr)', 
          gap: '30px'
        }}>
          {impacts.map((imp, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ flexShrink: 0 }}>{imp.icon}</div>
              <div>
                <h4 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#111', margin: 0 }}>{imp.number}</h4>
                <p style={{ fontSize: '0.72rem', color: 'var(--text-light)', margin: 0, lineHeight: '1.3' }}>{imp.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="csr-approach-section" style={{ padding: '40px 5% 60px', background: '#fafbfa', borderTop: '1px solid #f2f2f2', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '50px' }}>
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
          <h4 style={{ color: 'var(--primary-green)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>OUR APPROACH</h4>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#111', lineHeight: '1.25', marginBottom: '16px' }}>Sustainable Choices.<br />Meaningful Impact.</h2>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-light)', lineHeight: '1.6', marginBottom: '24px' }}>
            From supporting artisans to choosing eco-friendly materials, every decision we make is guided by our commitment to sustainability and community.
          </p>
          
          {/* Checklists */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', fontWeight: 600, color: '#222' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--primary-green)' }} />
              <span>Ethical sourcing and fair wages</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', fontWeight: 600, color: '#222' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--primary-green)' }} />
              <span>Skill development and empowerment</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', fontWeight: 600, color: '#222' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--primary-green)' }} />
              <span>Eco-friendly production and packaging</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', fontWeight: 600, color: '#222' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--primary-green)' }} />
              <span>Transparent and long-term collaborations</span>
            </div>
          </div>

          <button style={{ 
            background: 'var(--primary-green)', 
            border: 'none', 
            borderRadius: '24px', 
            color: 'white', 
            padding: '10px 24px', 
            fontWeight: 700, 
            fontSize: '0.88rem', 
            cursor: 'pointer', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            alignSelf: 'flex-start',
            boxShadow: '0 4px 12px rgba(76,175,80,0.2)'
          }} onClick={() => window.location.href = '/about/why-us'}>
            Learn More About Us <ArrowRight size={16} />
          </button>
        </div>

        {/* 6-photo collage on the right */}
        <div style={{ flex: '1.2', position: 'relative' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '12px',
            maxWidth: '520px',
            margin: '0 auto'
          }}>
            <div style={{ height: '110px', borderRadius: '8px', overflow: 'hidden' }}><img src={workshopWeaving} alt="Weaving 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div style={{ height: '110px', borderRadius: '8px', overflow: 'hidden' }}><img src={focus3} alt="Quality inspect" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div style={{ height: '110px', borderRadius: '8px', overflow: 'hidden' }}><img src={workshopBulk} alt="Bulk rattan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div style={{ height: '110px', borderRadius: '8px', overflow: 'hidden' }}><img src={focus2} alt="Finishing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div style={{ height: '110px', borderRadius: '8px', overflow: 'hidden' }}><img src={focus1} alt="Warehouse" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div style={{ height: '110px', borderRadius: '8px', overflow: 'hidden' }}><img src={focus5} alt="Artisan carrying" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
          </div>
          
          {/* Overlay leaf badge in center */}
          <div style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            width: '60px', 
            height: '60px', 
            borderRadius: '50%', 
            background: 'white', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: 'var(--primary-green)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            border: '2px solid var(--primary-green)'
          }}>
            <Leaf size={28} />
          </div>
        </div>
      </section>

      {/* Bottom banner card Together, Let's Build a Better Tomorrow */}
      <section className="csr-footer-banner" style={{ 
        background: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${csrLandscape})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '16px', 
        padding: '50px 60px',
        maxWidth: '1200px',
        margin: '50px auto 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '40px',
        color: 'white',
        boxShadow: '0 10px 40px rgba(0,0,0,0.06)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flex: '1.5' }}>
          <div style={{ color: 'var(--primary-green)', background: 'white', width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Leaf size={32} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0 0 8px 0' }}>Together, Let's Build a Better Tomorrow</h2>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: '1.5' }}>
              We are committed to leaving a positive world for future generations through sustainable choices and meaningful impact.
            </p>
          </div>
        </div>
        <button style={{ 
          background: 'var(--primary-green)', 
          border: 'none', 
          borderRadius: '24px', 
          color: 'white', 
          padding: '12px 28px', 
          fontWeight: 700, 
          fontSize: '0.9rem', 
          cursor: 'pointer', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px',
          boxShadow: '0 4px 12px rgba(76,175,80,0.2)'
        }} onClick={() => window.location.href = '/contact'}>
          Partner With Us <ArrowRight size={16} />
        </button>
      </section>

      {/* Bottom Service Guarantees Badges */}
      <section style={{
        borderTop: '1px solid #eaeaea',
        paddingTop: '30px',
        maxWidth: '1200px',
        margin: '50px auto 0',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '24px',
        paddingLeft: '5%',
        paddingRight: '5%'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '1', minWidth: '220px' }}>
          <div style={{ color: 'var(--primary-green)' }}><Leaf size={24} /></div>
          <div>
            <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: '#111', margin: '0 0 2px 0' }}>Eco-friendly Materials</h4>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-light)', margin: 0 }}>Sustainably sourced</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '1', minWidth: '220px' }}>
          <div style={{ color: 'var(--primary-green)' }}><ShieldCheck size={24} /></div>
          <div>
            <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: '#111', margin: '0 0 2px 0' }}>Premium Quality</h4>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-light)', margin: 0 }}>Built to last</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '1', minWidth: '220px' }}>
          <div style={{ color: 'var(--primary-green)' }}><Globe size={24} /></div>
          <div>
            <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: '#111', margin: '0 0 2px 0' }}>Worldwide Delivery</h4>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-light)', margin: 0 }}>Fast & reliable</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '1', minWidth: '220px' }}>
          <div style={{ color: 'var(--primary-green)' }}><Users size={24} /></div>
          <div>
            <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: '#111', margin: '0 0 2px 0' }}>Secure Payments</h4>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-light)', margin: 0 }}>Safe & trusted</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CSR;
