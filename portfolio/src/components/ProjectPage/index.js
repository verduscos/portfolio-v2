import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import ProjectData from "../ProjectData";
import "./ProjectPage.css";

function ProjectPage() {
  let location = useLocation();
  let projectId = parseInt(location.pathname.split("/")[2]) - 1;
  let project = ProjectData[projectId];

  return (
    <div id="ProjectPage">
      <ul id="project-page-inner">
        <li id="project-header">
          <h1 id="project-page-title" className="project-header-tag">{project?.title}</h1>
          <Link to="/" className="project-header-tag"><MdKeyboardBackspace /></Link>
        </li>
        <li>
          <img id="project-page-image" src={project?.image} />
        </li>
        <li id="project-links-container">
          <p><b>Tech:</b> {project?.stack}</p>
          <div>
            <b>
              <a className="project-link" href={project?.link} target="_blank">Live</a>
            </b>
            <b>
              <a className="project-link" href={project?.repo} target="_blank">Repo</a>
            </b>
          </div>
        </li>
        <li>
          {project?.description}
        </li>
      </ul>
    </div>
  )
}

export default ProjectPage;
