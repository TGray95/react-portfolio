import React from "react";
import "../styles/About.css";
import profilePic from "../images/profile-pic2.jpg";

function About() {
  return (
    <div className="text-center row justify-content-evenly" id="aboutContainer">
      <a className="col-sm-3" href="https://github.com/TGray95">
        <img alt="profile" src={profilePic}></img>
      </a>
      <div className="col-sm-6">
        <h2>About the developer</h2>
        <p id="aboutText">
          I am a web developer with experience working with many modern
          programming technologies. I have previously worked as a sales
          representative and a heavy equipment operator, and am looking to
          transition to a career in full stack web development. I have completed
          UNC Chapel Hill's coding bootcamp, and am proficient in HTML, CSS,
          JavaScript, Node, Express, and React. 
        </p>
      </div>
    </div>
  );
}

export default About;
