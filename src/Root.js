import React from 'react';
import { Icon, TabBar } from '@ant-design/react-native';
import Home from './page/Home';
import Info from './page/Info';
import ShoppingCentre from './page/ShoppingCentre';
import My from './page/My';
const HOME = Symbol();
const INFO = Symbol();
const SHOPPING_CENTRE = Symbol();
const MY = Symbol();
export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: HOME,
    };
  }
  renderContent(page) {
    switch(page) {
      case HOME:
        return (
          <Home text={'主页'}></Home>
        );
      case INFO:
        return (
          <Info text={'资讯'}></Info>
        );
      case SHOPPING_CENTRE:
        return (
          <ShoppingCentre text={'商城'}></ShoppingCentre>
        );
      case MY:
        return (
          <My text={'我的'}></My>
        );
    }
    
  }
  onChangeTab(tabName) {
    this.setState({
      selectedTab: tabName,
    });
  }
    render () {
        return (
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="#f5f5f5"
            >
              <TabBar.Item
                title="首页"
                icon={<Icon name="home" />}
                selected={this.state.selectedTab === HOME}
                onPress={() => this.onChangeTab(HOME)}
              >
                {this.renderContent(HOME)}
              </TabBar.Item>
              <TabBar.Item
                icon={<Icon name="profile" />}
                title="资讯"
                // badge={2}
                selected={this.state.selectedTab === INFO}
                onPress={() => this.onChangeTab(INFO)}
              >
                {this.renderContent(INFO)}
              </TabBar.Item>
              <TabBar.Item
                icon={<Icon name="shopping" />}
                title="商城"
                selected={this.state.selectedTab === SHOPPING_CENTRE}
                onPress={() => this.onChangeTab(SHOPPING_CENTRE)}
              >
                {this.renderContent(SHOPPING_CENTRE)}
              </TabBar.Item>
              <TabBar.Item
                icon={<Icon name="user" />}
                title="My"
                selected={this.state.selectedTab === MY}
                onPress={() => this.onChangeTab(MY)}
              >
                {this.renderContent(MY)}
              </TabBar.Item>
            </TabBar>
          );
    }
}
