import React from "react";
import Nav from './components/nav';
import Photo from './photo.jpeg';
import Basics from "./components/basics";
import Skills from './components/skills';
import Contact from './components/contact';
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
  fontSize: 24
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

let skillCSS = {
  backgroundColor: 'Azure',
  color: 'Teal',
  width: 250,
  display: 'block',
  margin: 'auto',
  letterSpacing: 3,
  textAlign: 'center',
  fontSize: 64
}


let gridStyle = {
  minWidth: 500,
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
            <Contact/>
          </Col>
      </Row>

      <Row justify="center" align="middle" style={{backgroundColor: "Azure", paddingTop:120}}>
        <Col span={24}>
          <h1 style={skillCSS}>Skills</h1>
        </Col>
      </Row>
      <Skills/>
    </div>
  );
}

export default App;
