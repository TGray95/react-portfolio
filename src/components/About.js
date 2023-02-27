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
          I am a web developer from Fayetteville, North Carolina with experience
          working with many modern programming technologies. I have previously
          worked as a sales representative and a heavy equipment operator, and
          am looking to transition to a career in full stack web development. I
          have completed UNC Chapel Hill's coding bootcamp, and am proficient in
          HTML, CSS, JavaScript, and Python. Additionally, I have experience
          working with several database technologies including MySQL, NoSQL,
          MongoDB, and graphQL. My past and current jobs have given me much
          experience in working with groups to achieve both short and long term
          project goals, and I look forward to working in a team-based
          environment to further my understanding of software engineering and
          hone my talents as a professional programmer.
        </p>
      </div>
    </div>
  );
}

export default About;
