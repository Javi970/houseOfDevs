import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../state/user";
import Carrousel from "../utils/Carrousel";
import BottomBar from "../utils/BottomBar";

/* import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button"; */

/* function HomePage() {
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
        .get("http://localhost:3001/api/properties/")
        .then((res) => setProperties(res.data))
        .catch((error) => console.error(error));
    } else {
      axios
        .get(`http://localhost:3001/api/properties/search/${search}`)
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
    <>
       <Dropdown className="container">
        <Dropdown.Toggle
          variant="primary"
          id="dropdown-basic"
          className="m-btn-filterprice"
        >
          Filter by price
        </Dropdown.Toggle>

      <Dropdown.Menu>
          <Dropdown.Item onClick={handleSubmitMorePrice}>
            Highest to lowest
          </Dropdown.Item>
          <Dropdown.Item onClick={handleSubmitLessPrice}>
            Lowest to highest
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Form className="centrado">
        <Form.Group className="mb-3">
          <Form.Label></Form.Label>
          <Form.Control
            value={search}
            onChange={searcher}
            type="text"
            placeholder="Search by addres"
          />
        </Form.Group>
      </Form>
      <Form className="centrado">
        <Form.Group className="mb-3">
          <Form.Label></Form.Label>
          <Form.Control
            onChange={handleInput}
            type="text"
            placeholder="Search by rooms"
          />
        </Form.Group>
        <Button
          variant="primary"
          className="m-btn-filter"
          onClick={handleSubmitRoom}
        >
          Filter
        </Button>
      </Form>
      <div className="container-house">
        <Row xs={1} md={4} className="g-4"></Row>
        {properties.map((property, i) => (
          <div key={i} className="card locura">
            <img src={property.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{property.title}</h5>
              <p className="card-text">
                {property.description}
                <br></br>
                Category:{property.category}
                <br></br>
                Addres:{property.addres}
                <br></br>
                Price:${property.price}
                <br></br>
                Country:{property.country}
                <br></br>
                District:{property.district}
                <br></br>
                Availability:{property.availability}
                <br></br>
                Rooms:{property.rooms}
                <br></br>
              </p>
              <Link
                to={`/properties/${property.id}`}
                type="button"
                className="btn btn-primary "
              >
                See more
              </Link>
              {user.admin ? (
                <div className="d-flex flex-column justify-content-end align-items-center">
                  <Link to={`/properties/change/${property.id}`}>
                    <button
                      type="button"
                      className="btn btn-primary m-btn-homepage-admin"
                    >
                      Edit property
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(property.id)}
                    type="button"
                    className="btn btn-primary m-btn-homepage-admin"
                  >
                    Delete property
                  </button>
                  <button
                    onClick={() => AddFav(property.id)}
                    type="button"
                    className="btn btn-primary m-btn-homepage-admin"
                  >
                    Add to favorite
                  </button>
                </div>
              ) : user.id ? (
                <button
                  onClick={() => AddFav(property.id)}
                  type="button"
                  className="btn btn-primary"
                >
                  Add to favorite
                </button>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}


export default HomePage;
 */

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
      <div className=" flex mt-2 gap-x-1.5">
        <form class="flex items-center">
          <label for="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-52">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
            />
          </div>
        </form>
        <form class="flex items-center">
          <label for="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-52">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
      <div className="flex mt-7 justify-center">
        <div className="grid lg:grid-cols-3 gap-1 sm:grid-cols-1 md:grid-cols-2 gap-5 ">
          {properties.map((property, i) => (
            <div
              key={i}
              className="flex flex-col max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                className=" rounded-t-lg object-fill"
                src={property.image}
                alt=""
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {property.title}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {property.description}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Category:{property.category}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Addres:{property.addres}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Price:${property.price}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Country:{property.country}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  District:{property.district}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Availability:{property.availability}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Rooms:{property.rooms}
                </p>
                <Link
                  to={`/properties/${property.id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
                {user.admin ? (
                  <div className="flex gap-2 my-2">
                    <Link
                      to={`/properties/change/${property.id}`}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Edit property
                    </Link>
                    <Link
                      onClick={() => handleDelete(property.id)}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Delete property
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
      <div>
        {/* esto solo cuando uno esta logueado */}
        <BottomBar />
      </div>
    </section>
  );
};

export default HomePage;
