import { useSelector } from 'react-redux'
import '../assets/styles/components/HomePage.css'
import { Link } from 'react-router-dom'

function Favorite() {
  const user = useSelector((state) => state.user)
  const favorites = user.favorites
  console.log(favorites, 'ESO ES FAVORITES')
  return (
    <div className="container-house">
      {favorites.map((fav, i) => (
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
            <Link
              /* to={`/properties/${fav.id}`} */
              type="button"
              className="btn btn-primary"
            >
              Delete from favorites
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Favorite
