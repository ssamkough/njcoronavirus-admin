import React from "react";
import { Card, Menu, Button } from "antd";

const ChartItem = (post: any) => {
  const postItem = post.post;

  return (
    <Card title={postItem.title}>
      <ul className="no-list-deco chart-item-body">
        <li>
          <b>Public Id</b>
          {": "}
          {postItem.publicId}
        </li>
        <li>
          <b>URL</b>
          {": "}
          {postItem.url}
        </li>
      </ul>
      <Menu mode="horizontal">
        <Menu.Item>
          <Button>Details</Button>
        </Menu.Item>
        <Menu.Item>
          <Button>Update</Button>
        </Menu.Item>
      </Menu>
    </Card>
  );
};

export default ChartItem;
