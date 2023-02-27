import React from "react";
import "../styles/Navbar.css";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <div className='nav'>
      <nav className="navbar navbar-expand-sm bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href='#About' onClick={() => handlePageChange('About')}>Tony Gray</a>
          <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-end">
              <li className="nav-item">
                <a
                  href='#About'
                  onClick={() => handlePageChange('About')}
                  className={
                    currentPage === "About" ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  id="aboutBtn"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href='#Portfolio'
                  onClick={() => handlePageChange('Portfolio')}
                  className={
                    currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                  }
                  id="portfolioBtn"
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  href='#Contact'
                  onClick={() => handlePageChange('Contact')}
                  className={
                    currentPage === "Contact" ? "nav-link active" : "nav-link"
                  }
                  id="contactBtn"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
