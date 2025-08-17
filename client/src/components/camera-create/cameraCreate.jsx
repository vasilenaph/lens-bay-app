import { useState } from 'react';
import { useCamerasContext  } from '../../context/CameraContext';

export default function CreateCamera() {
  const { addCamera } = useCamerasContext();

  const [cameraData, setCameraData] = useState({
    title: '',
    description: '',
    price: '',
    imageUrl: '',
    sensor: '',
    megapixels: '',
    isoRange: '',
    video: '',
    connectivity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCameraData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCamera(cameraData);
    setCameraData({
      title: '',
      description: '',
      price: '',
      imageUrl: '',
      sensor: '',
      megapixels: '',
      isoRange: '',
      video: '',
      connectivity: ''
    });
  };

  return (
    <div className="bg-gray-900 min-h-screen pt-24 px-4 pb-12">
      <div className="bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Add New Camera
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {Object.entries(cameraData).map(([key, value]) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
              </label>
              <input
                type="text"
                name={key}
                value={value}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-700 bg-gray-900 text-white px-4 py-2"
                required={key !== 'description'} // description is optional
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full mt-6 bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 rounded-md transition-colors duration-200"
          >
            Create Camera
          </button>
        </form>
      </div>
    </div>
  );
}
