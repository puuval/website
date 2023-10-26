import React from "react";
import "./Footer.css";
import logo from "../images/favicon.ico";
import downloadFile from "./file.js";

const Footer = () => {
  // Handler for the Download CV link click
  const handleDownloadCV = (event) => {
    event.preventDefault();
    downloadFile("./cv_file/CV_VALTTERI_PUUMALAINEN.pdf", "CV_VALTTERI_PUUMALAINEN.pdf");
  };

  return (
    <section>
      {/* Top footer */}
      <footer className="top">
        {/* Display the logo */}
        <img src={logo} alt="logo" />
        {/* Links and contact information */}
        <div className="links">
          {/* Social links */}
          <div>
            <h2>Socials</h2>
            <a href="https://www.linkedin.com/in/puuval/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/puuval" target="_blank" rel="noreferrer">GitHub</a>
            <a href="#" onClick={handleDownloadCV}>Download CV</a>
          </div>

          {/* Contact information */}
          <div>
            <h2>Contact me</h2>
            <p>Valtteri Puumalainen</p>
            <p>puuval@puuval.me</p>
            <p>+358 44 538 3035</p>
            <p>Turku, Finland</p>
          </div>
        </div>
      </footer>

      {/* Bottom footer */}
      <footer className="bottom">
        {/* Legal notice */}
        <div className="legal">
          <span>© 2023-2024 All rights reserved - Website Work In Progress</span>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
