'use client';

export default function TestPage() {
  const images = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=1080&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&h=1080&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1920&h=1080&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop&auto=format",
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <h1 className="text-gold text-3xl mb-8">Test des Images Unsplash</h1>
      <div className="grid grid-cols-2 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="relative">
            <h2 className="text-white mb-2">Image {idx + 1}</h2>
            <img 
              src={img}
              alt={`Test ${idx + 1}`}
              className="w-full h-64 object-cover border-2 border-gold"
              onLoad={() => console.log(`Image ${idx + 1} chargée`)}
              onError={(e) => console.error(`Erreur image ${idx + 1}:`, e)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}