import axios from '../../api/axiosInterceptor';

export const getStats = () => axios.get('/api/stats');
