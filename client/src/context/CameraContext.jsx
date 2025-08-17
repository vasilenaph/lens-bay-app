import { createContext, useContext, useState } from "react";

const CameraContext = createContext();

export function CameraProvider({ children }) {
  const [cameras, setCameras] = useState(() => {
    const saved = localStorage.getItem("cameras");
    return saved ? JSON.parse(saved) : [];
  });

  const addCamera = (camera) => {
    setCameras(prev => {
      const updated = [...prev, camera];

      localStorage.setItem("cameras", JSON.stringify(updated)); // save to localStorage

      return updated;
    });
  };

  return (
    <CameraContext.Provider value={{ cameras, addCamera }}>
      {children}
    </CameraContext.Provider>
  );
}

export function useCameras() {
  return useContext(CameraContext);
}
