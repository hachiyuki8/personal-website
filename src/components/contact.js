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
    paddingBottom: 85
  };

  let handleClickWechat = () => {
    window.alert("wechat: hachiyuki88")
  }

  let handleClickDiscord = () => {
    window.alert("discord: hachiyuki#4141")
  }

  return (
    <div style={{ display: 'block', alignItems: 'center' }}>
      <Row justify="center" align="middle" style={{ paddingTop: 75 }}>
        <Col span={5} style={gridStyle}>
          <List animated>
            <List.Item>
            <Button style={buttonCSS} circular
              size="massive" color='github' icon='github'
              href="https://github.com/hachiyuki8"
            />
            </List.Item>
          </List>
        </Col>
        <Col span={5} style={gridStyle}>
          <List animated>
            <List.Item>
              <Button style={buttonCSS} circular
                size="massive" color='linkedin' icon='linkedin'
                href="https://www.linkedin.com/in/joanna-yao-a06376198/"
              />
            </List.Item>
          </List>
        </Col>
        <Col span={5} style={gridStyle}>
          <List animated>
            <List.Item>
              <Button style={buttonCSS} circular
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
                href="https://www.youtube.com/channel/UCwL5PEn_zyDWRLha9aKVTiw"
              />
            </List.Item>
          </List>
        </Col>
        <Col span={5} style={gridStyle}>
          <List animated>
            <List.Item>
              <Button style={buttonCSS} circular
                size="massive" color='facebook' icon='facebook'
                href="https://www.facebook.com/profile.php?id=100011168794502"
              />
            </List.Item>
          </List>
        </Col>
        <Col span={5} style={gridStyle}>
          <List animated>
            <List.Item>
              <Button style={buttonCSS} circular
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
          <Button style={buttonCSS2} size="huge" color="teal">
            <Icon name='download' />
            <a href="https://google.com" style={{ color: "MintCream" }}>Resume</a>
          </Button>
        </List.Item>
      </List>
        </Col>
      </Row>
    </div>
  )
}