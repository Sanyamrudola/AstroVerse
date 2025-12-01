import React from 'react';
import { Link } from 'react-router-dom';
import { useProfiles } from '../context/ProfileContext';
import { FaSun, FaMoon, FaUser, FaChartLine } from 'react-icons/fa';

const Home = () => {
  const { theme, toggleTheme } = useProfiles();

  return (
    <div className="home-page">
      {/* Theme Toggle Button - Floating */}
      <button 
        className="theme-toggle-btn-floating" 
        onClick={toggleTheme}
        aria-label="Toggle theme"
        title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {theme === 'dark' ? (
          <>
            <FaSun className="theme-icon" />
            <span className="theme-text">Light</span>
          </>
        ) : (
          <>
            <FaMoon className="theme-icon" />
            <span className="theme-text">Dark</span>
          </>
        )}
      </button>

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Welcome to AstroVerse</h1>
        <p className="hero-subtitle">Your Cosmic Companion - Discover Your Universal Journey</p>
        <div className="hero-description">
          <p>
            Explore the mysteries of the cosmos through Vedic Astrology, Western Astrology, 
            Numerology, and Chinese Astrology - all unified in one celestial platform.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Explore the Cosmos</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🕉️</div>
            <h3>Vedic Astrology</h3>
            <p>
              Ancient Indian wisdom revealing your Rashi, Nakshatra, and planetary influences 
              based on the sidereal zodiac system.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">♈</div>
            <h3>Western Astrology</h3>
            <p>
              Discover your Sun, Moon, and Rising signs using the tropical zodiac to understand 
              your personality and life path.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔢</div>
            <h3>Numerology</h3>
            <p>
              Unlock the secrets hidden in your name and birthdate with Life Path, Destiny, 
              and Soul Urge numbers.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🐉</div>
            <h3>Chinese Astrology</h3>
            <p>
              Explore the 12 animal signs and five elements to reveal your character traits 
              and fortune predictions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Begin Your Cosmic Journey</h2>
        <p>Create your profile and unlock personalized astrological insights</p>
        <div className="cta-buttons">
          <Link to="/profiles" className="cta-btn">
            <FaUser />
            <span>Create Profile</span>
          </Link>
          <Link to="/about" className="cta-btn secondary">
            <FaChartLine />
            <span>Learn More</span>
          </Link>
        </div>
      </section>

      {/* Footer Note */}
      <div className="footer-note">
        <p>✨ Bridging ancient wisdom with modern technology ✨</p>
      </div>
    </div>
  );
};

export default Home;