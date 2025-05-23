// frontend/src/features/schedule/scheduleAPI.js
import axios from '../../api/axiosInterceptor';

export const getSchedules = () => axios.get('/api/schedules');