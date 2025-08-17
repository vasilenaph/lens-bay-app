import { createContext, useContext, useEffect, useState } from "react";
import camerasApi from "../api/camera-api";

const CameraContext = createContext();

export function CameraProvider({ children }) {
  const [cameras, setCameras] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await camerasApi.getAll();
        setCameras(result);
      } catch (err) {
        console.error("Failed to fetch cameras:", err);
      }
    })();
  }, []);

  const addCamera = async (cameraData) => {
    try {
      const newCamera = await camerasApi.createCamera(cameraData);
      setCameras((prev) => [...prev, newCamera]);
    } catch (err) {
      console.error("Failed to create camera:", err);
    }
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
