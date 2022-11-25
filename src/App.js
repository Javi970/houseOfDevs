import React from "react";
import {Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import NavBar from "./components/Navbar"
import User from "./components/User";
import Home from "./components/HomePage";
import PropertiesCreated from "./components/PropertiesCreated";
import HomePage from "./components/HomePage";

const App = () => {

  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/home" element={<Home />} />
        <Route path="/propertiesCreated" element={<PropertiesCreated />} />
        <Route path="/homePage" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;