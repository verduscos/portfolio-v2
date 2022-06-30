import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../Nav";
import Carousel from "../Carousel";
import About from "../About";
import ProjectGallery from "../ProjectGallery";
import Contact from "../Contact";
import Footer from "../Footer";
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
    } else {
      setContent(<Carousel />);
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
