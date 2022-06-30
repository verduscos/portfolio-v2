import React, { useEffect, useState } from "react";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io"
import ProjectData from "./ProjectData";
import "./Carousel.css"

function Projects() {
  const indexes = [0, 1, 2, 3, 4];
  const [currentIndex, setCurrentIndex] = useState(0);
  let currentProject = ProjectData[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex > ProjectData.length - 2) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
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
        <div id="overlay">
          <p>{currentProject.title}</p>
        </div>
        <img src={currentProject.image} alt="project image" />
      </div>

      <ul className="project-btns">
        {indexes.map((index) => (
          <li value={index} onClick={(e) => setCurrentIndex(index)}>
            {
              currentIndex === index ?
                <IoIosRadioButtonOn size={25} /> :
                <IoIosRadioButtonOff size={20} />
            }
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
