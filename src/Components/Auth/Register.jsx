import React, { useState, useContext } from 'react';
import { Paper } from '@mantine/core';
import { AuthContext } from './AuthContext';
import { API, init_api } from '../../API';


const Register = () => {
  const [accountType, setAccountType] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const { setToken } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    init_api();
    if (password !== rePassword) {
      alert("Passwords don't match.");
      return;
    }
    setLoading(true);
    if (accountType === 'individual') {
      try {
        const response = await API.post('/auth/users/', {
          email,
          username,
          password,
          re_password: rePassword,
        });
        if (response.status === 201) {
          alert("User registered successfully. Please check your email for the activation link.");
        }
      } catch (error) {
        console.error(error);
        if (error.response && error.response.data) {
          alert(`Error registering user: ${JSON.stringify(error.response.data)}`);
        } else {
          alert('Error registering user.');
        }
      }
    } else {
      alert('School system registration is not yet implemented.');
    }
    setLoading(false);
  };

  return (
    <div className="register-container">
      <Paper elevation={5} className="auth-container">
        <h1 className="auth-title">Register</h1>
        <form onSubmit={onSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="accountType">Account Type:</label>
            <select
              id="accountType"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
            >
              <option value="">--Select--</option>
              <option value="individual">Individual</option>
              <option value="school">School System</option>
            </select>
          </div>
          {accountType === 'individual' && (
            <div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="rePassword">Re-type Password:</label>
                <input
                  type="password"
                  id="rePassword"
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                  required
                />
                </div>
            </div>)}

             <div style={{marginTop: 10,display: 'flex', justifyContent: 'center'}}>
                    <button className="auth-btn" type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Register'}
                    </button>
                    </div>
                   
                </form>
            </Paper>
        </div>
    );
};

export default Register;
