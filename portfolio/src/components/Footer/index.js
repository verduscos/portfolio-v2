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
        <li className="footer-link">
          <a href="tel:7024266788" target='_blank' rel="noreferrer">
            <BsFillPhoneFill size={30} />
            Contact Me <span className="white-text">702-426-6788</span>
          </a>
        </li>
        <li className="footer-link">
          <ImLocation size={30} />
          Location <span className="white-text">Las Vegas, NV</span>
        </li>
        <li className="footer-link">
          <a href="mailto:eduardo.verdusco@yahoo.com" rel="noreferrer">
            <AiTwotoneMail size={30} />
            Email me <span className="white-text">em.verdusco@gmail.com</span>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;
