import React, { useState, useRef, scrollToRef } from 'react';
import { IdcardOutlined, ReadOutlined, TeamOutlined, FileDoneOutlined} from '@ant-design/icons';
import { Menu } from 'antd';


export default function Nav(props) {
  // Define state vars
  const [selected, setSelected] = useState('mail');

  // useEffect(() => {
  //   // things to do whenever the component reloads
  //   // such as calling a backend api and fetching data
  // });

  let handleClick = e => {
    setSelected(e.key);
  };

  let navCSS = {
    backgroundColor: 'LightCyan',
    color: 'Teal',
    fontSize: 18,
    padding: 12,
    minWidth: 800,
  }

  return (
    <>
      <Menu
        onClick={e => handleClick(e)}
        selectedKeys={[selected]}
        mode="horizontal"
        style={navCSS}
      >
        <Menu.Item key="about" icon={<IdcardOutlined />}>
          About
        </Menu.Item>
        <Menu.Item key="education" icon={<ReadOutlined />}>
          Education
        </Menu.Item>
        <Menu.Item key="experience" icon={<TeamOutlined />}>
          Experience
        </Menu.Item>
        <Menu.Item key="projects" icon={<FileDoneOutlined />}>
          Projects
        </Menu.Item>
      </Menu>
    </>
  )
}