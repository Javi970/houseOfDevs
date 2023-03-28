import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ViewAdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/users/allUsers")
      .then((res) => res.data)
      .then((data) => setUsers(data));
  }, []);

  const handleDelete = (userId) => {
    axios
      .delete(`/api/users/deleteUser/${userId}`)
      .then(() => window.location.reload(false))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div class="mt-16 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="w-full text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Id
              </th>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Lastname
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <td className="px-6 py-4">{user.id}</td>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.lastname}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.phone}</td>
                <td>
                  <button
                    type="button"
                    className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-2">
        <button
          type="button"
          class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          <Link to={"/propertiesCreated"}>Create property</Link>
        </button>
      </div>
    </>
  );
}

export default ViewAdminUsers;

{
  /* <div className="container">
      <div className="row">
        <div className="col">
          <table className="table table-striped table-danger table-hover table-bordered table align-middle">
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
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={() => handleDelete(usuario.id)}
                        >
                          Delete
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
      <button type="button" class="btn btn-primary">
        <Link to="/propertiesCreated" className="nav-link buttons">
          Make a property
        </Link>
      </button>
    </div> */
}
