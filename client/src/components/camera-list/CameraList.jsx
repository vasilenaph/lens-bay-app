'use client'

const cameras = [
  { id: 1, name: 'Canon EOS R5', price: '$3,899', image: 'https://magazin.photosynthesis.bg/172581-large_default/fotoaparat-canon-eos-r5.jpg' },
  { id: 2, name: 'Sony Alpha A7 IV', price: '$2,499', image: 'https://magazin.photosynthesis.bg/184352-large_default/fotoaparat-sony-a7-iv.jpg' },
  { id: 3, name: 'Nikon Z9', price: '$5,499', image: 'https://magazin.photosynthesis.bg/184648-large_default/fotoaparat-nikon-z9.jpg' },
  { id: 4, name: 'Fujifilm X-T4', price: '$1,699', image: 'https://magazin.photosynthesis.bg/170509-large_default/fujifilm-x-t4-black-body.jpg' },
  { id: 5, name: 'Panasonic Lumix S5', price: '$1,997', image: 'https://magazin.photosynthesis.bg/173404-large_default/fotoaparat-panasonic-lumix-s5.jpg' },
  { id: 6, name: 'Leica Q2', price: '$5,795', image: 'https://magazin.photosynthesis.bg/164692-large_default/fotoaparat-leica-q2.jpg' },
]

export default function Cameras() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center">

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto pt-24 px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-10">Available Cameras</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {cameras.map((camera) => (
            <div key={camera.id} className="border border-gray-700 rounded-lg shadow-lg overflow-hidden bg-gray-800">
              <img 
                src={camera.image} 
                alt={camera.name} 
                className="w-full h-64 object-contain bg-gray-900" 
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{camera.name}</h3>
                <p className="text-gray-400 mt-2">{camera.price}</p>
                <a href="#" className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-500">
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
