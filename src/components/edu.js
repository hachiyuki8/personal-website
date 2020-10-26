import React from 'react'
import { Tab } from 'semantic-ui-react'
import CMU from './cmu';
import Course from './course';
import SFLS from './sfls';

export default function edu() {
  const panes = [
    {
      menuItem: {content:'University - Overview', icon: 'graduation'},
      render: () => <Tab.Pane attached={false} 
      style={{backgroundColor:"darkcyan", width:"50%", minWidth: 360,
      display: 'block',margin: 'auto'}}>
        <CMU/>
      </Tab.Pane>,
    },
    {
      menuItem: {content:'University - Coursework', icon: 'book'},
      render: () => <Tab.Pane attached={false} 
      style={{backgroundColor:"darkcyan", width:"50%", minWidth: 360,
      display: 'block',margin: 'auto'}}>
        <Course/>
      </Tab.Pane>,
    },
    {
      menuItem: {content:'High School - Overview', icon: 'graduation'},
      render: () => <Tab.Pane attached={false} 
      style={{backgroundColor:"darkcyan", width:"50%", minWidth: 360,
      display: 'block',margin: 'auto'}}>
        <SFLS/>
      </Tab.Pane>,
    },
  ]

  return (
    <Tab 
    menu={{ color:"teal", inverted: true, attached: false, borderless: true,
            style:{width:"50%",minWidth: 360, margin: 'auto', overflow:'auto'} }} 
    panes={panes} />
  )

}