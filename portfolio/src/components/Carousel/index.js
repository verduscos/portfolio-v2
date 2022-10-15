import React, { useEffect, useState } from "react";
import { after } from "underscore"
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import ProjectGallery from "../ProjectGallery";
import ProjectData from "../ProjectData";
import "./Carousel.css"

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  let currentProject = ProjectData[currentIndex];
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let projects = ProjectData.filter((project) => project.id - 1 !== currentIndex);
    setProjects(projects.reverse());
  }, [currentIndex])


  const onComplete = after(projects.length, () => {
    setTimeout(() => {
      setLoading(false);
    }, [1100])
  })

  return (
    <>
      <div id="carousel-container">
        <div id="carousel-header-c">
          <h1 id="carousel-title">Hi, my name is  Eddie Verdusco.</h1>
          <h3 id="carousel-header">I'm a full-stack software engineer and someone who values the visual feedback of creating clean, usable products.</h3>
        </div>
        <div id="carousel-container-inner">
          <ul id="carousel">
            {projects.map((project, index) => (
              <img className={`carousel-project-img project-${index}`} key={project.id} src={project.image} alt="project splash page" style={loading ? { display: 'none' } : {}} onLoad={onComplete} onError={onComplete} />
            ))}
            <Link className={`current-project`} to={`/project/${currentProject.id}`} key={`${currentProject.id}-link`} >
              <img className={`carousel-project-img`} src={currentProject.image} alt="project splash page" style={loading ? { display: 'none' } : {}} onLoad={onComplete} onError={onComplete} />
            </Link>
          </ul>

          <ul className="project-btns">
            {ProjectData.map((project, index) => (
              <div id="project-title-container" key={`container-${index}`} >
                <Link className={currentIndex === project.id - 1 ? "highlight" : "link"} to={`/project/${currentProject.id}`} key={project.id}>
                  <li value={index} onMouseOver={(e) => setCurrentIndex(index)} key={index} >
                    <p>
                      {project.title}
                    </p>
                  </li>
                </Link>

                {currentIndex === project.id - 1 ?
                  <a id="gh-link" href={currentProject.link} target="_blank" rel="noreferrer">
                    <AiFillGithub />
                  </a>
                  : null}
              </div>

            ))}
          </ul>
        </div>
      </div>

      <div id="carousel-mobile">
        <ProjectGallery />
      </div>
    </>
  );
}

export default Carousel;
