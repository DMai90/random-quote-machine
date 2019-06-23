import React from 'react';

const Footer = () => {
  return (
    <footer className="footer text-center mt-5 fixed-bottom">
      <div className="d-flex justify-content-center row-hl">
        <div className="p-4 d-none d-sm-inline">
          <strong>David Mai</strong>
        </div>
        <div className="p-4">
          <a
            href="http://david-mai.com/"
            className="text-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-globe" />
          </a>
        </div>
        <div className="p-4">
          <a
            href="https://www.linkedin.com/in/nldavidmai/"
            className="text-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" />
          </a>
        </div>
        <div className="p-4">
          <a
            href="https://github.com/DevMai90"
            className="text-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
          </a>
        </div>
        <div className="p-4">
          <a
            href="https://twitter.com/devmai90"
            className="text-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
