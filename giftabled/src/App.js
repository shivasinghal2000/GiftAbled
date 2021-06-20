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

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import React, { setState } from "react";
import { db } from "./components/firebase.js";

import Notification from "./components/Notification.js";
import Adminpage from "./components/Adminpage.js";
import Userpage from "./components/Userpage.js";
function App() {
  const { t, i18n } = useTranslation();
  const { language, setLanguage } = useState(true);
  /*
    Languages: 'en': English, 'hi': Hindi, 'kn': Kannada
  */
  useEffect(() => {
    db.collection("Users").onSnapshot((snapshot) => {
      //console.log(snapshot.docs.map(doc => doc.data()))
      //setItems(snapshot.docs.map(doc => doc.data()))
    });
  }, []);

  const method = async (e) => {
    const users = db.collection("admin");
    const snapshot = await users.get();
    snapshot.forEach((doc) => {
      console.log(doc.data());
      if (doc.data().username === "jahanvi") {
        console.log("Worked");
      }
    });
  };

  const changeLang = (e) => {
    //console.log("clicked")
    if (language) {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("hi");
    }
    setLanguage(false);
  };

  const [usertype, setUsertype] = useState(1);
  function check() {
    switch (usertype) {
      case 1:
        return (
          <div className="container mt-5">
            <div class="row">
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <p class="card-text">User Should Enter OTP to login</p>
                    <button
                      class="btn btn-primary"
                      onClick={(e) => {
                        setUsertype(3);
                      }}
                    >
                      User OTP
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <p class="card-text">Admin Page</p>
                    <button
                      class="btn btn-primary"
                      onClick={(e) => {
                        setUsertype(2);
                      }}
                    >
                      Admin Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return <Adminpage />;
      case 3:
        return <Userpage />;
    }
  }
  return (
    <div className="App">
      <div class="row">
        <div class="col-4 mx-auto text-center">
        <img
          className="textCenter"
          src="https://i0.wp.com/giftabled.org/wp-content/uploads/2019/08/GiftAbled-logo-HD-pin.png"
          style={{ height: "70%", width: "50%" }}
          alt=""
        />
        </div>
      </div>
      {check()}
    </div>
  );
}

export default App;
