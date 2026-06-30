import React from 'react';
import { Leaf, ArrowRight, Quote, HeartHandshake, Calendar, Users, Globe, Package, Trash2, Factory, Footprints } from 'lucide-react';
import whyUsHero from '../assets/why_us_hero.png';
import craftsmanship1 from '../assets/craftsmanship_1.png';
import craftsmanship2 from '../assets/craftsmanship_2.png';
import craftsmanship3 from '../assets/craftsmanship_3.png';
import ecoFriendly from '../assets/eco_friendly.png';

const WhyUs: React.FC = () => {
  const teamMembers = [
    {
      name: "Tanu Kapoor",
      role: "Executive VP/ Import/ Export",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Mohit Sachdeva",
      role: "Head - Sales & Marketing",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Rahul Gautam",
      role: "Director of Sales and Business Development",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Rajeev",
      role: "Export Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Pooja Anand",
      role: "International Sales Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Jyoti Dabral",
      role: "Head - Design & Product Innovation",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Sunita Dhar",
      role: "Digital Marketing Specialist",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Pallavi Ahuja",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Sonia Singh",
      role: "Chief Product Strategy Officer",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Parth Kumar",
      role: "Operation Head",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  return (
    <div className="why-us-page">
      {/* Hero Section */}
      <section className="why-hero-section">
        <div className="why-hero-content">
          <div className="subtitle-container">
            <h4 className="why-subtitle">WHY CHOOSE ECOWOODIES</h4>
            <div className="subtitle-line"></div>
          </div>
          <h1 className="why-title">Crafted by Nature.<br />Inspired by People.</h1>
          <p className="why-description">
            Bringing the beauty of bamboo and cane to homes across the world with purpose and passion.
          </p>
          <div className="hero-decoration-line"></div>
        </div>
        <div className="why-hero-image-container">
          <img src={whyUsHero} alt="Crafted by Nature" className="why-hero-image" />
        </div>
      </section>

      {/* Who We Are & Our Story */}
      <section className="who-we-are-story-section">
        <div className="why-two-columns">
          {/* Who We Are */}
          <div className="why-col">
            <div className="col-header">
              <div className="leaf-icon-circle">
                <Leaf size={20} />
              </div>
              <h2>Who We Are</h2>
            </div>
            <div className="col-body">
              <p>
                At Ecowoodies, we are proud to be specialists in the innovation and development of bamboo products. With over 40 years of experience, we have honed our skills in manufacturing furniture and handicrafts using various materials such as indoor/outdoor rattan, cane, sarkanda, and bamboo.
              </p>
              <p>
                Our journey began with a vision to incorporate the talents of local artisans from villages, fostering a sense of community and collaboration. Today, we are renowned for our expertise in customizing products according to our clients' unique preferences and requirements.
              </p>
              <p>
                In fact, 80% of our portfolio consists of tailor-made creations, showcasing our dedication to personalized craftsmanship. One of our core principles is a commitment to sustainability and environmental responsibility.
              </p>
              <a href="/about" className="why-readmore-link">
                Learn more about us <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Our Story */}
          <div className="why-col">
            <div className="col-header">
              <div className="leaf-icon-circle">
                <Leaf size={20} />
              </div>
              <h2>Our Story</h2>
            </div>
            <div className="col-body">
              <p>
                Our family has been deeply rooted in the rattan and cane furniture business. This passion for crafting exquisite furniture has been passed down through generations, as our ancestors established a legacy in this industry.
              </p>
              <p>
                Ten years ago, we embarked on a new chapter in our journey by embracing the digital era and venturing into online sales. With the digital platform opening up global opportunities, we took the bold step of exporting our products overseas.
              </p>
              <p>
                This decision has not only expanded our business horizons but has also enabled us to share the beauty of rattan and cane furniture with customers from different countries.
              </p>
              <a href="/about" className="why-readmore-link">
                Read full story <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Craftsmanship */}
      <section className="why-craftsmanship-section">
        <div className="why-two-columns">
          {/* Text and Quote */}
          <div className="why-col text-col">
            <div className="col-header">
              <div className="leaf-icon-circle">
                <Leaf size={20} />
              </div>
              <h2>Our Craftsmanship</h2>
            </div>
            <div className="col-body">
              <p>
                Ecowoodies is a mechanized stage for a part of the world's most renowned and most puzzling specialty structures. In order to preserve, showcase and share the talent of Indian artisans with the world. We want to have the choice to raise the pride of the Indian expert in our own specific way and energize an interest and support for an amazing practice of specialty that crosses hundreds of years and spreads across the length and breadth of the land.
              </p>
              <p>
                To hundreds and thousands of Indian craftsmen, blend of utility and style gets handed out with practically no issues.
              </p>
              
              <div className="craft-quote-box">
                <div className="quote-icon-container">
                  <Quote size={24} />
                </div>
                <p className="quote-text">
                  We believe that with beautiful products and fair wages, a wonderful world is possible
                </p>
              </div>
            </div>
          </div>

          {/* Craft Images Grid */}
          <div className="why-col images-col">
            <div className="craft-images-grid">
              <div className="craft-img-large">
                <img src={craftsmanship1} alt="Weaving basket" />
              </div>
              <div className="craft-img-small-row">
                <div className="craft-img-small">
                  <img src={craftsmanship2} alt="Weaving chair frame" />
                </div>
                <div className="craft-img-small">
                  <img src={craftsmanship3} alt="Hands weaving" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Encouraging Environmentally Conscious Decisions */}
      <section className="why-environment-section">
        <div className="why-two-columns align-items-center">
          {/* Image */}
          <div className="why-col eco-image-col">
            <img src={ecoFriendly} alt="Eco Friendly Card" className="eco-friendly-image" />
          </div>

          {/* Text and Features */}
          <div className="why-col eco-text-col">
            <div className="col-header">
              <div className="leaf-icon-circle">
                <Leaf size={20} />
              </div>
              <h2>Encouraging Environmentally Conscious Decisions</h2>
            </div>
            <div className="col-body">
              <p>
                Making mindfulness for cradle is inseparably connected with advancing natural decisions with a couple of exemptions. We give a valiant effort to elevate eco-accommodating decisions to the most ideal degrees.
              </p>
              <p>
                At the core of our business philosophy is the utilization of waste and recyclable materials in our manufacturing process. We transform discarded materials into exquisite furniture but also contribute to a healthier planet.
              </p>
              <p>
                We believe that by embracing sustainable practices, we can create beautiful furniture without compromising the well-being of our planet.
              </p>

              <div className="eco-features-grid">
                <div className="eco-feature-item">
                  <div className="eco-feature-icon">
                    <Leaf size={20} />
                  </div>
                  <span>Sustainable Materials</span>
                </div>
                <div className="eco-feature-item">
                  <div className="eco-feature-icon">
                    <Factory size={20} />
                  </div>
                  <span>Eco-friendly Production</span>
                </div>
                <div className="eco-feature-item">
                  <div className="eco-feature-icon">
                    <Trash2 size={20} />
                  </div>
                  <span>Waste Reduction</span>
                </div>
                 <div className="eco-feature-item">
                  <div className="eco-feature-icon">
                    <Footprints size={20} />
                  </div>
                  <span>Lower Carbon Footprint</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="why-team-section">
        <div className="team-header">
          <h1>Meet Our Team</h1>
          <div className="diamond-divider">
            <div className="divider-line"></div>
            <div className="divider-diamond"></div>
            <div className="divider-line"></div>
          </div>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="member-image-container">
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Let's build a sustainable future together banner */}
      <section className="why-stats-banner">
        <div className="stats-banner-container">
          <div className="banner-cta">
            <div className="handshake-icon-container">
              <HeartHandshake size={32} />
            </div>
            <div className="cta-text-wrapper">
              <h2>Let's build a sustainable future together.</h2>
              <p>Partner with Ecowoodies.</p>
              <button className="cta-touch-btn" onClick={() => window.location.href = '/contact'}>Get in Touch</button>
            </div>
          </div>

          <div className="banner-stats">
            <div className="stat-box">
              <Calendar size={28} className="stat-icon" />
              <div className="stat-numbers">
                <h3>40+</h3>
                <p>Years of Experience</p>
              </div>
            </div>
            <div className="stat-box">
              <Users size={28} className="stat-icon" />
              <div className="stat-numbers">
                <h3>2500+</h3>
                <p>Skilled Artisans</p>
              </div>
            </div>
            <div className="stat-box">
              <Globe size={28} className="stat-icon" />
              <div className="stat-numbers">
                <h3>30+</h3>
                <p>Countries Worldwide</p>
              </div>
            </div>
            <div className="stat-box">
              <Package size={28} className="stat-icon" />
              <div className="stat-numbers">
                <h3>80%</h3>
                <p>Tailor-made Creations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
