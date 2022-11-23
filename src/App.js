import React from "react";
import {Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import NavBar from "./components/Navbar"

const App = () => {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;