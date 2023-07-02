import axios from 'axios';
import { authStorage } from './localStorage';

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  timeout: 10 * 1000,
});

request.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${authStorage.get()}`;
    return config;
  },
  error => Promise.reject(error)
);

request.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.success) return res;
    return Promise.reject(response);
  },
  error => Promise.reject(error)
);

export default request;
