import React from 'react';
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';

const ProfileCard = ({ profile, isActive, onSelect, onEdit, onDelete }) => {
  return (
    <div className={`profile-card ${isActive ? 'active' : ''}`}>
      <div className="profile-card-header">
        <div className="profile-avatar">
          {profile.name.charAt(0).toUpperCase()}
        </div>
        <div className="profile-info">
          <h3>{profile.name}</h3>
          <p className="profile-dob">
            {new Date(profile.dateOfBirth).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
        {isActive && <div className="active-badge"><FaCheck /> Active</div>}
      </div>
      
      <div className="profile-details">
        <div className="detail-item">
          <span className="label">Time:</span>
          <span className="value">{profile.timeOfBirth}</span>
        </div>
        <div className="detail-item">
          <span className="label">Place:</span>
          <span className="value">{profile.placeOfBirth}</span>
        </div>
      </div>

      <div className="profile-actions">
        {!isActive && (
          <button className="btn btn-select" onClick={() => onSelect(profile)}>
            Select Profile
          </button>
        )}
        <button className="btn btn-icon" onClick={() => onEdit(profile)}>
          <FaEdit /> Edit
        </button>
        <button className="btn btn-icon btn-danger" onClick={() => onDelete(profile.id)}>
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;