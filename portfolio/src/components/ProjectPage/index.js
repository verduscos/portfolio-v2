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
      <h1>{project?.title}</h1>
    </div>
  )
}

export default ProjectPage;
