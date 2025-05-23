// frontend/src/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import scheduleReducer from './features/schedule/scheduleSlice';
import clientReducer from './features/client/clientSlice';
import statsReducer from './features/stats/statsSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    schedule: scheduleReducer,
    client: clientReducer,
    stats: statsReducer,
  },
});