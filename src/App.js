import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchRockets } from './Redux/Rockets';
import { fetchMissions } from './Redux/Missions';

import Header from './Components/Layout/Header/Header';
import Profile from './Components/Pages/Profile/Profile';
import Rockets from './Components/Pages/Rockets/Rockets';
import Missions from './Components/Pages/Missions/Missions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <div className="body">
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/missions" element={<Missions />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
