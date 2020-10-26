import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';

export default function sfls() {
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
            Mar 2016 - Jun 2018
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
             style={{width:20, height:20, backgroundColor: "PowderBlue"}}/>
            <TimelineConnector style={{height:60}}/>
          </TimelineSeparator>
          <TimelineContent style={text2CSS}>
            Student Union<br/><br/>
            President of Department of Technical Support
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent style={text2CSS}>
            Mar 2016 - Jun 2018
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
             style={{width:20, height:20, backgroundColor: "PowderBlue"}}/>
            <TimelineConnector style={{height:60}}/>
          </TimelineSeparator>
          <TimelineContent style={text2CSS}>
            Debate Team<br/><br/>
            Member
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
            Member of Secretariat
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
            Co-founder
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent style={text2CSS}>
            Jan 2018 - Jan 2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
             style={{width:20, height:20, backgroundColor: "PowderBlue"}}/>
          </TimelineSeparator>
          <TimelineContent style={text2CSS}>
            Student Career Development Center<br/><br/>
            Editor
          </TimelineContent>
        </TimelineItem>


      </Timeline>
    </React.Fragment>
  )
}