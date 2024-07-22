import React from "react";
import { NETFLIX_LOGO_IMAGE_URL } from "../../utils/urls";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black">
      <img src={`${NETFLIX_LOGO_IMAGE_URL}`} className="w-44" alt="logo" />
    </div>
  );
};

export default Header;
