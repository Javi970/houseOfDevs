import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleLogin(e) {
    e.preventDefault();
    axios
      .post('http://localhost:3001/api/users/login',{email:email, password:password,
    })
      .then((res) => console.log(res.data))
      .then(() => navigate('/home'))
      .catch((error)=>console.log(error))
  }
  function changeEmail(e) {
    setEmail(e.target.value);
  }
  function changePassword(e) {
    setPassword(e.target.value);
  }
  

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input email={email} onChange={changeEmail} type="email" /><br/>
        <label>Password</label>
        <input password={password} onChange={changePassword} type="password" />
        <br/>
        <button>Send</button>
      </form>
    </div>
  );
}

export default Login;
