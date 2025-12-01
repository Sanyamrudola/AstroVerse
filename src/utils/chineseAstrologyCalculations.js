/**
 * CHINESE ASTROLOGY CALCULATIONS
 * Accurate Chinese Zodiac, Elements, and Yin/Yang
 */

/**
 * Chinese New Year dates (1990-2030)
 * Format: Year: [Month (0-indexed), Day]
 */
const CHINESE_NEW_YEAR = {
  1990: [0, 27],  // Jan 27, 1990
  1991: [1, 15],  // Feb 15, 1991
  1992: [1, 4],   // Feb 4, 1992
  1993: [0, 23],  // Jan 23, 1993
  1994: [1, 10],  // Feb 10, 1994
  1995: [0, 31],  // Jan 31, 1995
  1996: [1, 19],  // Feb 19, 1996
  1997: [1, 7],   // Feb 7, 1997
  1998: [0, 28],  // Jan 28, 1998
  1999: [1, 16],  // Feb 16, 1999
  2000: [1, 5],   // Feb 5, 2000
  2001: [0, 24],  // Jan 24, 2001
  2002: [1, 12],  // Feb 12, 2002
  2003: [1, 1],   // Feb 1, 2003
  2004: [0, 22],  // Jan 22, 2004
  2005: [1, 9],   // Feb 9, 2005
  2006: [0, 29],  // Jan 29, 2006
  2007: [1, 18],  // Feb 18, 2007
  2008: [1, 7],   // Feb 7, 2008
  2009: [0, 26],  // Jan 26, 2009
  2010: [1, 14],  // Feb 14, 2010
  2011: [1, 3],   // Feb 3, 2011
  2012: [0, 23],  // Jan 23, 2012
  2013: [1, 10],  // Feb 10, 2013
  2014: [0, 31],  // Jan 31, 2014
  2015: [1, 19],  // Feb 19, 2015
  2016: [1, 8],   // Feb 8, 2016
  2017: [0, 28],  // Jan 28, 2017
  2018: [1, 16],  // Feb 16, 2018
  2019: [1, 5],   // Feb 5, 2019
  2020: [0, 25],  // Jan 25, 2020
  2021: [1, 12],  // Feb 12, 2021
  2022: [1, 1],   // Feb 1, 2022
  2023: [0, 22],  // Jan 22, 2023
  2024: [1, 10],  // Feb 10, 2024
  2025: [0, 29],  // Jan 29, 2025
  2026: [1, 17],  // Feb 17, 2026
  2027: [1, 6],   // Feb 6, 2027
  2028: [0, 26],  // Jan 26, 2028
  2029: [1, 13],  // Feb 13, 2029
  2030: [1, 3]    // Feb 3, 2030
};

/**
 * Get adjusted year based on Chinese New Year
 */
const getChineseYear = (dateOfBirth) => {
  const date = new Date(dateOfBirth);
  let year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  // Check if we have the exact date
  if (CHINESE_NEW_YEAR[year]) {
    const [cnyMonth, cnyDay] = CHINESE_NEW_YEAR[year];
    const cnyDate = new Date(year, cnyMonth, cnyDay);
    
    // If birth date is before Chinese New Year, use previous year
    if (date < cnyDate) {
      year = year - 1;
    }
  } else {
    // Fallback: approximate (before Feb 4 = previous year)
    if (month === 0 || (month === 1 && day < 4)) {
      year = year - 1;
    }
  }

  return year;
};

/**
 * Calculate Chinese Zodiac Animal
 */
export const calculateChineseZodiacAnimal = (dateOfBirth) => {
  const animals = [
    'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake',
    'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'
  ];

  const year = getChineseYear(dateOfBirth);
  
  // 1900 was Year of the Rat (index 0)
  // 1924 was also Rat, 1948, 1972, 1996, 2020...
  const index = (year - 1900) % 12;
  
  return animals[index];
};

/**
 * Calculate Chinese Element
 */
export const calculateChineseElement = (dateOfBirth) => {
  const year = getChineseYear(dateOfBirth);
  const lastDigit = year % 10;

  // Each element lasts 2 years
  if (lastDigit === 0 || lastDigit === 1) return 'Metal';
  if (lastDigit === 2 || lastDigit === 3) return 'Water';
  if (lastDigit === 4 || lastDigit === 5) return 'Wood';
  if (lastDigit === 6 || lastDigit === 7) return 'Fire';
  if (lastDigit === 8 || lastDigit === 9) return 'Earth';

  return 'Wood'; // default
};

