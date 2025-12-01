import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ProfileManagement from './pages/ProfileManagement';
import About from './pages/About';
import VedicAstrologyDetails from './pages/VedicAstrologyDetails';
import WesternAstrologyDetails from './pages/WesternAstrologyDetails';
import NumerologyDetails from './pages/NumerologyDetails';
import ChineseAstrologyDetails from './pages/ChineseAstrologyDetails';
import { ProfileProvider } from './context/ProfileContext';
import './styles/App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [isRotating, setIsRotating] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('astroverse_theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Toggle theme function with rotation animation
  const toggleTheme = () => {
    setIsRotating(true);
    
    setTimeout(() => {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      localStorage.setItem('astroverse_theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      
      setTimeout(() => {
        setIsRotating(false);
      }, 600);
    }, 150);
  };

  return (
    <ProfileProvider>
      <Router>
        <div className="App">
          {/* Cosmic Background - Integrated directly */}
          <div className="cosmic-background">
            <div className="stars"></div>
            <div className="angel-number angel-1">111</div>
            <div className="angel-number angel-2">222</div>
            <div className="angel-number angel-3">333</div>
            <div className="angel-number angel-4">444</div>
            <div className="angel-number angel-5">555</div>
            <div className="planet planet-1"></div>
            <div className="planet planet-2"></div>
            <div className="planet planet-3"></div>
            <div className="planet planet-4"></div>
          </div>

          <Navbar />
          
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profiles" element={<ProfileManagement />} />
              <Route path="/about" element={<About />} />
              <Route path="/vedic-astrology" element={<VedicAstrologyDetails />} />
              <Route path="/western-astrology" element={<WesternAstrologyDetails />} />
              <Route path="/numerology" element={<NumerologyDetails />} />
              <Route path="/chinese-astrology" element={<ChineseAstrologyDetails />} />
            </Routes>
          </main>
          
          {/* Theme Toggle Button with smooth rotation */}
          <button 
            className="theme-toggle-btn-floating"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            <span 
              className="theme-icon"
              style={{
                transform: isRotating ? 'rotate(360deg)' : 'rotate(0deg)',
                transition: 'transform 0.6s ease-in-out'
              }}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </span>
            <span className="theme-text">
              {theme === 'dark' ? 'Light' : 'Dark'}
            </span>
          </button>
        </div>
      </Router>
    </ProfileProvider>
  );
}

export default App;