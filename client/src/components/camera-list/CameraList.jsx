import { useCamerasContext } from '../../context/CameraContext';

export default function Cameras() {
  const { cameras } = useCamerasContext();

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto pt-24 px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-10">Available Cameras</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {cameras.length > 0 ? (
            cameras.map((camera, index) => (
              <div key={camera._id ?? index} className="border border-gray-700 rounded-lg shadow-lg overflow-hidden bg-gray-800">
                <img
                  src={camera.imageUrl}
                  alt={camera.title}
                  className="w-full h-64 object-contain bg-gray-900"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">{camera.title}</h3>
                  <p className="text-gray-400 mt-2">${camera.price}</p>
                  <a href={`/cameras/${camera._id}`} className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-500">
                    View Details
                  </a>
                </div>
              </div>
            ))
          ) : (
            <h3 className="text-white text-xl text-center col-span-full">No cameras added yet.</h3>
          )}
        </div>
      </div>
    </div>
  );
}
