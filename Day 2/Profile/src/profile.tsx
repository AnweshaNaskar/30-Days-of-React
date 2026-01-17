import React from 'react';

const ProfileCard = ({ name, age, occupation, location, bio, profileImage }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '20px',
    width: '280px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff'
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '15px'
  };

  return (
    <div style={cardStyle}>
      <img 
        src={profileImage || 'https://via.placeholder.com/100'} 
        alt={`${name}'s profile`} 
        style={imageStyle} 
      />
      <h2 style={{ margin: '10px 0 5px' }}>{name}</h2>
      <p style={{ color: '#666', fontSize: '14px', margin: '0' }}>{occupation}</p>
      <p style={{ fontWeight: 'bold', margin: '10px 0' }}>Age: {age}</p>
      <p style={{ fontStyle: 'italic', fontSize: '13px' }}>{location}</p>
      <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '15px 0' }} />
      <p style={{ fontSize: '14px', lineHeight: '1.4' }}>{bio}</p>
    </div>
  );
};

export default ProfileCard;