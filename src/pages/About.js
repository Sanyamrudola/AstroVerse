import React from 'react';
import team1Image from '../assets/team1.jpg';
import team2Image from '../assets/team2.jpg';
//import team3Image from '../assets/team3.jpg';

const About = () => {
  const teamData = [
    {
      name: 'Sanyam Rudola',
      role: 'Lead Developer & Co-Creator',
      bio: 'Full-stack developer passionate about blending ancient wisdom with modern technology. Contributed to frontend architecture, UI/UX design, and astrology calculation algorithms.',
      contributions: ['Frontend Development', 'UI/UX Design', 'Astrology Algorithms'],
      image: team1Image
    },
    {
      name: 'Team Member 2',
      role: 'Co-Creator & Designer',
      bio: 'Creative designer and developer with a deep interest in astrology and spirituality. Contributed to visual design, user experience, and content creation.',
      contributions: ['Visual Design', 'Content Creation', 'Research'],
      image: team2Image
    },
    {
      name: 'Team Member 3',
      role: 'Developer & Contributor',
      bio: 'Passionate developer contributing to the project with innovative ideas and technical expertise. Focused on backend development and system architecture.',
      contributions: ['Backend Development', 'API Integration', 'Testing'],
      image: null
    }
  ];

  return (
    <div className="about-page">
      <div className="page-header">
        <h1>About AstroVerse</h1>
        <p>Discover the cosmic connection between ancient wisdom and modern technology</p>
      </div>

      <div className="about-content">
        {/* Mission Section */}
        <section className="about-section astroverse-mission">
          <div className="section-icon">✨</div>
          <h2>Our Mission</h2>
          <p>
            AstroVerse aims to bridge the gap between ancient astrological wisdom and modern technology.
            We provide accurate, personalized astrological insights by combining multiple astrological
            systems including Vedic, Western, Numerology, and Chinese astrology.
          </p>
          <p>
            Our platform empowers users to explore their cosmic blueprint through multiple lenses,
            offering a comprehensive understanding of their personality, life path, and potential.
            All calculations are powered by the precise Swiss Ephemeris astronomical data.
          </p>
        </section>

        {/* Features Section with Emoji Logos */}
        <section className="about-section">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon" style={{ fontSize: '3.5rem' }}>🕉️</div>
              <h3>🪷 Vedic Astrology</h3>
              <p>
                Ancient Indian astrological system (Jyotish) with precise calculations based on sidereal zodiac.
                Discover your Rashi, Moon Sign, Nakshatra, Ascendant, and planetary dashas using Swiss Ephemeris data.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ fontSize: '3.5rem' }}>♈</div>
              <h3>⭐ Western Astrology</h3>
              <p>
                Traditional Western astrology using tropical zodiac and planetary positions calculated with Swiss Ephemeris.
                Explore your Sun Sign, Moon Sign, Rising Sign, houses, and elemental nature.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ fontSize: '3.5rem' }}>🔢</div>
              <h3>🔮 Numerology</h3>
              <p>
                Discover your Life Path, Destiny, Soul Urge, and Personality numbers based on
                your name and birth date. Unlock the vibrational essence of numbers.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ fontSize: '3.5rem' }}>🐉</div>
              <h3>🏮 Chinese Astrology</h3>
              <p>
                Explore your Chinese zodiac animal, element (Wu Xing), Yin/Yang nature, and lucky numbers
                based on your birth year and traditional Chinese calendar systems.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section with Enhanced Spacing */}
        <section className="about-section team-section">
          <h2>👥 Our Team</h2>
          <div 
            className="team-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem 2.5rem',
              marginTop: '2.5rem',
              padding: '1rem'
            }}
          >
            {teamData.map((member, index) => (
              <div 
                key={index} 
                className="team-card"
                style={{
                  marginBottom: '2rem'
                }}
              >
                <div 
                  className="team-image"
                  style={{
                    marginBottom: '2rem'
                  }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover',
                      borderRadius: '50%',
                      display: 'block',
                      margin: '0 auto',
                      border: '4px solid #6366f1',
                      boxShadow: '0 4px 15px rgba(99, 102, 241, 0.5)',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>
                <h3 style={{ marginBottom: '0.8rem' }}>{member.name}</h3>
                <p className="team-role" style={{ marginBottom: '1.2rem' }}>{member.role}</p>
                <p className="team-bio" style={{ marginBottom: '1.5rem' }}>{member.bio}</p>
                <div className="team-contributions">
                  <h4>Contributions:</h4>
                  <ul>
                    {member.contributions.map((contribution, idx) => (
                      <li key={idx}>{contribution}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="about-section">
          <div className="section-icon">⚙️</div>
          <h2>How It Works</h2>
          <div className="key-concepts">
            <ul>
              <li>
                <strong>1. Create Your Profile:</strong> Enter your name, date of birth, time of birth, and place of birth.
              </li>
              <li>
                <strong>2. Precise Calculations:</strong> Our system uses Swiss Ephemeris - the most accurate astronomical data available for professional astrology.
              </li>
              <li>
                <strong>3. View Your Dashboard:</strong> Get instant access to your personalized astrological insights across four systems.
              </li>
              <li>
                <strong>4. Manage Multiple Profiles:</strong> Create and manage profiles for family members, friends, or different life stages.
              </li>
              <li>
                <strong>5. Explore Your Cosmic Blueprint:</strong> Dive deep into each astrological system to understand yourself better.
              </li>
            </ul>
          </div>
        </section>

        {/* Swiss Ephemeris Section */}
        <section className="about-section" style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15))', borderColor: 'var(--primary-color)' }}>
          <div className="section-icon">🌌</div>
          <h2>Swiss Ephemeris - The Gold Standard</h2>
          <p>
            AstroVerse uses <strong>Swiss Ephemeris</strong>, the most precise and widely respected astronomical 
            calculation engine in professional astrology. Developed by Astrodienst in Switzerland, Swiss Ephemeris 
            provides highly accurate planetary positions spanning thousands of years.
          </p>
          <div className="key-concepts">
            <h3>Why Swiss Ephemeris?</h3>
            <ul>
              <li>
                <strong>Astronomical Precision:</strong> Accurate to within fractions of an arcsecond for planetary positions
              </li>
              <li>
                <strong>Professional Standard:</strong> Used by professional astrologers and researchers worldwide
              </li>
              <li>
                <strong>Comprehensive Data:</strong> Covers all planets, asteroids, lunar nodes, and mathematical points
              </li>
              <li>
                <strong>Historical Range:</strong> Provides data from 5400 BCE to 5400 CE
              </li>
              <li>
                <strong>Open Source:</strong> Transparent calculations that can be verified and trusted
              </li>
            </ul>
          </div>
          <p style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
            This ensures that your birth chart calculations are as accurate as those used by professional 
            astrologers and research institutions around the world.
          </p>
        </section>

        {/* Astrology Systems Explained with Emojis */}
        <section className="about-section">
          <div className="section-icon">📚</div>
          <h2>Understanding Astrology Systems</h2>
          <div className="key-concepts">
            <h3>🕉️ Vedic Astrology (Jyotish) 🪷</h3>
            <p>
              An ancient Indian system that uses the sidereal zodiac, accounting for the precession
              of the equinoxes. It focuses on karma, dharma, and spiritual growth through the analysis
              of planetary positions, nakshatras (lunar mansions), and dashas (planetary periods).
              Swiss Ephemeris ensures precise sidereal calculations for accurate Vedic predictions.
            </p>
            
            <h3>♈ Western Astrology ⭐</h3>
            <p>
              Based on the tropical zodiac and the relationship between the Sun's position at birth
              and the seasons. It emphasizes psychological insights, personality traits, and life patterns
              through the study of planets, houses, and aspects. Swiss Ephemeris provides exact tropical 
              positions for professional-grade Western astrology.
            </p>
            
            <h3>🔢 Numerology 🔮</h3>
            <p>
              A mystical science that studies the vibrational essence of numbers derived from your
              name and birth date. Each number carries specific energies that influence your personality,
              life path, and destiny. Pythagorean and Chaldean systems are both supported.
            </p>
            
            <h3>🐉 Chinese Astrology 🏮</h3>
            <p>
              A 12-year cycle system where each year is represented by an animal sign combined with
              one of five elements (Wu Xing: Wood, Fire, Earth, Metal, Water). It provides insights into 
              personality, compatibility, and fortune based on the year, month, day, and hour of birth 
              according to the traditional Chinese lunar calendar.
            </p>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="about-section">
          <div className="section-icon">💻</div>
          <h2>Technology Stack</h2>
          <p style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            Built with modern web technologies and professional-grade astronomical calculations.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <span style={{ padding: '0.6rem 1.2rem', background: 'rgba(99, 102, 241, 0.2)', border: '1px solid var(--primary-color)', borderRadius: '20px', color: 'var(--primary-color)', fontWeight: '600', transition: 'all 0.3s ease' }}>
              ⚛️ React.js
            </span>
            <span style={{ padding: '0.6rem 1.2rem', background: 'rgba(99, 102, 241, 0.2)', border: '1px solid var(--primary-color)', borderRadius: '20px', color: 'var(--primary-color)', fontWeight: '600', transition: 'all 0.3s ease' }}>
              📜 JavaScript ES6+
            </span>
            <span style={{ padding: '0.6rem 1.2rem', background: 'rgba(99, 102, 241, 0.2)', border: '1px solid var(--primary-color)', borderRadius: '20px', color: 'var(--primary-color)', fontWeight: '600', transition: 'all 0.3s ease' }}>
              🎨 CSS3
            </span>
            <span style={{ padding: '0.6rem 1.2rem', background: 'rgba(99, 102, 241, 0.2)', border: '1px solid var(--primary-color)', borderRadius: '20px', color: 'var(--primary-color)', fontWeight: '600', transition: 'all 0.3s ease' }}>
              🔄 React Context API
            </span>
            <span style={{ padding: '0.6rem 1.2rem', background: 'rgba(99, 102, 241, 0.2)', border: '1px solid var(--primary-color)', borderRadius: '20px', color: 'var(--primary-color)', fontWeight: '600', transition: 'all 0.3s ease' }}>
              💾 Local Storage
            </span>
            <span style={{ padding: '0.6rem 1.2rem', background: 'rgba(99, 102, 241, 0.2)', border: '1px solid var(--primary-color)', borderRadius: '20px', color: 'var(--primary-color)', fontWeight: '600', transition: 'all 0.3s ease' }}>
              🛣️ React Router
            </span>
            <span style={{ padding: '0.6rem 1.2rem', background: 'rgba(99, 102, 241, 0.2)', border: '1px solid var(--primary-color)', borderRadius: '20px', color: 'var(--primary-color)', fontWeight: '600', transition: 'all 0.3s ease' }}>
              🌌 Swiss Ephemeris
            </span>
            <span style={{ padding: '0.6rem 1.2rem', background: 'rgba(99, 102, 241, 0.2)', border: '1px solid var(--primary-color)', borderRadius: '20px', color: 'var(--primary-color)', fontWeight: '600', transition: 'all 0.3s ease' }}>
              🔌 Prokerala API
            </span>
          </div>
        </section>

        {/* Project Journey */}
        <section className="about-section">
          <div className="section-icon">🚀</div>
          <h2>Project Journey</h2>
          <p>
            AstroVerse was born from a passion to make ancient astrological wisdom accessible through
            modern technology. Started in November 2025 by <strong>Sanyam Rudola (@Sanyamrudola)</strong>, 
            this project combines traditional astrological systems with cutting-edge web development and 
            professional-grade Swiss Ephemeris calculations.
          </p>
          <p>
            Every line of code, every calculation, and every design element has been crafted with care
            to ensure accuracy, beauty, and ease of use. Our goal is to provide a tool that helps people
            understand themselves better through the lens of multiple astrological traditions, backed by
            the most precise astronomical data available.
          </p>
        </section>

        {/* Contact Section */}
        <section className="about-section">
          <div className="section-icon">📬</div>
          <h2>Get In Touch</h2>
          <p style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            Have questions, feedback, or suggestions? We'd love to hear from you!
          </p>
          <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
            <p style={{ margin: '1rem 0', fontSize: '1.1rem' }}>
              📧 <strong>Email:</strong> contact@astroverse.com
            </p>
            <p style={{ margin: '1rem 0', fontSize: '1.1rem' }}>
              🌐 <strong>Website:</strong> www.astroverse.com
            </p>
            <p style={{ margin: '1rem 0', fontSize: '1.1rem' }}>
              💼 <strong>Lead Developer:</strong> Sanyam Rudola
            </p>
            <p style={{ margin: '1rem 0', fontSize: '1.1rem' }}>
              🐙 <strong>GitHub:</strong> @Sanyamrudola
            </p>
            <p style={{ margin: '1rem 0', fontSize: '1.1rem' }}>
              📱 Follow us for daily cosmic insights and updates
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="about-section disclaimer">
          <div className="section-icon">⚠️</div>
          <h2>Important Disclaimer</h2>
          <p>
            AstroVerse provides astrological insights for entertainment, self-reflection, and personal
            growth purposes only. While we use Swiss Ephemeris for astronomical accuracy and strive for 
            precision in our calculations using established astrological principles, the interpretations 
            should not be considered as absolute truths or professional advice.
          </p>
          <p>
            Astrology is a tool for self-understanding and should not be used as a substitute for
            professional advice in matters of health, finance, legal issues, or major life decisions.
            Always consult qualified professionals for important matters.
          </p>
          <p>
            Your birth chart is uniquely yours, and interpretations may vary based on different
            astrological traditions and practitioners. We encourage you to use this information
            as a starting point for self-discovery and personal exploration.
          </p>
        </section>

        {/* Footer Note */}
        <div className="about-footer">
          <p style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
            ✨ AstroVerse - Where Ancient Wisdom Meets Modern Technology 🌌
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
            © 2025 AstroVerse. Created with 💜 by Sanyam Rudola (@Sanyamrudola) and team.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Powered by Swiss Ephemeris - The Gold Standard in Astronomical Calculations
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.5rem', fontStyle: 'italic' }}>
            Last updated: November 10, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;