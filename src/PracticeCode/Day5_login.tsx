import React, { useState } from "react";

const Login: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);
  const handleToggle = () => {
    setIsLoggedIn((prev) => !prev);
  };
  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid black",
        borderRadius: "8px",
      }}
    >
      <h2>{isLoggedIn ? "Welcome Back User" : "Please Sign In"}</h2>
      {isLoggedIn ? <p>You have access</p> : <p>You don't have access</p>}
      <button
        onClick={handleToggle}
        style={{
          backgroundColor: isLoggedIn ? "#ff4d4d" : "#4CAF50",
          color: "white",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
        }}
      >
        {isLoggedIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
};

export default Login;
