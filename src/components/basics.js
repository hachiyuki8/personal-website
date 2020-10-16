import React from 'react';
import { Divider } from 'antd';

export default function Basics() {
  let cardCSS = {
    marginLeft: 100,
    marginTop: 100,
    backgroundColor: 'DarkCyan',
    color: 'Azure',
    minWidth: 300,
    overflow: 'auto',
    textOverflow: 'ellipsis',
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'left',
    width: "30%",
    height: 400,
    float: "left",
    borderRadius: 24,
    borderStyle: "outset",
    borderColor: "Cadetblue",
    borderWidth: 10,
    padding: 20,
    letterSpacing: 0.4,
  }


  return (
    <>
      <div style={cardCSS}>
        <p>
          Joanna Yao (She/Her/Hers)
        </p>
        <Divider/>
        <p>
          Carnegie Mellon University Class of 2023
        </p>
        <Divider/>
        <p>
          Email: xinyao@andrew.cmu.edu
        </p>
        <Divider/>
      </div>
    </>
  )
}