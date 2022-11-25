import React from 'react';
import '../assets/styles/components/Navbar.css';
import logo from '../assets/image/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className=" navbarr">
      <div className="container">
        <a className="navbar-brand">
          <img src={logo} alt="HouseOfDev" />
        </a>
        <ul className="nav justify-content-end">
          <li className="nav-item "></li>
          <li className="nav-item">
            <a className="nav-link buttons">On sale</a>
          </li>
          <li className="nav-item">
            <a className="nav-link buttons">Rental</a>
          </li>
          <li className="nav-item">
            <a className="nav-link buttons">Schedule your visit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link buttons">Our service</a>
          </li>
          <li className="nav-item">
            <a className="nav-link buttons">My profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link buttons">About us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link buttons">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link buttons">
              <Link to="login" className="buttons">
                Login
              </Link>
            </a>
          </li>
          <li>
            <a className="nav-link active buttons" aria-current="page">
              <Link to="register" className="buttons">
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
