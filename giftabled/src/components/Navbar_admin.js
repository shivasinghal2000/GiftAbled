import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {auth} from './firebase';
function Navbar_admin() {
  return (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Giftabled
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/admin/notification">
                  Notification
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/dashboard">
                    Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/user/Resources" onClick={(e)=>{
                    auth.signOut();
                }}>
                    SignOut
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar_admin;
