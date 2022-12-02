import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'

function User() {
  const Navigate = useNavigate()
  const { id } = useParams()
  const [user, setUser] = useState({})

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/users/getUser/${id}`, {
        withCredentials: true,
      })
      .then((res) => console.log("ESTO ESEL LOG",res.data))
      .then((res) => setUser(res.data))
  }, [])

  return (
    <>
      <h5>
        <strong>User profile</strong>
      </h5>
      <h6>
        <strong>Nombre</strong>: {user.name}
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
        <strong>Address</strong>: {}
      </h6>
    </>
  )
}

export default User
