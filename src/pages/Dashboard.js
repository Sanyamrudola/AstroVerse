import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfiles } from '../context/ProfileContext';

const Dashboard = () => {
  const navigate = useNavigate();
  const { activeProfile } = useProfiles();

  if (!activeProfile) {
    return (
      <div className="dashboard-page">
        <div className="page-header">
          <h1>
            <span style={{ 
              background: 'none', 
              WebkitBackgroundClip: 'unset', 
              WebkitTextFillColor: 'currentColor',
              marginRight: '0.3rem'
            }}>📊</span>
            <span>Your Cosmic Dashboard</span>
          </h1>
          <p>View your personalized astrological insights</p>
        </div>
        <div className="empty-state">
          <span className="empty-icon">👤</span>
          <h3>No Active Profile</h3>
          <p>Please create and select a profile to view your dashboard.</p>
        </div>
      </div>
    );
  }

  // Make sure astrology data exists
  const astrology = activeProfile.astrology || {};
  const numerology = astrology.numerology || {};
  const chinese = astrology.chinese || {};
  const vedic = astrology.vedic || {};
  const western = astrology.western || {};

  console.log('Dashboard Numerology:', numerology); // Debug log

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <h1>
          <span style={{ 
            background: 'none', 
            WebkitBackgroundClip: 'unset', 
            WebkitTextFillColor: 'currentColor',
            marginRight: '0.3rem'
          }}>📊</span>
          <span>Your Cosmic Dashboard</span>
        </h1>
        <p>Welcome, {activeProfile.name}!</p>
        <div className="active-profile-info">
          <span className="label">Active Profile:</span>
          <span className="profile-name">{activeProfile.name}</span>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Vedic Astrology Card */}
        <div 
          className="dashboard-card vedic-card clickable-card" 
          onClick={() => navigate('/vedic-astrology')}
          style={{ cursor: 'pointer' }}
        >
          <div className="dashboard-card-header">
            <span className="dashboard-icon">🕉️</span>
            <h3>Vedic Astrology</h3>
          </div>
          <div className="dashboard-card-body">
            <div className="dashboard-item">
              <span className="item-label">Rashi (Moon Sign)</span>
              <span className="item-value">{vedic.rashi || 'N/A'}</span>
            </div>
            <div className="dashboard-item">
              <span className="item-label">Nakshatra</span>
              <span className="item-value">{vedic.nakshatra || 'N/A'}</span>
            </div>
            <div className="dashboard-item">
              <span className="item-label">Moon Sign</span>
              <span className="item-value">{vedic.moonSign || 'N/A'}</span>
            </div>
            <div className="dashboard-item">
              <span className="item-label">Ruling Planet</span>
              <span className="item-value">{vedic.rulingPlanet || 'N/A'}</span>
            </div>
          </div>
          <div className="card-footer">
            <span className="view-details-btn">View Detailed Analysis →</span>
          </div>
        </div>

        {/* Western Astrology Card */}
        <div 
          className="dashboard-card western-card clickable-card" 
          onClick={() => navigate('/western-astrology')}
          style={{ cursor: 'pointer' }}
        >
          <div className="dashboard-card-header">
            <span className="dashboard-icon">♈</span>
            <h3>Western Astrology</h3>
          </div>
          <div className="dashboard-card-body">
            <div className="dashboard-item">
              <span className="item-label">Sun Sign</span>
              <span className="item-value">{western.sunSign || 'N/A'}</span>
            </div>
            <div className="dashboard-item">
              <span className="item-label">Moon Sign</span>
              <span className="item-value">{western.moonSign || 'N/A'}</span>
            </div>
            <div className="dashboard-item">
              <span className="item-label">Rising Sign</span>
              <span className="item-value">{western.risingSign || 'N/A'}</span>
            </div>
            <div className="dashboard-item">
              <span className="item-label">Element</span>
              <span className="item-value">{western.element || 'N/A'}</span>
            </div>
          </div>
          <div className="card-footer">
            <span className="view-details-btn">View Detailed Analysis →</span>
          </div>
        </div>

        {/* Numerology Card */}
        <div 
          className="dashboard-card numerology-card clickable-card" 
          onClick={() => navigate('/numerology')}
          style={{ cursor: 'pointer' }}
        >
          <div className="dashboard-card-header">
            <span className="dashboard-icon">🔢</span>
            <h3>Numerology</h3>
          </div>
          <div className="dashboard-card-body">
            <div className="dashboard-item">
              <span className="item-label">Radical Number</span>
              <span className="item-value">{numerology.radicalNumber || 'N/A'}</span>
            </div>
            <div className="dashboard-item">
              <span className="item-label">Destiny Number</span>
              <span className="item-value">{numerology.destinyNumber || 'N/A'}</span>
            </div>
            <div className="dashboard-item">
              <span className="item-label">Life Path</span>
              <span className="item-value">{numerology.lifePath || 'N/A'}</span>
            </div>
            <div className="dashboard-item">
              <span className="item-label">Soul Urge</span>
              <span className="item-value">{numerology.soulUrge || 'N/A'}</span>
            </div>
          </div>
          <div className="card-footer">
            <span className="view-details-btn">View Detailed Analysis →</span>
          </div>
        </div>

        {/* Chinese Astrology Card */}
        <div 
          className="dashboard-card chinese-card clickable-card" 
          onClick={() => navigate('/chinese-astrology')}
          style={{ cursor: 'pointer' }}
        >
          <div className="dashboard-card-header">
            <span className="dashboard-icon">🐉</span>
            <h3>Chinese Astrology</h3>
          </div>
          <div className="dashboard-card-body">
            <div className="dashboard-item">
              <span className="item-label">Zodiac Animal</span>
              <span className="item-value">{chinese.animalDisplay || chinese.animal || 'N/A'}</span>
            </div>
            <div className="dashboard-item">
              <span className="item-label">Element</span>
              <span className="item-value">{chinese.elementDisplay || chinese.element || 'N/A'}</span>
            </div>
            <div className="dashboard-item">
              <span className="item-label">Yin/Yang</span>
              <span className="item-value">{chinese.yinYangDisplay || chinese.yinYang || 'N/A'}</span>
            </div>
            <div className="dashboard-item">
              <span className="item-label">Lucky Numbers</span>
              <span className="item-value">
                {Array.isArray(chinese.luckyNumbers) 
                  ? chinese.luckyNumbers.join(', ') 
                  : chinese.luckyNumbers || 'N/A'}
              </span>
            </div>
          </div>
          <div className="card-footer">
            <span className="view-details-btn">View Detailed Analysis →</span>
          </div>
        </div>
      </div>

      <div className="dashboard-note">
        <p>✨ Your astrological profile is calculated based on your birth details. These insights combine ancient wisdom from multiple traditions to provide a comprehensive view of your cosmic blueprint.</p>
      </div>
    </div>
  );
};

export default Dashboard;