import React, { useEffect, useState } from "react";
// import Carousel from 'react-bootstrap/Carousel'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
import "./Carousel.css"

import ProjectData from "./ProjectData";



function Projects() {
  const indexes = [0, 1, 2, 3, 4];
  const [index, setIndex] = useState(0);
  let currentProject = ProjectData[index];


  useEffect(() => {
    const interval = setInterval(() => {
      if (index > ProjectData.length - 2) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 3500);

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

      <ul>
        {indexes.map((index) => (
          <li value={index} onClick={(e) => setIndex(e.target.value)} >{index}</li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
