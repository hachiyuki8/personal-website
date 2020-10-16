import React, { useEffect } from 'react';
import { Card, Col, Row } from 'antd';


export default function Skills() {
  let cardCSS = {
    backgroundColor: 'Azure',
    color: 'DarkSlateGrey',
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'left'
  }

  let gridStyle = {
    width: "50%",
    minWidth: 400,
    paddingTop: 30,
    paddingBottom: 30,
    overflow: "auto",
    textOverflow: "ellipsis",
  };

  return (
    <>
      <div className="site-card-border-less-wrapper">
        <Row gutter={160} justify="center">
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
                <li>Language: Python, C, R, JavaScript, HTML/CSS </li> <br/><br/>
                <li>Framework: PyTorch, React </li>
              </ul>
            </Card>
          </Col>

          <Col span={6} style={gridStyle}>
            <Card title="Software" bordered={false} style={cardCSS}>
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