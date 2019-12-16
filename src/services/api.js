import axios from 'axios';
import ActionCreator from '../store/actions';

const API_URL = `https://htmlacademy-react-2.appspot.com/six-cities`;

export const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: API_URL,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (res) => res;

  const onFail = (err) => {
    if (!err.response) {
      dispatch(ActionCreator.setError(err.message));
      throw err;
    }
    if (err.response.status === 401 || err.response.status === 403) {
      dispatch(ActionCreator.requireAuthorization(true));
      throw new Error(`unauthorized`);
    }
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
