import pf from "../assets/images/splash-pf.PNG";
import nk from "../assets/images/splash-nk.PNG";
import qwerty from "../assets/images/splash-qwerty.PNG";
import jj from "../assets/images/splash-jj.PNG";
import kotrr from "../assets/images/splash-kotrr.PNG";

const ProjectData = [
  {
    id: 1,
    title: "Paranormal Files",
    image: pf,
    link: "https://paranormalfiles.herokuapp.com/",
    repo: "https://github.com/verduscos/medium-clone",
    description: "Built with React/Redux for the frontend and Python/Flask for the backend with a PostgreSQL database. Paranormal Files, loosely based on Medium, is a social platform where users can share or read about experiences with the paranormal.",
    stack: "React, Redux, JavaScript, Python, Flask, PostgreSQL, AWS S3, HTML5, CSS3"
  },
  {
    id: 2,
    title: "NoteKeeper",
    image: nk,
    link: "https://lista-nota.herokuapp.com/",
    repo: "https://github.com/verduscos/NoteKeeper",
    description: "NoteKeeper is a note-taking app that features notes and notebooks for easier organization. Users can store notes in specific notebooks to better organize their ideas/plans or whatever they don't want to forget. This app is modeled after the popular note-taking web app Evernote.",
    stack: "React, Redux, Python, Flask, PostgreSQL, AWS S3, HTML5, CSS3"
  },
  {
    id: 3,
    title: "Qwerty",
    image: qwerty,
    link: "https://qwertyshop.herokuapp.com/",
    repo: "https://github.com/verduscos/etsy-group-project",
    description: "Qwerty, a full-stack application inspired by Etsy, is an e-commerce platform for keyboard enthusiasts to buy and sell mechanical keyboard components.",
    stack: "React, Redux, JavaScript, Python, Flask, PostgreSQL, AWS S3, HTML5, CSS3"
  },
  // {
  //   id: 4,
  //   title: "jollyJingles",
  //   image: jj,
  //   link: "https://jolly-jingles.herokuapp.com/",
  //   repo: "https://github.com/verduscos/Jolly-Jingles",
  //   description: "jollyJingles, a full-stack application inspired by Goodreads, is an social platform for music enthusiasts to share and review jollyJingles.",
  //   stack: "JavaScript, Sequelize, Express, PostgreSQL, PUG, CSS3)"
  // },
  {
    id: 5,
    title: "KOTRR",
    image: kotrr,
    link: "https://verduscos.github.io/KOTR-Reviews/",
    repo: "https://github.com/verduscos/KOTR-Reviews",
    description: "Prior to joining App Academy, I developed a static website for video game reviews. This project holds a special place in my heart since it's the first freelance project I ever worked on. Created using HTML, CSS, and Javascript.",
    stack: "JavaScript, HTML5, CSS3"
  }
];

export default ProjectData;
