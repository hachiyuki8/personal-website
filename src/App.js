import React from "react";
import Nav from './components/nav';
import Photo from './photo.jpeg';
import Basics from "./components/basics";
import Skills from './components/skills';
import "antd/dist/antd.css";
import "./index.css";
import './App.css';

let titleCSS = {
  backgroundColor: 'LightCyan',
  color: 'Teal',
  float: 'left',
  paddingTop: 20,
  paddingLeft: 36,
  paddingRight: 16,
  letterSpacing: 1.5,
  font: "bold 24px Trebuchet MS",
}

let backGroundCSS = {
  backgroundColor: 'darkcyan',
  width: "100%",
}

let photoCSS = {
  textAlign: "left",
  margin: "100px",
  marginLeft: "150px",
  height: "400px",
  borderRadius: 24,
  float: "left"
}

let skillsCSS = {
  backgroundColor: 'AliceBlue',
  color: 'Teal',
  float: 'left',
  marginTop: 80,
  marginLeft: 150,
  letterSpacing: 4,
  padding: 20,
  borderRadius: 20,
  borderStyle: "outset",
  borderColor: "Powderblue",
  borderWidth: 8,
  font: "bold 48px Trebuchet MS"
}

let divCSS = {
  overflow: 'auto',
  paddingTop: 100,
  paddingBottom: 60,
  width: "100%",
}

function App() {
  return (
    <div className="App" style={backGroundCSS}>
      <div style={{ zIndex: 1, position: "fixed", width: "100%", overflow: 'auto' }}>
        <h1 style={titleCSS}>Joanna Yao</h1>
        <Nav style={{ float: 'left', backgroundColor: 'Azure' }} />
      </div>

      <div style={divCSS}>
        <img alt="loading" style={photoCSS} src={Photo} />
        <Basics/>
      </div>

      <h1 style={skillsCSS}>Skills</h1>
      <Skills />
    </div>
  );
}

export default App;
