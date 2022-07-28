import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin, AiOutlineMessage, AiTwotoneMail } from "react-icons/ai";
import { BsFillPhoneFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im"
import "./Footer.css";

function Footer() {

  return (
    <footer id="footer">
      <ul id="footer-inner">
        <li>
          <a href="https://github.com/verduscos" target='_blank' rel="noreferrer">
            <FiGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/eddie-verdusco/" target='_blank' rel="noreferrer">
            <AiOutlineLinkedin />
          </a>
        </li>
        <li>
          <a href="mailto:eduardo.verdusco@yahoo.com">
            <AiOutlineMessage />
          </a>
        </li>
      </ul>

      <ul id="contact-footer">
        <li>
          <BsFillPhoneFill size={30} />
          Contact Me <span>702-426-6788</span>
        </li>
        <li>
          <ImLocation size={30} />
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
