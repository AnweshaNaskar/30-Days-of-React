
import Button from "./PracticeCode/Day15_Buttons";

// export default function App() {
//   return (
//     <div style={{ display: 'flex', gap: '20px', padding: '40px' }}>
//     <ToDo />
//     </div>
//   );
// }
const App = () => {
  const handleDelete = () => {
    alert('Deleting record...');
  };

  const handleSave = () => {
    alert('Progress saved!');
  };

  return (
    <div style={{ padding: '20px', display: 'flex', gap: '10px' }}>
      {/* Primary variant */}
      <Button variant="primary" onClick={handleSave}>
        Save Changes
      </Button>

      {/* Danger variant */}
      <Button variant="danger" onClick={handleDelete}>
        Delete Account
      </Button>
    </div>
  );
};

export default App;

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