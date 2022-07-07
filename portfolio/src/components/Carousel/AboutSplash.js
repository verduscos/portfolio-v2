import * as Scroll from 'react-scroll';
import "./AboutSplash.css";

function AboutSplash() {
  const Link = Scroll.Link;

  return (
    <div id="about-splash">
      <h1 id="carousel-title">Hi, my name is Eddie Verdusco.</h1>
      <h3 id="carousel-header">I a software engineer who value the visual feedback of creating clean, usable products and love solving to problems with code.</h3>
      <Link to="carousel-container" spy={true} smooth={true} duration={500} >More</Link>
      {/* <a href="index#carousel-container">More</a> */}
    </div>
  )
}

export default AboutSplash;
