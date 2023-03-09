import React from 'react';

function Navbar() {
    return (
      <div>
      <nav className="orange darken-2" role="navigation">
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo">Big 12 Scoragami</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="faq.html">How to use</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li>
              <ul id="nav-mobile" className="sidenav">
                <li><a href="#">Navbar Link</a></li>
                <li>
                  <div className="darken-2">
                    <i className="material-icons">question_answer</i>
                    <span className="flow-text">FAQ</span>
                  </div>
                </li>
                <li>
                  <div className="orange darken-2">
                    <i className="material-icons">question_answer</i>
                    <span className="flow-text">Color blind</span>
                  </div>
                </li>
                <li>
                  <div className="orange darken-2">
                    <i className="material-icons">question_answer</i>
                    <span className="flow-text">How does it work</span>
                  </div>
                </li>
              </ul>
              <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <br/><br/>
          <h1 className="header center orange-text">College Football</h1>
          <div className="row center">
            <h5 className="header col s12 light">Have you ever wanted to know if a score has happened since 1999? <br/><br/> Checkout the chart below</h5>
          </div>
          <div className="row center">
            <a href="https://www.youtube.com/watch?v=9l5C8cGMueY" id="download-button" className="btn-large waves-effect waves-light orange">Youtube video about Scoragami</a>
          </div>
          <br/><br/>
        </div>
      </div>
    </div>
  );
}

  
  export default Navbar