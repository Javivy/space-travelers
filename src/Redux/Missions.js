import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const missions = await response.json();
    console.log(missions);
    return missions;
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    status: null,
    error: null,
  },
  reducers: {
    reserveMissions: (state, action) => {
      const id = Number(action.payload);
      const indexItem = state.missions.findIndex((r) => r.id === id);
      const newMission = {
        ...state.missions[indexItem],
        reserved: !state.missions[indexItem]?.reserved,
      };
      state.missions[indexItem] = newMission;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const arr = action.payload.map((mission) => ({
          id: mission.mission_id,
          mission_name: mission.mission_name,
          reserved: false,
          description: mission.description,
        }));

        console.log(action);

        state.missions = state.missions.concat(arr);
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { reserveMissions } = missionsSlice.actions;
export default missionsSlice.reducer;
