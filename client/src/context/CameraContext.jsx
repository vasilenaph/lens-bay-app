// context/CameraContext.jsx
import { createContext, useState, useContext } from 'react';

const CameraContext = createContext();

export function CameraProvider({ children }) {
    const [cameras, setCameras] = useState([]);

    const addCamera = (camera) => {
        setCameras(prev => [...prev, camera]);
    };

    return (
        <CameraContext.Provider value={{ cameras, addCamera }}>
            {children}
        </CameraContext.Provider>
    );
}

export function useCamerasContext() {
    return useContext(CameraContext);
}
