import React from "react";
import { langaugeString } from "../../utils/languageConstants";
import { useSelector } from "react-redux";

const VideoTitle = ({ original_title, overview }) => {
  const language = useSelector((state) => state.config.language);

  return (
    <div className="w-screen aspect-video absolute pt-[25%] px-24 text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{original_title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="flex w-1/2">
        <button className="flex items-center justify-center bg-white text-black p-2 px-12 text-lg text-center rounded-md hover:bg-opacity-80">
          <img
            className="w-5 h-5 mr-1"
            src={require("../../assets/icons/play.png")}
            alt="play-icon"
          />{" "}
          {langaugeString[language].Play}
        </button>
        <button className="mx-3 flex items-center justify-center bg-gray-600 bg-opacity-50 text-white p-2 px-12 text-lg text-center rounded-md hover:bg-opacity-80">
          <img
            className="w-5 h-5 mr-1"
            src={require("../../assets/icons/info.png")}
            alt="info-icon"
          />{" "}
          {langaugeString[language].MoreInfo}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
