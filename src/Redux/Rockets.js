import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const rockets = await response.json();
  return rockets;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    status: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchRockets.pending, (state) => {
      state.status = 'loading';
    })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rockets = state.rockets.concat(action.payload);
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default rocketsSlice.reducer;
