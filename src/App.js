import React, { Component } from 'react';
import NavMenu from './components/NavMenu';
import Announcements from './components/Announcements';
import Assignments from './components/Assignments';
import Calendar from './components/Calendar';
import Discussion from './components/Discussion';
import Grades from './components/Grades';
import Settings from './components/Settings';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

class App extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
        <Layout style={{minHeight: "100vh"}}>
              <Sider style={{backgroundColor: 'rgb(109, 198, 118)' }} trigger={null} collapsible collapsed={this.state.collapsed}>
                <NavMenu/>
              </Sider>
              <Layout className="site-layout">
                <Header className="site-layout-background">
                  <div>
                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                      className: 'trigger',
                      onClick: this.toggle,
                    })}
                    <span className="name-text">Child's Play</span>
                  </div>
                </Header>
                <Content
                  className="site-layout-background"
                  style={{
                    margin: '24px 16px',
                    padding: 24,
                  }}
                >
                  <Route exact path="/" component={Announcements}/>
                  <Route path="/assignments" component={Assignments}/>
                  <Route path="/calendar" component={Calendar}/>
                  <Route path="/grades" component={Grades}/>
                  <Route path="/discussion" component={Discussion}/>
                  <Route path="/settings" component={Settings}/>
                </Content>
              </Layout>
            </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
