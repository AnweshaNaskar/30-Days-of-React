import React, { useState } from 'react';

const UserSearch = () => {
  // 1. Initial Data
  const users = [
    { id: 1, name: 'Alice Johnson' },
    { id: 2, name: 'Bob Smith' },
    { id: 3, name: 'Charlie Davis' },
    { id: 4, name: 'Diana Prince' },
    { id: 5, name: 'Edward Norton' },
  ];

  // 2. State for the input field
  const [searchTerm, setSearchTerm] = useState('');

  // 3. Filter Logic (Calculated on every render)
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>User Directory</h2>
      
      {/* Controlled Input */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '8px', marginBottom: '20px', width: '250px' }}
      />

      {/* Filtered List Display */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <li key={user.id} style={{ padding: '5px 0', borderBottom: '1px solid #eee' }}>
              {user.name}
            </li>
          ))
        ) : (
          <p style={{ color: 'gray' }}>No users found.</p>
        )}
      </ul>
    </div>
  );
};

export default UserSearch;