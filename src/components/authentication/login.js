import React, { useState } from "react";
import Header from "../header/header";
import { NETFLIX_BG_IMAGE_URL } from "../../utils/urls";
import InputField from "../shared/inputField";

const Login = () => {
  const [showSignIn, setShowSignIn] = useState(true);

  const toggleSignInForm = () => {
    setShowSignIn(!showSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={`${NETFLIX_BG_IMAGE_URL}`} alt="background-image" />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {showSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!showSignIn && (
          <InputField type="text" name="name" placeholder="Full name" />
        )}
        <InputField type="text" name="email" placeholder="Email address" />
        <InputField type="password" name="password" placeholder="Password" />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
          {showSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-6">
          {showSignIn ? "New to Netflix? " : "Already registered? "}
          <span
            className="hover:font-extrabold cursor-pointer"
            onClick={toggleSignInForm}
          >
            Sign {showSignIn ? "up" : "in"} now.
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
