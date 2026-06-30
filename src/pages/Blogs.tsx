import React, { useState } from 'react';
import { Search, LayoutGrid, Sofa, Leaf, Lamp, Lightbulb, BookOpen, TrendingUp, Calendar, Clock, ArrowRight, ShieldCheck, Hammer, Award, Globe, Send, Play } from 'lucide-react';
import blogsHero from '../assets/videos_hero.png';

interface BlogPost {
  id: number;
  category: string;
  title: string;
  date: string;
  readTime: string;
  snippet: string;
  image: string;
}

const Blogs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Blogs');

  const categories = [
    { name: "All Blogs", icon: <LayoutGrid size={18} /> },
    { name: "Furniture Care", icon: <Sofa size={18} /> },
    { name: "Sustainability", icon: <Leaf size={18} /> },
    { name: "Home Decor", icon: <Lamp size={18} /> },
    { name: "Design Inspiration", icon: <Lightbulb size={18} /> },
    { name: "Tips & Guides", icon: <BookOpen size={18} /> },
    { name: "Trends", icon: <TrendingUp size={18} /> }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      category: "Furniture Care",
      title: "Why Handmade Bamboo & Rattan Furniture Costs More",
      date: "June 6, 2025",
      readTime: "5 min read",
      snippet: "Walking into a furniture showroom, you might wonder why that beautiful woven rattan chair costs three times more than its mass...",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=400&h=250"
    },
    {
      id: 2,
      category: "Tips & Guides",
      title: "Jute Rope Furniture: The Ultimate Guide to Style & Care",
      date: "May 31, 2025",
      readTime: "6 min read",
      snippet: "The world of interior design is witnessing a remarkable shift towards sustainable living, and at the forefront of this movement...",
      image: "https://images.unsplash.com/photo-1501685536306-26db95fd5e38?auto=format&fit=crop&q=80&w=400&h=250"
    },
    {
      id: 3,
      category: "Furniture Care",
      title: "The Ultimate Guide to Seagrass Furniture",
      date: "May 26, 2025",
      readTime: "4 min read",
      snippet: "Picture this: you walk into a room that instantly transports you to a serene coastal retreat, where natural textures dance with...",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=400&h=250"
    },
    {
      id: 4,
      category: "Design Inspiration",
      title: "7 Ways to Style Rattan Furniture in Modern Homes",
      date: "May 13, 2025",
      readTime: "8 min read",
      snippet: "Rattan furniture is making a strong comeback in modern interiors. Here are 7 stylish ways to incorporate it into your home...",
      image: "https://images.unsplash.com/photo-1601058268499-e52658bdfafb?auto=format&fit=crop&q=80&w=400&h=250"
    },
    {
      id: 5,
      category: "Sustainability",
      title: "Sustainable Furniture: Small Choices, Big Impact",
      date: "May 8, 2025",
      readTime: "5 min read",
      snippet: "Discover how choosing eco-friendly furniture helps reduce your carbon footprint and supports a greener planet...",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=400&h=250"
    },
    {
      id: 6,
      category: "Home Decor",
      title: "Natural Materials That Bring Warmth to Your Home",
      date: "May 3, 2025",
      readTime: "6 min read",
      snippet: "From bamboo to jute, natural materials add texture, warmth, and a timeless charm to any space. Here's how to use them...",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=400&h=250"
    },
    {
      id: 7,
      category: "Trends",
      title: "The Timeless Art of Rattan Weaving",
      date: "Apr 28, 2025",
      readTime: "9 min read",
      snippet: "A look into the heritage, craftsmanship, and intricate process behind rattan furniture making...",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=400&h=250"
    },
    {
      id: 8,
      category: "Home Decor",
      title: "Bamboo Furniture Ideas for Every Room",
      date: "Apr 20, 2025",
      readTime: "6 min read",
      snippet: "Explore beautiful and functional bamboo furniture ideas to enhance every corner of your home...",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=400&h=250"
    },
    {
      id: 9,
      category: "Sustainability",
      title: "Care Tips to Make Your Eco-friendly Furniture Last Longer",
      date: "Apr 15, 2025",
      readTime: "8 min read",
      snippet: "Simple care and maintenance tips to keep your bamboo, rattan, and jute furniture beautiful for years.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=400&h=250"
    }
  ];

  // Filtering Logic
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.snippet.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Blogs' || 
                            post.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="blogs-page" style={{ background: '#fdfdfd', paddingBottom: '60px' }}>
      {/* Hero Section */}
      <section className="blogs-hero-section" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '60px 5%', gap: '40px', background: '#fff' }}>
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
            <h4 style={{ color: 'var(--primary-green)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1.5px', margin: 0 }}>OUR BLOGS</h4>
            <div style={{ width: '32px', height: '2px', background: 'var(--primary-green)' }}></div>
          </div>
          <h1 style={{ fontSize: '3.2rem', lineHeight: '1.2', fontWeight: 800, color: '#111', marginBottom: '24px' }}>
            Explore Our<br />Latest <span style={{ color: 'var(--primary-green)' }}>Blogs</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', lineHeight: '1.6', maxWidth: '500px', marginBottom: '30px' }}>
            Stay inspired and informed with the latest insights, tips, and stories.
          </p>
          
          {/* Search bar */}
          <div className="blog-search-container" style={{ position: 'relative', maxWidth: '420px' }}>
            <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }}>
              <Search size={18} />
            </span>
            <input 
              type="text" 
              placeholder="Search blogs..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 20px 14px 48px',
                borderRadius: '30px',
                border: '1.5px solid #eaeaea',
                fontSize: '0.92rem',
                outline: 'none',
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                transition: 'border-color 0.2s'
              }}
            />
          </div>
        </div>
        <div style={{ flex: '1.2', height: '440px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.06)' }}>
          <img src={blogsHero} alt="Explore Our Latest Blogs" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </section>

      {/* Categories Filter Bar */}
      <section className="blogs-filter-section" style={{ padding: '20px 5% 40px' }}>
        <div className="blog-categories-bar" style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {categories.map((cat, idx) => {
            const isActive = selectedCategory === cat.name;
            return (
              <button 
                key={idx}
                onClick={() => setSelectedCategory(cat.name)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '30px',
                  border: isActive ? '1.5px solid var(--primary-green)' : '1.5px solid #eaeaea',
                  background: isActive ? 'var(--primary-green)' : '#fff',
                  color: isActive ? '#fff' : '#555',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  boxShadow: isActive ? '0 4px 12px rgba(76,175,80,0.15)' : '0 2px 5px rgba(0,0,0,0.01)',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="blogs-grid-section" style={{ padding: '0 5%', maxWidth: '1200px', margin: '0 auto 60px' }}>
        {filteredPosts.length > 0 ? (
          <div className="blogs-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px'
          }}>
            {filteredPosts.map((post) => (
              <div key={post.id} className="blog-card" style={{
                background: '#fff',
                borderRadius: '16px',
                border: '1.5px solid #f2f2f2',
                overflow: 'hidden',
                boxShadow: '0 6px 20px rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                {/* Image */}
                <div style={{ width: '100%', height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} />
                </div>
                
                {/* Content */}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: 700, 
                    color: 'var(--primary-green)', 
                    textTransform: 'uppercase', 
                    letterSpacing: '1px',
                    marginBottom: '10px',
                    display: 'inline-block'
                  }}>
                    {post.category}
                  </span>
                  
                  <h3 className="blog-title-link" style={{ 
                    fontSize: '1.15rem', 
                    fontWeight: 800, 
                    color: '#111', 
                    lineHeight: '1.35',
                    marginBottom: '12px',
                    height: '2.7em',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: '2',
                    WebkitBoxOrient: 'vertical',
                    cursor: 'pointer'
                  }}>
                    {post.title}
                  </h3>

                  {/* Metadata */}
                  <div style={{ display: 'flex', gap: '16px', color: 'var(--text-light)', fontSize: '0.75rem', marginBottom: '16px', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Calendar size={13} />
                      <span>{post.date}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Clock size={13} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <p style={{ 
                    fontSize: '0.85rem', 
                    color: 'var(--text-light)', 
                    lineHeight: '1.5', 
                    marginBottom: '20px',
                    display: '-webkit-box',
                    WebkitLineClamp: '3',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    height: '4.5em'
                  }}>
                    {post.snippet}
                  </p>

                  <div style={{ marginTop: 'auto' }}>
                    <a href="#" className="why-readmore-link" style={{ fontSize: '0.85rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px', margin: 0 }}>
                      Read More <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-light)' }}>
            <p style={{ fontSize: '1.1rem', margin: 0 }}>No blogs found matching your filters.</p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedCategory('All Blogs'); }} 
              style={{
                marginTop: '15px',
                padding: '8px 20px',
                borderRadius: '20px',
                border: 'none',
                background: 'var(--primary-green)',
                color: '#fff',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

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
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', margin: 0 }}>Subscribe to our newsletter for more ideas, craftsmanship & sustainable living.</p>
          </div>
        </div>
        
        {/* Email form */}
        <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            style={{
              padding: '12px 20px',
              borderRadius: '24px',
              border: '1.5px solid #eaeaea',
              outline: 'none',
              fontSize: '0.9rem',
              width: '260px'
            }}
          />
          <button style={{ 
            background: 'var(--primary-green)', 
            border: 'none', 
            borderRadius: '24px', 
            color: 'white', 
            padding: '12px 24px', 
            fontWeight: 700, 
            fontSize: '0.9rem', 
            cursor: 'pointer', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            boxShadow: '0 4px 12px rgba(76,175,80,0.2)',
            transition: 'all 0.2s ease'
          }}>
            Subscribe Now <Send size={14} />
          </button>
        </div>
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

export default Blogs;
