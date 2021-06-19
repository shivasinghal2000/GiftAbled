import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { db, auth } from "./util/firebase";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Resources from "./components/Resources.js";
import Disabilitytrackerform from "./components/Disabilitytrackerform.js";
import Profile from "./components/Profile.js";
import Home from "./components/Home.js";
import Dashboard from "./components/Dashboard.js";
import Admin_login from "./components/Admin_login.js";
import User_login from "./components/User_login.js";
import Navbar_admin from "./components/Navbar_admin.js";
import { useEffect, useState } from "react";
import Notification from "./components/Notification.js";
function App() {
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
    <div className="App">
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
  );
}

export default App;
