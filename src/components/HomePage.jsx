import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import '../assets/styles/components/HomePage.css'
import { Form, Row } from 'react-bootstrap'
import {addToFavorites} from "../state/user"

function HomePage() {
  const user = useSelector((state) => state.user)
  const [properties, setProperties] = useState([])
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const searcher = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    if (search === '') {
      axios
        .get('http://localhost:3001/api/properties/')
        .then((res) => setProperties(res.data))
        .catch((error) => console.error(error))
    } else {
      axios
        .get(`http://localhost:3001/api/properties/search/${search}`)
        .then((res) => setProperties(res.data))
        .catch((error) => console.error(error))
    }
  }, [search])
  

  const handleDelete = (propertyId) => {
    axios
      .delete(`/api/properties/deleteHouse/${propertyId}`)
      .then(() => window.location.reload(false))
      .catch((error) => console.error(error))
  }
   const handleFav = (property) => {
    dispatch(addToFavorites(property))
  }
 
  return (
    <>
      <Form className="centrado">
        <Form.Group className="mb-3">
          <Form.Label></Form.Label>
          <Form.Control
            value={search}
            onChange={searcher}
            type="text"
            placeholder="Search"
          />
        </Form.Group>
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
                className="btn btn-primary"
              >
                See more
              </Link>
              {user.admin ? (
                <div>
                  <Link to={`/properties/change/${property.id}`}>
                    <button
                      type="button"
                      className="btn btn-primary button-margin "
                    >
                      Edit property
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(property.id)}
                    type="button"
                    className="btn btn-primary"
                  >
                    Delete property
                  </button>
                  <button
                    onClick={() => handleFav(property)}
                    type="button"
                    className="btn btn-primary"
                  >
                    Add to favorite
                  </button>
                </div>
              ) : user.id ? (
                <button
                  onClick={() => handleFav(property)}
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
  )
}

export default HomePage
