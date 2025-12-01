import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfiles } from '../context/ProfileContext';
import '../styles/DetailsPages.css';

const WesternAstrologyDetails = () => {
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
        <h1>♈ Western Astrology - Detailed Analysis</h1>
        <p className="profile-name">Profile: {activeProfile.name}</p>
      </div>

      <div className="details-grid">
        {/* Sun Sign Card */}
        <div className="detail-card">
          <div className="detail-card-header">
            <h2>☀️ Sun Sign (Scorpio)</h2>
          </div>
          <div className="detail-card-body">
            <div className="detail-item highlight">
              <span className="label">Your Sun Sign:</span>
              <span className="value">Scorpio ♏</span>
            </div>
            <div className="detail-description">
              <h3>Core Identity:</h3>
              <p>Scorpio sun represents transformation, intensity, and depth. You possess powerful emotions and a magnetic presence that draws others to you.</p>
              
              <h3>Personality Traits:</h3>
              <ul>
                <li>Passionate and determined</li>
                <li>Mysterious and magnetic</li>
                <li>Excellent detective/research skills</li>
                <li>Deeply loyal to loved ones</li>
                <li>Natural healer and transformer</li>
              </ul>
              
              <h3>Career Paths:</h3>
              <p>Psychology, research, investigation, surgery, occult sciences, crisis management</p>
            </div>
          </div>
        </div>

        {/* Moon Sign Card */}
        <div className="detail-card">
          <div className="detail-card-header">
            <h2>🌙 Moon Sign (Leo)</h2>
          </div>
          <div className="detail-card-body">
            <div className="detail-item highlight">
              <span className="label">Your Moon Sign:</span>
              <span className="value">Leo ♌</span>
            </div>
            <div className="detail-description">
              <h3>Emotional Nature:</h3>
              <p>Leo moon gives you a warm, generous heart and a need for recognition. You express emotions dramatically and creatively.</p>
              
              <h3>Emotional Needs:</h3>
              <ul>
                <li>Recognition and appreciation</li>
                <li>Creative self-expression</li>
                <li>Loyal and devoted relationships</li>
                <li>Leadership opportunities</li>
                <li>Admiration from others</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Rising Sign Card */}
        <div className="detail-card">
          <div className="detail-card-header">
            <h2>⬆️ Rising Sign (Gemini)</h2>
          </div>
          <div className="detail-card-body">
            <div className="detail-item highlight">
              <span className="label">Your Ascendant:</span>
              <span className="value">Gemini ♊</span>
            </div>
            <div className="detail-description">
              <h3>First Impression:</h3>
              <p>Gemini rising makes you appear curious, communicative, and adaptable. People see you as intelligent and witty.</p>
              
              <h3>Physical & Social Style:</h3>
              <ul>
                <li>Youthful and energetic appearance</li>
                <li>Quick movements and gestures</li>
                <li>Love for conversation and learning</li>
                <li>Adaptable to different situations</li>
                <li>Multi-talented and versatile</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Element Card */}
        <div className="detail-card">
          <div className="detail-card-header">
            <h2>💧 Element - Water</h2>
          </div>
          <div className="detail-card-body">
            <div className="detail-item highlight">
              <span className="label">Your Element:</span>
              <span className="value">Water 💧</span>
            </div>
            <div className="detail-description">
              <h3>Water Sign Qualities:</h3>
              <p>Water signs are emotional, intuitive, and deeply connected to feelings. You navigate life through emotional intelligence.</p>
              
              <h3>Characteristics:</h3>
              <ul>
                <li>Highly intuitive and empathetic</li>
                <li>Strong emotional depth</li>
                <li>Psychic and perceptive abilities</li>
                <li>Need for emotional security</li>
                <li>Healing and nurturing nature</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Big Three Full Width */}
        <div className="detail-card full-width">
          <div className="detail-card-header">
            <h2>🌟 Your Big Three Interpretation</h2>
          </div>
          <div className="detail-card-body">
            <div className="big-three-analysis">
              <h3>Sun in Scorpio + Moon in Leo + Gemini Rising</h3>
              <p>This combination creates a fascinating blend of depth and charisma. Your Scorpio sun gives you intensity and transformative power, while your Leo moon adds warmth, creativity, and a need for recognition. Gemini rising makes you appear communicative and adaptable, allowing you to connect with diverse groups of people.</p>
              
              <h3>Key Dynamics:</h3>
              <ul>
                <li><strong>Inner Power:</strong> Deep, intense, and transformative (Scorpio Sun)</li>
                <li><strong>Emotional Style:</strong> Dramatic, generous, and warm-hearted (Leo Moon)</li>
                <li><strong>Outer Persona:</strong> Communicative, curious, and adaptable (Gemini Rising)</li>
              </ul>
              
              <h3>Life Path Guidance:</h3>
              <p>Use your Scorpio depth for meaningful transformation, express your Leo moon's creativity and warmth, and leverage your Gemini rising's communication skills to connect and inspire others. You're meant to be a charismatic leader who transforms lives through powerful communication.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WesternAstrologyDetails;