import React from 'react';
import { Button, Icon, List } from 'semantic-ui-react';

export default function Links() {
  let linkCSS = {
    minWidth: 480,
    width: "25%", 
    height: 400,
    display: 'block',
    margin: 'auto',
    verticalAlign: 'middle',
  }

  let buttonCSS = {
    width: "40%",
    display: 'block',
    margin: 'auto',
    marginBottom: 50,
  }

  return (
    <List animated verticalAlign='middle' style={linkCSS}>
      
      <List.Item>
        <Button style={buttonCSS} size="huge" color='github'>
          <Icon name='github'/><a href="https://google.com">Github</a>
        </Button>        
      </List.Item>

      <List.Item>
        <Button style={buttonCSS} size="huge" color='linkedin'>
          <Icon name='linkedin'/><a href="https://google.com">LinkedIn</a>
        </Button>        
      </List.Item>
      
      <List.Item>
        <Button style={buttonCSS} size="huge" color='youtube'>
          <Icon name='youtube'/><a href="https://google.com">YouTube</a>
        </Button>        
      </List.Item>

      <List.Item>
        <Button style={buttonCSS} size="huge" color='facebook'>
          <Icon name='facebook'/><a href="https://google.com">Facebook</a>
        </Button>        
      </List.Item>

    </List>
  )
}