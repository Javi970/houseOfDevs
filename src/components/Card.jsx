import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
/* import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'; */

function Card() {
  const [property, setProperty] = useState({});
  const {id} = useParams();
  useEffect(() => {
    axios
      .get(`/api/properties/${id}`)
      .then((res) => res.data)
      .then((property) => setProperty(property))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Home {property.title}</h1>
      <div>
        <h1>{property.title} </h1>
        <div>
          <img src={property.image}  />
        </div>
        <p>{property.description}</p>
      </div>
    </div>
  );
}

export default Card;
