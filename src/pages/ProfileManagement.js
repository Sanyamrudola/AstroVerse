import React, { useState } from 'react';
import { useProfiles } from '../context/ProfileContext';

const ProfileManagement = () => {
  const { profiles, activeProfile, addProfile, updateProfile, deleteProfile, setActiveProfile } = useProfiles();
  
  const [showForm, setShowForm] = useState(false);
  const [editingProfile, setEditingProfile] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    timeOfBirth: '12:00',
    placeOfBirth: '',
    gender: 'male'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingProfile) {
      // Update existing profile
      updateProfile(editingProfile.id, formData);
    } else {
      // Add new profile
      addProfile(formData);
    }

    // Reset form
    setFormData({
      name: '',
      dateOfBirth: '',
      timeOfBirth: '12:00',
      placeOfBirth: '',
      gender: 'male'
    });
    setShowForm(false);
    setEditingProfile(null);
  };

  const handleEdit = (profile) => {
    setEditingProfile(profile);
    setFormData({
      name: profile.name,
      dateOfBirth: profile.dateOfBirth,
      timeOfBirth: profile.timeOfBirth,
      placeOfBirth: profile.placeOfBirth,
      gender: profile.gender
    });
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this profile?')) {
      deleteProfile(id);
    }
  };

  const handleSelectProfile = (profile) => {
    setActiveProfile(profile);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingProfile(null);
    setFormData({
      name: '',
      dateOfBirth: '',
      timeOfBirth: '12:00',
      placeOfBirth: '',
      gender: 'male'
    });
  };

  return (
    <div className="profile-management-page">
      <div className="page-header">
        <h1>👤 Profile Management</h1>
        <p>Create and manage multiple astrological profiles</p>
      </div>

      <div className="profile-content">
        {/* Add Profile Button */}
        <div className="add-profile-section">
          <button 
            className="btn btn-primary"
            onClick={() => setShowForm(true)}
          >
            <span>➕</span>
            <span>Create New Profile</span>
          </button>
        </div>

        {/* Profile Form */}
        {showForm && (
          <div className="profile-form-container">
            <div className="form-header">
              <h2>{editingProfile ? 'Edit Profile' : 'Create New Profile'}</h2>
              <button className="btn-close" onClick={handleCancel}>
                ✕
              </button>
            </div>

            <form className="profile-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group full-width">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="dateOfBirth">Date of Birth *</label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="timeOfBirth">Time of Birth *</label>
                  <input
                    type="time"
                    id="timeOfBirth"
                    name="timeOfBirth"
                    value={formData.timeOfBirth}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="placeOfBirth">Place of Birth</label>
                  <input
                    type="text"
                    id="placeOfBirth"
                    name="placeOfBirth"
                    value={formData.placeOfBirth}
                    onChange={handleInputChange}
                    placeholder="City, Country"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-success">
                  {editingProfile ? 'Update Profile' : 'Create Profile'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Profiles List */}
        {profiles.length > 0 && (
          <div className="profiles-list-container">
            <h2>Your Profiles ({profiles.length})</h2>
            <div className="profiles-grid">
              {profiles.map(profile => (
                <div 
                  key={profile.id} 
                  className={`profile-card ${activeProfile?.id === profile.id ? 'active' : ''}`}
                  onClick={() => handleSelectProfile(profile)}
                >
                  <div className="profile-card-header">
                    <div className="profile-avatar">
                      {profile.name.charAt(0).toUpperCase()}
                    </div>
                    {activeProfile?.id === profile.id && (
                      <span className="active-badge">Active</span>
                    )}
                  </div>

                  <div className="profile-card-body">
                    <h3>{profile.name}</h3>
                    <div className="profile-details">
                      <p><strong>DOB:</strong> {new Date(profile.dateOfBirth).toLocaleDateString()}</p>
                      <p><strong>Time:</strong> {profile.timeOfBirth}</p>
                      {profile.placeOfBirth && (
                        <p><strong>Place:</strong> {profile.placeOfBirth}</p>
                      )}
                      <p><strong>Gender:</strong> {profile.gender}</p>
                    </div>
                  </div>

                  <div className="profile-card-actions">
                    <button
                      className="btn-icon btn-edit"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(profile);
                      }}
                      title="Edit Profile"
                    >
                      ✏️
                    </button>
                    <button
                      className="btn-icon btn-delete"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(profile.id);
                      }}
                      title="Delete Profile"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {profiles.length === 0 && !showForm && (
          <div className="empty-state">
            <span className="empty-icon">📋</span>
            <h3>No Profiles Yet</h3>
            <p>Create your first astrological profile to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileManagement;