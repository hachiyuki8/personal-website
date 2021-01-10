import React from 'react';
import { List } from 'semantic-ui-react'

export default function Basics() {
  let listCSS = {
    backgroundColor: 'LightCyan',
    color: 'DarkCyan',
    width: "30%",
    minWidth: 367,
    overflow: 'auto',
    textOverflow: 'ellipsis',
    fontSize: 17,
    textAlign: 'left',
    height: 400,
    borderRadius: 20,
    borderStyle: "hidden outset outset hidden",
    borderColor: "Teal",
    borderWidth: 8,
    padding: 20,
    display: 'block',
    margin: 'auto'
  }

  return (
    <>
      <List divided relaxed="very" style={listCSS}>
        <List.Item>
          <List.Icon name='user'/>
          <List.Content>Joanna Yao</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='marker' />
          <List.Content>Pittsburgh, PA</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='building'/>
          <List.Content>Carnegie Mellon University '23</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='book'/>
          <List.Content>Information Systems</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='book'/>
          <List.Content>(Minor) Computer Science</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='mail' />
          <List.Content>
            <a href='mailto:xinyao@andrew.cmu.edu' 
             target="_blank" rel="noopener noreferrer">xinyao@andrew.cmu.edu</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='phone' />
          <List.Content>(617) 388-5921</List.Content>
        </List.Item>
      </List>
    </>
  )
}