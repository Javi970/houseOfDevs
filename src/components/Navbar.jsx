import React from 'react'
import '../assets/styles/components/Navbar.css'
import logo from '../assets/image/logo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { userLogOut } from '../state/user'

const NavBar = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  const handlerLogOut = () => {
    axios
      .post('/api/users/logout')
      .then((res) => res.data)
      .then(() => dispatch(userLogOut()))
      .catch(() => alert('No se pudo cerrar sesion.'))
  }
 
  return (
    <nav className=" navbarr">
      <div className="container">
        <a className="navbar-brand" href="/">
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
            <a className="nav-link buttons">About us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link buttons">Contact</a>
          </li>
          {user.admin ? (
            <>
              <p>{user.name} Admin</p>

              <li className="nav-item">
                <Link className="nav-link buttons" to="/user">
                  My profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link buttons" to="/allUsers">
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link buttons"
                  onClick={handlerLogOut}
                  to="/"
                >
                  Log Out
                </Link>
              </li>
            </>
          ) : user.id ? (
            <>
              <p>{user.name}</p>
              <li className="nav-item">
                <Link className="nav-link buttons" to="/user">
                  My profile
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link buttons"
                  onClick={handlerLogOut}
                  to="/"
                >
                  Log Out
                </Link>
              </li>
            </>
          ) : (
            <>
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
                    Register
                  </Link>
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
