import React, { useEffect, useState, Component} from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import ProjectGallery from "../ProjectGallery";
import ProjectData from "../ProjectData";
import "./Carousel.css"

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = { imageStatus: "loading" };
  }

  componentDidMount() {
    this.setState({ imageStatus: "loaded" });
  }

  componentDidMount() {
    this.setState({ imageStatus: "failed to load" });
  }

  render() {
    console.log(this.props)

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

        {/* { this.props.images} */}
      </div>
    );
  }
}

export default Carousel;
