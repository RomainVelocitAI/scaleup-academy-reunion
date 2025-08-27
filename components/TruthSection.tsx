'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function TruthSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const lineWidth = useTransform(scrollYProgress, [0.3, 0.6], ["0%", "100%"]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut" as const
      }
    }
  };

  const problemCards = [
    {
      title: "Les \"Experts\"",
      description: "Depuis combien de temps ne vivent-ils plus de leur business à ton avis ? 5 ans ? 10 ans ? Ont-ils même déjà eu un vrai business ?"
    },
    {
      title: "Leur Business",
      description: "Leur seul chiffre d'affaires ? Les formations qu'ils vendent. Leur produit ? Toi."
    },
    {
      title: "Le Contenu",
      description: "Des théories pompées sur YouTube, repackagées et vendues 2000€ la place"
    },
    {
      title: "Le Résultat",
      description: "Du blabla motivationnel qui te fait planer 2 jours, puis plus rien"
    }
  ];

  const solutionCards = [
    {
      title: "Des vrais entrepreneurs",
      description: "On vit de nos business (ads, SaaS, e-commerce), pas de formations. On est dans le game tous les jours."
    },
    {
      title: "Transparence totale",
      description: "On partage nos vraies campagnes, nos vrais résultats, nos vraies galères. Pas de bullshit."
    },
    {
      title: "Du concret",
      description: "Templates, workflows, automatisations qu'on utilise vraiment. Tu repars avec des outils, pas des concepts."
    },
    {
      title: "Applicable direct",
      description: "Lundi matin, tu peux implémenter. On t'évite les erreurs à 10K€ qu'on a déjà faites."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      style={{ 
        width: '100%',
        backgroundColor: '#FAFAFA',
        color: '#0A0A0A',
        padding: 'clamp(50px, 10vw, 100px) 20px',
        position: 'relative',
        zIndex: 10,
        marginTop: '-5vh',
        overflow: 'hidden',
        fontFamily: '"Montserrat", system-ui, -apple-system, sans-serif'
      }}
    >
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `linear-gradient(180deg, rgba(212, 175, 55, 0.03) 0%, transparent 100%)`,
        pointerEvents: 'none'
      }} />

      <motion.div 
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
          position: 'relative'
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Main Title with character animation */}
        <motion.h2 
          variants={titleVariants}
          style={{
            fontSize: 'clamp(2rem, 5vw, 5rem)',
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: '20px',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            textTransform: 'uppercase',
            fontFamily: '"Montserrat", system-ui, -apple-system, sans-serif'
          }}
        >
          Tu connais déjà{' '}
          <span style={{
            background: 'linear-gradient(90deg, #D4AF37 0%, #F5E6C8 50%, #D4AF37 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 800,
            display: 'inline-block'
          }}>
            le scénario par cœur
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          variants={itemVariants}
          style={{
            fontSize: '1.25rem',
            textAlign: 'center',
            color: '#6B7280',
            maxWidth: '900px',
            margin: '0 auto 80px',
            lineHeight: '1.75',
            fontWeight: 600
          }}
        >
          Un événement business qui promet monts et merveilles. 
          Du boost motivationnel à gogo. Des formateurs qui n&apos;ont rien vendu d&apos;autres que des formations depuis 5 ans.
          Et la semaine d&apos;après ? <strong style={{ color: '#DC2626', fontWeight: 500 }}>Retour à la case départ.</strong>
        </motion.p>

        {/* Problem Section */}
        <motion.div 
          variants={itemVariants}
          style={{
            background: '#0A0A0A',
            borderRadius: '24px',
            padding: '60px 40px',
            marginBottom: '80px',
            position: 'relative',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}
        >
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 600,
            marginBottom: '50px',
            textAlign: 'center',
            color: '#FAFAFA',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            fontFamily: '"Montserrat", system-ui, -apple-system, sans-serif'
          }}>
            Ce qu&apos;on te vend habituellement
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {problemCards.map((card, index) => (
              <motion.div 
                key={index}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  padding: '30px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Hover glow effect */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #DC2626, transparent)',
                    opacity: 0
                  }}
                  whileHover={{ opacity: 1 }}
                />
                <h4 style={{ 
                  color: '#F87171', 
                  marginBottom: '15px', 
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  letterSpacing: '0.02em'
                }}>
                  {card.title}
                </h4>
                <p style={{ 
                  color: '#9CA3AF', 
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Animated Separator */}
        <motion.div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '80px 0',
            position: 'relative'
          }}
        >
          <motion.div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              height: '1px',
              background: 'linear-gradient(90deg, transparent 0%, #D4AF37 50%, transparent 100%)',
              width: lineWidth
            }}
          />
          <motion.div
            variants={itemVariants}
            style={{
              background: '#FAFAFA',
              padding: '10px 40px',
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#D4AF37',
              letterSpacing: '0.1em',
              zIndex: 1
            }}
          >
            AVEC SCALEUP ACADEMY
          </motion.div>
        </motion.div>

        {/* Solution Section */}
        <motion.div 
          variants={itemVariants}
          style={{
            marginBottom: '80px'
          }}
        >
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 600,
            marginBottom: '50px',
            textAlign: 'center',
            color: '#0A0A0A',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            fontFamily: '"Montserrat", system-ui, -apple-system, sans-serif'
          }}>
            Ce qu&apos;on fait vraiment différemment
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {solutionCards.map((card, index) => (
              <motion.div 
                key={index}
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 25px 50px -12px rgba(212, 175, 55, 0.25)'
                }}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '30px',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
                  transition: 'box-shadow 0.3s ease'
                }}
              >
                {/* Top border accent */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, #D4AF37, #F5E6C8)',
                    transformOrigin: 'left',
                    scaleX: 0
                  }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <h4 style={{ 
                  color: '#059669', 
                  marginBottom: '15px', 
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  letterSpacing: '0.02em'
                }}>
                  {card.title}
                </h4>
                <p style={{ 
                  color: '#4B5563', 
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          variants={itemVariants}
          style={{
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(245, 230, 200, 0.05) 100%)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '24px',
            padding: '60px 40px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Animated background gradient */}
          <motion.div
            style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              right: '-50%',
              bottom: '-50%',
              background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
            }}
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <h3 style={{
            fontSize: 'clamp(2rem, 4vw, 4.5rem)',
            fontWeight: 800,
            marginBottom: '40px',
            color: '#0A0A0A',
            position: 'relative',
            zIndex: 1,
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            fontFamily: '"Montserrat", system-ui, -apple-system, sans-serif'
          }}>
            En clair ?
          </h3>
          
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#374151',
            lineHeight: '1.75',
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1
          }}>
            Une journée intense avec des entrepreneurs qui{' '}
            <strong style={{ color: '#0A0A0A', fontWeight: 500 }}>vivent vraiment de leur business</strong>.
          </p>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#374151',
            lineHeight: '1.75',
            maxWidth: '800px',
            margin: '20px auto 0',
            position: 'relative',
            zIndex: 1
          }}>
            Tu repars avec des stratégies qu&apos;on applique{' '}
            <strong style={{ color: '#0A0A0A', fontWeight: 500 }}>nous-mêmes au quotidien</strong>.
          </p>
          <p style={{
            fontSize: '1rem',
            color: '#6B7280',
            marginTop: '30px',
            letterSpacing: '0.05em',
            position: 'relative',
            zIndex: 1
          }}>
            Pas de certificat LinkedIn. Juste du ROI.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}