import React from 'react';
import { Header, List, Divider } from 'semantic-ui-react';
import { Col, Row } from 'antd';


export default function Exp() {
  let gridStyle = {
    width: '50%',
    minWidth: 400,
    paddingBottom: 120,
    justify: 'center',
    paddingLeft: "8%",
    paddingRight: "8%"
  };

  return (
    <>
      <Row justify="center" style={{backgroundColor: 'Azure', color: 'Teal'}}>
        <Col span={12} style={gridStyle}>
          <Header style={{color:'Teal', fontSize:22}}>
            Student Academic Success Center, Carnegie Mellon University (Pittsburgh, PA)
          </Header>
          <Divider/>
          <Header sub style={{color:'Teal', fontSize: 16}} 
           href="https://www.cmu.edu/student-success/programs/index.html"
           target="_blank" rel="noopener noreferrer"
          >
            Supplemental Instruction Leader (Aug 2020 - Present)
          </Header>
          <List as='ul' style={{fontSize:18}}>
              <List.Item style={{paddingBottom:15}}>
                Led regular study sessions on high-risk courses and provided students with extra academic resources and learning support.
              </List.Item>
          </List>

          <Header sub style={{color:'Teal', fontSize: 16}}>
            Data-Based Project Member (Aug 2020 - Present)
          </Header>
          <List as='ul' style={{fontSize:18}}>
              <List.Item style={{paddingBottom:15}}>
                Collected and analyszed attendance data for all programs under SASC, and presented feedback to the executives and staff.
              </List.Item>
          </List>
        </Col>

        <Col span={12} style={gridStyle}>
          <Header style={{color:'Teal', fontSize:22}}>
            Model United Nations of UChicago - China Conference 2019, Weland Internatioal (Shanghai, China)
          </Header>
          <Divider/>
          <Header sub style={{color:'Teal', fontSize: 16}}>
            Student Secretary General (Dec 2018 - Mar 2019)
          </Header>
          <List as='ul' style={{fontSize:18}}>
              <List.Item style={{paddingBottom:15}}>
              Led the student secretariat from Shanghai Foreign Language School, and coordinated with teams from Weland International and University of Chicago to prepare for the event.
              </List.Item>
              <List.Item style={{paddingBottom:15}}>
              Designed the main poster for the conference and edited videos for the opening and closing ceremony.
              </List.Item>
          </List>
        </Col>
      </Row>

      <Row justify="center" style={{backgroundColor: 'Azure', color: 'Teal'}}>
        <Col span={12} style={gridStyle}>
          <Header style={{color:'Teal', fontSize:22}}>
            Teensgeeker (Shanghai, China)
          </Header>
          <Divider/>
          <Header sub style={{color:'Teal', fontSize: 16}}>
            Python Teaching Assistant (Sep 2018 - Feb 2019)
          </Header>
          <List as='ul' style={{fontSize:18}}>
              <List.Item style={{paddingBottom:15}}>
                Coordinated a team that wrote a Python textbook targeting primary school students.
              </List.Item>
              <List.Item style={{paddingBottom:15}}>
                Assisted with teaching and collected feedback from students and parents to improve course design.
              </List.Item>
              <List.Item style={{paddingBottom:15}}>
                Wrote and published technical articles via Wechat Official Account.
              </List.Item>
          </List>
        </Col>

        <Col span={12} style={gridStyle}>
          <Header style={{color:'Teal', fontSize:22}}>
            Stepping Stones (Shanghai, China)
          </Header>
          <Divider/>
          <Header sub style={{color:'Teal', fontSize: 16}}>
            English Tutor (Volunteer) (Dec 2017 - Jun 2018)
          </Header>
          <List as='ul' style={{fontSize:18}}>
              <List.Item style={{paddingBottom:15}}>
              Taught English to migrant primary school students in the local community.
              </List.Item>
          </List>
        </Col>
      </Row>
    </>
  )
}
