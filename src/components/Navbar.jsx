import React from 'react';
import '../assets/styles/components/Navbar.css';
import logo from '../assets/image/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav class="navbar bg-light navbar2">
      <div class="container">
        <a class="navbar-brand">
          <img src={logo} alt="HouseOfDev" />
        </a>
        <ul class="nav justify-content-end">
          <li class="nav-item "></li>
          <li class="nav-item">
            <a class="nav-link buttons">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link buttons">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link buttons">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link buttons">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link buttons">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link buttons">
              <Link to="login" class="buttons">
                Login
              </Link>
            </a>
          </li>
          <li>
            <a class="nav-link active buttons" aria-current="page">
              <Link to="register" class="buttons">
                Registro
              </Link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
