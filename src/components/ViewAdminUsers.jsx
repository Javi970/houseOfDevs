import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

function ViewAdminUsers() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get('/api/users/allUsers')
      .then((res) => res.data)
      .then((data) => setUsers(data))
  }, [])

  const handleDelete = (userId) => {
    axios.delete(`/api/users/deleteUser/${userId}`).catch((error) => console.error(error))
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <table className="table table-striped table-danger table-hover table-bordered table align-middle" >
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Phone</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((usuario, i) => {
                return (
                  <>
                    <tr key={i}>
                      <td>{usuario.id}</td>
                      <td>{usuario.name}</td>
                      <td>{usuario.lastname}</td>
                      <td>{usuario.email}</td>
                      <td>{usuario.phone}</td>
                      <td>
                        <button onClick={() => handleDelete(usuario.id)}>
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  </>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ViewAdminUsers
