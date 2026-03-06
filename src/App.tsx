
import SignupForm from "./PracticeCode/Day13_Forms";

export default function App() {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '40px' }}>
    <SignupForm />
    </div>
  );
}

// import React, { useState } from 'react';
// import UserSearch from "./PracticeCode/Day12_searchFilteUpdated";

// export default function App() {
//   const users = [
//     { id: 1, name: 'Alice Johnson' },
//     { id: 2, name: 'Bob Smith' },
//     { id: 3, name: 'Charlie Davis' },
//     { id: 4, name: 'Diana Prince' },
//     { id: 5, name: 'Edward Norton' },
//   ];

//   // Parent manages the state
//   const [searchTerm, setSearchTerm] = useState('');

//   // Parent handles the filtering logic
//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div style={{ padding: '40px' }}>
//       {/* Pass the state and the updater function as props */}
//       <UserSearch 
//         searchTerm={searchTerm} 
//         onSearchChange={setSearchTerm} 
//         results={filteredUsers}
//       />
//     </div>
//   );
// }