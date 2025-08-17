import * as request from './requester';

const BASE_URL = 'http://localhost:5000/cameras';

export const getAll = () => request.get(BASE_URL);
export const createCamera = (data) => request.post(`${BASE_URL}/create`, data);

const camerasApi = {
    getAll,
    createCamera
};

export default camerasApi;
