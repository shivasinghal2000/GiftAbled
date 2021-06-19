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

function App() {
  
  return (
    <div className="App">
     
        <Router>
          <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/user/profile">
              <Profile />
            </Route>
            <Route exact path="/user/disabilitytracker">
              <Disabilitytrackerform />
            </Route>
            <Route exact path="/user/Resources">
              <Resources />
            </Route>
            <Route exact path="/user">
                <User_login/>
            </Route>
            <Route exact path="/admin">
                <Admin_login/>
            </Route>
            <Route exact path="/admin/dashboard">
                <Dashboard/>
            </Route>

          </Switch>
        </Router>
    </div>
  );
}

export default App;
