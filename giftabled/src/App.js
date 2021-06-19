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
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react'

function App() {
  const {t, i18n} = useTranslation();
  const {language, setLanguage} = useState(true)
  /*
    Languages: 'en': English, 'hi': Hindi, 'kn': Kannada
  */
 useEffect(() => {
   db.collection("Users").onSnapshot((snapshot) => {
    //console.log(snapshot.docs.map(doc => doc.data()))
    //setItems(snapshot.docs.map(doc => doc.data()))
   })
 }, [])

 const method = async(e) => {
  const users = db.collection('admin');
  const snapshot = await users.get();
  snapshot.forEach(doc => {
    console.log(doc.data())
    if(doc.data().username === "jahanvi"){
      console.log("Worked")
    }
  })
 }

  const changeLang = (e) => {
    //console.log("clicked")
    if(language){
      i18n.changeLanguage("en")
    }
    else{
      i18n.changeLanguage("hi")
    }
    setLanguage(false)
  }
  
  return (
    <div className="App">
        <button onClick = {e => changeLang(e, "hi")}>Click me</button>
        <p>{t('Hi friends')}</p>
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
