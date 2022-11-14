import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Layout/Header/Header';
import Profile from './Components/Layout/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
