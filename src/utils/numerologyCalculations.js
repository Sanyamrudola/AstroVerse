/**
 * MODERN NUMEROLOGY CALCULATIONS (Chaldean System)
 * More accurate and ancient system
 */

/**
 * Chaldean Letter Values (1-8, no 9)
 * This is the CORRECT modern numerology system
 */
const CHALDEAN_VALUES = {
  'a': 1, 'i': 1, 'j': 1, 'q': 1, 'y': 1,
  'b': 2, 'k': 2, 'r': 2,
  'c': 3, 'g': 3, 'l': 3, 's': 3,
  'd': 4, 'm': 4, 't': 4,
  'e': 5, 'h': 5, 'n': 5, 'x': 5,
  'u': 6, 'v': 6, 'w': 6,
  'o': 7, 'z': 7,
  'f': 8, 'p': 8
};

/**
 * Reduce to single digit (1-9)
 * In Chaldean, we keep master numbers 11, 22, 33
 */
const reduceToSingleDigit = (num) => {
  while (num > 9) {
    // Keep master numbers
    if (num === 11 || num === 22 || num === 33) {
      return num;
    }
    num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  }
  return num;
};

/**
 * Calculate RADICAL NUMBER (Psychic/Birth Number)
 * This is just the DAY of birth reduced
 * For Nov 21, 2004: Day = 21 → 2+1 = 3
 */
export const calculateRadicalNumber = (dateOfBirth) => {
  const date = new Date(dateOfBirth);
  const day = date.getDate();
  
  return reduceToSingleDigit(day);
};

/**
 * Calculate DESTINY NUMBER (Name Number)
 * Sum of all letters in FULL NAME using Chaldean values
 * For "Sanyam Rudola": S(3)+A(1)+N(5)+Y(1)+A(1)+M(4) + R(2)+U(6)+D(4)+O(7)+L(3)+A(1) = 38 → 3+8 = 11
 */
export const calculateDestinyNumber = (fullName) => {
  const cleanName = fullName.toLowerCase().replace(/[^a-z]/g, '');
  
  const sum = cleanName.split('').reduce((total, letter) => {
    return total + (CHALDEAN_VALUES[letter] || 0);
  }, 0);

  return reduceToSingleDigit(sum);
};

/**
 * Calculate LIFE PATH NUMBER (Bhagyank/Fate Number)
 * Sum of ENTIRE birth date
 * For Nov 21, 2004: 2+1+1+1+2+0+0+4 = 11
 */
export const calculateLifePathNumber = (dateOfBirth) => {
  // eslint-disable-next-line no-useless-escape
  const dateString = dateOfBirth.replace(/[\-\/]/g, ''); // Remove separators
  
  const sum = dateString.split('').reduce((total, digit) => {
    return total + parseInt(digit, 10);
  }, 0);

  return reduceToSingleDigit(sum);
};

/**
 * Calculate SOUL URGE NUMBER (Heart's Desire)
 * Sum of VOWELS in name using Chaldean values
 */
export const calculateSoulUrgeNumber = (fullName) => {
  const vowels = 'aeiou';
  const cleanName = fullName.toLowerCase().replace(/[^a-z]/g, '');
  
  const sum = cleanName.split('').reduce((total, letter) => {
    if (vowels.includes(letter)) {
      return total + (CHALDEAN_VALUES[letter] || 0);
    }
    return total;
  }, 0);

  return reduceToSingleDigit(sum);
};

/**
 * Calculate PERSONALITY NUMBER (Outer Personality)
 * Sum of CONSONANTS in name using Chaldean values
 */
export const calculatePersonalityNumber = (fullName) => {
  const vowels = 'aeiou';
  const cleanName = fullName.toLowerCase().replace(/[^a-z]/g, '');
  
  const sum = cleanName.split('').reduce((total, letter) => {
    if (!vowels.includes(letter)) {
      return total + (CHALDEAN_VALUES[letter] || 0);
    }
    return total;
  }, 0);

  return reduceToSingleDigit(sum);
};

/**
 * Calculate MATURITY NUMBER (True Self - appears after age 35-40)
 * Life Path + Destiny Number
 */
export const calculateMaturityNumber = (dateOfBirth, fullName) => {
  const lifePath = calculateLifePathNumber(dateOfBirth);
  const destiny = calculateDestinyNumber(fullName);
  
  return reduceToSingleDigit(lifePath + destiny);
};

/**
 * Main Modern Numerology Calculator
 */
export const calculateNumerology = (name, dateOfBirth) => {
  return {
    radicalNumber: calculateRadicalNumber(dateOfBirth),
    destinyNumber: calculateDestinyNumber(name),
    lifePath: calculateLifePathNumber(dateOfBirth),
    soulUrge: calculateSoulUrgeNumber(name),
    personality: calculatePersonalityNumber(name),
    maturity: calculateMaturityNumber(dateOfBirth, name)
  };
};

/**
 * Get meaning for numbers (1-9 and master numbers)
 */
export const getNumberMeaning = (number) => {
  const meanings = {
    1: 'The Leader - Sun - Independent, ambitious, innovative, pioneering',
    2: 'The Diplomat - Moon - Sensitive, cooperative, intuitive, peacemaker',
    3: 'The Creative - Jupiter - Expressive, optimistic, artistic, joyful',
    4: 'The Builder - Rahu - Practical, disciplined, hardworking, stable',
    5: 'The Freedom Seeker - Mercury - Adventurous, versatile, dynamic, curious',
    6: 'The Nurturer - Venus - Responsible, caring, harmonious, family-oriented',
    7: 'The Seeker - Ketu - Spiritual, analytical, introspective, philosophical',
    8: 'The Powerhouse - Saturn - Ambitious, authoritative, material success, karmic',
    9: 'The Humanitarian - Mars - Compassionate, generous, idealistic, courageous',
    11: 'Master Number - Spiritual Illuminator - Intuitive, inspirational, visionary',
    22: 'Master Number - Master Builder - Practical visionary, manifests dreams',
    33: 'Master Number - Master Teacher - Compassionate healer, selfless service'
  };
  return meanings[number] || 'Unknown';
};