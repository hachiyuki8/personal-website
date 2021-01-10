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
           href="https://github.com/ScottyLabs/CarnegieCalendar"
           target="_blank" rel="noopener noreferrer"
          >
            Carnegie Calendar
          </Header>
          <Divider/>
          <Header style={subStyle}>
            An aggregated calendar that allows query of all events happening at Carnegie Mellon
          </Header>
          <List as='ul' style={{fontSize:18}}>
              <List.Item style={{paddingBottom:15, lineHeight:1.5}}>
                <FontAwesomeIcon icon={faThumbtack} />
                &nbsp;Designed a responsive main-page using semantic react that allows flexible searching input.  
              </List.Item>
              <List.Item style={{paddingBottom:15, lineHeight:1.5}}>
                <FontAwesomeIcon icon={faThumbtack} />
                &nbsp;Implemented searching functionality and connected the frontend to the database based on MongoDB to display up-to-date results scraped from 100+ sources.
              </List.Item>
          </List>
        </Col>
      </Row>

      <Row justify="center" style={{backgroundColor: 'DarkCyan', color: 'Azure'}}>
        <Col span={12} style={gridStyle}>
          <Header style={{color:'Azure', fontSize:22, textDecoration:'underline'}}
           href="http://www.stat.cmu.edu/capstoneresearch/GOODS-N_290_Poster.pdf"
           target="_blank" rel="noopener noreferrer"
          >
            Predicting Galaxy Mass in GOODS-North
          </Header>
          <Divider/>
          <Header style={subStyle}>
            An astrophysics data project that uses machine learning to predict galaxy mass from other information.
          </Header>
          <List as='ul' style={{fontSize:18}}>
              <List.Item style={{paddingBottom:15, lineHeight:1.5}}>
                <FontAwesomeIcon icon={faThumbtack} />
                &nbsp;Trained 8 parametric regression models and non-parametric machine learning models to make accurate predictions and provide inferential statistics based on feature importance.
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
                &nbsp;Implemented TensorBoard automation on Google Colab that detects the current environment and automatically enables GPU support to achieve a more efficient model training workflow.
              </List.Item>
              <List.Item style={{paddingBottom:15, lineHeight:1.5}}>
                <FontAwesomeIcon icon={faThumbtack} />
                &nbsp;Tested and improved learning efficiency of the neural network by tuning hyperparameters such as loss functions and learning rates.
              </List.Item>
          </List>
        </Col>
      </Row>

      <Row justify="center" style={{backgroundColor: 'DarkCyan', color: 'Azure'}}>
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

        <Col span={12} style={gridStyle}>
        </Col>
      </Row>
    </>
  )
}
