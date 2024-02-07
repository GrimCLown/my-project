import "../../Components/Preloader/preloader.css";
import React, { useEffect } from "react";
import { preLoaderAnim } from "./../animation/index";

const preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container anim">
        <span>Passionate </span>
        <span> Coding </span>
        <span> Enthusiast </span>
      </div>
    </div>
  );
};

export default preloader;
