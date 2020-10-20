import React from "react";
import Nav from './components/nav';
import Photo from './photo.jpeg';
import Basics from "./components/basics";
import Skills from './components/skills';
import Links from './components/links';
import { Col, Row } from 'antd';
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
  overflowX: 'hidden'
}

let photoCSS = {
  height: "400px",
  minWidth: "300px",
  borderRadius: 24,
  width: '45%',
  display: 'block',
  margin: 'auto'
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


let gridStyle = {
  minWidth: 450,
  paddingTop: 50,
  paddingBottom: 50
};

function App() {
  return (
    <div className="App" style={backGroundCSS}>
      <div style={{zIndex: 1, position: "fixed", width: "100%", overflowX: 'auto'}}>
        <h1 style={titleCSS}>Joanna Yao</h1>
        <Nav style={{ float: 'left', backgroundColor: 'Azure'}}/>
      </div>
      
      <Row justify="center" align="middle" style={{paddingTop:150, paddingBottom:90}}>
          <Col span={8} style={gridStyle}>
            <img alt="loading" style={photoCSS} src={Photo} />
          </Col>
          <Col span={8} style={gridStyle}>
            <Basics/>
          </Col>
          <Col span={8} style={gridStyle}>
            <Links/>
          </Col>
      </Row>

      <h1 style={skillsCSS}>Skills</h1>
      <Skills />
    </div>
  );
}

export default App;
