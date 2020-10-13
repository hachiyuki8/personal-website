import React, { useState } from 'react';
import logo from '../logo.svg';

export default function Header(props) {

    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> 
          { 
            props.mystring === '' ?
                "Hello!" :
                props.mystring
          }
        </p>
      </header>
    )
}