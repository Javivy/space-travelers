import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './Rockets';
import missionsReducer from './Missions';

const store = configureStore({
  reducer: {
    Rrockets: rocketsReducer,
    Missions: missionsReducer,
  },
});

export default store;
