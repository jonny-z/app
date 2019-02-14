import React from 'react';
import { Text, View, ScrollView, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { Icon, TabBar, Button } from '@ant-design/react-native';
import MyPage from './Pages/My';
import UserProfile from './Components/Account/UserProfile';
import Navigation from './Components/Navigation';
import ConvenientServiceMenu from './Components/ConvenientServiceMenu';
import { appBg, theme } from './Index';

const HOME = Symbol();
const INFO = Symbol();
const SHOPPING_CENTRE = Symbol();
const MY = Symbol();
const Styles = {
    backgroundImage:{
        flex: 1,
        resizeMode: 'cover',
        width: null,
    },
    home: {
        userProfile: {
            container: {
                marginTop: theme.appTopHeight,
            },
            avatar: {
                // width: 50,
                // height: 50,
                // borderRadius: 25,
                marginLeft: 15.
            },
            name: {
                color: '#fff',
            },
            edit: {
                // color: 'red'
            }
        },
        main: {
            marginTop: 100,
        },
        balanceAndCredit: {
            container: {
                paddingTop: 5,
                paddingBottom: 5,
                backgroundColor: theme.opacityWhite,
                flexDirection: 'row'
            },
            text: {
                flex: 1,
                paddingTop: 5,
                paddingBottom: 5,
                textAlign: 'center',
                fontSize: 18,
                color: '#fff',
            },
            balance: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                borderRightWidth: 1,
                borderRightColor: '#fff',
            },
            credit: {
                flex: 1,
            }
        },
        convenientService: {
            container: {
                marginTop: 15,
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 15,
                paddingBottom: 15,
                // backgroundColor: 'rgba(255, 255, 255, .2)',
            },
            title: {
                container: {
                    flexDirection: 'row',
                    alignItems: 'center',
                },
                titleBar: {
                    width: 8,
                    height: 24,
                    borderRadius: 3,
                    backgroundColor: theme.shitYellow
                },
                text: {
                    color: '#fff',
                    marginLeft: 15,
                    fontSize: 18,
                }
            },
            menu: {
                container: {

                }
            }
        }
    }
}
const navigateList = [
    {
        title: '买入',
        imgSrc: require('../assets/hengtai/buy.png'),
    },
    {
        title: '卖出',
        imgSrc: require('../assets/hengtai/sale.png'),
    },
    {
        title: '推广链接',
        imgSrc: require('../assets/hengtai/share-link.png'),
    },
    {
        title: '积分兑换',
        imgSrc: require('../assets/hengtai/exchange-credit.png'),
    },
    {
        title: '团队',
        imgSrc: require('../assets/hengtai/party.png'),
    },
    {
        title: '红包领取',
        imgSrc: require('../assets/hengtai/get-redpacket.png'),
    }
]
const convenientServiceMenu = [
    {
        title: '话费',
    },
    {
        title: '油卡',
    },
    {
        title: '机票',
    },
    {
        title: '宾馆',
    },
    {
        title: '商城',
    },
    {
        title: '打车',
    }
]
//editable控制编辑按钮显示，customStyle 自定义样式，对应组件里的style，详情查看UserProfile.js
//barStyle: light-content、dark-content
const Home = () => (
    <ImageBackground source={appBg} style={Styles.backgroundImage}>
        <UserProfile editable={false} style={Styles.home.userProfile}/>
        <ScrollView style={Styles.home.main}>
            <View style={Styles.home.balanceAndCredit.container}>
                <View style={Styles.home.balanceAndCredit.balance}>
                    <Text style={Styles.home.balanceAndCredit.text}>余额: 0.00</Text>
                </View>
                <View style={Styles.home.balanceAndCredit.credit}>
                    <Text style={Styles.home.balanceAndCredit.text}>积分: 430.74</Text>
                </View>
            </View>
            <Navigation list={navigateList}/>
            <View style={Styles.home.convenientService.container}>
                <View style={Styles.home.convenientService.title.container}>
                    <View style={Styles.home.convenientService.title.titleBar}/>
                    <Text style={Styles.home.convenientService.title.text}>便民服务</Text>
                </View>
                <ConvenientServiceMenu menu={convenientServiceMenu}></ConvenientServiceMenu>
            </View>
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
    header: null,
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
          barTintColor="#fff"
          style={{borderWidth: 0,}}
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
