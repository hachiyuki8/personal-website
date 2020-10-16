import React, { useEffect } from 'react';
import { Image } from 'antd';


export default function Skills() {
  // Define state vars
  useEffect(() => {
    // things to do whenever the component reloads
    // such as calling a backend api and fetching data
  });

  let cardCSS = {
    backgroundColor: 'Azure',
    color: 'DarkSlateGrey',
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'left'
  }

  return (
    // your jsx. there must be a single parent tag
    <>
      <Image
        width={200}
        src="../photo.jpeg"
      />
    </>
  )
}