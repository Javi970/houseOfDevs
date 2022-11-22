import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lastname, setLastname] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  function changeEmail(e) {
    setEmail(e.target.value);
  }
  function changePassword(e) {
    setPassword(e.target.value);
  }
  function changeName(e) {
    setName(e.target.value);
  }
  function changeLastname(e) {
    setLastname(e.target.value);
  }
  function changePhone(e) {
    setPhone(e.target.value);
  }
  function handleRegister(e) {
    e.preventDefault();
    axios.post(
      'http://localhost:3001/api/users/register',
      {
        name: name,
        lastname: lastname,
        email: email,
        password: password,
        phone: phone,
      }).then((res) => res.data)
      .then(()=>navigate('/login'))
      .catch((error)=>console.log(error))
    
  }

  return (
    <div>
      <form onSubmit={handleRegister}>
        <label>Name</label>
        <input name={name} onChange={changeName} type="text" />
        <label>Lastname</label>
        <input lastname={lastname} onChange={changeLastname} type="text" />
        <label>Email</label>
        <input email={email} onChange={changeEmail} type="email" />
        <label>Password</label>
        <input password={password} onChange={changePassword} type="password" />
        <label>Phone</label>
        <input phone={phone} onChange={changePhone} type="tel" />
        <button>Send</button>
      </form>
    </div>
  );
}

export default Register;
