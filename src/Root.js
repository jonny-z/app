import React from 'react';
import { Text, View } from 'react-native';
import { Icon, TabBar } from '@ant-design/react-native';
import SignUp from './Components/Form/SignUp';
const HOME = Symbol();
const INFO = Symbol();
const SHOPPING_CENTRE = Symbol();
const MY = Symbol();
const Home = (text) => (
  <View style={{ flex: 1 }}>
    <Text style={{ margin: 50}}>{text}</Text>
    <SignUp />
  </View>
);
const Info = (text) => (
  <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
    <Text style={{ margin: 50}}>{text}</Text>
  </View>
);
const ShoppingCentre = (text) => (
  <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
    <Text style={{ margin: 50}}>{text}</Text>
  </View>
);
const My = (text) => (
  <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
    <Text style={{ margin: 50}}>{text}</Text>
  </View>
);
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
          return Home('主页');
      case INFO:
        return Info('资讯');
      case SHOPPING_CENTRE:
        return ShoppingCentre('商城');
      case MY:
        return My('我的');
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
                title="我的"
                selected={this.state.selectedTab === MY}
                onPress={() => this.onChangeTab(MY)}
              >
                {this.renderContent(MY)}
              </TabBar.Item>
            </TabBar>
          );
    }
}