import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/components/Register.css';
import {Link} from "react-router-dom"

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
    axios
      .post('http://localhost:3001/api/users/register', {
        name: name,
        lastname: lastname,
        email: email,
        password: password,
        phone: phone,
      })
      .then((res) => res.data)
      .then(() => {
        navigate('/login');
        alert('Congratulations successful registration!');
      })
      .catch(() => alert('Wrong registration, please try again'));
  }

  return (
    <form className="form" onSubmit={handleRegister} autoComplete="off">
      <h2 className="form__title">Create your acount!</h2>
      <p className="form__paragraph">
        You have an account? <a class="form__link"><Link to="/login" >
                Enter here
              </Link></a>
      </p>

      <div className="form__container">
        <div className="form__group">
          <span className="form__line"></span>
        </div>
        <div class="form__group">
          <input
          required
            name={name}
            onChange={changeName}
            type="text"
            id="user"
            className="form__input"
            placeholder=" "
          />
          <label class="form__label">Name:</label>
          <span className="form__line"></span>
        </div>
        <div class="form__group">
          <input
          required
            lastname={lastname}
            onChange={changeLastname}
            type="text"
            id="user"
            className="form__input"
            placeholder=" "
          />
          <label class="form__label">Lastname:</label>
          <span className="form__line"></span>
        </div>
        <div class="form__group">
          <input
          required
            email={email}
            onChange={changeEmail}
            type="email"
            id="user"
            className="form__input"
            placeholder=" "
          />
          <label class="form__label">Email:</label>
          <span className="form__line"></span>
        </div>
        <div class="form__group">
          <input
          required
            password={password}
            onChange={changePassword}
            type="password"
            id="password"
            className="form__input"
            placeholder=" "
          />
          <label className="form__label">Password:</label>
          <span className="form__line"></span>
        </div>
        <div class="form__group">
          <input
          required
            phone={phone}
            onChange={changePhone}
            type="tel"
            id="password"
            className="form__input"
            placeholder=" "
          />
          <label className="form__label">Phone:</label>
          <span className="form__line"></span>
        </div>

        <input type="submit" className="form__submit" value="Sign in" />
      </div>
    </form>
    /* <div className='container-register'>
     
      <div className="register">
      <h1 id="title-register">Create your acount!</h1>
        <form className="login"onSubmit={handleRegister} autoComplete="off">
          <label>Name
          <br/>
          <input name={name} onChange={changeName} type="text" />
          </label>
          
          <label>Lastname
          <input lastname={lastname} onChange={changeLastname} type="text" />
          </label>
          <label>Email
          <br/>
          <input email={email} onChange={changeEmail} type="email" />
          </label>
          <label>Password
          <input password={password} onChange={changePassword} type="password" />
          </label>
          <label>Phone
          <input phone={phone} onChange={changePhone} type="tel" />
          </label>
          <button>Send</button>
        </form>
      </div>
    </div> */
  );
}

export default Register;
