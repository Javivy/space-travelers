import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Layout/Header/Header';
import Profile from './Components/Pages/Profile/Profile';
import Rockets from './Components/Pages/Rockets/Rockets';
// import Missions from './Components/Pages/Missions/Missions';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="body">
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path='/missions' element={<Missions />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
