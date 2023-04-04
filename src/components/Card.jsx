import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import mapIcon from "../assets/icons/mapIcon.svg";
import checkIcon from "../assets/icons/checkIcon.svg";
import arrowLeftIcon from "../assets/icons/arrowLeftIcon.svg";

const Card = () => {
  const [property, setProperty] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`/api/properties/${id}`)
      .then((res) => res.data)
      .then((property) => setProperty(property))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={property.image}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          ${property.price} USD
        </h5>
        <div className="text-2xl">
          {property.category}·{property.rooms} Ambientes
        </div>
        <hr />

        <div className="text-3xl">{property.title}</div>
        <hr />
        <div className="text-xl">
          {property.addres},{property.district},{property.country}
          <br />
          <div className="flex ">
            <p className="text-orange-400 font-semibold">Ver en mapa</p>
            <img className="ml-2" src={mapIcon} alt="" />
          </div>
        </div>

        <div className="flex ">
          Availability :
          <img className="ml-2" src={checkIcon} alt="" />
        </div>

        <h6 className="mx-3 my-3">Description: {property.description}</h6>
        <Link
          to={"/"}
          className="w-24 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <img src={arrowLeftIcon} alt="" />
          Back
        </Link>
      </div>
    </div>
  );
};

export default Card;
