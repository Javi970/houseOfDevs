import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import '../assets/styles/components/HomePage.css'

function Card() {
  const [property, setProperty] = useState({})
  const { id } = useParams()
  useEffect(() => {
    axios
      .get(`/api/properties/${id}`)
      .then((res) => res.data)
      .then((property) => setProperty(property))
      .catch((error) => console.error(error))
  }, [id])

  return (
    <div className="container-house">
      <div className="card locura">
        <h1 className="card-title">{property.title} </h1>
        <div className="card-body">
          <img className="card-img-top" src={property.image} alt="img"/>
        </div>
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
      </div>
    </div>
  )
}

export default Card
