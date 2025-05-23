// frontend/src/features/schedule/scheduleSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as scheduleAPI from './scheduleAPI';

export const fetchSchedules = createAsyncThunk(
  'schedule/fetchSchedules',
  async () => (await scheduleAPI.getSchedules()).data
);

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState: { list: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSchedules.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchSchedules.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      });
  },
});

export default scheduleSlice.reducer;
