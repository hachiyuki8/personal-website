import React from 'react';
import { Divider } from 'antd';
import { List } from 'semantic-ui-react'

export default function Basics() {
  let listCSS = {
    backgroundColor: 'LightCyan',
    color: 'DarkCyan',
    minWidth: 480,
    overflow: 'auto',
    textOverflow: 'ellipsis',
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'left',
    width: "25%",
    height: 400,
    float: "left",
    borderRadius: 24,
    borderStyle: "hidden outset outset hidden",
    borderColor: "Teal",
    borderWidth: 8,
    padding: 25,
    letterSpacing: 0.4,
    margin: 100,
  }

  return (
    <>
      <List divided relaxed="very" style={listCSS}>
        <List.Item>
          <List.Icon name='user' />
          <List.Content>Joanna Yao</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='marker' />
          <List.Content>Pittsburgh, PA</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='building'/>
          <List.Content>Carnegie Mellon University Class of 2023</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='book'/>
          <List.Content>Statistic and Machine Learning</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='mail' />
          <List.Content>
            <a href='mailto:xinyao@andrew.cmu.edu'>xinyao@andrew.cmu.edu</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='phone' />
          <List.Content>(617) 388-5921</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='discord' />
          <List.Content>HachiYuki#4141</List.Content>
        </List.Item>
      </List>
    </>
  )
}