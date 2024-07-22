import React from "react";
import Header from "../header/header";
import { NETFLIX_BG_IMAGE_URL } from "../../utils/urls";

const Login = () => {
  return (
    <div>
      <Header />
      <div>
        <img src={`${NETFLIX_BG_IMAGE_URL}`} alt="background-image" />
      </div>
    </div>
  );
};

export default Login;
