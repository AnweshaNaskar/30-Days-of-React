import React, { useState, useEffect } from 'react';

const TitleChanger = () => {
  const [count, setCount] = useState(0);

  // useEffect runs every time 'count' changes
  useEffect(() => {
    document.title = `Clicked ${count} times`;
    
    // Optional: Log it to see the hook in action
    console.log(`Title updated to: ${count}`);
  }, [count]); 

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Page Title Changer</h1>
      <p>Check your browser tab title!</p>
      
      <button 
        onClick={() => setCount(count + 1)}
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        Increase Count
      </button>

      <button 
        onClick={() => setCount(0)}
        style={{ marginLeft: '10px', padding: '10px 20px' }}
      >
        Reset
      </button>
    </div>
  );
};

export default TitleChanger;