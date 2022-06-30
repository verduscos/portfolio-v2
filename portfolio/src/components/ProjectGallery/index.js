import React from "react";
import { Link } from "react-router-dom";
import ProjectData from "../ProjectData";
import "./ProjectGallery.css";

function ProjectGalley() {

  return (
    <div id="gallery">
      <h1>Project Gallery</h1>
      <ul id="project-inner">
        {ProjectData.map(project => (
          <li className="project-tile">
            <Link to={`/project/`}>
              <img className="project-image" src={project.image} alt={project.name} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectGalley;
