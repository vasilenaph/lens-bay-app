import { useEffect, useState } from "react";
import camerasApi from '../api/camera-api';

export function useCameras() {
    const [cameras, setCameras] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await camerasApi.getAll();

            setCameras(result);
        })();
    }, []);

    return [cameras, setCameras];
}