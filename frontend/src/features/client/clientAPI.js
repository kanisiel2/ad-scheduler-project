import axios from '../../api/axiosInterceptor';

export const getClients = () => axios.get('/api/clients');
