import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfiles } from '../context/ProfileContext';
import '../styles/DetailsPages.css';

const NumerologyDetails = () => {
  const navigate = useNavigate();
  const { activeProfile } = useProfiles();

  if (!activeProfile) {
    return (
      <div className="empty-state">
        <span className="empty-icon">👤</span>
        <h3>No Active Profile</h3>
        <p>Please create and select a profile first.</p>
      </div>
    );
  }

  const numerology = activeProfile.astrology?.numerology || {};

  return (
    <div className="astrology-details-page">
      <div className="details-header">
        <button className="btn-back" onClick={() => navigate('/dashboard')}>
          ← Back to Dashboard
        </button>
        <h1>🔢 Numerology - Detailed Analysis</h1>
        <p className="profile-name">Profile: {activeProfile.name}</p>
      </div>

      <div className="details-grid">
        {/* Radical Number Card */}
        <div className="detail-card">
          <div className="detail-card-header">
            <h2>🎂 Radical Number (Birth Number)</h2>
          </div>
          <div className="detail-card-body">
            <div className="detail-item highlight">
              <span className="label">Your Radical Number:</span>
              <span className="value number-big">{numerology.radicalNumber || 'N/A'}</span>
            </div>
            <div className="detail-description">
              <h3>About Radical Number {numerology.radicalNumber}</h3>
              <p>Your Radical Number is derived from your birth day. It represents your core personality and how you see yourself.</p>
              
              <h3>Key Characteristics:</h3>
              <ul>
                <li>Represents your basic nature and personality</li>
                <li>Most influential from birth to age 35</li>
                <li>Shows your natural talents and abilities</li>
                <li>Governs your personal approach to life</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Destiny Number Card */}
        <div className="detail-card">
          <div className="detail-card-header">
            <h2>🎯 Destiny Number (Name Number)</h2>
          </div>
          <div className="detail-card-body">
            <div className="detail-item highlight">
              <span className="label">Your Destiny:</span>
              <span className="value number-big">{numerology.destinyNumber || 'N/A'}</span>
            </div>
            <div className="detail-description">
              <h3>Destiny Number {numerology.destinyNumber}</h3>
              <p>Calculated from your full name, this number reveals your life purpose and how others perceive you.</p>
              
              <h3>Life Purpose:</h3>
              <ul>
                <li>Your professional path and career direction</li>
                <li>How you interact with the world</li>
                <li>Your social image and reputation</li>
                <li>Opportunities that come your way</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Life Path Number Card */}
        <div className="detail-card">
          <div className="detail-card-header">
            <h2>🛤️ Life Path Number (Bhagyank)</h2>
          </div>
          <div className="detail-card-body">
            <div className="detail-item highlight">
              <span className="label">Your Life Path:</span>
              <span className="value number-big">{numerology.lifePath || 'N/A'}</span>
            </div>
            <div className="detail-description">
              <h3>Life Path {numerology.lifePath}</h3>
              <p>This is your most important number - it represents your life journey and destiny.</p>
              
              <h3>Life Journey:</h3>
              <ul>
                <li>Your overall life direction and purpose</li>
                <li>Major life lessons to learn</li>
                <li>Challenges and opportunities ahead</li>
                <li>Your ultimate destiny and fulfillment</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Soul Urge Number Card */}
        <div className="detail-card">
          <div className="detail-card-header">
            <h2>💫 Soul Urge Number</h2>
          </div>
          <div className="detail-card-body">
            <div className="detail-item highlight">
              <span className="label">Your Soul Urge:</span>
              <span className="value number-big">{numerology.soulUrge || 'N/A'}</span>
            </div>
            <div className="detail-description">
              <h3>Soul Urge {numerology.soulUrge}</h3>
              <p>Reveals your inner desires, motivations, and what truly drives you at a soul level.</p>
              
              <h3>Inner Desires:</h3>
              <ul>
                <li>What your heart truly wants</li>
                <li>Your deepest motivations</li>
                <li>Hidden dreams and aspirations</li>
                <li>What brings you inner peace</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Personality Number Card */}
        <div className="detail-card">
          <div className="detail-card-header">
            <h2>👤 Personality Number</h2>
          </div>
          <div className="detail-card-body">
            <div className="detail-item highlight">
              <span className="label">Your Personality:</span>
              <span className="value number-big">{numerology.personality || 'N/A'}</span>
            </div>
            <div className="detail-description">
              <h3>Personality Number {numerology.personality}</h3>
              <p>This shows how others perceive you and the mask you wear in social situations.</p>
              
              <h3>How Others See You:</h3>
              <ul>
                <li>Your outer personality and demeanor</li>
                <li>First impressions you make</li>
                <li>Social behavior and interaction style</li>
                <li>Your public image</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Maturity Number Card */}
        <div className="detail-card">
          <div className="detail-card-header">
            <h2>🌟 Maturity Number</h2>
          </div>
          <div className="detail-card-body">
            <div className="detail-item highlight">
              <span className="label">Your Maturity:</span>
              <span className="value number-big">{numerology.maturity || 'N/A'}</span>
            </div>
            <div className="detail-description">
              <h3>Maturity Number {numerology.maturity}</h3>
              <p>This number emerges around age 35-40 and represents your true self and ultimate life goal.</p>
              
              <h3>Later Life Purpose:</h3>
              <ul>
                <li>Who you become in maturity</li>
                <li>Your ultimate life achievement</li>
                <li>Integration of all aspects of self</li>
                <li>Your legacy and impact</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Complete Profile Full Width */}
        <div className="detail-card full-width">
          <div className="detail-card-header">
            <h2>🌟 Your Complete Numerology Profile</h2>
          </div>
          <div className="detail-card-body">
            <div className="number-synthesis">
              <h3>Radical {numerology.radicalNumber} + Destiny {numerology.destinyNumber} + Life Path {numerology.lifePath}</h3>
              <p>Your numerology profile combines multiple aspects to create a complete picture of your cosmic blueprint.</p>
              
              <h3>Your Unique Combination:</h3>
              <ul>
                <li><strong>Radical Number ({numerology.radicalNumber}):</strong> Your core personality and self-image</li>
                <li><strong>Destiny Number ({numerology.destinyNumber}):</strong> Your life purpose and social role</li>
                <li><strong>Life Path ({numerology.lifePath}):</strong> Your journey and ultimate destiny</li>
                <li><strong>Soul Urge ({numerology.soulUrge}):</strong> Your inner desires and motivations</li>
                <li><strong>Personality ({numerology.personality}):</strong> How others perceive you</li>
                <li><strong>Maturity ({numerology.maturity}):</strong> Your true self emerges after 35</li>
              </ul>
              
              <h3>Life Guidance:</h3>
              <p>Use your Radical Number to understand yourself, your Destiny Number to navigate your career, and your Life Path Number to fulfill your ultimate purpose. Your Soul Urge guides your passions while your Personality manages your social interactions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumerologyDetails;