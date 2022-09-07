import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../Nav";
import Carousel from "../Carousel";
// import Carousel from "../Carousel/test";
import About from "../About";
import ProjectGallery from "../ProjectGallery";
import ProjectPage from "../ProjectPage";
import Contact from "../Contact";
import Footer from "../Footer";
import ProjectData from "../ProjectData";
import "./Main.css";

function Main() {
  let location = useLocation();
  const [content, setContent] = useState(<Carousel />);

  useEffect(() => {
    if (location.pathname === "/about") {
      setContent(<About />);
    } else if (location.pathname === '/projects') {
      setContent(<ProjectGallery />);
    } else if (location.pathname === "/contact") {
      setContent(<Contact />);
    } else if (location.pathname.startsWith("/project")) {
      setContent(<ProjectPage />);
    }
    else {
      setContent(<Carousel images={ProjectData} />);
    }
  }, [location])

  return (
    <div id="main">
      <Nav />
      {content}
      <Footer />
    </div>
  )
}

export default Main;
