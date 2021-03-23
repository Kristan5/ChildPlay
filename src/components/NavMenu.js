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
            </Menu>
        );
    }
}

export default NavMenu;