import React, { useState, useEffect } from "react";
import "./App.css";
import MainPreloader from "./Components/pages/Preloader/MainPreloader";
import MainResume from "./Components/pages/Resume/MainResume";
import MainFooter from "./Components/UI/MainFooter";
import MainNavbar from "./Components/UI/MainNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MainHome from "./Components/pages/Home/MainHome";
import MainWork from "./Components/pages/Work/MainWork";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {/* <MainNavbar /> */}
      {/* <MainHome /> */}
      <MainWork />
      <MainFooter />
    </>
  );
}

export default App;
