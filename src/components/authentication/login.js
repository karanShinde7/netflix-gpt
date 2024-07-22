import React, { useRef, useState } from "react";
import Header from "../header/header";
import { NETFLIX_BG_IMAGE_URL } from "../../utils/urls";
import { checkValidation } from "../../utils/validation";

const Login = () => {
  const [showSignIn, setShowSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setShowSignIn(!showSignIn);
  };

  const handleButtonClick = (e) => {
    // when we are using form, on button click form submit method will get trigger. To provent that we can use e.preventDefault()
    e.preventDefault();
    setErrorMsg(
      checkValidation(email?.current?.value, password?.current?.value)
    );
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
          <input
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
            type="text"
            ref={name}
            placeholder="Full name"
          />
        )}
        <input
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          type="text"
          ref={email}
          placeholder="Email address"
        />
        <input
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          type="password"
          ref={password}
          placeholder="Password"
        />
        <p className="text-red-600 py-2  text-lg font-bold">{errorMsg}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
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
