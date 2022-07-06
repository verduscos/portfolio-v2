import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io"
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import ProjectData from "../ProjectData";
import "./Carousel.css"

function Carousel() {
  const indexes = [0, 1, 2, 3, 4];
  const [currentIndex, setCurrentIndex] = useState(0);
  let currentProject = ProjectData[currentIndex];
  const [projects, setProjects] = useState([]);
  console.log(projects)
  // let projects = ProjectData.filter((project) => project.id !== currentIndex);

  useEffect(() => {
    let projects = ProjectData.filter((project) => project.id - 1 !== currentIndex);
    setProjects(projects.reverse());

  }, [currentIndex])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (currentIndex > ProjectData.length - 2) {
  //       setCurrentIndex(0);
  //     } else {
  //       setCurrentIndex(currentIndex + 1);
  //     }
  //   }, 3500);

  //   return () => {
  //     if (interval) {
  //       clearInterval(interval);
  //     }
  //   }
  // })

  return (
    <div className="carousel">
      {/* <div className="inner">
        <h1 id="carousel-title">Projects</h1>
        <Link to={`/project/${currentProject.id}`}>
          <div id="overlay">
            <p>{currentProject.title}</p>
          </div>
          <img className="carousel-image" src={currentProject.image} alt="project image" />
        </Link>
      </div> */}

      <ul className="project-btns">
        {indexes.map((index) => (
          <li key={index} value={index} onMouseOver={(e) => setCurrentIndex(index)}>
            {
              currentIndex === index ?
                <IoIosRadioButtonOn size={30} /> :
                <IoIosRadioButtonOff size={20} />
            }
          </li>
        ))}
      </ul>

      {currentIndex}

      <div>testing down here, okay</div>
      <ul id="new-carousel">

        {projects.map((project, index) => (

// project-${project.id}
          <img className={`test-img project-${index}`} src={project.image} />
        ))}

        <img className={`test-img current-project`} src={currentProject.image} />
      </ul>
    </div>
  );
}

export default Carousel;
