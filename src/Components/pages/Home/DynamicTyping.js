import React from "react";
import Typewriter from "typewriter-effect";

const DynamicTyping = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "MERN Stack Developer",
          "Open Source Contributor",
          "Blockchain Developer",
          "graphics designer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default DynamicTyping;
