import React, { useEffect } from "react";
import { NETFLIX_LOGO_IMAGE_URL } from "../../utils/urls";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../redux/slice/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

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

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img src={`${NETFLIX_LOGO_IMAGE_URL}`} className="w-44" alt="logo" />
      {console.log(user)}
      {user && (
        <div className="flex p-2">
          <span>
            <img
              src={require("../../assets/netflix-profile.jpg")}
              className="w-12 h-12"
              alt="user-icon"
            />
            <label className="font-bold">Hi {user?.displayName}</label>
          </span>
          <button className="font-bold text-white ml-2" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
