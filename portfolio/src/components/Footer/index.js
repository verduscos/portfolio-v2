import Resume from "../../assets/Verdusco_Eddie_Resume.pdf";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin, AiOutlineMessage, AiOutlineFilePdf } from "react-icons/ai";
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
        <li>
          <a href={Resume} target='_blank'>
            <AiOutlineFilePdf />
          </a>
        </li>
      </ul>

      <ul id="contact-footer">
        <li>Contact Me</li>
        <li>Location</li>
        <li>Email me</li>
      </ul>
    </footer>
  )
}

export default Footer;
