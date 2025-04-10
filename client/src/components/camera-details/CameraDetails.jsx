'use client'

export default function CameraDetails() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-md w-full bg-gray-800 border border-gray-700 rounded-xl shadow-lg overflow-hidden">
        {/* Image */}
        <div className="relative">
          <img
            src="https://magazin.photosynthesis.bg/172581-large_default/fotoaparat-canon-eos-r5.jpg"
            alt="Canon EOS R5"
            className="w-full h-64 object-contain bg-gray-900"
          />
        </div>

        {/* Details */}
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

          {/* Bottom Action Buttons */}
          <div className="mt-6 flex gap-3">
            <button className="flex-1 py-2 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md font-medium transition-colors flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit
            </button>
            <button className="flex-1 py-2 px-4 bg-red-600 hover:bg-red-500 text-white rounded-md font-medium transition-colors flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}