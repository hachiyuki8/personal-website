import React from "react";
import Nav from './components/nav';
import Photo from './photo.jpeg';
import Basics from "./components/basics";
import Skills from './components/skills';
import Contact from './components/contact';
import Edu from './components/edu';
import Exp from './components/exp';
import Projects from './components/projects';
import { Col, Row } from 'antd';
import { Icon } from 'semantic-ui-react';
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
  borderRadius: 20,
  width: '45%',
  display: 'block',
  margin: 'auto'
}

let skillCSS = {
  backgroundColor: 'Azure',
  color: 'Teal',
  width: 300,
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
}

let bottomLCSS = {
  backgroundColor: 'LightCyan',
  color: 'Teal',
  width: '100%',
  padding: 25,
  display: 'block',
  margin: 'auto',
  letterSpacing: 1,
  textAlign: 'right',
  fontSize: 16,
}

let bottomRCSS = {
  backgroundColor: 'LightCyan',
  color: 'Teal',
  width: '100%',
  padding: 25,
  display: 'block',
  margin: 'auto',
  letterSpacing: 1,
  textAlign: 'left',
  fontSize: 16,
}

let eduCSS = {
  backgroundColor: 'DarkCyan',
  color: 'Azure',
  width: 300,
  display: 'block',
  margin: 'auto',
  letterSpacing: 3,
  textAlign: 'center',
  fontSize: 64
}

let expCSS = {
  backgroundColor: 'Azure',
  color: 'Teal',
  width: 360,
  display: 'block',
  margin: 'auto',
  letterSpacing: 2,
  textAlign: 'center',
  fontSize: 64
}

let projCSS = {
  backgroundColor: 'DarkCyan',
  color: 'Azure',
  width: 300,
  display: 'block',
  margin: 'auto',
  letterSpacing: 3,
  textAlign: 'center',
  fontSize: 64
}

export default function App() {
  return (
    <div className="App" style={backGroundCSS}>
      <Row>
        <div style={{zIndex: 1, position: "fixed", width: "100%", overflowX: 'auto'}}>
          <h1 style={titleCSS}>Joanna Yao</h1>
          <Nav style={{ float: 'left'}}/>
        </div>
      </Row>
      
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

      <Row justify="center" align="middle" style={{backgroundColor: "Azure", paddingTop:100}}>
        <Col span={24}>
          <h1 style={skillCSS}>Skills</h1>
        </Col>
      </Row>
      <Skills/>

      <Row justify="center" align="middle" 
       style={{backgroundColor: "DarkCyan", paddingTop:100, paddingBottom:100}}>
        <Col span={24}>
          <h1 style={eduCSS}>Education</h1>
        </Col>
      </Row>
      <Row justify="center" align="middle" 
       style={{backgroundColor: "DarkCyan", paddingBottom:120}}>
        <Col xl={{span:12}} lg={{span:15}} md={{span:18}} sm={{span:21}} xs={{span:24}}>
          <Edu/>
        </Col>
      </Row>

      <Row justify="center" align="middle" style={{backgroundColor: "Azure", paddingTop:100, paddingBottom:100}}>
        <Col span={24}>
          <h1 style={expCSS}>Experience</h1>
        </Col>
      </Row>
      <Exp/>

      <Row justify="center" align="middle" 
       style={{backgroundColor: "DarkCyan", paddingTop:100, paddingBottom:100}}>
        <Col span={24}>
          <h1 style={projCSS}>Projects</h1>
        </Col>
      </Row>
      <Projects/>
      
      <Row justify="center" align="middle" style={{backgroundColor: "LightCyan"}}>
        <Col span={12}>
          <h1 style={bottomLCSS}>Developed by: Joanna Yao</h1>     
        </Col>
        <Col span={12}>
          <a style={bottomRCSS} 
            href="https://github.com/hachiyuki8/personal-website"
            target="_blank" rel="noopener noreferrer">
              <Icon name='github'/>GitHub repository
          </a>
        </Col>
      </Row>

    </div>
  );
}

