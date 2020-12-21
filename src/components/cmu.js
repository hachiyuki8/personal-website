import React, { useState } from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import { Accordion, Icon } from 'semantic-ui-react'
import Course from './course';


export default function CMU() {
  let textCSS = {
    fontSize: 22,
    color: "azure",
  }

  let text2CSS = {
    fontSize: 16,
    color: "azure",
  }

  let courseCSS = {
    fontSize: 22,
    color: "azure",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
            Aug 2019 - Present<br />
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              style={{ width: 20, height: 20, backgroundColor: "LightCyan" }} />
            <TimelineConnector style={{ height: 30 }} />
          </TimelineSeparator>
          <TimelineContent style={textCSS}>
            Carnegie Mellon University
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent style={text2CSS}>
            Expected Graduation: May 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              style={{ width: 16, height: 16, backgroundColor: "PowderBlue" }} />
            <TimelineConnector style={{ height: 120 }} />
          </TimelineSeparator>
          <TimelineContent style={text2CSS}>
            Major: Statistics and Machine Learning<br /><br />
            Minor: Computer Science<br /><br />
            GPA: 4.0/4.0<br /><br />
            <a href="https://www.cmu.edu/dietrich/qsss/people/students/2023/index.html"
              target="_blank" rel="noopener noreferrer"
              style={{ color: "Azure", textDecoration: "underline" }}>
              Quantitative Social Science Scholars
            </a>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent style={text2CSS}>
            Fall 2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              style={{ width: 16, height: 16, backgroundColor: "PowderBlue" }} />
            <TimelineConnector style={{ height: 60, backgroundColor: "darkcyan" }} />
          </TimelineSeparator>
          <TimelineContent style={text2CSS}>
            Dietrich College Dean's List, with Honors
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot
              style={{ width: 20, height: 20, backgroundColor: "LightCyan" }} />
            <TimelineConnector style={{ height: 30 }} />
          </TimelineSeparator>
          <TimelineContent style={textCSS}>
            Activities
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent style={text2CSS}>
            Aug 2020 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              style={{ width: 16, height: 16, backgroundColor: "PowderBlue" }} />
            <TimelineConnector style={{ height: 60 }} />
          </TimelineSeparator>
          <TimelineContent style={text2CSS}>
            <a href="https://scottylabs.org/index.html"
              target="_blank" rel="noopener noreferrer"
              style={{ color: "Azure", textDecoration: "underline" }}>
              Scotty Labs
            </a>
            <br /><br />
            Tech Project Member
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent style={text2CSS}>
            Aug 2020 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              style={{ width: 16, height: 16, backgroundColor: "PowderBlue" }} />
            <TimelineConnector style={{ height: 60 }} />
          </TimelineSeparator>
          <TimelineContent style={text2CSS}>
            Data Science Club<br /><br />
            Project Member
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent style={text2CSS}>
            Aug 2019 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              style={{ width: 16, height: 16, backgroundColor: "PowderBlue" }} />
            <TimelineConnector style={{ height: 75, backgroundColor: "darkcyan" }} />
          </TimelineSeparator>
          <TimelineContent style={text2CSS}>
            CMU Esports - Competitive Overwatch<br /><br />
            A Team Member
          </TimelineContent>
        </TimelineItem>

      </Timeline>

      <Accordion exclusive={false} style={{paddingBottom: 60}}>
        <Accordion.Title
          active={activeIndex.includes(0)}
          index={0}
          onClick={handleClick}
          style={courseCSS}
        >
          <Icon name='dropdown' />
                Relevant Coursework
        </Accordion.Title>
        <Accordion.Content active={activeIndex.includes(0)}>
          <Course/>
        </Accordion.Content>
      </Accordion>

    </React.Fragment>
  )
}