// frontend/src/components/LoginForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authAPI';
import { loginSuccess } from '../features/auth/authSlice';
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ username, password });
      dispatch(loginSuccess(res.data));
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
      {error && <div className="error-message">{error}</div>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;