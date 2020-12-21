import React, { useState } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faList, faAddressCard, faLaptopHouse, faArchive } from '@fortawesome/free-solid-svg-icons'


export default function Nav() {
  const [selected, setSelected] = useState('mail');

  let handleClick = e => {
    setSelected(e.key);
  };

  let navCSS = {
    backgroundColor: 'LightCyan',
    color: 'Teal',
    fontSize: 18,
    padding: 12,
    minWidth: 900,
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
          <Link style={{color:'Teal'}} activeClass="active" className="about" 
           to="about" smooth={true} duration={600}>
            &nbsp;About
          </Link> 
        </Menu.Item>
        <Menu.Item key="skills" icon={<FontAwesomeIcon icon={faList} />}>
          <Link style={{color:'Teal'}} activeClass="active" className="skills" 
           to="skills" smooth={true} duration={600}>
            &nbsp;Skills
          </Link> 
        </Menu.Item>
        <Menu.Item key="education" icon={<FontAwesomeIcon icon={faUniversity} />}>
          <Link style={{color:'Teal'}} activeClass="active" className="edu" 
           to="edu" smooth={true} duration={600}>
            &nbsp;Education
          </Link> 
        </Menu.Item>
        <Menu.Item key="experience" icon={<FontAwesomeIcon icon={faLaptopHouse} />}>
          <Link style={{color:'Teal'}} activeClass="active" className="exp" 
           to="exp" smooth={true} duration={600}>
            &nbsp;Experience
          </Link> 
        </Menu.Item>
        <Menu.Item key="projects" icon={<FontAwesomeIcon icon={faArchive} />}>
          <Link style={{color:'Teal'}} activeClass="active" className="projects" 
           to="projects" smooth={true} duration={600}>
            &nbsp;Projects
          </Link> 
        </Menu.Item>
      </Menu>
    </>
  )
}