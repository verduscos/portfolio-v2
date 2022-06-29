import React, { useEffect, useState } from "react";
// import Carousel from 'react-bootstrap/Carousel'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
import "./Carousel.css"



function Projects() {
  const Projects = [
    {
      image: "https://picsum.photos/200/300"
    },
    {
      image: "https://picsum.photos/200/301"
    },
    {
      image: "https://picsum.photos/200/302"
    },
    {
      image: "https://picsum.photos/200/303"
    }
  ];

  const [index, setIndex] = useState(0);
  const length = Projects.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (index > Projects.length - 2) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 1000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    }
  })

  return (
    <div className="Carousel">
      <div className="inner">
        <FaArrowAltCircleLeft />
        {Projects.map(project => (
          <div className="project">
            <img src={project.image} alt="project image" />
          </div>
        ))}
        <FaArrowAltCircleRight />

        <img src={Projects[index].image} alt="project image" />
      </div>
    </div>
  );
}

export default Projects;
