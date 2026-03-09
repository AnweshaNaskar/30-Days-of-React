const Button = ({ children, onClick, variant = 'primary' }) => {
  // Define styles based on the variant prop
  const buttonStyles = {
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: variant === 'danger' ? '#ff4d4d' : '#007bff',
  };

  return (
    <button style={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;