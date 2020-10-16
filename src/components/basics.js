import React from 'react';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';


export default function Basics() {
  let cardCSS = {
    backgroundColor: 'DarkCyan',
    color: 'Azure',
    width: '50%',
    minWidth: 300,
    overflow: 'auto',
    textOverflow: 'ellipsis',
    float: 'right',
    fontSize: 20,
    paddingTop: 100,
    paddingRight: 500,
    paddingBottom: 400,
    textAlign: 'left',
  }

  const { Meta } = Card;

  return (
    <>
      <Card
        style={{ width: 400, float: "right" }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
          <EllipsisOutlined key="ellipsis" />,
          <EllipsisOutlined key="ellipsis" />
        ]}
      >
        <Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </>
  )
}