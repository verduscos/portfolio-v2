import { NavLink } from "react-router-dom";
import { AiOutlineFilePdf } from "react-icons/ai";
import Self from "../../assets/images/personal.jpg";
import Resume from "../../assets/Verdusco_Eddie_Resume.pdf";
import "./Nav.css";

const Nav = () => {

  return (
    <nav id="nav">
      <ul>
        <li id="self-container">
          <img id="self" src={Self} />
          <p id="nav-author">Eddie Verdusco</p>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <a href={Resume} target='_blank'>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
