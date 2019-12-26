import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Project } from "./component/project/project";
// import { SideComponent } from "./sharedComponent/sideComponent";
import { About } from "./component/about/about";
import { Contact } from "./component/contact/contact";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="sideComponent">
          <ul>
            <li>
              <Link className="link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="link" to="/project">
                Project
              </Link>
            </li>
            <li>
              <Link className="link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        {/* <div className="contentContainer">
          <div className="sideComponent">
            <SideComponent />
          </div>
          <div className="about">
            <About />
          </div>
        </div> */}
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
