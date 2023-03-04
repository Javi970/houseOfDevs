import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastname, setLastname] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  function changeEmail(e) {
    setEmail(e.target.value);
  }
  function changePassword(e) {
    setPassword(e.target.value);
  }
  function changeName(e) {
    setName(e.target.value);
  }
  function changeLastname(e) {
    setLastname(e.target.value);
  }
  function changePhone(e) {
    setPhone(e.target.value);
  }
  function handleRegister(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/users/register", {
        name: name,
        lastname: lastname,
        email: email,
        password: password,
        phone: phone,
      })
      .then((res) => res.data)
      .then(() => {
        navigate("/login");
        alert("Congratulations successful registration!");
      })
      .catch(() => alert("Wrong registration, please try again"));
  }
  return (
    <section>
      <div className="flex min- overflow-hidden">
        <div className="flex flex-col justify-center mt-7 flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="w-full max-w-xl mx-auto lg:w-96">
            <div>
              <h2 className="flex justify-center items-center text-3xl font-extrabold text-neutral-600">
                Sign up.
              </h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form className="space-y-6" onSubmit={handleRegister}>
                  <div>
                    <label
                      for="name"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="name"
                        name={name}
                        onChange={changeName}
                        type="text"
                        autocomplete="name"
                        required=""
                        placeholder="Your Name"
                        className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="last-name"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        id="last-name"
                        lastname={lastname}
                        onChange={changeLastname}
                        type="text"
                        autocomplete="last-name"
                        required=""
                        placeholder="Your Last name"
                        className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      for="email"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        email={email}
                        onChange={changeEmail}
                        type="email"
                        autocomplete="email"
                        required=""
                        placeholder="Your Email"
                        className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      for="password"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        password={password}
                        onChange={changePassword}
                        type="password"
                        autocomplete="current-password"
                        required=""
                        placeholder="Your Password"
                        className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="phone"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      Phone
                    </label>
                    <div className="mt-1">
                      <input
                        pattern="[0-9]{10}"
                        id="phone"
                        phone={phone}
                        onChange={changePhone}
                        type="tel"
                        autocomplete="phone"
                        required=""
                        placeholder="Your Phone"
                        className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="accept-terms-&-conditionse"
                        name="accept-terms-&-conditions"
                        type="checkbox"
                        placeholder=""
                        className="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                        required=""
                      />
                      <label
                        for="accept-terms-&-conditions"
                        className="block ml-2 text-sm text-neutral-600"
                      >
                        Accept terms & conditions
                      </label>
                    </div>

                    <div className="text-sm">
                      <Link
                        to="/login"
                        className="font-medium text-blue-600 hover:text-blue-500"
                      >
                        Already registered?
                      </Link>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
