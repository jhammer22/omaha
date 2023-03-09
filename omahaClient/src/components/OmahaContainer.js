import React from 'react';
import Navbar from '../components/Navbar';
import Container from './OmahaContainer.js';

function OmahaContainer(props) {

  return (
    // <div className={`container${props.fluid ? '-fluid' : ''}`}>
    //   {props.children}
    // </div>

    <> 
    <Navbar />
    {/* <h1>hello</h1> */}
    </>
  );

  
}

export default OmahaContainer;
