import React, { useState } from "react";
import "./Carousel.css"



const Carousel = () => {
  const Projects = ["one", "two", "three", 'four'];
  const [project, setProject] = useState();


  return (
    <div id="main">
      <h1>{project}</h1>
    </div>
  )
}

export default Carousel;
