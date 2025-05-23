// frontend/src/api/axiosInterceptor.js
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) config.headers['Authorization'] = `Bearer ${accessToken}`;
  return config;
});

export default instance;