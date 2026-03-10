import { forwardRef } from 'react';

const CustomInput = forwardRef((props, ref) => {
  return (
    <input 
      ref={ref} 
      type="text" 
      placeholder="Type something..." 
      style={{ padding: '8px', marginRight: '10px' }}
    />
  );
});

export default CustomInput;