import React, { useState } from 'react';

const ControlledInput = () => {
  // 1. Initialize state for the input value
  const [inputValue, setInputValue] = useState('');
  // 2. Initialize state to store the submitted text
  const [submittedText, setSubmittedText] = useState('');

  const handleChange = (event) => {
    // Update state as the user types
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    // Prevent the browser from reloading the page
    event.preventDefault();
    setSubmittedText(inputValue);
    // Optional: Clear the input after submission
    setInputValue(''); 
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Controlled Input Demo</h2>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleChange} 
          placeholder="Type something..."
        />
        <button type="submit">Submit</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        <strong>Current Typed Text:</strong> {inputValue}
      </div>

      {submittedText && (
        <div style={{ marginTop: '10px', color: 'blue' }}>
          <strong>Last Submitted:</strong> {submittedText}
        </div>
      )}
    </div>
  );
};

export default ControlledInput;