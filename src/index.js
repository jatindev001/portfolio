import React from "react";
import ReactDOM from "react-dom";
import { SideComponent } from "./sharedComponent/sideComponent";
import { About } from "./component/about/about";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="contentContainer">
        <div className="sideComponent">
          <SideComponent />
        </div>
        <div className="about">
          <About />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
