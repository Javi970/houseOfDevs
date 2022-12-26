import React from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import '../assets/styles/components/User.css'
import '../assets/styles/components/HomePage.css'
import { Link } from 'react-router-dom'
import { removeFromFavorites } from '../state/user'

function User() {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const deleteFav = (id) => {
    axios
      .post(
        `http://localhost:3001/api/properties/delete/favorites/${id}`,
        {
          id: id,
        },
        { withCredentials: true },
      )
      .then((res) => dispatch(removeFromFavorites(res.data)))
      .then(() => window.location.reload(false))
      .catch((error) => console.log(error))
  }
  
  
  return (
    
      <div className="container">
        <div>
          <div className="card">
            <h5>
              <strong>My profile</strong>
            </h5>
            <h6>
              <strong>Name</strong>: {user?.name}
            </h6>
            <h6>
              <strong>Apellido</strong>: {user?.lastname}
            </h6>
            <h6>
              <strong>Email</strong>: {user?.email}
            </h6>
          </div>
        </div>
        <div className="container-house">
          {user.properties.map((fav, i) => (
            <div key={i} className="card locura">
              <img src={fav.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{fav.title}</h5>
                <p className="card-text">
                  {fav.description}
                  <br></br>
                  Category:{fav.category}
                  <br></br>
                  Addres:{fav.addres}
                  <br></br>
                  Price:${fav.price}
                  <br></br>
                  Country:{fav.country}
                  <br></br>
                  District:{fav.district}
                  <br></br>
                  Availability:{fav.availability}
                  <br></br>
                  Rooms:{fav.rooms}
                  <br></br>
                </p>
                <Link
                  to={`/properties/${fav.id}`}
                  type="button"
                  className="btn btn-primary"
                >
                  See more
                </Link>
                <Link onClick={()=>deleteFav(fav.id)} type="button" className="btn btn-primary">
                  Delete from favorites
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
  
  )
}

export default User
