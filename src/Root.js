import React from 'react';
import { Text, View } from 'react-native';
import { Icon, TabBar } from '@ant-design/react-native';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }
  renderContent(pageText) {
    console.log(pageText)
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        {/* <SearchBar placeholder="Search" showCancelButton /> */}
        <Text style={{ margin: 50}}>{pageText}</Text>
      </View>
    );
  }
  onChangeTab(tabName) {
    console.log(tabName)
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
                selected={this.state.selectedTab === 'home'}
                onPress={() => this.onChangeTab('home')}
              >
                {this.renderContent('Life Tab')}
              </TabBar.Item>
              <TabBar.Item
                icon={<Icon name="profile" />}
                title="资讯"
                badge={2}
                selected={this.state.selectedTab === 'info'}
                onPress={() => this.onChangeTab('info')}
              >
                {this.renderContent('Koubei Tab')}
              </TabBar.Item>
              <TabBar.Item
                icon={<Icon name="shopping" />}
                title="商城"
                selected={this.state.selectedTab === 'shoppingCentre'}
                onPress={() => this.onChangeTab('shoppingCentre')}
              >
                {this.renderContent('Friend Tab')}
              </TabBar.Item>
              <TabBar.Item
                icon={<Icon name="user" />}
                title="My"
                selected={this.state.selectedTab === 'my'}
                onPress={() => this.onChangeTab('my')}
              >
                {this.renderContent('My Tab')}
              </TabBar.Item>
            </TabBar>
          );
    }
}
