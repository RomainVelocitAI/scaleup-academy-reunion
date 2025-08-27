'use client'

import { motion } from 'framer-motion'
import { ZoomParallax } from './zoom-parallax'
import { useIsMobile } from '@/hooks/useMediaQuery'

export default function VenueSection() {
  const isMobile = useIsMobile()
  // Images du Luxe Resort
  const luxeImages = [
    { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&auto=format&fit=crop', alt: 'Le Luxe Resort Lobby' },
    { src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&auto=format&fit=crop', alt: 'Le Luxe Resort Beach' },
    { src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&auto=format&fit=crop', alt: 'Le Luxe Resort Room' },
    { src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&auto=format&fit=crop', alt: 'Le Luxe Resort Restaurant' },
    { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&auto=format&fit=crop', alt: 'Le Luxe Resort Suite' },
    { src: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=1200&auto=format&fit=crop', alt: 'Le Luxe Resort Spa' },
    { src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&auto=format&fit=crop', alt: 'Le Luxe Resort Pool' },
  ]

  return (
    <section 
      className="relative"
      style={{
        background: 'linear-gradient(180deg, #F5F5F5 0%, #FAFAFA 100%)',
        fontFamily: '"Montserrat", system-ui, -apple-system, sans-serif'
      }}
    >
      {/* Title Section */}
      <div className="relative z-10 bg-white/95 backdrop-blur">
        <motion.div 
          className="text-center py-24 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            marginBottom: '20px',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            textTransform: 'uppercase',
            color: '#0A0A0A'
          }}>
            Un cadre{' '}
            <span style={{
              background: 'linear-gradient(90deg, #D4AF37 0%, #F5E6C8 50%, #D4AF37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              exceptionnel
            </span>
          </h2>
          <p style={{
            fontSize: '1.5rem',
            color: '#374151',
            maxWidth: '900px',
            margin: '0 auto 20px',
            lineHeight: '1.5',
            fontWeight: 600
          }}>
            Le Luxe Resort & Spa
          </p>
          <p style={{
            fontSize: '1.125rem',
            color: '#6B7280',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.75'
          }}>
            Un lieu d&apos;exception pour un événement d&apos;exception. Entre océan et montagne, 
            le cadre parfait pour transformer votre vision business.
          </p>
        </motion.div>
      </div>

      {/* Zoom Parallax Gallery - Desktop only, simple grid on mobile */}
      {isMobile ? (
        <div style={{ 
          padding: '20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {luxeImages.slice(0, 4).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover' 
                }}
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <ZoomParallax images={luxeImages} />
      )}

      {/* Bottom Info Section */}
      <motion.div 
        className="relative"
        style={{ 
          paddingTop: '14px', 
          paddingBottom: '96px',
          backgroundColor: 'white'
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            textAlign: 'center',
            justifyItems: 'center',
            marginBottom: '60px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#D97706', marginBottom: '8px' }}>5★</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>Hôtel Premium</h3>
              <p style={{ color: '#6B7280' }}>Un des plus prestigieux établissements de l&apos;île</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#D97706', marginBottom: '8px' }}>150</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>Entrepreneurs</h3>
              <p style={{ color: '#6B7280' }}>Sélection exclusive de participants</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#D97706', marginBottom: '8px' }}>360°</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>Vue Océan</h3>
              <p style={{ color: '#6B7280' }}>Terrasses panoramiques pour le networking</p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <p style={{ 
              fontSize: '1.875rem', 
              fontWeight: 'bold', 
              color: '#111827', 
              marginBottom: '16px' 
            }}>
              Décembre 2025
            </p>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#6B7280',
              marginBottom: '32px'
            }}>
              Saint-Gilles-les-Bains, La Réunion
            </p>
            <div style={{ 
              display: 'inline-block',
              padding: '12px 32px',
              background: 'linear-gradient(to right, #EAB308, #D97706)',
              color: 'white',
              fontWeight: 'bold',
              borderRadius: '8px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}>
              Un weekend qui va transformer ton business
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}