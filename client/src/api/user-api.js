import requester from './requester';

const BASE_URL = 'http://localhost:5000/api/users';

export const signUp = (email, password) =>
  requester.post(`${BASE_URL}/sign-up`, { email, password });

export const signIn = (email, password) =>
  requester.post(`${BASE_URL}/sign-in`, { email, password });

const usersApi = {
  signUp,
  signIn,
};

export default usersApi;
