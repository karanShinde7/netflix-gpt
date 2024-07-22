import React from "react";
import Header from "../header/header";
import { NETFLIX_BG_IMAGE_URL } from "../../utils/urls";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={`${NETFLIX_BG_IMAGE_URL}`} alt="background-image" />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4"> Sign In </h1>
        <input
          type="text"
          name="email"
          placeholder="Enter email address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <button className="p-6 my-6 bg-red-700 w-full rounded-lg">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
