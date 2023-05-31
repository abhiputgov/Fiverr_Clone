import React from 'react';
import './Login.scss';
import { useRef } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = () =>{};
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input
          type="text"
          name="username"
          placeholder="For Eg. Joe Doe"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
