import React from 'react';
import { Sofa, Armchair, Lamp, Utensils, Boxes, Baby, Trees, Heart, LayoutGrid, Play, Bell, ShieldCheck, Hammer, Leaf, Award, Globe } from 'lucide-react';
import videosHero from '../assets/videos_hero.png';

const Videos: React.FC = () => {
  const categories = [
    { name: "Furniture", icon: <Sofa size={24} />, active: true },
    { name: "Chairs & Seating", icon: <Armchair size={24} /> },
    { name: "Home Décor", icon: <Lamp size={24} /> },
    { name: "Kitchen & Dining", icon: <Utensils size={24} /> },
    { name: "Storage & Organizers", icon: <Boxes size={24} /> },
    { name: "Kids & Baby", icon: <Baby size={24} /> },
    { name: "Outdoor", icon: <Trees size={24} /> },
    { name: "Craftsmanship", icon: <Heart size={24} /> },
    { name: "Collections", icon: <LayoutGrid size={24} /> }
  ];

  const sections = [
    {
      title: "FURNITURE",
      videos: [
        {
          title: "Ecofriendly Furniture Options for Your Home...",
          image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=350&h=200"
        },
        {
          title: "Why Rattan is the ECO-FRIENDLY Choice for You...",
          image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=350&h=200"
        },
        {
          title: "2025 Dining Chair Trends: Modern Comfort, Style...",
          image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=350&h=200",
          hasOffer: true
        },
        {
          title: "Transform Your Space: Sustainable Wood Furniture...",
          image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=350&h=200"
        },
        {
          title: "Bamboo Daybed Designs for Modern Living",
          image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=350&h=200"
        },
        {
          title: "Handcrafted Side Tables: Small Pieces, Big Impact",
          image: "https://images.unsplash.com/photo-1532372320978-9b4d7a92b24d?auto=format&fit=crop&q=80&w=350&h=200"
        }
      ]
    },
    {
      title: "HOME DÉCOR",
      videos: [
        {
          title: "Bamboo Lanterns - Lighting with Nature",
          image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=350&h=200"
        },
        {
          title: "Wall Decor Ideas with Natural Materials",
          image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=350&h=200"
        },
        {
          title: "Storage Baskets That Keep You Organized",
          image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=350&h=200"
        },
        {
          title: "Rattan Trays - Style Meets Function",
          image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=350&h=200"
        },
        {
          title: "Boho Home Decor with Handmade Touch",
          image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=350&h=200"
        },
        {
          title: "Planters & Pots for Every Green Space",
          image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=350&h=200"
        }
      ]
    },
    {
      title: "CHAIRS & SEATING",
      videos: [
        {
          title: "Rattan Lounge Chairs - Relax in Style",
          image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=350&h=200"
        },
        {
          title: "Knitted Poufs - Cozy Comfort for Homes",
          image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=350&h=200"
        },
        {
          title: "Rattan Rocking Chairs - Timeless Comfort",
          image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=350&h=200"
        },
        {
          title: "Bamboo Stools - Simple, Strong & Stylish",
          image: "https://images.unsplash.com/photo-1501685536306-26db95fd5e38?auto=format&fit=crop&q=80&w=350&h=200"
        },
        {
          title: "Woven Dining Chairs - Elegant & Durable",
          image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=350&h=200"
        },
        {
          title: "Love Seats & Benches - Made for Togetherness",
          image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=350&h=200"
        }
      ]
    },
    {
      title: "OUTDOOR",
      videos: [
        {
          title: "Bamboo Patio Set for Outdoor Living",
          image: "https://images.unsplash.com/photo-1601058268499-e52658bdfafb?auto=format&fit=crop&q=80&w=350&h=200"
        },
        {
          title: "Hanging Chairs - Swing into Relaxation",
          image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=350&h=200"
        },
        {
          title: "Outdoor Storage Solutions",
          image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=350&h=200"
        },
        {
          title: "Sun Loungers - Comfort Under the Sun",
          image: "https://images.unsplash.com/photo-1561542320-9a18cd340469?auto=format&fit=crop&q=80&w=350&h=200"
        },
        {
          title: "Outdoor Planters - Beautiful & Durable",
          image: "https://images.unsplash.com/photo-1530631673369-bc20fdb32288?auto=format&fit=crop&q=80&w=350&h=200"
        },
        {
          title: "Bamboo Pergola - Shade with Elegance",
          image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=350&h=200"
        }
      ]
    }
  ];

  return (
    <div className="videos-page" style={{ background: '#fdfdfd', paddingBottom: '60px' }}>
      {/* Hero Section */}
      <section className="videos-hero-section" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '60px 5%', gap: '40px', background: '#fff' }}>
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
            <h4 style={{ color: 'var(--primary-green)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1.5px', margin: 0 }}>OUR VIDEOS</h4>
            <div style={{ width: '32px', height: '2px', background: 'var(--primary-green)' }}></div>
          </div>
          <h1 style={{ fontSize: '3rem', lineHeight: '1.25', fontWeight: 800, color: '#111', marginBottom: '24px' }}>Inspiration in Every Frame.<br />Crafted for You.</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', lineHeight: '1.6', maxWidth: '500px', marginBottom: '30px' }}>
            Explore ideas, craftsmanship and sustainable living through our curated video collection.
          </p>
          <div style={{ width: '100px', height: '1.5px', background: '#eaeaea' }}></div>
        </div>
        <div style={{ flex: '1.2', height: '480px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.06)' }}>
          <img src={videosHero} alt="Inspiration in Every Frame" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </section>

      {/* Browse by Category */}
      <section className="browse-category-section" style={{ padding: '40px 5%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '30px' }}>
          <div style={{ width: '50px', height: '1px', background: 'var(--primary-green)' }}></div>
          <h2 style={{ fontSize: '0.9rem', fontWeight: 700, letterSpacing: '1.5px', color: 'var(--primary-green)', textTransform: 'uppercase', margin: 0 }}>BROWSE BY CATEGORY</h2>
          <div style={{ width: '50px', height: '1px', background: 'var(--primary-green)' }}></div>
        </div>

        <div className="video-categories-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(9, 1fr)', 
          gap: '15px', 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          {categories.map((cat, idx) => (
            <div key={idx} className="video-cat-card" style={{
              background: cat.active ? '#f1f8ee' : '#fff',
              border: cat.active ? '1.5px solid var(--primary-green)' : '1.5px solid #f2f2f2',
              borderRadius: '8px',
              padding: '15px 10px',
              textAlign: 'center',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              color: cat.active ? 'var(--primary-green)' : '#555',
              fontWeight: 600,
              fontSize: '0.8rem',
              boxShadow: '0 4px 10px rgba(0,0,0,0.02)',
              transition: 'all 0.2s ease'
            }}>
              <div>{cat.icon}</div>
              <span style={{ display: 'block', lineHeight: '1.2' }}>{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Video Content Sections */}
      <div className="video-sections-container" style={{ padding: '0 5%', maxWidth: '1200px', margin: '40px auto 0' }}>
        {sections.map((section, idx) => (
          <section key={idx} className="video-section-row" style={{ marginBottom: '50px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #f2f2f2', paddingBottom: '10px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary-green)', letterSpacing: '0.5px' }}>{section.title}</h3>
              <a href="#" className="why-readmore-link" style={{ fontSize: '0.85rem', margin: 0 }}>View All <span style={{ marginLeft: '4px' }}>&rarr;</span></a>
            </div>

            <div className="video-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(6, 1fr)', 
              gap: '20px' 
            }}>
              {section.videos.map((vid, vidx) => (
                <div key={vidx} className="video-card" style={{ display: 'flex', flexDirection: 'column' }}>
                  {/* Thumbnail */}
                  <div className="video-thumbnail-container" style={{ 
                    width: '100%', 
                    aspectRatio: '1.6', 
                    borderRadius: '10px', 
                    overflow: 'hidden', 
                    position: 'relative',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                    cursor: 'pointer',
                    background: '#fcfcfc'
                  }}>
                    <img src={vid.image} alt={vid.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} />
                    
                    {/* Play Button Overlay */}
                    <div style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      right: '0',
                      bottom: '0',
                      background: 'rgba(0,0,0,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: '1',
                      transition: 'background 0.3s'
                    }}>
                      <div className="video-play-btn" style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: '#fff',
                        color: 'var(--primary-green)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
                        transition: 'transform 0.2s'
                      }}>
                        <Play size={14} fill="currentColor" style={{ marginLeft: '2px' }} />
                      </div>
                    </div>

                    {/* Special overlay for 3rd Furniture Card */}
                    {vid.hasOffer && (
                      <>
                        <div style={{
                          position: 'absolute',
                          top: '10px',
                          left: '10px',
                          background: '#000',
                          color: '#fff',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          fontSize: '0.6rem',
                          fontWeight: 700,
                          letterSpacing: '0.5px'
                        }}>BEST OFFER</div>
                        
                        <div style={{
                          position: 'absolute',
                          right: '10px',
                          top: '12px',
                          bottom: '12px',
                          width: '45%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'rgba(255,255,255,0.92)',
                          padding: '8px',
                          borderRadius: '6px',
                          textAlign: 'center',
                          boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                        }}>
                          <span style={{ fontSize: '0.55rem', fontWeight: 800, color: '#111', lineHeight: '1.25', letterSpacing: '0.2px' }}>SOPHISTICATION MEETS SEATING PERFECTION</span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Title */}
                  <h4 style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#222',
                    marginTop: '10px',
                    lineHeight: '1.4',
                    display: '-webkit-box',
                    WebkitLineClamp: '2',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    height: '2.8em'
                  }}>{vid.title}</h4>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Subscribe Callout */}
      <div className="subscribe-callout-wrapper" style={{ 
        background: '#f1f8ee', 
        borderRadius: '16px', 
        padding: '24px 40px', 
        maxWidth: '1200px',
        margin: '20px auto 50px',
        border: '1px solid rgba(76,175,80,0.15)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '40px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-green)', boxShadow: '0 2px 10px rgba(76,175,80,0.05)', flexShrink: 0 }}>
            <Play size={20} fill="currentColor" style={{ marginLeft: '2px' }} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111', margin: '0 0 4px 0' }}>Love what you see?</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', margin: 0 }}>Subscribe to our channel for more videos, craftsmanship & sustainable living.</p>
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
          boxShadow: '0 4px 12px rgba(76,175,80,0.2)',
          transition: 'all 0.2s ease'
        }}>
          Subscribe Now <Bell size={16} />
        </button>
      </div>

      {/* Bottom Features Bar */}
      <div className="videos-bottom-features" style={{ 
        borderTop: '1px solid #eaeaea', 
        paddingTop: '30px', 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '40px',
        maxWidth: '1200px',
        margin: '0 auto',
        flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-dark)' }}>
          <ShieldCheck size={18} style={{ color: 'var(--primary-green)' }} />
          <span>Eco-Friendly Products</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-dark)' }}>
          <Hammer size={18} style={{ color: 'var(--primary-green)' }} />
          <span>Handcrafted with Precision</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-dark)' }}>
          <Leaf size={18} style={{ color: 'var(--primary-green)' }} />
          <span>Sustainable Materials</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-dark)' }}>
          <Award size={18} style={{ color: 'var(--primary-green)' }} />
          <span>Supporting Artisans</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-dark)' }}>
          <Globe size={18} style={{ color: 'var(--primary-green)' }} />
          <span>Worldwide Delivery</span>
        </div>
      </div>
    </div>
  );
};

export default Videos;
