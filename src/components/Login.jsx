import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../state/user";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleLogin(e) {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/api/users/login",
        { email: email, password: password },
        { withCredentials: true }
      )
      .then((res) => dispatch(userLogin(res.data)))
      .then(() => {
        navigate("/");
        alert("Congratulations successful Log in!");
      })
      .catch(() => alert("Wrong Log in, please try again"));
  }

  function changeEmail(e) {
    setEmail(e.target.value);
  }
  function changePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <section>
      <div class="flex min- overflow-hidden">
        <div class="flex flex-col justify-center mt-7 flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div class="w-full max-w-xl mx-auto lg:w-96">
            <div>
              <h2 class="flex justify-center items-center text-3xl font-extrabold text-neutral-600">
                Sign in.
              </h2>
            </div>

            <div class="mt-8">
              <div class="mt-6">
                <form onSubmit={handleLogin} class="space-y-6">
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div class="mt-1">
                      <input
                        id="email"
                        email={email}
                        onChange={changeEmail}
                        type="email"
                        autocomplete="email"
                        required=""
                        placeholder="Your Email"
                        class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>

                  <div class="space-y-1">
                    <label
                      for="password"
                      class="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <div class="mt-1">
                      <input
                        id="password"
                        password={password}
                        onChange={changePassword}
                        type="password"
                        autocomplete="current-password"
                        required=""
                        placeholder="Your Password"
                        class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>

                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        placeholder="Your password"
                        class="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label
                        for="remember-me"
                        class="block ml-2 text-sm text-neutral-600"
                      >
                        {" "}
                        Remember me{" "}
                      </label>
                    </div>

                    <div class="text-sm">
                      <Link
                        to="/register"
                        class="font-medium text-blue-600 hover:text-blue-500"
                      >
                        Not registred yet?
                      </Link>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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

export default Login;
