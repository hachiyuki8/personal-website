import React, { useState, useEffect } from 'react';
import { HomeOutlined, ReadOutlined, FileDoneOutlined, ContactsOutlined } from '@ant-design/icons';
import { Menu } from 'antd';


export default function Nav(props) {
  // Define state vars
  const [selected, setSelected] = useState('mail');

  useEffect(() => {
    // things to do whenever the component reloads
    // such as calling a backend api and fetching data
  });

  let handleClick = e => {
    console.log('click ', e);
    setSelected(e.key);
  };

  let navCSS = {
    backgroundColor: 'LightCyan',
    color: 'Teal',
    fontSize: 16,
    padding: 12
  }

  return (
    // your jsx. there must be a single parent tag
    <>
      <Menu
        onClick={e => handleClick(e)}
        selectedKeys={[selected]}
        mode="horizontal"
        style={navCSS}
      >
        <Menu.Item key="about" icon={<HomeOutlined />}>
          About
        </Menu.Item>
        <Menu.Item key="education" icon={<ReadOutlined />}>
          Education
        </Menu.Item>
        <Menu.Item key="project" icon={<FileDoneOutlined />}>
          Project
          </Menu.Item>
        <Menu.Item key="contact" icon={<ContactsOutlined />}>
          Contact
        </Menu.Item>
      </Menu>
    </>
  )
}