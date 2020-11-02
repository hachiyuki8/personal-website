import React from 'react';
import { List } from 'semantic-ui-react';
import { Button, Col, Row } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub, faWeixin, faYoutube, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  let resumeCSS = {
    width: "100%",
    height: 50,
    display: 'block',
    margin: 'auto',
    backgroundColor: "#20b2aa",
    borderColor: "#20b2aa"
  }

  let githubCSS = {
    width: 60,
    height: 60,
    display: 'block',
    margin: 'auto',
    marginBottom: 25,
    backgroundColor: "#333",
    borderColor: "#333"
  }

  let wechatCSS = {
    width: 60,
    height: 60,
    display: 'block',
    margin: 'auto',
    marginBottom: 25,
    backgroundColor: "#7bb32e",
    borderColor: "#7bb32e"
  }

  let discordCSS = {
    width: 60,
    height: 60,
    display: 'block',
    margin: 'auto',
    marginBottom: 25,
    backgroundColor: "#7289da",
    borderColor: "#7289da"
  }

  let youtubeCSS = {
    width: 60,
    height: 60,
    display: 'block',
    margin: 'auto',
    marginBottom: 25,
    backgroundColor: "#ff0000",
    borderColor: "#ff0000"
  }

  let linkedinCSS = {
    width: 60,
    height: 60,
    display: 'block',
    margin: 'auto',
    marginBottom: 25,
    backgroundColor: "#2867b2",
    borderColor: "#2867b2"
  }

  let facebookCSS = {
    width: 60,
    height: 60,
    display: 'block',
    margin: 'auto',
    marginBottom: 25,
    backgroundColor: "#4267b2",
    borderColor: "#4267b2"
  }

  let gridStyle = {
    paddingBottom: 40
  };

  let webCSS = {
    color: 'Azure',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
    letterSpacing: 1.5,
    fontSize: 26,
  }

  let handleClickWechat = () => {
    window.alert("wechat: hachiyuki88")
  }

  let handleClickDiscord = () => {
    window.alert("discord: hachiyuki#4141")
  }

  const openInNew = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener, noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <div style={{ display: 'block', alignItems: 'center' }}>
      <Row justify="center" align="middle">
        <Col span={12} style={gridStyle}>
          <h1 style={webCSS}>Websites & Others</h1>
        </Col>
      </Row>

      <Row justify="center" align="middle">
        <Col span={5} style={gridStyle}>
          <List animated>
            <List.Item>
              <Button
                style={facebookCSS}
                type="primary"
                shape="circle"
                onClick={() => openInNew("https://www.facebook.com/profile.php?id=100011168794502")}
              >
                <FontAwesomeIcon icon={faFacebook } size="2x" />
              </Button>
            </List.Item>
          </List>
        </Col>
        <Col span={5} style={gridStyle}>
          <List animated>
            <List.Item>
              <Button
                style={githubCSS}
                type="primary"
                shape="circle"
                onClick={() => openInNew("https://github.com/hachiyuki8")}
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </Button>
            </List.Item>
          </List>
        </Col>
        <Col span={5} style={gridStyle}>
          <List animated>
            <List.Item>
              <Button
                style={linkedinCSS}
                type="primary"
                shape="circle"
                onClick={() => openInNew("https://www.linkedin.com/in/joanna-yao-a06376198/")}
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </Button>
            </List.Item>
          </List>
        </Col>
      </Row>

      <Row justify="center" align="middle">
        <Col span={5} style={gridStyle}>
          <List animated>
            <List.Item>
              <Button
                style={wechatCSS}
                type="primary"
                shape="circle"
                onClick={handleClickWechat}
              >
                <FontAwesomeIcon icon={faWeixin} size="2x" />
              </Button>
            </List.Item>
          </List>
        </Col>
        <Col span={5} style={gridStyle}>
          <List animated>
            <List.Item>
              <Button
                style={youtubeCSS}
                type="primary"
                shape="circle"
                onClick={() => openInNew("https://www.youtube.com/channel/UCwL5PEn_zyDWRLha9aKVTiw")}
              >
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </Button>
            </List.Item>
          </List>
        </Col>
        <Col span={5} style={gridStyle}>
          <List animated>
            <List.Item>
              <Button
                style={discordCSS}
                type="primary"
                shape="circle"
                onClick={handleClickDiscord}
              >
                <FontAwesomeIcon icon={faDiscord} size="2x" />
              </Button>
            </List.Item>
          </List>
        </Col>
      </Row>

      <Row justify="center" align="middle">
        <Col span={12} style={gridStyle}>
          <List animated>
            <List.Item>
              <Button
                style={resumeCSS}
                type="primary"
                shape="round"
                onClick= {() => openInNew("https://drive.google.com/file/d/1BEhiz45BL9BM8nS5eoLMsX327sspZK7e/view?usp=sharing")}
                icon = {<FontAwesomeIcon icon={faDownload} size="2x"/>}
              >
                <b style={{fontSize: 20, letterSpacing: 1}}>&nbsp;&nbsp;Resume</b>
              </Button>
            </List.Item>
          </List>
        </Col>
      </Row>
    </div>
  )
}