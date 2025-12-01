import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfiles } from '../context/ProfileContext';
import '../styles/DetailsPages.css';

const ChineseAstrologyDetails = () => {
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
        <h1>🐉 Chinese Astrology - Detailed Analysis</h1>
        <p className="profile-name">Profile: {activeProfile.name}</p>
      </div>

      <div className="details-grid">
        {/* Zodiac Animal Card */}
        <div className="detail-card">
          <div className="detail-card-header">
            <h2>🐵 Zodiac Animal - Monkey</h2>
          </div>
          <div className="detail-card-body">
            <div className="detail-item highlight">
              <span className="label">Your Animal:</span>
              <span className="value">Monkey 🐵</span>
            </div>
            <div className="detail-description">
              <h3>The Clever Innovator</h3>
              <p>People born in the Year of the Monkey are witty, intelligent, and have a magnetic personality. You're naturally curious and love solving problems.</p>
              
              <h3>Key Characteristics:</h3>
              <ul>
                <li>Intelligent and quick-witted</li>
                <li>Playful and entertaining</li>
                <li>Excellent problem-solver</li>
                <li>Adaptable and resourceful</li>
                <li>Curious and loves learning</li>
                <li>Charming and sociable</li>
              </ul>
              
              <h3>Strengths:</h3>
              <ul>
                <li>Quick thinking and clever</li>
                <li>Great sense of humor</li>
                <li>Innovative and creative</li>
                <li>Versatile and multi-talented</li>
                <li>Good at persuasion</li>
              </ul>
              
              <h3>Weaknesses:</h3>
              <ul>
                <li>Can be mischievous or tricky</li>
                <li>May lack persistence</li>
                <li>Sometimes too clever for own good</li>
                <li>Can be restless</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Element Card */}
        <div className="detail-card">
          <div className="detail-card-header">
            <h2>🌳 Element - Wood</h2>
          </div>
          <div className="detail-card-body">
            <div className="detail-item highlight">
              <span className="label">Your Element:</span>
              <span className="value">Wood 🌳</span>
            </div>
            <div className="detail-description">
              <h3>Wood Monkey</h3>
              <p>Wood element adds stability, ethics, and growth to the Monkey's clever nature. You're more grounded and principled than other Monkeys.</p>
              
              <h3>Wood Element Influence:</h3>
              <ul>
                <li>More stable and reliable</li>
                <li>Strong ethical principles</li>
                <li>Interest in growth and development</li>
                <li>Team-oriented approach</li>
                <li>Better at long-term planning</li>
                <li>Compassionate and caring</li>
              </ul>
              
              <h3>Wood Monkey Personality:</h3>
              <p>You combine the Monkey's cleverness with Wood's stability. This makes you innovative yet reliable, playful yet responsible, and clever yet principled.</p>
            </div>
          </div>
        </div>

        {/* Yin/Yang Card */}
        <div className="detail-card">
          <div className="detail-card-header">
            <h2>☯️ Yin/Yang Balance</h2>
          </div>
          <div className="detail-card-body">
            <div className="detail-item highlight">
              <span className="label">Your Energy:</span>
              <span className="value">Yang ☀️</span>
            </div>
            <div className="detail-description">
              <h3>Yang Energy</h3>
              <p>Yang represents active, assertive, and outward-directed energy. You're naturally dynamic and proactive.</p>
              
              <h3>Yang Characteristics:</h3>
              <ul>
                <li>Active and energetic</li>
                <li>Outgoing and assertive</li>
                <li>Leadership qualities</li>
                <li>Action-oriented approach</li>
                <li>Confident and bold</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lucky Elements Card */}
        <div className="detail-card">
          <div className="detail-card-header">
            <h2>🍀 Lucky Elements</h2>
          </div>
          <div className="detail-card-body">
            <div className="detail-item">
              <span className="label">Lucky Numbers:</span>
              <span className="value">9, 3, 6</span>
            </div>
            <div className="detail-item">
              <span className="label">Lucky Colors:</span>
              <span className="value">White, Gold, Blue</span>
            </div>
            <div className="detail-item">
              <span className="label">Lucky Flowers:</span>
              <span className="value">Chrysanthemum, Crape-myrtle</span>
            </div>
            <div className="detail-item">
              <span className="label">Lucky Directions:</span>
              <span className="value">North, Northwest, West</span>
            </div>
          </div>
        </div>

        {/* Compatibility Full Width */}
        <div className="detail-card full-width">
          <div className="detail-card-header">
            <h2>💕 Compatibility & Relationships</h2>
          </div>
          <div className="detail-card-body">
            <div className="compatibility-grid">
              <div className="compatibility-section">
                <h3>Best Matches:</h3>
                <ul>
                  <li><strong>Rat 🐭:</strong> Excellent intellectual connection and mutual understanding</li>
                  <li><strong>Dragon 🐉:</strong> Dynamic duo with shared ambition and energy</li>
                  <li><strong>Snake 🐍:</strong> Complementary strengths create balance</li>
                </ul>
              </div>
              
              <div className="compatibility-section">
                <h3>Challenging Matches:</h3>
                <ul>
                  <li><strong>Tiger 🐯:</strong> Both too independent and competitive</li>
                  <li><strong>Pig 🐷:</strong> Different values and approaches to life</li>
                </ul>
              </div>
              
              <div className="compatibility-section">
                <h3>Relationship Style:</h3>
                <p>As a Wood Monkey, you bring humor, intelligence, and loyalty to relationships. You need a partner who appreciates your wit and gives you freedom to explore.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Career & Life Path Full Width */}
        <div className="detail-card full-width">
          <div className="detail-card-header">
            <h2>💼 Career & Life Guidance</h2>
          </div>
          <div className="detail-card-body">
            <div className="career-grid">
              <div className="career-section">
                <h3>Ideal Careers:</h3>
                <ul>
                  <li>Engineering and Technology</li>
                  <li>Sales and Marketing</li>
                  <li>Entertainment and Media</li>
                  <li>Education and Teaching</li>
                  <li>Entrepreneurship</li>
                  <li>Creative Industries</li>
                  <li>Problem-solving roles</li>
                </ul>
              </div>
              
              <div className="career-section">
                <h3>Success Tips:</h3>
                <ul>
                  <li>Use your cleverness for ethical purposes</li>
                  <li>Develop patience and persistence</li>
                  <li>Channel energy into meaningful projects</li>
                  <li>Build stable foundations</li>
                  <li>Balance playfulness with responsibility</li>
                </ul>
              </div>
              
              <div className="career-section">
                <h3>2024-2025 Predictions:</h3>
                <p>This is a favorable period for Wood Monkeys. Focus on innovation, networking, and creative projects. Your natural charm will open many doors. Use this time to build lasting relationships and establish solid foundations for future success.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChineseAstrologyDetails;