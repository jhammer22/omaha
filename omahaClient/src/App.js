import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Section from './components/Section';
import ScoreTable from './components/ScoreTable';
import Faq from './pages/Faq';
import Login from './pages/Login'
import Signup from './pages/Signup'


function App() {

  return (
    <>
   <Router>

 
    <Navbar />
    
    <Switch>
      <Route path="/faq" component={Faq} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Switch>
   </Router>
    
    {/* <Section />
    <ScoreTable /> */}
    </>
  );
}

export default App;
