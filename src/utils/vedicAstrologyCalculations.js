/**
 * VEDIC ASTROLOGY CALCULATIONS
 * Note: For accurate calculations, would need exact birth time and coordinates
 */

export const calculateVedicAstrology = (dateOfBirth, timeOfBirth, placeOfBirth) => {
  const date = new Date(dateOfBirth + 'T' + timeOfBirth);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  const rashis = [
    'Mesha (Aries)', 'Vrishabha (Taurus)', 'Mithuna (Gemini)', 
    'Karka (Cancer)', 'Simha (Leo)', 'Kanya (Virgo)',
    'Tula (Libra)', 'Vrishchika (Scorpio)', 'Dhanu (Sagittarius)',
    'Makara (Capricorn)', 'Kumbha (Aquarius)', 'Meena (Pisces)'
  ];

  const nakshatras = [
    'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra',
    'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni',
    'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha',
    'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha',
    'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'
  ];

  // Vedic Sun Sign (Rashi) - With Ayanamsa adjustment
  let sunSignIndex;
  if ((month === 4 && day >= 14) || (month === 5 && day <= 14)) sunSignIndex = 0;
  else if ((month === 5 && day >= 15) || (month === 6 && day <= 14)) sunSignIndex = 1;
  else if ((month === 6 && day >= 15) || (month === 7 && day <= 16)) sunSignIndex = 2;
  else if ((month === 7 && day >= 17) || (month === 8 && day <= 16)) sunSignIndex = 3;
  else if ((month === 8 && day >= 17) || (month === 9 && day <= 16)) sunSignIndex = 4;
  else if ((month === 9 && day >= 17) || (month === 10 && day <= 16)) sunSignIndex = 5;
  else if ((month === 10 && day >= 17) || (month === 11 && day <= 15)) sunSignIndex = 6;
  else if ((month === 11 && day >= 16) || (month === 12 && day <= 15)) sunSignIndex = 7;
  else if ((month === 12 && day >= 16) || (month === 1 && day <= 13)) sunSignIndex = 8;
  else if ((month === 1 && day >= 14) || (month === 2 && day <= 12)) sunSignIndex = 9;
  else if ((month === 2 && day >= 13) || (month === 3 && day <= 13)) sunSignIndex = 10;
  else sunSignIndex = 11;

  // Moon Sign approximation
  const dayOfYear = Math.floor((date - new Date(year, 0, 0)) / (1000 * 60 * 60 * 24));
  const hours = date.getHours() + date.getMinutes() / 60;
  
  const lunarMonth = (dayOfYear + hours / 24) / 27.321661;
  const moonLongitude = ((lunarMonth % 1) * 360 - 23.85) % 360;
  const moonSignIndex = Math.floor((moonLongitude < 0 ? moonLongitude + 360 : moonLongitude) / 30);

  // Nakshatra calculation
  const nakshatraIndex = Math.floor(((lunarMonth % 1) * 27)) % 27;

  // Ascendant approximation
  const localSiderealTime = (hours) % 24;
  const ascendantIndex = Math.floor((localSiderealTime / 2) % 12);

  return {
    rashi: rashis[sunSignIndex],
    moonSign: rashis[moonSignIndex],
    nakshatra: nakshatras[nakshatraIndex],
    ascendant: rashis[ascendantIndex],
    rulingPlanet: ['Mars', 'Venus', 'Mercury', 'Moon', 'Sun', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Saturn', 'Jupiter'][moonSignIndex]
  };
};