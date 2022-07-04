import { useLocation } from "react-router";
import ProjectData from "../ProjectData";
import "./ProjectPage.css";

function ProjectPage() {
  let location = useLocation();
  let projectId = parseInt(location.pathname.split("/")[2]) - 1;
  let project = ProjectData[projectId];

  return (
    <div id="ProjectPage">
      <ul id="project-page-inner">
        <li>
          <h1 id="project-page-title">{project?.title}</h1>
        </li>
        <li>
          <img id="project-page-image" src={project?.image} />
        </li>
        <li id="project-links-container">
          <a className="project-link" href="https://paranormalfiles.herokuapp.com/" target="_blank">Live</a>
          <a className="project-link" href="https://github.com/verduscos/medium-clone" target="_blank">Repo</a>
        </li>
        <li>
          {project?.description}
        </li>
      </ul>
    </div>
  )
}

export default ProjectPage;
