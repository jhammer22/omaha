   import React from "react";
   import '../styles/NavbarStyles.css'


   function Section() {
    return (
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
    );
   }

export default Section