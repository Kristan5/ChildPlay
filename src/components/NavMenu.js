import React, { Component } from 'react';
import { Menu } from 'antd';
import './styles/NavMenu.css';
import { Link } from 'react-router-dom';

import {
    HomeOutlined
  } from '@ant-design/icons';

class NavMenu extends Component {
    render() {
        return (
            <Menu 
            theme="dark" 
            onClick={this.handleClick}
            mode="inline"
            className="menu-styling"
            style={{backgroundColor: 'rgb(109, 198, 118)' }}
            >
              <Menu.Item icon={<HomeOutlined />}>
                Announcements
                <Link to="/"/>
              </Menu.Item>
              <Menu.Item icon={<HomeOutlined />}>
                Calendar
                <Link to="/calendar"/>
              </Menu.Item>
              <Menu.Item icon={<HomeOutlined />}>
                Assignments
                <Link to="/assignments"/>
              </Menu.Item>
              <Menu.Item icon={<HomeOutlined />}>
                Grades
                <Link to="/grades"/>
              </Menu.Item>
              <Menu.Item icon={<HomeOutlined />}>
                Discussion
                <Link to="/discussion"/>
              </Menu.Item>
              <Menu.Item icon={<HomeOutlined />}>
                Settings
                <Link to="/settings"/>
              </Menu.Item>
            </Menu>
        );
    }
}

export default NavMenu;