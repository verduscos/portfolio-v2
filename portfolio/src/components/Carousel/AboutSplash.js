import * as Scroll from 'react-scroll';
import "./AboutSplash.css";

function AboutSplash() {
  const Link = Scroll.Link;

  return (
    <div id="about-splash">
      <ul id="about-splash-inner">
        <h1>Hi, my name is <br /><span id="carousel-title">EDDIE VERDUSCO</span></h1>
        <h3 id="carousel-header">I'm a full-stack software engineer and someone who values the visual feedback of creating clean, usable products.</h3>
        <Link to="carousel-container" spy={true} smooth={true} duration={500}>More</Link>
        <Link to="footer-inner" offset={100} spy={true} smooth={true} duration={500}>GET IN TOUCH</Link>
      </ul>
    </div>
  )
}

export default AboutSplash;
