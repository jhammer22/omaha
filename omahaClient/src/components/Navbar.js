import React from 'react';
import '../styles/NavbarStyles.css'
import { Link } from "react-router-dom";
import Auth from '../utils/auth';

const Navbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
    return (
      <div>
      <nav className="orange darken-2" role="navigation">
        <div className="nav-wrapper container">
          <a href="/home" className="brand-logo">Big 12 Scoragami</a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link className="btn btn-lg waves-light btn- m-2" to='/faq'> FAQ</Link>
            </li>
            {/* <li>
            <Link  to="/login"> Login
              </Link>
            </li> */}

            <li>

           
            {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/home">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
            <li>
              <Link className="btn btn-lg waves-light btn- m-2" to="/login">
                Login
              </Link>
              </li>
              <li>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
              </li>
            </>
          )}

              
               </li>
        
        
{/* 
            
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
            </li> */}
          </ul>
            
        </div>
      </nav>


    </div>
  );
}

  
  export default Navbar