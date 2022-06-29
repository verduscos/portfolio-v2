import React, { useState } from "react";
// import Carousel from 'react-bootstrap/Carousel'
import "./Carousel.css"



function Projects() {
  const Projects = ["FIRST", "SECOND", "THIRD", "FOURTH"];
  const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  const timer = () => {
    setInterval(() => {
      if (index < Projects.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, [4000])
  }

  timer();

  return (
    <div>
      {index}
    </div>
  );
}

export default Projects;
