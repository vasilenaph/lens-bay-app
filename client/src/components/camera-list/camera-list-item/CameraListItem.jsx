export default function CameraDetails() {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-gray-800 border border-gray-700 rounded-xl shadow-lg overflow-hidden">
          <img 
            src="https://magazin.photosynthesis.bg/172581-large_default/fotoaparat-canon-eos-r5.jpg" 
            alt="Canon EOS R5" 
            className="w-full h-64 object-contain bg-gray-900" 
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white">Canon EOS R5</h2>
            <p className="text-indigo-400 text-lg mt-2">$3,899</p>
  
            <ul className="text-sm text-gray-300 space-y-1 mt-4">
              <li><strong>Sensor:</strong> Full-Frame CMOS</li>
              <li><strong>Megapixels:</strong> 45 MP</li>
              <li><strong>ISO Range:</strong> 100-51200</li>
              <li><strong>Video:</strong> 8K UHD</li>
              <li><strong>Connectivity:</strong> Wi-Fi, Bluetooth</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  