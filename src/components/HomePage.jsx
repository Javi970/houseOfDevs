import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../assets/styles/components/HomePage.css'

function HomePage() {
 
  
  const user = useSelector((state) => state.user)
  const [properties, setProperties] = useState([])
  useEffect(() => {
    axios
      .get('api/properties/',{ withCredentials: true })
      .then((res) => res.data)
      .then((properties) => setProperties(properties))
      .catch((error) => console.error(error))
  }, [])

/*   const handleView = () => {
    axios.get(`/api/properties/${id}`,{ withCredentials: true })
    .then((res)=>setProperties(res.data))
    .catch((error) => console.error(error))
  } */
  /* const handleDelete = (userId) => {
    axios
      .delete(`/api/users/deleteUser/${userId}`,{ withCredentials: true })
      .catch((error) => console.error(error))
  } */

  return (
    <div className="container-house">
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
              class="btn btn-primary"
              /* onClick={() => handleView(property.id)} */
            >
              See more
            </Link>
            {user.admin ? (
              <div>
                <Link to={`/properties/change/${property.id}`}>
                  <button type="button" class="btn btn-primary button-margin ">
                    Edit property
                  </button>
                </Link>
                <button type="button" class="btn btn-primary">
                  Delete property
                </button>
              </div>
            ) : undefined}
          </div>
        </div>
      ))}
    </div>
  )
}

export default HomePage
