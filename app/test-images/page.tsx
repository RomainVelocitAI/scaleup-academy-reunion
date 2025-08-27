export default function TestImages() {
  return (
    <div className="min-h-screen bg-black p-8">
      <h1 className="text-white text-2xl mb-8">Test Images Unsplash</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-white mb-2">Image 1:</p>
          <img 
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&h=1080&fit=crop"
            alt="Test 1"
            className="w-full h-64 object-cover"
          />
        </div>
        <div>
          <p className="text-white mb-2">Image 2:</p>
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
            alt="Test 2"
            className="w-full h-64 object-cover"
          />
        </div>
        <div>
          <p className="text-white mb-2">Image 3:</p>
          <img 
            src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1920&h=1080&fit=crop"
            alt="Test 3"
            className="w-full h-64 object-cover"
          />
        </div>
        <div>
          <p className="text-white mb-2">Image 4:</p>
          <img 
            src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=1920&h=1080&fit=crop"
            alt="Test 4"
            className="w-full h-64 object-cover"
          />
        </div>
      </div>
    </div>
  );
}