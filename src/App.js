import React from "react";
import PageHeader from './components/pageheader.js';
import Nav from './components/nav';
import './App.css';
import "antd/dist/antd.css";
import "./index.css";


function App() {

  return (
    <div className="App">
      <PageHeader/>
      <Nav/>
    </div>
  );
}

export default App;
