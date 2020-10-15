import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'antd';


export default function Skills() {
  // Define state vars
  useEffect(() => {
    // things to do whenever the component reloads
    // such as calling a backend api and fetching data
  });

  let cardCSS = {
    backgroundColor: 'Azure',
    color: 'DarkSlateGrey',
    fontSize: 15,
    padding: 6,
    textAlign: 'center'
  }

  let gridStyle = {
    minWidth: 400,
    overflow: "auto",
    textOverflow: "ellipsis",
  };

  return (
    // your jsx. there must be a single parent tag
    <>
      <div className="site-card-border-less-wrapper">
        <Row gutter={160}>
          <Col span={6} style={gridStyle}>
            <Card title="Language" bordered={false} style={cardCSS}>
              <ul>
                <li>Chinese (native) </li> <br/><br/>
                <li>English (fluent) </li>
              </ul>      
            </Card>
          </Col>

          <Col span={6} style={gridStyle}>
            <Card title="Programming" bordered={false} style={cardCSS}>
              <ul>
                <li>Language: Python, C, R </li> <br/><br/>
                <li>Framework: PyTorch </li>
              </ul>
            </Card>
          </Col>

          <Col span={6} style={gridStyle}>
            <Card title="Others" bordered={false} style={cardCSS}>
              <ul>
                <li>Adobe: Premiere, InDesign, Photoshop, After Effect </li><br/>
                <li>Microsoft Office: <br/> Word, Excel, PowerPoint </li><br/>
                <li>Unreal Engine (UE4)</li>
              </ul>
            </Card>
          </Col>

          <Col span={6} style={gridStyle}>
            <Card title="General" bordered={false} style={cardCSS}>
            <ul>
                <li>Data Analysis </li> <br/><br/>
                <li>Video Editing </li> <br/><br/>
                <li>Tutoring </li>
              </ul>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}