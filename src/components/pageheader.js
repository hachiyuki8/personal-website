import React from 'react';
import { PageHeader } from 'antd';


export default function Nav(props) {
  // Define state vars

  let navCSS = {
    backgroundColor: 'LightCyan',
    color: 'Teal',
    textIndent: 10,
    height: 45,
  }

  return (
    // your jsx. there must be a single parent tag
    <>
      <PageHeader
        className="site-page-header"
        title="Joanna Yao"
        style={navCSS}
      />
    </>
  )
}