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
  fontSize: 24,
  fontWeight: 'bold',
  float: 'left',
  paddingTop: 20,
  paddingLeft: 36,
  paddingRight: 16,
  letterSpacing: 1.5
}

let backGroundCSS = {
  backgroundColor: 'darkcyan'
}

let photoCSS = {
  textAlign: "left",
  margin: 100,
  height: 400,
  borderRadius: 24,
  borderStyle: "solid",
  borderColor: "CadetBlue",
  borderWidth: 6,
}

let skillsCSS = {
  backgroundColor: 'Azure',
  color: 'Teal',
  fontSize: 50,
  fontWeight: 'bold',
  float: 'left',
  paddingTop: 50,
  paddingLeft: 120,
  letterSpacing: 4
}

function App() {
  return (
    <div className="App" style={backGroundCSS}>
      <h1 style={titleCSS}>Joanna Yao</h1>
      <Nav style={{float: 'left'}}/>
      <div>
        <img alt="loading" style={photoCSS} src={Photo}/>
        <Basics/>
      </div>
      <h1 style={skillsCSS}>Skills</h1>
      <Skills/>
    </div>
  );
}

export default App;
