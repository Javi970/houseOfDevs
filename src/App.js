import React, { useEffect } from "react";
import {Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import NavBar from "./components/Navbar"
import User from "./components/User";
import ViewAdminUsers from "./components/ViewAdminUsers"
import PropertiesCreated from "./components/PropertiesCreated";
import HomePage from "./components/HomePage";
import Card from "./components/Card"
import fakeData from "./utils/fakeData"
import EditProperty from "./components/EditProperty";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { userLogin } from "./state/user";

const App = () => {
  

  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("/api/users/me")
      .then((res) => res.data)
      .then((user) => dispatch(userLogin(user)))
      .catch(() => console.error("Falta loguearte"));
  }, [dispatch]);

  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/propertiesCreated" element={<PropertiesCreated />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/properties/:id" element={<Card />} />
        <Route path="/allUsers" element={<ViewAdminUsers />} />
        <Route path="/properties/change/:id" element={<EditProperty />} />
      </Routes>
    </>
  );
};

export default App;