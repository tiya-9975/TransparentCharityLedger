import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Donate from './pages/Donate';
import NGOProfile from './pages/NGOProfile';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/ngo/:id" element={<NGOProfile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
