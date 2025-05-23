// frontend/src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Dashboard</Link>
    <Link to="/admin">Admin</Link>
  </nav>
);

export default Navbar;