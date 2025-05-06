import * as request from './requester';

const BASE_URL = 'http://localhost:5000/cameras';

export const getAll = ()=> request.get(BASE_URL);

const camerasApi = {
    getAll
}

export default camerasApi;