import React from "react";
import { Link } from "react-router-dom";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2023 Uncle Chess Music</p>
      <div className="social-links-container">
        <div className="social-links-1">
          <a
            className="social-link"
            href="https://www.facebook.com/UncleChess/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            className="social-link"
            href="https://unclechess.bandcamp.com/album/blue-label-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bandcamp
          </a>
          <a
            className="social-link"
            href="https://twitter.com/UncleChess"
            target="_blank"
            rel="noopener noreferrer"
          >
            X / Twitter
          </a>
        </div>
        <div className="social-links-2">
          <a
            className="social-link"
            href="https://www.youtube.com/@unclechess5746/featured"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
          <a
            className="social-link"
            href="https://www.reverbnation.com/unclechess9"
            target="_blank"
            rel="noopener noreferrer"
          >
            ReverbNation
          </a>
          <Link to="/Admin" className="social-link">
            AdminPortal
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;