"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ExpertsSection() {
  const [scrollY] = useState(0)
  const [sectionScrollProgress, setSectionScrollProgress] = useState(0)
  const [flippedCards, setFlippedCards] = useState<number[]>([])

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('experts-section')
      if (section) {
        const rect = section.getBoundingClientRect()
        const sectionTop = rect.top + window.scrollY
        const sectionHeight = rect.height
        const viewportHeight = window.innerHeight
        
        // Calculate scroll progress relative to section
        const scrollInSection = window.scrollY - sectionTop + viewportHeight
        const progress = Math.max(0, Math.min(1, scrollInSection / (sectionHeight + viewportHeight)))
        
        setSectionScrollProgress(progress)
        setScrollY(window.scrollY)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const animationProgress = Math.min(Math.max(0, (sectionScrollProgress - 0.2) / 0.5), 1)
  const expandRadius = animationProgress * 450 // Adjusted radius for medium card size

  const handleCardClick = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const experts = [
    {
      name: "Angelo Rappazini",
      role: "Ex-Chef de Pôle Meta Portugal",
      business: "Publicité digitale",
      image: "/Angelo Rappazini.webp",
      description: "Ancien responsable Portugal chez Meta. Spécialisé en acquisition payante et expansion internationale.",
      achievements: ["Budgets 7 chiffres", "15 ans d'expérience", "Multi-marchés EU"]
    },
    {
      name: "Rodolphe Lehoux", 
      role: "Spécialiste Private Equity",
      business: "M&A et Finance",
      image: "/Rodolphe Lehoux.webp",
      description: "Accompagne les entrepreneurs dans leurs levées de fonds et cessions. Structure les opérations financières.",
      achievements: ["Deals 1-10M€", "Due diligence", "Structuration financière"]
    },
    {
      name: "Raymond Romero",
      role: "Directeur Commercial Grands Comptes",
      business: "Négociation B2B",
      image: "/raymond romero.jpg",
      description: "Ancien directeur dans la presse nationale. Développement de partenariats stratégiques et formation commerciale.",
      achievements: ["Médias nationaux", "Grands comptes", "Formation vente"]
    },
    {
      name: "Alexandre Lehoux",
      role: "Consultant E-commerce",
      business: "Growth Marketing",
      image: "/Alexandre Lehoux.webp",
      description: "Accompagne les marques dans leur croissance digitale. Stratégies d'acquisition et de rétention clients.",
      achievements: ["Campagnes multi-canal", "CRM et automation", "Analyse data"]
    },
    {
      name: "Romain Cano",
      role: "Formateur Automatisation",
      business: "Tech & Productivité",
      image: "/romain cano.png",
      description: "Implémente des solutions d'automatisation pragmatiques. Focus sur le ROI et la simplicité d'usage.",
      achievements: ["Zapier & Make.com", "APIs et webhooks", "Formation équipes"]
    }
  ]

  return (
    <section 
      id="experts-section"
      className="min-h-[200vh] relative"
      style={{
        background: 'linear-gradient(180deg, #FAFAFA 0%, #F5F5F5 100%)',
        fontFamily: '"Montserrat", system-ui, -apple-system, sans-serif'
      }}
    >
      {/* Title Section */}
      <motion.div 
        className="text-center pt-24 pb-16 px-4 relative z-20"
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
          Des experts dans{' '}
          <span style={{
            background: 'linear-gradient(90deg, #D4AF37 0%, #F5E6C8 50%, #D4AF37 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            chaque domaine
          </span>
        </h2>
        <p style={{
          fontSize: '1.25rem',
          color: '#6B7280',
          maxWidth: '700px',
          margin: '0 auto',
          lineHeight: '1.75'
        }}>
          Des entrepreneurs et dirigeants qui excellent dans leur domaine. Clique sur leur photo pour en savoir plus.
        </p>
      </motion.div>

      {/* Animated Circle Section */}
      <div className="h-screen flex items-center justify-center p-8 sticky top-0" style={{ marginTop: '200px' }}>
        <div className="relative">
          <div className="w-[1200px] h-[1200px] rounded-full flex items-center justify-center">
            <div className="w-[1100px] h-[1100px] rounded-full flex items-center justify-center relative">
              <div className="w-[1000px] h-[1000px] rounded-full p-0.5 flex items-center justify-center relative"
                style={{
                  background: animationProgress > 0.5 ? 
                    'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(245, 230, 200, 0.08) 100%)' : 
                    'transparent',
                  transition: 'background 0.5s ease'
                }}
              >
                <div className="w-full h-full rounded-full flex items-center justify-center relative"
                  style={{ 
                    backgroundColor: '#FAFAFA',
                    boxShadow: animationProgress > 0.3 ? '0 25px 50px rgba(0,0,0,0.08)' : 'none',
                    transition: 'box-shadow 0.5s ease'
                  }}
                >
                  {/* Expert Cards */}
                  {experts.map((expert, index) => {
                    const angle = (index * 2 * Math.PI) / experts.length - Math.PI / 2
                    const isFlipped = flippedCards.includes(index)
                    
                    return (
                      <div
                        key={index}
                        className="absolute transition-all duration-700 ease-out"
                        style={{
                          transform: `translate(${expandRadius * Math.cos(angle)}px, ${expandRadius * Math.sin(angle)}px)`,
                          opacity: animationProgress > 0 ? 1 : 0,
                          perspective: '1000px'
                        }}
                      >
                        <div 
                          className="relative cursor-pointer"
                          onClick={() => handleCardClick(index)}
                          style={{
                            width: '320px',
                            height: '320px',
                            transformStyle: 'preserve-3d',
                            transition: 'transform 0.6s',
                            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                          }}
                        >
                          {/* Front - Image */}
                          <div 
                            className="absolute w-full h-full"
                            style={{
                              backfaceVisibility: 'hidden',
                              transform: 'rotateY(0deg)'
                            }}
                          >
                            <div className="w-full h-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl hover:shadow-3xl transition-shadow relative">
                              <img
                                src={expert.image}
                                alt={expert.name}
                                className="w-full h-full object-cover rounded-3xl"
                                style={{ objectPosition: 'center top' }}
                              />
                              {/* Name overlay */}
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent pb-2 pt-6 rounded-b-3xl">
                                <p className="text-white font-bold text-xl mb-1 text-center">{expert.name}</p>
                                <p className="text-yellow-400 text-base font-semibold text-center">{expert.business}</p>
                              </div>
                            </div>
                          </div>
                          
                          {/* Back - Info */}
                          <div 
                            className="absolute w-full h-full"
                            style={{
                              backfaceVisibility: 'hidden',
                              transform: 'rotateY(180deg)'
                            }}
                          >
                            <div className="w-full h-full rounded-3xl border-4 border-white shadow-2xl p-7 overflow-hidden"
                              style={{
                                background: 'linear-gradient(135deg, #FFFFFF 0%, #FAFAFA 100%)'
                              }}
                            >
                              <div className="h-full flex flex-col justify-center items-center text-center">
                                <p className="font-bold text-xl text-gray-900">{expert.name}</p>
                                <div className="h-4"></div>
                                <p className="text-base text-gray-600 leading-relaxed">{expert.role}</p>
                                <div className="h-3"></div>
                                <p className="text-sm text-gray-700 leading-relaxed px-2">{expert.description}</p>
                                <div className="h-6"></div>
                                <div className="space-y-2">
                                  {expert.achievements.map((achievement, i) => (
                                    <p key={i} className="text-sm text-yellow-600 font-semibold">✓ {achievement}</p>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}

                  {/* Center Content */}
                  <div
                    className={`flex flex-col items-center justify-center relative z-10 transition-all duration-700 ${
                      animationProgress > 0.7 ? "opacity-100 scale-100" : "opacity-0 scale-90"
                    }`}
                  >
                    <h3 className="text-5xl font-bold mb-4 text-center"
                      style={{
                        background: 'linear-gradient(90deg, #D4AF37 0%, #F5E6C8 50%, #D4AF37 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textTransform: 'uppercase',
                        letterSpacing: '-0.02em',
                        lineHeight: '1.1'
                      }}
                    >
                      L&apos;ÉCOSYSTÈME<br />COMPLET
                    </h3>
                    <p className="text-gray-800 text-xl font-bold mb-2 text-center">pour scaler ton business</p>
                    <p className="text-gray-600 text-center max-w-sm">
                      De l&apos;acquisition à la rétention, de la finance à l&apos;automatisation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}