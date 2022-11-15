import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './Rockets';
// import missionsReducer from "./Missions";

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    // missions: missionsReducer,
  },
});

export default store;
