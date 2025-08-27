'use client';

import { FullScreenScrollFX } from '@/components/full-screen-scroll-fx';

export default function Hero() {
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