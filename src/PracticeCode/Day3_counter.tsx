import React, { useState } from 'react';

const CounterApp = () => {
  // Initialize state at 0
  const [count, setCount] = useState(0);

  // Logic functions
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={increment}>
          Increment
        </button>

        <button 
          onClick={decrement} 
          disabled={count === 0} // Disables the button when count is 0
        >
          Decrement
        </button>

        <button onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterApp;