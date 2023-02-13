import React from "react";
import "../styles/Footer.css";
import githubIcon from "../images/github-icon.png";
import gmailIcon from "../images/gmail-icon.png"
function Footer() {
  return (
    <footer className="footer fixed-bottom row justify-content-center">
      <a className="col-6" href="https://github.com/TGray95">
        <img src={githubIcon} id="githubImg" alt="github icon"></img>
      </a>
      <a className="col-6" href="mailto:gray.tony95@gmail.com">
        <img src={gmailIcon} id="gmailImg" alt="github icon"></img>
      </a>
    </footer>
  );
}

export default Footer;
