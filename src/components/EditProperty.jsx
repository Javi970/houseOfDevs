import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import editHouse from "../assets/image/editarBlack.png";

const EditProperty = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [addres, setAddres] = useState("");
  const [price, setPrice] = useState("");
  const [district, setDistrict] = useState("");
  const [image, setImage] = useState("");
  const [availability, setAvailability] = useState("");
  const [rooms, setRooms] = useState("");
  const [description, setDescription] = useState("");
  const [property, setProperty] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/properties/${id}`)
      .then((res) => res.data)
      .then((property) => setProperty(property))
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:3001/api/properties/change/${id}`,
        {
          title: title,
          category: category,
          country: country,
          price: price,
          image: image,
          addres: addres,
          district: district,
          availability: availability,
          description: description,
          rooms: rooms,
        },
        { withCredentials: true }
      )
      .then((res) => console.log(res.data))
      .then(() => navigate("/"))
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
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div>
      <div className="flex flex-col justify-center mx-24 mt-24 mb-12 items-center">
        <img className="w-16 h-16" src={editHouse} alt="" />
        <h1 className="font-bold text-2xl text-center font-roboto">
          Edit a property
        </h1>
      </div>
      <form className="mt-2 p-5" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            defaultValue={property.title}
            onChange={handleChangeTitle}
            title={title}
            name="floating_title"
            id="floating_title"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_title"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Title
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            defaultValue={property.category}
            category={category}
            onChange={handleChangeCategory}
            type="text"
            name="floating_category"
            id="floating_category"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_category"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Category
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            defaultValue={property.country}
            type="text"
            country={country}
            onChange={handleChangeCountry}
            name="floating-country"
            id="floating_country"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_country"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Country
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            defaultValue={property.district}
            type="text"
            district={district}
            onChange={handleChangeDistrict}
            name="floating-district"
            id="floating_district"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_district"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            District
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              defaultValue={property.price}
              type="number"
              price={price}
              onChange={handleChangePrice}
              name="floating_price"
              id="floating_price"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_price"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Price
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              defaultValue={property.addres}
              type="text"
              addres={addres}
              onChange={handleChangeAddres}
              name="floating_addres"
              id="floating_addres"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_addres"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Addres
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <textarea
              defaultValue={property.description}
              rows="4"
              cols="50"
              description={description}
              onChange={handleChangeDescription}
              name="floating_description"
              id="floating_description"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_description"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Description
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              defaultValue={property.rooms}
              type="text"
              rooms={rooms}
              onChange={handleChangeRooms}
              name="floating_rooms"
              id="floating_rooms"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_rooms"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Rooms
            </label>

            <label
              className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="user_avatar"
            >
              Upload image
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="user_avatar_help"
              id="user_avatar"
              type="file"
            />
            <div
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="user_avatar_help"
            >
              A profile picture is useful to confirm your are logged into your
              account
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Done
        </button>
      </form>
    </div>
  );
};

export default EditProperty;

{
  /* <div>
<div className="form">
  <form className="form" onSubmit={handleSubmit}>
    <h1 className="form__title">Edit a Property</h1>
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
      <input
        defaultValue={property.price}
        type="number"
        price={price}
        onChange={handleChangePrice}
      />
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
        type="text"
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
      <input type="number" rooms={rooms} onChange={handleChangeRooms} />
    </label>
    <button>Edit</button>
  </form>
</div>
</div> */
}
