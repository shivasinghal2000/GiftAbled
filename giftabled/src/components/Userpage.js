import React, { useState,useEffect } from "react";
import Navbar_user from "./Navbar_user";
import Disabilitytrackerform from "./Disabilitytrackerform";
import Profile from "./Profile";
import Resources from "./Resources";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import { firebase,auth } from "../util/firebase";
function Userpage() {
  const [phone, setPhone] = useState();
  const [name, setName] = useState();
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
  function phoneverify() {
    let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
    let number = "+91" + phone;
    console.log(number);
    firebase
      .auth()
      .signInWithPhoneNumber(number, recaptcha)
      .then((e) => {
        let code = prompt("enter OTP", "");
        if (code == null) return;
        e.confirm(code)
          .then((result) => {
            console.log(result.user, "user");
            document.querySelector("label").textContent =
              result.user.phoneNumber + "Number verified";
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="container">
      {user ? (
        <Router>
          <Navbar_user />
          <Switch>
            <Route exact path="/home">
              //we should edit later
              <Home />
            </Route>
            <Route exact path="/user/profile">
              <Profile />
            </Route>
            <Route exact path="/user/Disabilitytrackerform">
              <Disabilitytrackerform />
            </Route>
            <Route exact path="/user/resouces">
              <Resources />
            </Route>
          </Switch>
        </Router>
      ) : (
        <>
          <div
            className="mb-3 d-flex justify-content-center my-3"
            style={{ width: "30%" }}
          >
            <label for="exampleInputPassword1" className="form-label">
              Enter phone Number
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <label></label>
          <div id="recaptcha"></div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={phoneverify}
          >
            Click Me
          </button>
        </>
      )}
    </div>
  );
}

export default Userpage;
