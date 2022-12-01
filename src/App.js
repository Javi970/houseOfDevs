import React from "react";
import {Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import NavBar from "./components/Navbar"
import User from "./components/User";

import PropertiesCreated from "./components/PropertiesCreated";
import HomePage from "./components/HomePage";
import Card from "./components/Card"
import fakeData from "./utils/fakeData"

const App = () => {

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
      </Routes>
    </>
  );
};

export default App;