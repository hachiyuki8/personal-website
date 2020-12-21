import React from 'react'
import { Tab } from 'semantic-ui-react'
import CMU from './cmu';
import SFLS from './sfls';

export default function Edu() {
  const panes = [
    {
      menuItem: {content:'University', icon: 'graduation'},
      render: () => <Tab.Pane attached={false} 
      style={{backgroundColor:"darkcyan", width:"100%", minWidth: 360,
      display: 'block',margin: 'auto'}}>
        <CMU/>
      </Tab.Pane>,
    },
    {
      menuItem: {content:'High School', icon: 'graduation'},
      render: () => <Tab.Pane attached={false} 
      style={{backgroundColor:"darkcyan", width:"100%", minWidth: 360,
      display: 'block',margin: 'auto'}}>
        <SFLS/>
      </Tab.Pane>,
    },
  ]

  return (
    <Tab 
    menu={{ widths:2, color:"teal", inverted: true, attached: false, borderless: true,
            style:{width:"100%", minWidth: 360, display:'flex', margin: 'auto'}}} 
    panes={panes}
    />
  )

}