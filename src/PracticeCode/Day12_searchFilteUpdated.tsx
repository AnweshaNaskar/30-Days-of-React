import React from 'react';

const UserSearch = ({ searchTerm, onSearchChange, results }) => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', border: '1px solid #ddd' }}>
      <h2>User Directory</h2>
      
      {/* Child calls the parent's function via the prop */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{ padding: '8px', marginBottom: '20px', width: '250px' }}
      />

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {results.length > 0 ? (
          results.map((user) => (
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