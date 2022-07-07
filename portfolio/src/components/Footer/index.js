import Resume from "../../assets/Verdusco_Eddie_Resume.pdf";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin, AiOutlineMessage, AiOutlineFilePdf, AiFillHome, AiTwotoneMail } from "react-icons/ai";
import { BsFillPhoneFill } from "react-icons/bs";

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
        <li>
          <BsFillPhoneFill size={30} />
          Contact Me <span>702-426-6788</span>
        </li>
        <li>
          <AiFillHome size={30} />
          Location <span>Las Vegas, NV</span>
        </li>
        <li>
          <AiTwotoneMail size={30} />
          Email me <span>em.verdusco@gmail.com</span>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;
