import React from 'react';
import { Users, Leaf, ShieldCheck, Heart, Sparkles, Package, ArrowRight, Layers, Eye, Truck, LayoutGrid } from 'lucide-react';
import workshopTeam from '../assets/workshop_team.png';
import workshopDesignConcept from '../assets/workshop_design_concept.png';
import rawMaterials from '../assets/workshop_raw_materials.png';
import weaving from '../assets/workshop_weaving.png';
import finishing from '../assets/workshop_finishing.png';
import quality from '../assets/workshop_quality.png';
import packing from '../assets/workshop_packing.png';
import warehouse from '../assets/workshop_warehouse.png';
import loading from '../assets/workshop_loading.png';
import shipment from '../assets/workshop_shipment.png';
import basketImage from '../assets/woven_basket_1782452391959.png';

const Workshop: React.FC = () => {
  return (
    <div className="workshop-page" style={{ background: '#fdfdfd', paddingBottom: '60px' }}>
      
      {/* Hero Section */}
      <section className="workshop-hero-section" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '60px 5%', gap: '40px', background: '#fff' }}>
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
            <h4 style={{ color: 'var(--primary-green)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1.5px', margin: 0 }}>OUR WORKSHOP</h4>
            <div style={{ width: '32px', height: '2px', background: 'var(--primary-green)' }}></div>
          </div>
          <h1 style={{ fontSize: '3rem', lineHeight: '1.25', fontWeight: 800, color: '#111', marginBottom: '24px' }}>Crafted with Skill.<br />Built on Sustainability.</h1>
          <p style={{ fontSize: '1rem', color: 'var(--text-light)', lineHeight: '1.65', maxWidth: '500px', marginBottom: '30px' }}>
            At Ecowoodies, our workshop is where tradition meets innovation. From initial designs to responsible processes, every piece we create reflects our commitment to quality, people, and the planet.
          </p>
          
          {/* Key pillars icons list */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', maxWidth: '480px' }}>
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#f1f8ee', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-green)' }}><Users size={20} /></div>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#222' }}>Skilled Artisans</span>
            </div>
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#f1f8ee', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-green)' }}><Leaf size={20} /></div>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#222' }}>Sustainable Materials</span>
            </div>
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#f1f8ee', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-green)' }}><Heart size={20} /></div>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#222' }}>Ethical Production</span>
            </div>
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#f1f8ee', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-green)' }}><ShieldCheck size={20} /></div>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#222' }}>Quality Assured</span>
            </div>
          </div>
        </div>

        {/* Diagonal cut workshop collage on the right */}
        <div style={{ flex: '1.2', position: 'relative', height: '460px' }}>
          {/* Main team photo clip */}
          <div style={{ 
            width: '100%', 
            height: '100%', 
            borderRadius: '24px', 
            overflow: 'hidden', 
            boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
            clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)'
          }}>
            <img src={workshopTeam} alt="Ecowoodies Workshop Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          {/* Design circle inset */}
          <div style={{ 
            position: 'absolute', 
            bottom: '20px', 
            left: '-20px', 
            width: '180px', 
            height: '180px', 
            borderRadius: '50%', 
            border: '6px solid white', 
            overflow: 'hidden',
            boxShadow: '0 6px 20px rgba(0,0,0,0.1)' 
          }}>
            <img src={workshopDesignConcept} alt="CAD design close up" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Our Crafting Process Section */}
      <section className="crafting-process-section" style={{ padding: '60px 5% 40px', background: '#fafbfa', borderTop: '1px solid #f2f2f2', borderBottom: '1px solid #f2f2f2' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '16px' }}>
          <div style={{ width: '30px', height: '1.5px', background: 'var(--primary-green)' }}></div>
          <h4 style={{ color: 'var(--primary-green)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', margin: 0 }}>OUR CRAFTING PROCESS</h4>
          <div style={{ width: '30px', height: '1.5px', background: 'var(--primary-green)' }}></div>
        </div>
        
        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#111', textAlign: 'center', marginBottom: '12px' }}>From Raw Material to Remarkable Creations</h2>
        <p style={{ fontSize: '0.92rem', color: 'var(--text-light)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 50px' }}>
          A dedicated process that ensures every product is eco-friendly, durable, and beautifully handcrafted.
        </p>

        {/* Process workflow steps */}
        <div className="process-flow-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(5, 1fr)', 
          gap: '24px', 
          maxWidth: '1200px', 
          margin: '0 auto',
          position: 'relative'
        }}>
          {/* Step 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'white', border: '1.5px solid #eaeaea', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-green)', marginBottom: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
              <Leaf size={24} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--primary-green)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700 }}>1</span>
              <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#111', margin: 0 }}>Material Selection</h4>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', lineHeight: '1.5', margin: 0 }}>
              We carefully select premium rattan, cane, seagrass, bamboo, and other sustainable materials.
            </p>
            {/* Connector arrow line */}
            <div className="process-connector" style={{ position: 'absolute', top: '28px', right: '-30%', width: '45%', height: '1.5px', background: '#eaeaea', zIndex: 1 }}></div>
          </div>

          {/* Step 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'white', border: '1.5px solid #eaeaea', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-green)', marginBottom: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
              <Layers size={24} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--primary-green)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700 }}>2</span>
              <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#111', margin: 0 }}>Handcrafted by Artisans</h4>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', lineHeight: '1.5', margin: 0 }}>
              Our skilled artisans handcraft each product with precision and attention to detail.
            </p>
            {/* Connector arrow line */}
            <div className="process-connector" style={{ position: 'absolute', top: '28px', right: '-30%', width: '45%', height: '1.5px', background: '#eaeaea', zIndex: 1 }}></div>
          </div>

          {/* Step 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'white', border: '1.5px solid #eaeaea', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-green)', marginBottom: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
              <Eye size={24} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--primary-green)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700 }}>3</span>
              <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#111', margin: 0 }}>Quality Inspection</h4>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', lineHeight: '1.5', margin: 0 }}>
              Every piece undergoes strict quality checks to ensure durability and finish.
            </p>
            {/* Connector arrow line */}
            <div className="process-connector" style={{ position: 'absolute', top: '28px', right: '-30%', width: '45%', height: '1.5px', background: '#eaeaea', zIndex: 1 }}></div>
          </div>

          {/* Step 4 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'white', border: '1.5px solid #eaeaea', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-green)', marginBottom: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
              <Sparkles size={24} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--primary-green)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700 }}>4</span>
              <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#111', margin: 0 }}>Finishing & Polishing</h4>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', lineHeight: '1.5', margin: 0 }}>
              Products are finished with care to enhance beauty and long-lasting use.
            </p>
            {/* Connector arrow line */}
            <div className="process-connector" style={{ position: 'absolute', top: '28px', right: '-30%', width: '45%', height: '1.5px', background: '#eaeaea', zIndex: 1 }}></div>
          </div>

          {/* Step 5 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'white', border: '1.5px solid #eaeaea', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-green)', marginBottom: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
              <Package size={24} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--primary-green)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700 }}>5</span>
              <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#111', margin: 0 }}>Ready for You</h4>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', lineHeight: '1.5', margin: 0 }}>
              Sustainable, stylish, and functional pieces, ready to be a part of your space.
            </p>
          </div>
        </div>
      </section>

      {/* Inside Our Workshop Section */}
      <section className="inside-workshop" style={{ padding: '60px 5% 40px' }}>
        <h4 style={{ color: 'var(--primary-green)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', textAlign: 'center', marginBottom: '30px' }}>INSIDE OUR WORKSHOP</h4>
        <div className="workshop-gallery-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '24px', 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ borderRadius: '12px', height: '180px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
              <img src={rawMaterials} alt="Raw materials" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#222', textAlign: 'center', margin: 0 }}>Handcrafting with Heritage</h4>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ borderRadius: '12px', height: '180px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
              <img src={weaving} alt="Weaving process" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#222', textAlign: 'center', margin: 0 }}>Skilled Hands, Timeless Craft</h4>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ borderRadius: '12px', height: '180px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
              <img src={finishing} alt="Finishing process" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#222', textAlign: 'center', margin: 0 }}>Crafting Quality at Every Step</h4>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ borderRadius: '12px', height: '180px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
              <img src={quality} alt="Quality inspect" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#222', textAlign: 'center', margin: 0 }}>Diverse Designs, Endless Possibilities</h4>
          </div>
        </div>
      </section>

      {/* Packaging & Delivery Section */}
      <section className="packaging-delivery-section" style={{ padding: '40px 5% 60px', background: '#fafbfa', borderTop: '1px solid #f2f2f2' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h4 style={{ color: 'var(--primary-green)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>PACKAGING & DELIVERY</h4>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#111', marginBottom: '10px' }}>Carefully Packed. Delivered Safely.</h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', margin: 0 }}>We ensure every order reaches you in perfect condition, on time, every time.</p>
        </div>

        <div className="delivery-cards-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(5, 1fr)', 
          gap: '20px', 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          {/* Packaging card */}
          <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1.5px solid #f2f2f2', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '130px' }}><img src={packing} alt="Secure Packing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div style={{ padding: '15px' }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111', marginBottom: '6px' }}>Secure Packaging</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', lineHeight: '1.45', margin: 0 }}>Eco-friendly packaging in poly bags and durable cardboard boxes.</p>
            </div>
          </div>

          {/* Boxes card */}
          <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1.5px solid #f2f2f2', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '130px' }}><img src={warehouse} alt="Strong Boxes" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div style={{ padding: '15px' }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111', marginBottom: '6px' }}>Strong & Safe Boxes</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', lineHeight: '1.45', margin: 0 }}>High-quality corrugated boxes to protect during transit.</p>
            </div>
          </div>

          {/* Delivery Partners Card */}
          <div style={{ background: '#fff', borderRadius: '12px', border: '1.5px solid #f2f2f2', padding: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 10px 0' }}>DELIVERY:</h4>
            
            {/* Courier logos grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px 15px', width: '100%', margin: 'auto 0' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 900, color: '#FF5722', fontStyle: 'italic', textAlign: 'center' }}>TNT</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 900, color: '#795548', textAlign: 'center' }}>UPS</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#E91E63', fontStyle: 'italic', textAlign: 'center' }}>SF</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 900, color: '#1E88E5', fontStyle: 'italic', textAlign: 'center' }}>FedEx</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#E53935', textAlign: 'center' }}>EMS</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 900, color: '#FFB300', fontStyle: 'italic', textAlign: 'center' }}>DHL</div>
            </div>
            
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              <h4 style={{ fontSize: '0.82rem', fontWeight: 700, color: '#111', margin: '0 0 4px 0' }}>Reliable Delivery Partners</h4>
              <p style={{ fontSize: '0.7rem', color: 'var(--text-light)', lineHeight: '1.4', margin: 0 }}>We partner with trusted courier services for timely and safe delivery.</p>
            </div>
          </div>

          {/* Loading card */}
          <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1.5px solid #f2f2f2', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '130px' }}><img src={loading} alt="Careful Loading" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div style={{ padding: '15px' }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111', marginBottom: '6px' }}>Careful Loading</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', lineHeight: '1.45', margin: 0 }}>Products are handled with care and loaded securely for safe transport.</p>
            </div>
          </div>

          {/* Shipment card */}
          <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1.5px solid #f2f2f2', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '130px' }}><img src={shipment} alt="On-Time Delivery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div style={{ padding: '15px' }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111', marginBottom: '6px' }}>On-Time, Every Time</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', lineHeight: '1.45', margin: 0 }}>Fast delivery and 100% quality assurance for complete peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Let's Create Something Beautiful */}
      <section className="workshop-cta-banner" style={{ 
        background: 'var(--text-dark)', 
        borderRadius: '16px', 
        padding: '40px 50px',
        maxWidth: '1200px',
        margin: '50px auto 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '40px',
        color: 'white'
      }}>
        {/* Left column */}
        <div style={{ flex: '1.2' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, margin: '0 0 12px 0' }}>Let's Create Something Beautiful</h2>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', marginBottom: '24px', maxWidth: '450px' }}>
            Premium quality, sustainable, handcrafted products that make a difference.
          </p>
          <button style={{ 
            background: 'transparent', 
            border: '1.5px solid white', 
            borderRadius: '24px', 
            color: 'white', 
            padding: '10px 24px', 
            fontWeight: 700, 
            fontSize: '0.88rem', 
            cursor: 'pointer', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            transition: 'all 0.2s'
          }} onClick={() => window.location.href = '/contact'}>
            Get in Touch <ArrowRight size={16} />
          </button>
        </div>

        {/* Middle stats & Right Woven image columns */}
        <div style={{ flex: '2', display: 'flex', alignItems: 'center', gap: '30px', justifyContent: 'space-between' }}>
          {/* Stats list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: '1' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{ color: 'var(--primary-green)', marginTop: '2px' }}><LayoutGrid size={20} /></div>
              <div>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 700, margin: '0 0 2px 0' }}>Custom Solutions</h4>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>Tailored designs for your unique needs.</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{ color: 'var(--primary-green)', marginTop: '2px' }}><Leaf size={20} /></div>
              <div>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 700, margin: '0 0 2px 0' }}>Sustainable Choice</h4>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>Eco-friendly materials for a better tomorrow.</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{ color: 'var(--primary-green)', marginTop: '2px' }}><Truck size={20} /></div>
              <div>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 700, margin: '0 0 2px 0' }}>Trusted by Many</h4>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>Join thousands of happy clients across the globe.</p>
              </div>
            </div>
          </div>

          {/* Nesting baskets photo */}
          <div style={{ width: '180px', height: '180px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
            <img src={basketImage} alt="Woven baskets" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Workshop;
