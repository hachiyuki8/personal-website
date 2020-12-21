import React from 'react';
import { Header, List, Divider } from 'semantic-ui-react';
import { Col, Row } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons'


export default function Projects() {
  let gridStyle = {
    width: '50%',
    minWidth: 400,
    paddingBottom: 120,
    justify: 'center',
    paddingLeft: "8%",
    paddingRight: "8%"
  };

  let subStyle = {
    color:'Teal',
    fontSize: 16, 
    lineHeight:1.5, 
    backgroundColor: 'azure',
    borderRadius: 5,
    padding: 5,
    textAlign: 'center'
  }

  return (
    <>
      <Row justify="center" style={{backgroundColor: 'DarkCyan', color: 'Azure'}}>
        <Col span={12} style={gridStyle}>
          <Header style={{color:'Azure', fontSize:22, textDecoration:'underline'}}
           href="https://github.com/ScottyLabs/CarnegieCalendar"
           target="_blank" rel="noopener noreferrer"
          >
            Carnegie Calendar
          </Header>
          <Divider/>
          <Header style={subStyle}>
            An aggregated calendar that allows query of all events at Carnegie Mellon
          </Header>
          <List as='ul' style={{fontSize:18}}>
              <List.Item style={{paddingBottom:15, lineHeight:1.5}}>
                <FontAwesomeIcon icon={faThumbtack} />
                &nbsp;Designed main-page layout. 
              </List.Item>
              <List.Item style={{paddingBottom:15, lineHeight:1.5}}>
                <FontAwesomeIcon icon={faThumbtack} />
                &nbsp;Implemented search functionality and connected frontend to backend.
              </List.Item>
          </List>
        </Col>

        <Col span={12} style={gridStyle}>
          <Header style={{color:'Azure', fontSize:22, textDecoration:'underline'}}
           href="https://github.com/cmu-dsc/tetris"
           target="_blank" rel="noopener noreferrer"
          >
            Tetris AI
          </Header>
          <Divider/>
          <Header style={subStyle}>
            A Tetris AI based on Deep Q-Learning and Monte Carlo Tree Search
          </Header>
          <List as='ul' style={{fontSize:18}}>
              <List.Item style={{paddingBottom:15, lineHeight:1.5}}>
                <FontAwesomeIcon icon={faThumbtack} />
                &nbsp;Implemented TensorBoard automation on Google Colab.
              </List.Item>
              <List.Item style={{paddingBottom:15, lineHeight:1.5}}>
                <FontAwesomeIcon icon={faThumbtack} />
                &nbsp;Implemented GPU support for model training.
              </List.Item>
              <List.Item style={{paddingBottom:15, lineHeight:1.5}}>
                <FontAwesomeIcon icon={faThumbtack} />
                &nbsp;Tested learning efficiency under different loss functions and learning rates.
              </List.Item>
          </List>
        </Col>
      </Row>

      <Row justify="center" style={{backgroundColor: 'DarkCyan', color: 'Azure'}}>
        <Col span={12} style={gridStyle}>
          <Header style={{color:'Azure', fontSize:22, textDecoration:'underline'}}
           href="https://github.com/hachiyuki8/personal-website"
           target="_blank" rel="noopener noreferrer"
          >
            Personal Website
          </Header>
          <Divider/>
          <Header style={subStyle}>
            A personal website built with React
          </Header>

        </Col>

        <Col span={12} style={gridStyle}>
          <Header style={{color:'Azure', fontSize:22, textDecoration:'underline'}}
           href="https://github.com/hachiyuki8/weibo-report-2018"
           target="_blank" rel="noopener noreferrer"
          >
            Independent Research
          </Header>
          <Divider/>
          <Header style={subStyle}>
            A 2018 Report on the Judgement of Information Validity of Sina Weibo Users
          </Header>
          <List as='ul' style={{fontSize:18}}>
              <List.Item style={{paddingBottom:15, lineHeight:1.5}}>
                <FontAwesomeIcon icon={faThumbtack} />
                &nbsp;Carried out the study to investigate weibo users' standard of judging the validity of online information to understand the psychological pattern behind the spread of rumors.
              </List.Item>
          </List>
        </Col>
      </Row>
    </>
  )
}
