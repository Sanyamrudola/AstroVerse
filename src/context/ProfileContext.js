import React, { createContext, useState, useContext, useEffect } from 'react';
import { calculateAllAstrology } from '../utils/astrologyData';

const ProfileContext = createContext();

export const useProfiles = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfiles must be used within ProfileProvider');
  }
  return context;
};

export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([]);
  const [activeProfile, setActiveProfile] = useState(null);

  // Load profiles from localStorage on mount
  useEffect(() => {
    const savedProfiles = localStorage.getItem('astroverse_profiles');
    const savedActiveId = localStorage.getItem('astroverse_active_profile');
    
    if (savedProfiles) {
      const parsedProfiles = JSON.parse(savedProfiles);
      setProfiles(parsedProfiles);
      
      if (savedActiveId) {
        const active = parsedProfiles.find(p => p.id === savedActiveId);
        setActiveProfile(active || null);
      }
    }
  }, []);

  // Save profiles to localStorage whenever they change
  useEffect(() => {
    if (profiles.length > 0) {
      localStorage.setItem('astroverse_profiles', JSON.stringify(profiles));
    }
  }, [profiles]);

  // Save active profile to localStorage
  useEffect(() => {
    if (activeProfile) {
      localStorage.setItem('astroverse_active_profile', activeProfile.id);
    }
  }, [activeProfile]);

  const addProfile = (profileData) => {
    const newProfile = {
      id: Date.now().toString(),
      ...profileData,
      astrology: calculateAllAstrology(profileData),
      createdAt: new Date().toISOString()
    };

    setProfiles(prev => [...prev, newProfile]);
    
    // Set as active if it's the first profile
    if (profiles.length === 0) {
      setActiveProfile(newProfile);
    }

    return newProfile;
  };

  const updateProfile = (id, updatedData) => {
    // IMPORTANT: Recalculate astrology with updated data
    const updatedAstrology = calculateAllAstrology(updatedData);
    
    const updatedProfiles = profiles.map(profile =>
      profile.id === id
        ? { 
            ...profile, 
            ...updatedData,
            astrology: updatedAstrology  // Use fresh calculations
          }
        : profile
    );
    
    setProfiles(updatedProfiles);

    // Update active profile if it was the one being edited
    if (activeProfile?.id === id) {
      const updated = {
        ...activeProfile,
        ...updatedData,
        astrology: updatedAstrology  // Use fresh calculations
      };
      setActiveProfile(updated);
    }
  };

  const deleteProfile = (id) => {
    setProfiles(prev => prev.filter(profile => profile.id !== id));
    
    // Clear active profile if it was deleted
    if (activeProfile?.id === id) {
      const remaining = profiles.filter(p => p.id !== id);
      setActiveProfile(remaining[0] || null);
    }
  };

  const setActive = (profile) => {
    setActiveProfile(profile);
  };

  return (
    <ProfileContext.Provider
      value={{
        profiles,
        activeProfile,
        addProfile,
        updateProfile,
        deleteProfile,
        setActiveProfile: setActive
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};