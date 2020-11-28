import React from 'react';
import { Card, Col, Row } from 'antd';


export default function Skills() {
  let cardCSS = {
    backgroundColor: 'DarkCyan',
    color: 'Azure',
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'left',
    borderRadius: 10,
    textOverflow: 'ellipsis',
  }
  
  let gridStyle = {
    width: '50%',
    minWidth: 360,
    paddingTop: 30,
    paddingBottom: 30,
    justify: 'center'
  };

  return (
    <>
      <div className="site-card-border-less-wrapper">
        <Row gutter={120} justify="center">
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
                <li>Language: Python, C, R,
                    JavaScript, HTML/CSS, SQL, Standard ML </li> <br/><br/>
                <li>Framework: React, PyTorch </li>
              </ul>
            </Card>
          </Col>

          <Col span={6} style={gridStyle}>
            <Card title="Software" bordered={false} style={cardCSS}>
              <ul>
                <li>Unreal Engine</li><br/>
                <li>Adobe: Premiere, InDesign, Photoshop, After Effect </li><br/>
                <li>Microsoft Office</li>
              </ul>
            </Card>
          </Col>

          <Col span={6} style={gridStyle}>
            <Card title="General" bordered={false} style={cardCSS}>
            <ul>
                <li>Data Analysis </li> <br/><br/>
                <li>Web Development</li> <br/><br/>
                <li>Video Editing </li>
              </ul>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}