import React from 'react';
import { List } from 'semantic-ui-react'

export default function course() {

  let textCSS = {
    fontSize: 16,
    color: "azure",
    letterSpacing: 1,
    textOverflow: 'ellipsis'
  }

  return (
    <React.Fragment>
      <List style={textCSS} bulleted relaxed divided>
        <List.Item>Imperative Computation</List.Item>
        <List.Item>Functional Programming</List.Item>
        <List.Item>Parallel and Sequential Data Structures and Algorithms</List.Item>
        <List.Item>Statistical Computing</List.Item>
        <List.Item>Statistical Inference</List.Item>
        <List.Item>Statistical Research Methodology</List.Item>
        <List.Item>Modern Regression</List.Item>
      </List>
         
    </React.Fragment>
  )
}