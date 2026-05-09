// import Button from "./PracticeCode/Day15_Buttons";
// import CustomInput from "./PracticeCode/Day16_useRef";
// import { useRef } from "react";


// export default function App() {
//   return (
//     <div style={{ display: 'flex', gap: '20px', padding: '40px' }}>
//     <ToDo />
//     </div>
//   );
// }
// const App = () => {
//   // const handleDelete = () => {
//   //   alert("Deleting record...");
//   // };

//   // const handleSave = () => {
//   //   alert("Progress saved!");
//   // };
//   // // 1. Create the reference point
//   // const inputRef = useRef(null);

//   // const handleFocus = () => {
//   //   // 2. Access the '.current' property to trigger the focus
//   //   inputRef.current.focus();
//   // };

//   // return (
//   //   <div style={{ padding: "20px", display: "flex", gap: "10px" }}>
//   //     {/* Primary variant */}
//   //     <Button variant="primary" onClick={handleSave}>
//   //       Save Changes
//   //     </Button>
//   //     <CustomInput ref={inputRef} />
//   //     <Button variant="primary" onClick={handleFocus}>
//   //       Focus the Input
//   //     </Button>
//   //     {/* Danger variant */}
//   //     <Button variant="danger" onClick={handleDelete}>
//   //       Delete Account
//   //     </Button>
//   //   </div>
//   // );
// };

// export default App;

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

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // @ts-ignore
// import Home from './PracticeCode/Day17_ReactRouter/Pages/Home';
// // @ts-ignore
// import About from './PracticeCode/Day17_ReactRouter/Pages/About';
// // @ts-ignore
// import Contact from './PracticeCode/Day17_ReactRouter/Pages/Contact';
// // @ts-ignore
// import Navbar from './PracticeCode/Day17_ReactRouter/Components/Navbar';

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar /> {/* This stays visible on every page */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import UserDetails from './PracticeCode/Day18_api';
import { ThemeProvider } from './PracticeCode/Day 19/ThemeContext';
import { ProductList } from './PracticeCode/Day 20/Day20_useFetch';

function App() {
  return (
    <div className="App">
      <h1>My Store</h1>
      <hr />
      {/* Rendering the component that uses the hook */}
      <ProductList />
    </div>
  );
}

export default App;
