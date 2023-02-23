import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/components/HomePage.css";
import { Form, Row } from "react-bootstrap";
import { addToFavorites } from "../state/user";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

function HomePage() {
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
