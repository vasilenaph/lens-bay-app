'use client'

export default function CreateCamera() {
  return (
    <div className="bg-gray-900 min-h-screen pt-24 px-4 pb-12">
      <div className="bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Add New Camera
        </h2>
        
        <form className="space-y-4">
          {/* Basic Information Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-300 border-b border-gray-700 pb-2">
              Basic Information
            </h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Camera Name
              </label>
              <input
                type="text"
                defaultValue="Canon EOS R5"
                className="w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Price
              </label>
              <input
                type="text"
                defaultValue="$3899"
                className="w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Image URL
              </label>
              <input
                type="text"
                defaultValue="https://magazin.photosynthesis.bg/172581-large_default/fotoaparat-canon-eos-r5.jpg"
                className="w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
                readOnly
              />
            </div>
          </div>

          {/* Technical Specifications Section */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-medium text-gray-300 border-b border-gray-700 pb-2">
              Technical Specifications
            </h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Sensor Type
              </label>
              <input
                type="text"
                defaultValue="Full-frame CMOS"
                className="w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Megapixels
              </label>
              <input
                type="text"
                defaultValue="45 MP"
                className="w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                ISO Range
              </label>
              <input
                type="text"
                defaultValue="100-51200 (expandable to 50-102400)"
                className="w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Video Capabilities
              </label>
              <input
                type="text"
                defaultValue="8K 30p, 4K 120p"
                className="w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Connectivity
              </label>
              <input
                type="text"
                defaultValue="Wi-Fi, Bluetooth, USB-C, HDMI"
                className="w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
                readOnly
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="w-full mt-6 bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 rounded-md transition-colors duration-200 cursor-not-allowed opacity-50"
            disabled
          >
            Create Camera
          </button>
        </form>
      </div>
    </div>
  )
}