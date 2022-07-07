import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectData from "../ProjectData";
import "./Carousel.css"

function Carousel() {
  const indexes = [0, 1, 2, 3, 4];
  const [currentIndex, setCurrentIndex] = useState(0);
  let currentProject = ProjectData[currentIndex];
  const [projects, setProjects] = useState([]);
  console.log(projects)

  useEffect(() => {
    let projects = ProjectData.filter((project) => project.id - 1 !== currentIndex);
    setProjects(projects.reverse());

  }, [currentIndex])

  return (
    <div className="carousel-container">
      <h1></h1>
      <div className="carousel-container-inner">

      <ul id="carousel">
        {projects.map((project, index) => (

          <img className={`test-img project-${index}`} src={project.image} />
          ))}

        <img className={`test-img current-project`} src={currentProject.image} />
      </ul>

      <ul className="project-btns">
        {ProjectData.map((project, index) => (
          <Link className={currentIndex ===  project.id - 1 ? "highlight" : "link"} to={`/project/${currentProject.id}`}>
            <li className="project-li" key={index} value={index} onMouseOver={(e) => setCurrentIndex(index)}>
              <p id="test">
                {/* <span id={index === currentIndex ? "test" : null} className="project-num">
                  {`0${index + 1}.`}

                </span> */}
                {project.title}

              </p>
            </li>
          </Link>
        ))}
      </ul>
        </div>
    </div>
  );
}

export default Carousel;
