import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
/* import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'; */

function HomePage() {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    axios
      .get('api/properties/')
      .then((res) => res.data)
      .then((properties) => setProperties(properties))
      .catch((error) => console.error(error));
  }, []);
 
  return (
    <div>
      <h1>Welcome to House of Devs!</h1>
      <div>
        <h1>
          <div>
            <div>
              {properties.map((property, i) => (
                <div key={i}>
                  <h1> {property.title} </h1>
                  <div>
                    {' '}
                    <img src={property.image} alt={property.description} />{' '}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
}

export default HomePage;
