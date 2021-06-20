import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Resources from "./components/Resources.js";
import Disabilitytrackerform from "./components/Disabilitytrackerform.js";
import Profile from "./components/Profile.js";
import Home from "./components/Home.js";
import Dashboard from "./components/Dashboard.js";
import Admin_login from "./components/Admin_login.js";
import User_login from "./components/User_login.js";
import React,{setState} from 'react';

import { useEffect, useState } from "react";
import Notification from "./components/Notification.js";
import Adminpage from "./components/Adminpage.js";
import Userpage from "./components/Userpage.js";
function App() {
  const [usertype, setUsertype] = useState(1);
  function check()
  {
    switch(usertype){
      case 1:return (
        <div className="container mt-5">
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <p class="card-text">
                User Should Enter OTP to login
              </p>
              <button  class="btn btn-primary" onClick={(e)=>{
                setUsertype(3)
              }}>
                  User OTP
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <p class="card-text">
                Admin Page
              </p>
              <button  class="btn btn-primary" onClick={(e)=>{
                setUsertype(2)
              }}>
                  Admin Login
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      );
      case 2:return(<Adminpage /> ) ;
      case 3:return(<Userpage />) ;
    }
  }
  return (
    <div className="App">
      {
        check()
      }
    </div>
  );
}

export default App;
