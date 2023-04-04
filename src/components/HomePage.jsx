import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../state/user";
import Carrousel from "../utils/Carrousel";
import BottomBar from "../utils/BottomBar";
import searchIcon from "../assets/icons/searchIcon.svg";
import arrowRightIcon from "../assets/icons/arrowRightIcon.svg";
import editHouse from "../assets/image/editarWhite.png";
import deleteIcon from "../assets/image/delete.png";

const HomePage = () => {
  const user = useSelector((state) => state.user);
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (search === "") {
      axios
        .get("http://localhost:3001/api/properties/", { withCredentials: true })
        .then((res) => setProperties(res.data))
        .catch((error) => console.log("este es el error", error));
    } else {
      axios
        .get(`http://localhost:3001/api/properties/search/${search}`, {
          withCredentials: true,
        })
        .then((res) => setProperties(res.data))
        .catch((error) => console.error(error));
    }
  }, [search]);

  const handleDelete = (propertyId) => {
    axios
      .delete(`/api/properties/deleteHouse/${propertyId}`)
      .then(() => window.location.reload(false))
      .catch((error) => console.error(error));
  };

  const handleSubmitMorePrice = () => {
    const ordenado = properties.slice().sort(function (a, b) {
      return b.price - a.price;
    });

    setProperties(ordenado);
  };

  const handleSubmitLessPrice = () => {
    const ordenadoMenor = properties.slice().sort(function (a, b) {
      return a.price - b.price;
    });

    setProperties(ordenadoMenor);
  };

  const AddFav = (id) => {
    axios
      .post(
        "http://localhost:3001/api/properties/addFavorites",
        {
          id: id,
        },
        { withCredentials: true }
      )
      .then((res) => dispatch(addToFavorites(res.data)))
      .catch((error) => console.log(error));
  };

  const handleSubmitRoom = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3001/api/properties/rooms/${input}`, {
        withCredentials: true,
      })
      .then((res) => setProperties(res.data))
      .catch((error) => console.log("Fallo", error));
  };

  return (
    <section className="mt-20 mx-2">
      <div>
        <Carrousel />
      </div>
      <div className=" flex mt-2 mb-1.5 flex flex-wrap space-y-2 w-full ">
        <form className="flex items-center w-full">
          <label for="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <img src={searchIcon} alt="" />
            </div>
            <input
              onChange={searcher}
              value={search}
              type="text"
              id="simple-search"
              className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
      <div className="flex w-full">
        <form className="flex items-center " onSubmit={handleSubmitRoom}>
          <label for="simple-search" className="sr-only">
            Search by rooms
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <img src={searchIcon} alt="" />
            </div>
            <input
              onChange={handleInput}
              type="text"
              id="simple-search"
              className="bg-gray-50 w-auto border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search by room"
            />
          </div>
        </form>

        <div className="w-full mx-2">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-white ml-20 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 "
            type="button"
          >
            Filter by price
            <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {/* <!-- Dropdown menu --> */}
          <div
            id="dropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              /* aria-labelledby="dropdownDefaultButton" */
            >
              <li>
                <Link
                  onClick={handleSubmitMorePrice}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Highest to lowest
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleSubmitLessPrice}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Lowest to Highest
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex mt-7 justify-center">
        <div className="grid lg:grid-cols-3 gap-1 sm:grid-cols-1 md:grid-cols-2 gap-5 ">
          {properties.map((property, i) => (
            <div
              key={i}
              className="flex flex-col max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                className="h-56 rounded-t-lg object-cover"
                src={property.image}
                alt=""
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {property.title}
                  <p>${property.price}</p>
                </h5>

                <p className="h-24 mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {property.description}
                </p>

                <Link
                  to={`/properties/${property.id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <img src={arrowRightIcon} alt="" />
                </Link>
                {user.admin ? (
                  <div className="flex gap-2 my-2">
                    <Link
                      to={`/properties/change/${property.id}`}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <img className="w-7 h-7" src={editHouse} alt="" />
                    </Link>
                    <Link
                      onClick={() => handleDelete(property.id)}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <img className="w-7 h-7" src={deleteIcon} alt="" />
                    </Link>
                    <Link
                      onClick={() => AddFav(property.id)}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add to favorite
                    </Link>
                  </div>
                ) : user.id ? (
                  <Link
                    onClick={() => AddFav(property.id)}
                    type="button"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to favorite
                  </Link>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>{user.id ? <BottomBar /> : user.admin ? <BottomBar /> : null}</div>
    </section>
  );
};

export default HomePage;
