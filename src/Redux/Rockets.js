import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const rockets = await response.json();
    return rockets;
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    status: null,
    error: null,
  },
  reducers: {
    reserveRocket: (state, action) => {
      const id = Number(action.payload);
      const indexItem = state.rockets.findIndex((r) => r.id === id);
      const newRocket = {
        ...state.rockets[indexItem],
        reserved: !state.rockets[indexItem]?.reserved,
      };
      state.rockets[indexItem] = newRocket;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const arr = action.payload.map((rocket) => ({
          id: rocket.id,
          rocket_name: rocket.rocket_name,
          reserved: false,
          description: rocket.description,
          flickr_images: rocket.flickr_images,
        }));

        state.rockets = state.rockets.concat(arr);
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { reserveRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
