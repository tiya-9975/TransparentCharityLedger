import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h2>Transparent Charity Ledger</h2>
    <div>
      <Link to="/">Home</Link>
      <Link to="/donate">Donate</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  </nav>
);

export default Navbar;
