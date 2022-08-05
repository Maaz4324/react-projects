import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "#212529",
  });
  const [textStyle, setTextStyle] = useState({
    color: "white",
    backgroundColor: "#07071e",
  });
  const [bacgroundClr, setbacgroundClr] = useState({
    backgroundColor: "#17191c",
    color: "white",
  });

  const toggleMode = () => {
    if (
      mode == "light" &&
      myStyle.backgroundColor == "white" &&
      textStyle.color == "black" &&
      bacgroundClr.color == "black"
    ) {
      setMode("dark");
      setMyStyle({
        color: "white",
        backgroundColor: "#212529",
      });
      setTextStyle({
        color: "white",
        backgroundColor: "#07071e",
      });
      setbacgroundClr({ backgroundColor: "#17191c", color: "white" });
      document.title = "TextUtils - Dark Mode";
    } else if (
      mode == "dark" &&
      myStyle.backgroundColor == "#212529" &&
      textStyle.color == "white" &&
      bacgroundClr.color == "white"
    ) {
      setMode("light");
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setTextStyle({ color: "black", backgroundColor: "#ededed" });
      setbacgroundClr({ backgroundColor: "white", color: "black" });
    }
    document.title = "TextUtils - Light Mode";
  };

  return (
    <div style={bacgroundClr}>
      <Router>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={toggleMode}
          />
          <label class="form-check-label" for="flexSwitchCheckDefault">
            Enable light Mode
          </label>
        </div>
        <NavBar title="Text Utils" mode={mode} />
        <div className="container">
          <Switch>
            <Route exact path="/about">
              <About Style={myStyle} StyleText={textStyle} />
            </Route>
            <Route exact path="/">
              <TextForm
                heading="Enter the text to analyze"
                Style={myStyle}
                StyleText={textStyle}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
