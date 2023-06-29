import React from 'react';
import './Footer.css';
import logo from '../images/favicon.ico';
import downloadFile from './file.js';


const Footer = () => {
  return (
    <section>
      <footer className="top">
        <img src={logo} alt="logo" />
        <div className="links">
          <div>
            <h2>Platforms</h2>
            <a href="https://www.linkedin.com/in/puuval/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/puuval" target="_blank" rel="noreferrer">GitHub</a>
            <a href="#" onClick={(event) => {
              event.preventDefault(); 
              downloadFile("./cv_file/CV_VALTTERI_PUUMALAINEN_ENG.pdf", "CV_VALTTERI_PUUMALAINEN_ENG.pdf");
            }}>
            Download CV</a>
          </div>
          <div>
            <h2>Contact me</h2>
            <p>Valtteri Puumalainen</p>
            <p>puuval@puuval.me</p>
            <p>+358 44 538 3035</p>
            <p>Turku, Finland</p>
          </div>
        </div>
      </footer>
      <footer className="bottom">
        <div className="legal">
          <span> © 2023 All rights reserved </span>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

