import React,{useState,useEffect} from 'react'
import {auth} from '../util/firebase'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar_admin from "./Navbar_admin.js";
import Admin_login from "./Admin_login.js";
import Dashboard from "./Dashboard.js";
import Notification from "./Notification.js";
import Home from "./Home.js";
function Adminpage() {
    const [user, setUser] = useState(auth.currentUser);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);
    return (
        <div>
            {user ? (
        <Router>
          <Navbar_admin/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/admin/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/admin/notification">
              <Notification/>
            </Route>
          </Switch>
        </Router>
      ) : (
        <Admin_login />
      )}
        </div>
    )
}

export default Adminpage
