// frontend/src/features/auth/authAPI.js
import axios from '../../api/axiosInterceptor';

export const login = (credentials) => axios.post('/api/auth/login', credentials);