import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { PieChartOutlined } from "@ant-design/icons";

const NavBar = () => {
  return (
    <Menu
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      theme="dark"
      className="navbar-container"
    >
      <Menu.Item key="1" icon={<PieChartOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
