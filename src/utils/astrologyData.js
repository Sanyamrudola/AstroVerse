/**
 * MAIN ASTROLOGY DATA CALCULATOR
 * Imports from separate calculation files
 */

import { calculateNumerology } from './numerologyCalculations';
import { calculateChineseAstrology } from './chineseAstrologyCalculations';
import { calculateVedicAstrology } from './vedicAstrologyCalculations';
import { calculateWesternAstrology } from './westernAstrologyCalculations';

/**
 * Main calculator that combines all astrological systems
 */
export const calculateAllAstrology = (profile) => {
  if (!profile) return null;

  return {
    vedic: calculateVedicAstrology(
      profile.dateOfBirth, 
      profile.timeOfBirth, 
      profile.placeOfBirth || ''
    ),
    western: calculateWesternAstrology(
      profile.dateOfBirth, 
      profile.timeOfBirth, 
      profile.placeOfBirth || ''
    ),
    numerology: calculateNumerology(
      profile.name, 
      profile.dateOfBirth
    ),
    chinese: calculateChineseAstrology(
      profile.dateOfBirth
    )
  };
};

// Export individual calculators for direct use
export { calculateNumerology } from './numerologyCalculations';
export { calculateChineseAstrology } from './chineseAstrologyCalculations';
export { calculateVedicAstrology } from './vedicAstrologyCalculations';
export { calculateWesternAstrology } from './westernAstrologyCalculations';