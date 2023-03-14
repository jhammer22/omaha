import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Comopnents Section
import Navbar from './components/Navbar';

//// Pages Section
import Home from './pages/Home';
import Faq from './pages/Faq';
import Login from './pages/Login';

function App() {

  return (
    <>
   <Router>
    <Navbar />
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/faq" component={Faq} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Switch>
   </Router>
    </>
  );
}

export default App;