/**
 * Calculate Yin or Yang
 */
export const calculateYinYang = (dateOfBirth) => {
  const year = getChineseYear(dateOfBirth);
  
  // Even years are Yang, Odd years are Yin
  return year % 2 === 0 ? 'Yang' : 'Yin';
};

/**
 * Get lucky numbers for each animal
 */
export const getLuckyNumbers = (animal) => {
  const luckyNumbers = {
    'Rat': [2, 3],
    'Ox': [1, 4],
    'Tiger': [1, 3, 4],
    'Rabbit': [3, 4, 6],
    'Dragon': [1, 6, 7],
    'Snake': [2, 8, 9],
    'Horse': [2, 3, 7],
    'Goat': [3, 4, 9],
    'Monkey': [4, 9],
    'Rooster': [5, 7, 8],
    'Dog': [3, 4, 9],
    'Pig': [2, 5, 8]
  };

  return luckyNumbers[animal] || [1, 2, 3];
};

/**
 * Get emoji for animal
 */
export const getAnimalEmoji = (animal) => {
  const emojis = {
    'Rat': '🐭',
    'Ox': '🐂',
    'Tiger': '🐯',
    'Rabbit': '🐰',
    'Dragon': '🐉',
    'Snake': '🐍',
    'Horse': '🐴',
    'Goat': '🐐',
    'Monkey': '🐵',
    'Rooster': '🐔',
    'Dog': '🐕',
    'Pig': '🐷'
  };
  return emojis[animal] || '🐵';
};

/**
 * Get emoji for element
 */
export const getElementEmoji = (element) => {
  const emojis = {
    'Metal': '⚙️',
    'Water': '💧',
    'Wood': '🌳',
    'Fire': '🔥',
    'Earth': '🌍'
  };
  return emojis[element] || '🌳';
};

/**
 * Main Chinese Astrology Calculator
 */
export const calculateChineseAstrology = (dateOfBirth) => {
  const animal = calculateChineseZodiacAnimal(dateOfBirth);
  const element = calculateChineseElement(dateOfBirth);
  const yinYang = calculateYinYang(dateOfBirth);
  const luckyNumbers = getLuckyNumbers(animal);

  return {
    animal: animal,
    animalEmoji: getAnimalEmoji(animal),
    element: element,
    elementEmoji: getElementEmoji(element),
    yinYang: yinYang,
    luckyNumbers: luckyNumbers,
    fullSign: `${element} ${animal}`, // e.g., "Wood Dragon"
    // For display
    animalDisplay: `${animal} ${getAnimalEmoji(animal)}`,
    elementDisplay: `${element} ${getElementEmoji(element)}`,
    yinYangDisplay: `${yinYang} ☯️`
  };
};

/**
 * Get personality traits for animal
 */
export const getAnimalTraits = (animal) => {
  const traits = {
    'Rat': { positive: ['Intelligent', 'Adaptable', 'Quick-witted'], negative: ['Suspicious', 'Opportunistic'] },
    'Ox': { positive: ['Diligent', 'Dependable', 'Strong'], negative: ['Stubborn', 'Conservative'] },
    'Tiger': { positive: ['Brave', 'Confident', 'Competitive'], negative: ['Impulsive', 'Rebellious'] },
    'Rabbit': { positive: ['Gentle', 'Elegant', 'Compassionate'], negative: ['Superficial', 'Timid'] },
    'Dragon': { positive: ['Confident', 'Intelligent', 'Enthusiastic'], negative: ['Arrogant', 'Impatient'] },
    'Snake': { positive: ['Wise', 'Enigmatic', 'Intuitive'], negative: ['Jealous', 'Suspicious'] },
    'Horse': { positive: ['Animated', 'Active', 'Energetic'], negative: ['Impatient', 'Hot-tempered'] },
    'Goat': { positive: ['Calm', 'Gentle', 'Creative'], negative: ['Pessimistic', 'Timid'] },
    'Monkey': { positive: ['Quick-witted', 'Charming', 'Versatile'], negative: ['Mischievous', 'Restless'] },
    'Rooster': { positive: ['Observant', 'Hardworking', 'Courageous'], negative: ['Critical', 'Boastful'] },
    'Dog': { positive: ['Loyal', 'Honest', 'Friendly'], negative: ['Anxious', 'Critical'] },
    'Pig': { positive: ['Compassionate', 'Generous', 'Diligent'], negative: ['Naive', 'Materialistic'] }
  };
  return traits[animal] || { positive: [], negative: [] };
};