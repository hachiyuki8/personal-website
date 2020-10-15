import React from "react";
import Nav from './components/nav';
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
  paddingTop: 17,
  paddingLeft: 36,
  paddingRight: 16
}

function App() {
  return (
    <div className="App">
      <h1 style={titleCSS}>Joanna Yao</h1>
      <Nav style={{float: 'left'}}/>
      <Skills style={{paddingLeft: 36}}/>
    </div>
  );
}

export default App;
