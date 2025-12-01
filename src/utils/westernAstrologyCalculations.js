/**
 * WESTERN ASTROLOGY CALCULATIONS
 */

export const calculateWesternAstrology = (dateOfBirth, timeOfBirth, placeOfBirth) => {
  const date = new Date(dateOfBirth + 'T' + timeOfBirth);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const getZodiacSign = (m, d) => {
    if ((m === 3 && d >= 21) || (m === 4 && d <= 19)) return 'Aries ♈';
    if ((m === 4 && d >= 20) || (m === 5 && d <= 20)) return 'Taurus ♉';
    if ((m === 5 && d >= 21) || (m === 6 && d <= 20)) return 'Gemini ♊';
    if ((m === 6 && d >= 21) || (m === 7 && d <= 22)) return 'Cancer ♋';
    if ((m === 7 && d >= 23) || (m === 8 && d <= 22)) return 'Leo ♌';
    if ((m === 8 && d >= 23) || (m === 9 && d <= 22)) return 'Virgo ♍';
    if ((m === 9 && d >= 23) || (m === 10 && d <= 22)) return 'Libra ♎';
    if ((m === 10 && d >= 23) || (m === 11 && d <= 21)) return 'Scorpio ♏';
    if ((m === 11 && d >= 22) || (m === 12 && d <= 21)) return 'Sagittarius ♐';
    if ((m === 12 && d >= 22) || (m === 1 && d <= 19)) return 'Capricorn ♑';
    if ((m === 1 && d >= 20) || (m === 2 && d <= 18)) return 'Aquarius ♒';
    return 'Pisces ♓';
  };

  const getElement = (sign) => {
    if (sign.includes('Aries') || sign.includes('Leo') || sign.includes('Sagittarius')) return 'Fire 🔥';
    if (sign.includes('Taurus') || sign.includes('Virgo') || sign.includes('Capricorn')) return 'Earth 🌍';
    if (sign.includes('Gemini') || sign.includes('Libra') || sign.includes('Aquarius')) return 'Air 💨';
    if (sign.includes('Cancer') || sign.includes('Scorpio') || sign.includes('Pisces')) return 'Water 💧';
    return 'Unknown';
  };

  const sunSign = getZodiacSign(month, day);
  const dayOfMonth = date.getDate();
  const hour = date.getHours();
  
  const signs = ['Aries ♈', 'Taurus ♉', 'Gemini ♊', 'Cancer ♋', 'Leo ♌', 'Virgo ♍', 
                 'Libra ♎', 'Scorpio ♏', 'Sagittarius ♐', 'Capricorn ♑', 'Aquarius ♒', 'Pisces ♓'];
  
  const sunIndex = signs.indexOf(sunSign);
  const moonOffset = Math.floor((dayOfMonth + hour / 24) / 2.3);
  const moonSignIndex = (sunIndex + moonOffset) % 12;
  const risingOffset = Math.floor(hour / 2);
  const risingSignIndex = (sunIndex + risingOffset) % 12;

  return {
    sunSign: sunSign,
    moonSign: signs[moonSignIndex],
    risingSign: signs[risingSignIndex],
    element: getElement(sunSign)
  };
};