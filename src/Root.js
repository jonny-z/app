import React from 'react';
import { Text, View, ScrollView, ImageBackground, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Icon, TabBar, Button } from '@ant-design/react-native';
import MyPage from './Pages/My';
import UserProfile from './Components/Account/UserProfile';
import { appBg } from './index';

const HOME = Symbol();
const INFO = Symbol();
const SHOPPING_CENTRE = Symbol();
const MY = Symbol();
const Styles = {
  backgroundImage:{
      flex: 1,
      resizeMode: 'cover',
      width: null,
      backgroundColor: 'rgba(0,0,0,0)',
  },
  home: {
    userProfile: {
      avatar: {
        // width: 50,
        // height: 50,
        // borderRadius: 25,
      },
      name: {
        color: '#fff',
      },
      edit: {
        // color: 'red'
      }
    }
  }
}
//editable控制编辑按钮显示，customStyle 自定义样式，对应组件里的style，详情查看UserProfile.js 
//barStyle: light-content、dark-content
const Home = () => (
  <ImageBackground source={appBg} style={Styles.backgroundImage}>
    <StatusBar barStyle="light-content" />
    <ScrollView>
      <UserProfile editable={false} style={Styles.home.userProfile}/>
    </ScrollView>
	</ImageBackground>
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
    <MyPage name={text}/>
);
const Demo = (get, val) => {
  return (
    <View>
      <Text>{val}</Text>
      <Button type="primary" onPress={get}>test</Button>
    </View>
  )
}
class Root extends React.Component {
  static navigationOptions = {
    title: '',
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: 'white',
  }
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: HOME,
    };
  }
  renderContent(page) {
    switch(page) {
      case HOME:
          return Home('主页',(
            <View>
              <Button type="primary" onPress={()=>{
                this.props.navigation.navigate('SignUp',{
                  id: 1
                })
              }}>注册页面</Button>      
            </View>));
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
export default connect(
  (state) => {
    console.log('map state to props')
    return {
      count: state.count
    }
  },
  (dispatch, ownProps) => {
    console.log('map dispatch props')
    return {
      get: () =>{
        console.log('get');
        dispatch({
          type: 'add'
        })
      }
    }
  }
)(Root);
