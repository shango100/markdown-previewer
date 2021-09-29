import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="Footer">
    <span>
      Created by:{' '}
      <a
        className="Footer-link"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
       ####
      </a>
    </span>
    <span> | </span>
    <span>
      <a
        className="Footer-link"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        Repo Link
      </a>
    </span>
  </footer>
);

export default Footer;
