import React from 'react';
import { Button, Icon, List } from 'semantic-ui-react';
import { Col, Row } from 'antd';

export default function Contact() {
  let buttonCSS = {
    width: 65,
    display: 'block',
    margin: 'auto',
    marginBottom: 25,
  }

  let buttonCSS2 = {
    width: "100%",
    display: 'block',
    margin: 'auto',
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
            <Button style={buttonCSS} circular
              size="massive" icon='github'
              onClick={()=>openInNew("https://github.com/hachiyuki8")}
            />
            </List.Item>
          </List>
        </Col>
        <Col span={5} style={gridStyle}>
          <List animated>
            <List.Item>
              <Button style={buttonCSS} circular
                size="massive" color='linkedin' icon='linkedin'
                onClick={()=>openInNew("https://www.linkedin.com/in/joanna-yao-a06376198/")}
              />
            </List.Item>
          </List>
        </Col>
        <Col span={5} style={gridStyle}>
          <List animated>
            <List.Item>
              <Button style={buttonCSS} circular active
                size="massive" color='grey' icon='discord'
                onClick={handleClickDiscord}
              />
            </List.Item>
          </List>
        </Col>
      </Row>

      <Row justify="center" align="middle">
        <Col span={5} style={gridStyle}>
          <List animated>
            <List.Item>
              <Button style={buttonCSS} circular
                size="massive" color='youtube' icon='youtube'
                onClick={()=>openInNew("https://www.youtube.com/channel/UCwL5PEn_zyDWRLha9aKVTiw")}
              />
            </List.Item>
          </List>
        </Col>
        <Col span={5} style={gridStyle}>
          <List animated>
            <List.Item>
              <Button style={buttonCSS} circular
                size="massive" color='facebook' icon='facebook'
                onClick={()=>openInNew("https://www.facebook.com/profile.php?id=100011168794502")}
              />
            </List.Item>
          </List>
        </Col>
        <Col span={5} style={gridStyle}>
          <List animated>
            <List.Item>
              <Button style={buttonCSS} circular active
                size="massive" color='green' icon='wechat'
                onClick={handleClickWechat}
              />
            </List.Item>
          </List>
        </Col>
      </Row>

      <Row justify="center" align="middle">
        <Col span={12} style={gridStyle}>
          <List animated>
            <List.Item>
              <Button style={buttonCSS2}
                size="huge" color='instagram' 
                onClick={()=>openInNew("https://drive.google.com/file/d/1BEhiz45BL9BM8nS5eoLMsX327sspZK7e/view?usp=sharing")}>
                  <Icon name='download'/>
                  Resume
              </Button>
            </List.Item>
          </List>
        </Col>
      </Row>
    </div>
  )
}