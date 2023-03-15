import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Comopnents Section
import Navbar from './components/Navbar';

//// Pages Section
import Home from './pages/Home';
import Homeex from './pages/Homeex';
import Faq from './pages/Faq';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import Profile from './pages/Profile';


const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});


function App() {

  return (
    <>
    <ApolloProvider client={client}>
   <Router>
    <Navbar />
    <Switch>
      <Route path="/profile" component={Home} />
      <Route path="/faq" component={Faq} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/home" component={Homeex} />
      <Route path="/" component={Homeex} />
     
    </Switch>
   </Router>
   </ApolloProvider>
    </>
  );
}

export default App;

{/* <Route path="/profile" element={Profile} /> */}
