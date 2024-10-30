import React, { useContext, useState } from 'react';
import userContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(userContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} autoComplete="off">
                <input 
                    type="text" 
                    name="user_name"  // Unique name use kiya hai
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Username" 
                    autoComplete="off"  // Disable autocomplete
                />
                <br />
                <input 
                    type="password" 
                    name="user_password"  // Unique name use kiya hai
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    autoComplete="off"  // Disable autocomplete
                />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
