import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  password: string;
}
const SignupForm = () => {
const [formData, setFormData] = useState<FormData>({
  name: '',
  email: '',
  password: ''
});

  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string; }>({});

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted Successfully!", formData);
      // Proceed with API call
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
      <div>
        <input name="name" placeholder="Full Name" onChange={handleChange} />
        {errors.name && <p style={{ color: 'red', fontSize: '12px' }}>{errors.name}</p>}
      </div>

      <div>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} />
        {errors.email && <p style={{ color: 'red', fontSize: '12px' }}>{errors.email}</p>}
      </div>

      <div>
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        {errors.password && <p style={{ color: 'red', fontSize: '12px' }}>{errors.password}</p>}
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;