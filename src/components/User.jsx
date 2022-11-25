import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';


function User({ userId }) {
   const Navigate = useNavigate()
        
        
        useEffect(() => {
            if (userId);
            axios
              .get(`http://localhost:3001/api/users/getUser/${userId}`, {
                withCredentials: true,
              })
              .then((res) => res.data)
          }, [userId]);
   /*  useEffect(() => {
        axios
          .get(`http://localhost:3001/api/users/getUser/${userId}`)
          .then((res) => res.data)
          .then((data) => setUser(data));
      }, [userId]); */
    
    
    return  (
        <>
          <h5>
            <strong>Perfil de usuario</strong>
          </h5>
          <h6>
            <strong>Nombre</strong>: {}
          </h6>
          <h6>
            <strong>Apellido</strong>: {}
          </h6>
          <h6>
            <strong>DNI</strong>: {}
          </h6>
          <h6>
            <strong>Email</strong>: {}
          </h6>
          <h6>
            <strong>Address</strong>:{" "}
            { }
          </h6>
          
        </>
      ) 
    };
  
  export default User;
  