import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Section from './components/Section';
import ScoreTable from './components/ScoreTable';
import Faq from './pages/Faq';
import Login from './pages/Login'


function App() {

  return (
    <>
   <Router>

 
    <Navbar />
    
    <Switch>
      <Route path="/faq" component={Faq} />
      <Route path="/login" component={Login} />
    </Switch>
   </Router>
    
    <Section />
    <ScoreTable />
    </>
  );
}

export default App;
