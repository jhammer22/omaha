import React from 'react';

function Navbar() {
    return (
      <nav className="orange darken-2" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container" href="#" className="brand-logo">
            Big 12 Scoragami
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="faq.html">How to use</a>
            </li>
            <li>
              <a href="faq.html">FAQ</a>
            </li>
            <ul>
              <li>
                <a href="#contact">Contact us</a>
              </li>
            </ul>
          </ul>
  
          <ul id="nav-mobile" className="sidenav">
            <li>
              <a href="#">Navbar Link</a>
            </li>
            <a href="faq.html">
              <div className="darken-2">
                <i className="material-icons">question_answer</i>
                <span className="flow-text">FAQ</span>
              </div>
            </a>
  
            <div className=" orange darken-2">
              <i className="material-icons">question_answer</i>
              <span className="flow-text">Color blind</span>
            </div>
  
            <div className="orange darken-2">
              <i className="material-icons">question_answer</i>
              <span className="flow-text">How does it work</span>
            </div>
          </ul>
  
          <a href="#" data-target="nav-mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>
    );
  }
  
  export default Navbar