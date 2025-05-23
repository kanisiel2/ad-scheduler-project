import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as clientAPI from './clientAPI';

export const fetchClients = createAsyncThunk(
  'client/fetchClients',
  async () => (await clientAPI.getClients()).data
);

const clientSlice = createSlice({
  name: 'client',
  initialState: { list: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClients.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchClients.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      });
  },
});

export default clientSlice.reducer;
