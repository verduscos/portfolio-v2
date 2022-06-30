import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin, AiOutlineMessage } from "react-icons/ai";
import "./Footer.css";

function Footer() {

  return (
    <footer id="footer">
      <ul id="footer-inner">
        <li>
          <a href="https://github.com/verduscos" target='_blank'>
            <FiGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/eddie-verdusco/" target='_blank'>
            <AiOutlineLinkedin />
          </a>
        </li>
        <li>
          <a href="mailto:eduardo.verdusco@yahoo.com">
            <AiOutlineMessage />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;
