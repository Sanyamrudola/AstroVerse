import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaChartLine, FaInfoCircle } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          ✨ AstroVerse
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              <FaHome /> <span>Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/profiles" 
              className={`nav-link ${isActive('/profiles') ? 'active' : ''}`}
            >
              <FaUser /> <span>Profiles</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/dashboard" 
              className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}
            >
              <FaChartLine /> <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            >
              <FaInfoCircle /> <span>About</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;