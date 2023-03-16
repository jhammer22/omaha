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
          <a href="/home" className="brand-logo">SCORORAMA</a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link className="btn btn-lg waves-light btn- m-2" to='/faq'> FAQ</Link>
            </li>

            <li>

           
            {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/profile">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
              <Link className="btn btn-lg waves-light btn- m-2" to="/cbr">
                Colorblind Mode
              </Link>
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
        
          </ul>
            
        </div>
      </nav>


    </div>
  );
}

  
  export default Navbar