'use client';

import { FullScreenScrollFX } from '@/components/full-screen-scroll-fx';
import { useIsMobile } from '@/hooks/useMediaQuery';
import { motion } from 'framer-motion';

export default function Hero() {
  const isMobile = useIsMobile();
  const sections = [
    {
      id: "intro",
      background: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=1080&fit=crop&auto=format",
      leftLabel: "DÉCEMBRE 2025",
      title: "SCALEUP ACADEMY",
      rightLabel: "LA RÉUNION",
    },
    {
      id: "vision",
      background: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&h=1080&fit=crop&auto=format",
      leftLabel: "5 EXPERTS",
      title: "TRANSFORMER VOTRE VISION",
      rightLabel: "MASTERCLASSES",
    },
    {
      id: "program",
      background: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1920&h=1080&fit=crop&auto=format",
      leftLabel: "150+ ENTREPRENEURS",
      title: "48H D'EXCELLENCE",
      rightLabel: "RÉSEAU EXCLUSIF",
    },
    {
      id: "action",
      background: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop&auto=format",
      leftLabel: "PLACES LIMITÉES",
      title: "REJOIGNEZ L'ÉLITE",
      rightLabel: "INSCRIVEZ-VOUS",
    },
  ];

  // Mobile version - simpler layout without complex animations
  if (isMobile) {
    return (
      <div style={{ 
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)',
        fontFamily: '"Montserrat", system-ui, -apple-system, sans-serif',
        color: '#D4AF37'
      }}>
        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            style={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px',
              position: 'relative',
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${section.background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div style={{ textAlign: 'center', maxWidth: '90%' }}>
              <p style={{ 
                fontSize: '0.875rem', 
                marginBottom: '1rem',
                opacity: 0.9,
                letterSpacing: '0.1em'
              }}>
                {section.leftLabel}
              </p>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 8vw, 2.5rem)',
                fontWeight: 800,
                marginBottom: '1rem',
                lineHeight: 1.2,
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}>
                {section.title}
              </h2>
              <p style={{ 
                fontSize: '0.875rem',
                opacity: 0.9,
                letterSpacing: '0.1em'
              }}>
                {section.rightLabel}
              </p>
            </div>
          </motion.section>
        ))}
      </div>
    );
  }

  return (
    <FullScreenScrollFX
      sections={sections}
      header={
        <div className="text-gold">
          <span className="text-xs tracking-widest opacity-80">ÉVÉNEMENT EXCLUSIF</span>
        </div>
      }
      footer={
        <div className="text-gold">
          <span className="block text-lg">DÉCEMBRE 2025</span>
          <span className="block text-sm opacity-80">ÎLE DE LA RÉUNION</span>
        </div>
      }
      colors={{
        text: "#D4AF37", // Gold
        overlay: "rgba(0, 0, 0, 0.35)", // Overlay plus léger
        pageBg: "#0A0A0A", // Noir
        stageBg: "#000000", // Noir pur
      }}
      fontFamily='"Montserrat", system-ui, -apple-system, sans-serif'
      bgTransition="fade"
      parallaxAmount={8}
      showProgress={true}
      gap={1.5}
      gridPaddingX={3}
    />
  );
}