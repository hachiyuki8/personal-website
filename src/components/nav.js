import React, { useState, useRef, scrollToRef } from 'react';
import { Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faTags, faAddressCard, faLaptopHouse, faArchive } from '@fortawesome/free-solid-svg-icons'


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
        <Menu.Item key="about" icon={<FontAwesomeIcon icon={faAddressCard} />}>
          &nbsp;About
        </Menu.Item>
        <Menu.Item key="skills" icon={<FontAwesomeIcon icon={faTags} />}>
          &nbsp;Skills
        </Menu.Item>
        <Menu.Item key="education" icon={<FontAwesomeIcon icon={faUniversity} />}>
          &nbsp;Education
        </Menu.Item>
        <Menu.Item key="experience" icon={<FontAwesomeIcon icon={faLaptopHouse} />}>
          &nbsp;Experience
        </Menu.Item>
        <Menu.Item key="projects" icon={<FontAwesomeIcon icon={faArchive} />}>
          &nbsp;Projects
        </Menu.Item>
      </Menu>
    </>
  )
}