import React, { useState } from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import { Accordion, Icon } from 'semantic-ui-react'

export default function SFLS() {
  let textCSS = {
    fontSize: 22,
    color: "azure",
    fontWeight: "bold",
    letterSpacing: 0.5
  }

  let text2CSS = {
    fontSize: 16,
    color: "azure",
    letterSpacing: 1
  }

  const [activeIndex, setActiveIndex] = useState([]);

  let handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    activeIndex.includes(newIndex) ? 
      setActiveIndex(activeIndex.filter(e => e !== newIndex)) :
      setActiveIndex([...activeIndex, newIndex]) 

  }

  return (
    <React.Fragment>
      <Timeline align="left">
        <TimelineItem>
          <TimelineOppositeContent style={textCSS}>
            Graduated June 2019<br/>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
             style={{width:24, height:24, backgroundColor: "LightCyan"}}/>
            <TimelineConnector style={{height:30}}/>
          </TimelineSeparator>
          <TimelineContent style={textCSS}>
            Shanghai Foreign Language School
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent style={text2CSS}>
            Jun 2018
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
             style={{width:20, height:20, backgroundColor: "PowderBlue"}}/>
            <TimelineConnector style={{height:60, backgroundColor:"darkcyan"}}/>
          </TimelineSeparator>
          <TimelineContent style={text2CSS}>
            Wellesley Book Award<br/>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot
             style={{width:24, height:24, backgroundColor: "LightCyan"}}/>
            <TimelineConnector style={{height:30}}/>
          </TimelineSeparator>
          <TimelineContent style={textCSS}>
            Activities
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent style={text2CSS}>
            Jan 2016 - Jun 2018
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
             style={{width:20, height:20, backgroundColor: "PowderBlue"}}/>
            <TimelineConnector style={{height:60}}/>
          </TimelineSeparator>
          <TimelineContent style={text2CSS}>
            Student Union<br/><br/>
            <Accordion exclusive={false}>
              <Accordion.Title
                active={activeIndex.includes(0)}
                index={0}
                onClick={handleClick}
                style={text2CSS}
              >
                <Icon name='dropdown' />
                President of Department of Technical Support
              </Accordion.Title>
              <Accordion.Content active={activeIndex.includes(0)}>
                <p>
                  Provided technical support and media design for school activities, and produced weekly broadcast.
                </p>
              </Accordion.Content>
            </Accordion>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent style={text2CSS}>
            Jan 2016 - Jun 2018
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
             style={{width:20, height:20, backgroundColor: "PowderBlue"}}/>
            <TimelineConnector style={{height:60}}/>
          </TimelineSeparator>
          <TimelineContent style={text2CSS}>
            Debate Team<br/><br/>
            <Accordion exclusive={false}>
              <Accordion.Title
                active={activeIndex.includes(1)}
                index={1}
                onClick={handleClick}
                style={text2CSS}
              >
                <Icon name='dropdown' />
                Starting Member
              </Accordion.Title>
              <Accordion.Content active={activeIndex.includes(1)}>
                <p>
                  Represented Year 2019 Class 2, won 3 school-wide champions and 1 second-place over 5 semesters.
                </p>
              </Accordion.Content>
            </Accordion>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent style={text2CSS}>
            Sep 2017 - Jun 2018
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
             style={{width:20, height:20, backgroundColor: "PowderBlue"}}/>
            <TimelineConnector style={{height:60}}/>
          </TimelineSeparator>
          <TimelineContent style={text2CSS}>
            Student Union<br/><br/>
            <Accordion exclusive={false}>
              <Accordion.Title
                active={activeIndex.includes(2)}
                index={2}
                onClick={handleClick}
                style={text2CSS}
              >
                <Icon name='dropdown' />
                Member of Secretariat
              </Accordion.Title>
              <Accordion.Content active={activeIndex.includes(2)}>
                <p>
                  Coordinated the operation of Student Union across departments, and successfully organized a series of school-wide events.
                </p>
              </Accordion.Content>
            </Accordion>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent style={text2CSS}>
            Sep 2017 - Jun 2018
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
             style={{width:20, height:20, backgroundColor: "PowderBlue"}}/>
            <TimelineConnector style={{height:60}}/>
          </TimelineSeparator>
          <TimelineContent style={text2CSS}>
            AI & Tech Club<br/><br/>
            <Accordion exclusive={false}>
              <Accordion.Title
                active={activeIndex.includes(3)}
                index={3}
                onClick={handleClick}
                style={text2CSS}
              >
                <Icon name='dropdown' />
                Co-founder
              </Accordion.Title>
              <Accordion.Content active={activeIndex.includes(3)}>
                <p>
                  Recruited club members and organized regular club events related to competitive programming, algorithms, AI and other technologies.
                </p>
              </Accordion.Content>
            </Accordion>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent style={text2CSS}>
            Jan 2018 - Jun 2018
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
             style={{width:20, height:20, backgroundColor: "PowderBlue"}}/>
          </TimelineSeparator>
          <TimelineContent style={text2CSS}>
            Student Career Development Center<br/><br/>
            <Accordion exclusive={false}>
              <Accordion.Title
                active={activeIndex.includes(4)}
                index={4}
                onClick={handleClick}
                style={text2CSS}
              >
                <Icon name='dropdown' />
                Editor
              </Accordion.Title>
              <Accordion.Content active={activeIndex.includes(4)}>
                <p>
                  Edited a handbook for college application and career development.
                </p>
              </Accordion.Content>
            </Accordion>
          </TimelineContent>
        </TimelineItem>


      </Timeline>
    </React.Fragment>
  )
}