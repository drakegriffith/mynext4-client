import React, { useState } from 'react';
import { API, init_api } from './API';
import AuthContext from './Pages/LogIn/AuthContext';
import "./Components/MyComponents/MyComponents.css";
import "./Register.css";

const Register = () => {
    const [accountType, setAccountType] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        init_api();
        if (password !== rePassword) {
            alert("Passwords don't match.");
            return;
        }
        if (accountType === 'individual') {
            try {
                const response = await API.post('/auth/users/', {
                    email,
                    username,
                    password,
                    re_password: rePassword,
                });
                if (response.status === 201) {
                    alert('User registered successfully.');

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
    };

    return (
        <div className="register-container">
            <div className='shiny-text'>
                <h1>Register</h1>
                <form onSubmit={onSubmit}>
                    <label>
                        Account Type:
                        <select value={accountType} onChange={(e) => setAccountType(e.target.value)}>
                            <option value="">--Select--</option>
                            <option value="individual">Individual</option>
                            <option value="school">School System</option>
                        </select>
                    </label>
                    {accountType === 'individual' && (
                        <>
                            <label>
                                Email:
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                Username:
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                Password:
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                Re-type Password:
                                <input
                                    type="password"
                                    value={rePassword}
                                    onChange={(e) => setRePassword(e.target.value)}
                                    required
                                />
                            </label>

                        </>
                    )}
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
