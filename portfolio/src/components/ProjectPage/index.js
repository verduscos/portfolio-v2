import { useLocation } from "react-router";
import ProjectData from "../ProjectData";
import "./ProjectPage.css";

function ProjectPage() {
  let location = useLocation();
  let projectId = parseInt(location.pathname.split("/")[2]);
  let project = ProjectData[projectId];

  // console.log(project.title)

  return (
    <div id="ProjectPage">
      <ul>
        <li>
      <h1>{project?.title}</h1>
        </li>
        <li>
          <img src={project?.image} />
        </li>
        <li>
          <a href="">Live</a>
          <a href="">Repo</a>
        </li>
        <li>
          {project?.description}
        </li>
      </ul>
    </div>
  )
}

export default ProjectPage;
