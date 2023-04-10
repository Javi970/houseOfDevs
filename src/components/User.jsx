import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "../assets/styles/components/User.css";
import "../assets/styles/components/HomePage.css";
import { Link } from "react-router-dom";
import { removeFromFavorites } from "../state/user";
import vacio from "../assets/image/void.png";

/* function User() {
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
} */

const User = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const deleteFav = (id) => {
    axios
      .post(
        `http://localhost:3001/api/properties/delete/favorites/${id}`,
        {
          id: id,
        },
        { withCredentials: true }
      )
      .then((res) => dispatch(removeFromFavorites(res.data)))
      .then(() => window.location.reload(false))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <section className="mt-20 flex justify-center">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="w-full  justify-center">
            <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <svg
                className="absolute w-12 h-12 text-gray-400 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <h1 className="font-roboto text-2xl my-0.5 mx-0.5">
            {user?.name} {user?.lastname}
          </h1>
          <input
            type="text"
            id="disabled-input"
            ariaLabel="disabled input"
            className="font-roboto bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={user?.email}
            disabled
          ></input>
          <p className="mt-2">{user.phone}</p>
        </div>
      </section>
      <div>
        {user.properties.length === 0 ? (
          <div className="flex w-full items-center font-roboto text-2xl justify-center">
            <div className="mt-16">
              <img className=" w-60 h-80 object-cover" src={vacio} alt="" />{" "}
            </div>
            <p className="text">No favorites added yet</p>
          </div>
        ) : (
          <div>
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
                  <Link
                    onClick={() => deleteFav(fav.id)}
                    type="button"
                    className="btn btn-primary"
                  >
                    Delete from favorites
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default User;
