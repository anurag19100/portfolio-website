import React from "react";
function MainPreloader(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default MainPreloader;
