import React, { useEffect, useState } from "react";
// import Carousel from 'react-bootstrap/Carousel'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
import "./Carousel.css"

import ProjectData from "./ProjectData";



function Projects() {
  const [index, setIndex] = useState(0);
  let currentProject = ProjectData[index];


  useEffect(() => {
    const interval = setInterval(() => {
      if (index > ProjectData.length - 2) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    }
  })

  return (
    <div className="Carousel">
      <div className="inner">
        <div id="overlay">{currentProject.title}</div>
        <img src={currentProject.image} alt="project image" />
      </div>
    </div>
  );
}

export default Projects;
