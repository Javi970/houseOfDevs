import React from "react";
import "../assets/styles/components/Navbar.css";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userLogOut } from "../state/user";

/* const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handlerLogOut = () => {
    axios
      .post("/api/users/logout")
      .then((res) => res.data)
      .then(() => dispatch(userLogOut()))
      .catch(() => alert("No se pudo cerrar sesion."));
  };

  return (
    <nav className=" navbarr">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="HouseOfDev" />
        </Link>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link buttons" href="www">
              On sale
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link buttons" href="www">
              Rental
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link buttons" href="www">
              Schedule your visit
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link buttons" href="www">
              Our service
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link buttons" href="www">
              About us
            </a>
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
                <Link to="/login" className="buttons nav-link">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="buttons nav-link">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar; */

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const handlerLogOut = () => {
    axios
      .post("/api/users/logout")
      .then((res) => res.data)
      .then(() => dispatch(userLogOut()))
      .catch(() => alert("No se pudo cerrar sesion."));
  };
  return (
    <nav className="bg-orange-500  px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed  w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="" />
        </Link>

        <div className="flex md:order-2">
          {/* ACA VA EL BUSCADOR */}
          {/* <Link to="/login">
            <button
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              asd
            </button>
          </Link> */}
          {/* <SearchComponent /> */}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="black"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-200 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/login"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 
                focus:bg-gray-400
                md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                //aria-current="page"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 
                focus:bg-gray-400
                md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                //aria-current="page"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 
                focus:bg-gray-400
                md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 
                focus:bg-gray-400
                md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 
                focus:bg-gray-400
                md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
