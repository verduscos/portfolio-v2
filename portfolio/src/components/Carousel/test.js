import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import ProjectGallery from "../ProjectGallery";
import ProjectData from "../ProjectData";
import "./Carousel.css"

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.pictures = ProjectData
  }

  componentDidMount() {
    this.props.pictures.forEach((picture) => {
        const img = new Image();
        img.src = picture.image;
    });
}

  render() {
    return (
      <div>
        <h1>
          aasdfsda
        </h1>
        <h1>
          aasdfsda
        </h1>
        <h1>
          aasdfsda
        </h1>
        <h1>
          aasdfsda
        </h1>
      </div>
    );
  }
}

export default Carousel;
