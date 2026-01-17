import React from 'react';
import ProfileCard from './profile'; // Ensure the path is correct

export const ProfileList = () => {
  const users = [
    {
      id: 1,
      name: "Sarah Jenkins",
      age: 28,
      occupation: "Software Engineer",
      location: "Austin, TX",
      bio: "Passionate about building scalable web applications and hiking.",
      profileImage: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      id: 2,
      name: "Marcus Chen",
      age: 34,
      occupation: "UX Designer",
      location: "Seattle, WA",
      bio: "Focusing on human-centered design and minimalist interfaces.",
      profileImage: "https://i.pravatar.cc/150?u=marcus"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      age: 31,
      occupation: "Product Manager",
      location: "New York, NY",
      bio: "Bridging the gap between business goals and technical execution.",
      profileImage: "https://i.pravatar.cc/150?u=elena"
    }
  ];

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '40px',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
  };

  return (
    <div style={containerStyle}>
      {users.map((user) => (
        <ProfileCard 
          key={user.id} 
          {...user} 
        />
      ))}
    </div>
  );
};

export default ProfileList;