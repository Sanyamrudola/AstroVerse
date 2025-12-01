import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfiles } from '../context/ProfileContext';
import '../styles/DetailsPages.css';

const VedicAstrologyDetails = () => {
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

  return (
    <div className="astrology-details-page">
      <div className="details-header">
        <button className="btn-back" onClick={() => navigate('/dashboard')}>
          ← Back to Dashboard
        </button>
        <h1>🕉️ Vedic Astrology - Detailed Analysis</h1>
        <p className="profile-name">Profile: {activeProfile.name}</p>
      </div>

      <div className="details-grid">
        {/* Rashi Card */}
        <div className="detail-card">
          <div className="detail-card-header">
            <h2>🌙 Rashi (Moon Sign)</h2>
          </div>
          <div className="detail-card-body">
            <div className="detail-item highlight">
              <span className="label">Your Rashi:</span>
              <span className="value">Vrishchika (Scorpio)</span>
            </div>
            <div className="detail-description">
              <h3>Characteristics:</h3>
              <p>Scorpio natives are known for their intensity, passion, and determination. You possess a deep emotional nature and strong intuitive abilities. Your investigative mind and magnetic personality make you a natural leader.</p>
              
              <h3>Strengths:</h3>
              <ul>
                <li>Highly intuitive and perceptive</li>
                <li>Strong willpower and determination</li>
                <li>Loyal and protective of loved ones</li>
                <li>Excellent at keeping secrets</li>
                <li>Natural healing abilities</li>
              </ul>
              
              <h3>Challenges:</h3>
              <ul>
                <li>Can be overly secretive</li>
                <li>Tendency to hold grudges</li>
                <li>May struggle with trust issues</li>
                <li>Intense emotions need balance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Nakshatra Card */}
        <div className="detail-card">
          <div className="detail-card-header">
            <h2>⭐ Nakshatra (Birth Star)</h2>
          </div>
          <div className="detail-card-body">
            <div className="detail-item highlight">
              <span className="label">Your Nakshatra:</span>
              <span className="value">Uttara Bhadrapada</span>
            </div>
            <div className="detail-description">
              <h3>About Uttara Bhadrapada:</h3>
              <p>This nakshatra symbolizes the "latter happy feet" and represents depth, wisdom, and spiritual understanding. It spans from Pisces and is ruled by Saturn.</p>
              
              <h3>Key Traits:</h3>
              <ul>
                <li>Deep thinker and philosopher</li>
                <li>Strong spiritual inclination</li>
                <li>Patient and persistent</li>
                <li>Compassionate and caring</li>
                <li>Seeks deeper meaning in life</li>
              </ul>
              
              <h3>Deity & Symbolism:</h3>
              <p><strong>Deity:</strong> Ahir Budhnya (serpent of the deep)</p>
              <p><strong>Symbol:</strong> Back legs of funeral cot</p>
              <p><strong>Ruling Planet:</strong> Saturn</p>
            </div>
          </div>
        </div>

        {/* Moon Sign Card */}
        <div className="detail-card">
          <div className="detail-card-header">
            <h2>🌕 Moon Sign Details</h2>
          </div>
          <div className="detail-card-body">
            <div className="detail-item highlight">
              <span className="label">Moon Sign:</span>
              <span className="value">Kumbha (Aquarius)</span>
            </div>
            <div className="detail-description">
              <h3>Emotional Nature:</h3>
              <p>Your Aquarius moon makes you intellectually oriented and humanitarian. You value independence and have a unique approach to emotions.</p>
              
              <h3>Mental Qualities:</h3>
              <ul>
                <li>Innovative and forward-thinking</li>
                <li>Values intellectual connections</li>
                <li>Strong sense of social justice</li>
                <li>Need for personal freedom</li>
                <li>Unconventional emotional expression</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Ruling Planet Card */}
        <div className="detail-card">
          <div className="detail-card-header">
            <h2>🪐 Ruling Planet - Saturn</h2>
          </div>
          <div className="detail-card-body">
            <div className="detail-item highlight">
              <span className="label">Your Ruling Planet:</span>
              <span className="value">Saturn (Shani)</span>
            </div>
            <div className="detail-description">
              <h3>Saturn's Influence:</h3>
              <p>Saturn is the planet of discipline, responsibility, and karmic lessons. Its influence brings patience, hard work, and long-term rewards.</p>
              
              <h3>Life Lessons:</h3>
              <ul>
                <li>Discipline and structure are key to success</li>
                <li>Patience brings lasting rewards</li>
                <li>Take responsibility seriously</li>
                <li>Learn from challenges and setbacks</li>
                <li>Build strong foundations</li>
              </ul>
              
              <h3>Saturn Remedies:</h3>
              <ul>
                <li>Chant Saturn mantras on Saturdays</li>
                <li>Wear blue sapphire (after consultation)</li>
                <li>Donate to the elderly or disabled</li>
                <li>Practice regular meditation</li>
                <li>Maintain discipline in daily routine</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Doshas & Yogas Full Width */}
        <div className="detail-card full-width">
          <div className="detail-card-header">
            <h2>🔮 Doshas & Yogas</h2>
          </div>
          <div className="detail-card-body">
            <div className="yoga-grid">
              <div className="yoga-item">
                <h3>Beneficial Yogas:</h3>
                <ul>
                  <li><strong>Gaja Kesari Yoga:</strong> Jupiter and Moon conjunction brings wisdom and prosperity</li>
                  <li><strong>Budh Aditya Yoga:</strong> Mercury-Sun combination enhances intelligence</li>
                </ul>
              </div>
              <div className="yoga-item">
                <h3>Recommendations:</h3>
                <ul>
                  <li>Perform regular spiritual practices</li>
                  <li>Strengthen relationships with elders</li>
                  <li>Focus on building long-term goals</li>
                  <li>Practice mindfulness and meditation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VedicAstrologyDetails;