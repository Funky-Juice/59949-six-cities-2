import axios from 'axios';

const apiURL = `https://htmlacademy-react-2.appspot.com/six-cities`;

export const createAPI = () => {
  const api = axios.create({
    baseURL: apiURL,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (res) => res;

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
