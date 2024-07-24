import React, { useEffect } from "react";
import { NETFLIX_LOGO_IMAGE_URL } from "../../utils/urls";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../redux/slice/userSlice";
import { toggleGptSearchView } from "../../redux/slice/gptSearchSlice";
import {
  langaugeString,
  supportedLanguages,
} from "../../utils/languageConstants";
import { changeLanguage } from "../../redux/slice/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const showSearchView = useSelector((state) => state.gptSearch.showGptSearch);
  const language = useSelector((state) => state.config.language);

  useEffect(() => {
    // Any operation during the operations can be done inside. Sign in, Sign up or logout
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        // user signs in
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // user signs out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then((response) => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img src={`${NETFLIX_LOGO_IMAGE_URL}`} className="w-44" alt="logo" />
      {user && (
        <div className="flex p-2">
          <select
            className="p-2 bg-gray-500 text-white m-2"
            onChange={handleLanguageChange}
          >
            {supportedLanguages.map((language) => {
              return (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              );
            })}
          </select>
          <button
            className="bg-red-700 text-white py-2 px-4 my-2 mx-4 rounded-lg"
            onClick={handleGptSearch}
          >
            {showSearchView
              ? langaugeString[language].Browse
              : langaugeString[language].GPTSearch}
          </button>
          <img
            src={require("../../assets/netflix-profile.jpg")}
            className="w-12 h-12"
            alt="user-icon"
          />
          {/* <label className="font-bold">Hi {user?.displayName}</label> */}
          <button className="font-bold text-white ml-2" onClick={handleSignOut}>
            {langaugeString[language].SignOut}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
