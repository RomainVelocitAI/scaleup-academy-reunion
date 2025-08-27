'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProgramSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);
  
  const programme = [
    {
      horaire: "9h00 - 10h30",
      titre: "Acquisition Payante",
      intervenant: "Angelo Rappazini",
      description: "Stratégies Meta & Google Ads avancées",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      couleur: "#D4AF37"
    },
    {
      horaire: "11h00 - 12h30",
      titre: "Levée de Fonds",
      intervenant: "Rodolphe Lehoux",
      description: "Private equity et structuration financière",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
      couleur: "#F5E6C8"
    },
    {
      horaire: "14h00 - 15h30",
      titre: "Négociation B2B",
      intervenant: "Raymond Romero",
      description: "Closing de deals et grands comptes",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
      couleur: "#D4AF37"
    },
    {
      horaire: "16h00 - 17h30",
      titre: "Growth Marketing",
      intervenant: "Alexandre Lehoux",
      description: "Scaling e-commerce et CRM",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80",
      couleur: "#F5E6C8"
    },
    {
      horaire: "18h00 - 19h30",
      titre: "IA & Automatisation",
      intervenant: "Romain Cano",
      description: "Workflows automatisés et productivité",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      couleur: "#D4AF37"
    }
  ];

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    programme.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <section 
      className="relative py-16"
      style={{ 
        background: 'linear-gradient(180deg, #FAFAFA 0%, #F5F5F5 100%)',
        fontFamily: '"Montserrat", system-ui, -apple-system, sans-serif',
        marginTop: '100px'
      }}
    >
      {/* Header Section */}
      <motion.div 
        className="text-center mb-12 px-4"
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
          Programme{' '}
          <span style={{
            background: 'linear-gradient(90deg, #D4AF37 0%, #F5E6C8 50%, #D4AF37 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            intensif
          </span>
        </h2>
        <p style={{
          fontSize: '1.125rem',
          color: '#6B7280',
          maxWidth: '700px',
          margin: '0 auto',
          lineHeight: '1.75',
          paddingBottom: '40px'
        }}>
          Des sessions de 1h30 avec les meilleurs dans leur domaine. 
          Entre chaque session, 30 minutes de networking.
        </p>
      </motion.div>

      {/* Interactive Programme Cards */}
      <div className="flex justify-center items-center px-8">
        <div className="flex w-full max-w-[1200px] h-[400px] items-stretch overflow-hidden rounded-xl">
          {programme.map((session, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out cursor-pointer"
              style={{
                backgroundImage: `linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%), url('${session.image}')`,
                backgroundSize: activeIndex === index ? 'auto 110%' : 'auto 130%',
                backgroundPosition: 'center',
                opacity: animatedOptions.includes(index) ? 1 : 0,
                transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
                minWidth: '80px',
                borderRadius: '12px',
                margin: '0 2px',
                boxShadow: activeIndex === index 
                  ? '0 25px 50px rgba(0,0,0,0.3)' 
                  : '0 10px 20px rgba(0,0,0,0.1)',
                flex: activeIndex === index ? '6 1 0%' : '1 1 0%',
                zIndex: activeIndex === index ? 10 : 1,
              }}
              onClick={() => handleOptionClick(index)}
            >
              {/* Content */}
              <div className="absolute left-0 right-0" style={{ bottom: '20px', padding: '0 30px' }}>
                {/* Always visible horaire */}
                <div 
                  className="mb-3"
                  style={{
                    background: session.couleur,
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '6px',
                    fontWeight: 700,
                    fontSize: activeIndex === index ? '14px' : '11px',
                    color: '#0A0A0A',
                    transition: 'all 0.7s ease'
                  }}
                >
                  {session.horaire}
                </div>
                
                {/* Expanded content */}
                <div 
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.7s ease',
                  }}
                >
                  <h3 className="text-white font-bold text-2xl mb-2">
                    {session.titre}
                  </h3>
                  <p className="text-yellow-400 font-semibold text-lg mb-2">
                    {session.intervenant}
                  </p>
                  <p className="text-gray-300 text-base">
                    {session.description}
                  </p>
                </div>

                {/* Collapsed title */}
                {activeIndex !== index && (
                  <div 
                    className="text-white font-bold"
                    style={{
                      fontSize: '14px',
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      position: 'absolute',
                      bottom: '80px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      opacity: 0.9
                    }}
                  >
                    {session.titre}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom info */}
      <motion.div 
        className="text-center px-4"
        style={{ paddingTop: '60px' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-600 mb-8">
          + Petit-déjeuner d'accueil, pauses café et déjeuner networking inclus
        </p>
        <div className="inline-flex items-center gap-8" style={{ paddingTop: '30px' }}>
          <div className="text-center">
            <p className="text-3xl font-bold text-yellow-600">1</p>
            <p className="text-gray-600">Journée</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-yellow-600">5</p>
            <p className="text-gray-600">Masterclasses</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-yellow-600">7h30</p>
            <p className="text-gray-600">De formation</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProgramSection;