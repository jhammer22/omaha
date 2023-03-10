import React from 'react';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import ScoreTable from '../components/ScoreTable';
import Container from './OmahaContainer.js';

function OmahaContainer(props) {

  return (
    <> 
    <Navbar />

    <Section />
    <ScoreTable />
    </>
  );
}

export default OmahaContainer;
