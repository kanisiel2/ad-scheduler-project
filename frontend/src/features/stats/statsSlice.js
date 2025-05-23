import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as statsAPI from './statsAPI';

export const fetchStats = createAsyncThunk(
  'stats/fetchStats',
  async () => (await statsAPI.getStats()).data
);

const statsSlice = createSlice({
  name: 'stats',
  initialState: { data: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStats.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchStats.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      });
  },
});

export default statsSlice.reducer;
