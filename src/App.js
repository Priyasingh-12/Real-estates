import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
 import Home from './route/home/Home';
// import Login from './route/login/Login';
// import Map from './route/map/Map';
// import ProfilePage from './route/Profile/ProfilePage'

// import ItemDetailPage from './route/ItemDetailPage'

// import NotFounded404 from './route/NotFounded404';
// import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Home" element={<Home />} />
        {/* <Route exact path="/Login" element={<Login />} /> */}
        {/* <Route exact path="/Map" element={<Map />} /> */}
        {/* <Route path='/profile' element={<ProfilePage />} /> */}

        {/* <Route path="*" element={<NotFounded404 />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
 