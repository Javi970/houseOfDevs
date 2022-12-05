import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'
import { useSelector } from 'react-redux'
import '../assets/styles/components/User.css'

function User() {
  const user = useSelector((state) => state.user)

  return (
    <div className="container">
      <div >
        <div >
          <h5 >
            <strong>My profile</strong>
          </h5>
          <h6 >
            <strong>Name</strong>: {user?.name}
          </h6>
          <h6>
            <strong>Apellido</strong>: {user?.lastname}
          </h6>
          <h6>
            <strong>Email</strong>: {user?.email}
          </h6>
        </div>
      </div>
    </div>
  )
}

export default User
