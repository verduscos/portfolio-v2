import React from "react";
import { Link } from "react-router-dom";
import ProjectData from "../ProjectData";
import "./ProjectGallery.css";

function ProjectGalley() {

  return (
    <div id="gallery">
      <ul id="project-inner">
        {ProjectData.map(project => (
          <li className={`project-tile item${project.id}`} key={project.id}>
            <Link to={`/project/${project.id}`}>
              <img className={`project-image ${project.id}`} src={project.image} alt={project.name} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectGalley;
