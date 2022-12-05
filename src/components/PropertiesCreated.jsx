import React from 'react';
import axios from 'axios';
import { useState } from 'react';

import { useNavigate } from 'react-router';
import "../assets/styles/components/PropertiesCreated.css"

const PropertiesCreated = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [country, setCountry] = useState('');
  const [addres, setAddres] = useState('');
  const [price, setPrice] = useState('');
  const [district, setDistrict] = useState('');
  const [image, setImage] = useState('');
  const [availability, setAvailability] = useState('');
  const [rooms, setRooms] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        'http://localhost:3001/api/properties/create',
        {
          title: title,
          category: category,
          country: country,
          price: price,
          image: image,
          addres: addres,
          district: district,
          availability: availability,
          description : description,
          rooms: rooms,
        },
        { withCredentials: true },
      )
      .then((res) => console.log(res.data))
      .then(() => navigate('/'))
      .catch((error) => console.log(error));
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleChangeImage = (e) => {
    setImage(e.target.value);
  };
  const handleChangeAddres = (e) => {
    setAddres(e.target.value);
  };
  const handleChangeDistrict = (e) => {
    setDistrict(e.target.value);
  };
  const handleChangeAvailability = (e) => {
    setAvailability(e.target.value);
  };
  const handleChangeRooms = (e) => {
    setRooms(e.target.value);
  };
  const handleChangeDescription =(e)=>{
    setDescription(e.target.value);
  };

  return (
    <div>
      
      <div className="form">
        <form className="form" onSubmit={handleSubmit}>
        <h1 className="form__title">Create a Property</h1>
          <label>
            Title
            <input type="text" title={title} onChange={handleChangeTitle} />
          </label>
          <label>
            Category
            <input 
            
              type="text"
              category={category}
              onChange={handleChangeCategory}
            />
          </label>
          <label>
            Country
            <input
              type="text"
              country={country}
              onChange={handleChangeCountry}
            />
          </label>
          <label>
            Price
            <input type="number" price={price} onChange={handleChangePrice} />
          </label>
          <label>
            Image
            <input type="text" image={image} onChange={handleChangeImage} />
          </label>
          <label>
            Addres
            <input type="text" addres={addres} onChange={handleChangeAddres} />
          </label>
          <label>
            District
            <input
              type="text"
              district={district}
              onChange={handleChangeDistrict}
            />
          </label>

          <label>
            Availability
            <input
              type="boolean"
              availability={availability}
              onChange={handleChangeAvailability}
            />
          </label>
          <label>
             Description
            <input
              type="text"
              description={description}
              onChange={handleChangeDescription}
            />
          </label>
          <label>
            Rooms
            <input type="text" rooms={rooms} onChange={handleChangeRooms} />
          </label>
          <button>Done</button>
        </form>
      </div>
    </div>
  );
};

export default PropertiesCreated;
