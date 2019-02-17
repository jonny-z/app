import React from 'react';
import { Text, View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Icon, TabBar } from '@ant-design/react-native';
import MyPage from './Pages/My';
import UserProfile from './Components/Account/UserProfile';
import Navigation from './Components/Navigation';
import ConvenientServiceMenu from './Components/ConvenientServiceMenu';
import { appBg, theme } from './Index';
import Api from "./Api/Api";
import MyButton from './Components/Form/MyButton';

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

        },
        balanceAndCredit: {
            container: {
                marginTop: 80,
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
                fontSize: 16,
                color: '#fff',
            },
            balance: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                borderRightWidth: 1,
                borderRightColor: '#fff',
            },
            machineBuy: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                borderRightWidth: 1,
                borderRightColor: '#fff',
            },
            credit: {
                flex: 1,
            }
        },
        outBtnWrapper: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
        // convenientService: {
        //     container: {
        //         marginTop: 15,
        //         paddingLeft: 20,
        //         paddingRight: 20,
        //         paddingTop: 15,
        //         paddingBottom: 15,
        //         // backgroundColor: 'rgba(255, 255, 255, .2)',
        //     },
        //     title: {
        //         container: {
        //             flexDirection: 'row',
        //             alignItems: 'center',
        //         },
        //         titleBar: {
        //             width: 8,
        //             height: 24,
        //             borderRadius: 3,
        //             backgroundColor: theme.shitYellow
        //         },
        //         text: {
        //             color: '#fff',
        //             marginLeft: 15,
        //             fontSize: 18,
        //         }
        //     }
        // }
    }
}
// const navigateList = [
//     {
//         title: '买入',
//         id: 'Buy',
//         imgSrc: require('../assets/hengtai/buy.png'),
//     },
//     {
//         title: '卖出',
//         id: 'HangUp',
//         imgSrc: require('../assets/hengtai/sale.png'),
//     },
//     {
//         title: '推广链接',
//         id: '',
//         imgSrc: require('../assets/hengtai/share-link.png'),
//     },
//     {
//         title: '积分兑换',
//         id: '',
//         imgSrc: require('../assets/hengtai/exchange-credit.png'),
//     },
//     {
//         title: '团队',
//         id: 'Team',
//         imgSrc: require('../assets/hengtai/party.png'),
//     },
//     {
//         title: '红包领取',
//         id: '',
//         imgSrc: require('../assets/hengtai/get-redpacket.png'),
//     }
// ]
const navigateList = [
    {
        title: '购买记录',
        id: 'BuyHistory',
        icon: 'account-book'
    },
    {
        title: '静态收益',
        id: 'HangUp',
        icon: 'bar-chart'
    },
    {
        title: '动态收益',
        id: 'DynamicIncome',
        icon: 'rise'
    },
    {
        title: '总账明细',
        id: 'TotalDetail',
        icon: 'pay-circle'
    },
    {
        title: '邀请链接',
        id: '',
        icon: 'share-alt'
    },
    {
        title: '我的粉丝',
        id: '',
        icon: 'cluster'
    },
    {
        title: '矿机维护',
        id: 'Maintain',
        icon: 'tool'
    },
    {
        title: '我的交易',
        id: 'MyOrder',
        icon: 'money-collect'
    },
    {
        title: '退本还息',
        id: '',
        icon: 'transaction'
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
const Info = (text) => (
  <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
    <Text style={{ margin: 50, fontSize: 22}}>即将到来</Text>
  </View>
);
const ShoppingCentre = (text) => (
  <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
    <Text style={{ margin: 50, fontSize: 22}}>即将到来</Text>
  </View>
);
class Root extends React.Component {
    static navigationOptions = {
        header: null,
    }
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: HOME,
        };
    }
    Home = () => {
        const { mine_balance, frozen_money, navigation } = this.props
        return (
            <ImageBackground source={appBg} style={Styles.backgroundImage}>
                <ScrollView style={Styles.home.main}>
                    <UserProfile editable={false} style={Styles.home.userProfile}/>
                    <View style={Styles.home.balanceAndCredit.container}>
                        <View style={Styles.home.balanceAndCredit.machineBuy}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Buy')}>
                                <Text style={Styles.home.balanceAndCredit.text}>矿机购买</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.home.balanceAndCredit.balance}>
                            <Text style={Styles.home.balanceAndCredit.text}>余额: {mine_balance}</Text>
                        </View>
                        <View style={Styles.home.balanceAndCredit.credit}>
                            <Text style={Styles.home.balanceAndCredit.text}>红利: {frozen_money}</Text>
                        </View>
                    </View>
                    <Navigation list={navigateList} nav={navigation}/>
                    <View style={Styles.home.outBtnWrapper}>
                        <MyButton title="退出登陆" style={{container: {marginTop: 10}}} activeOpacity={.5} onPress={() => {}}/>
                    </View>

                    {/*
                    <View style={Styles.home.convenientService.container}>
                        <View style={Styles.home.convenientService.title.container}>
                            <View style={Styles.home.convenientService.title.titleBar}/>
                            <Text style={Styles.home.convenientService.title.text}>便民服务</Text>
                        </View>
                        <ConvenientServiceMenu menu={convenientServiceMenu}></ConvenientServiceMenu>
                    </View>
                    */}

                </ScrollView>
            </ImageBackground>
    )}
    My = () => (
        <MyPage nav={this.props.navigation}/>
    )
    renderContent(page) {
        switch(page) {
            case HOME:
                return this.Home();
            case INFO:
                return Info('资讯');
            case SHOPPING_CENTRE:
                return ShoppingCentre('商城');
            case MY:
                return this.My();
        }
    }
    onChangeTab(tabName) {
        this.setState({
            selectedTab: tabName,
        });
    }
    componentWillMount() {
        let fd = new FormData();
        fd.append('id', this.props.id);
        fd.append('token', this.props.token);
        Api.getUserInfo(fd).then((resData)=>{
            this.props.update(resData.data);
        });
    }
    render () {
        console.log('root render')
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
        console.log('root map state to props');
        console.log(state)
        return state;
    },
    (dispatch) => {
        console.log('root map dispatch props')
        return {
            update: (userInfo) =>{
                console.log('update user info');
                dispatch({
                    type: 'UPDATE_USER_INFO',
                    userInfo,
                })
            }
        }
    }
)(Root);
