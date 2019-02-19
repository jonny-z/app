import React,{ Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import Root from './src/Root';
import SignIn from './src/Components/Form/SignIn';
import Toast from './src/Components/Modal/Toast';

import Buy from './src/Pages/Buy';
import HangUp from './src/Pages/HangUp';
import Team from './src/Pages/Team';
import MyOrder from './src/Pages/MyOrder';
import BuyHistory from './src/Pages/BuyHistory';
import TotalDetail from './src/Pages/TotalDetail';
import Maintain from './src/Pages/Maintain';
import DynamicIncome from './src/Pages/DynamicIncome';
import PersonalInfo from './src/Pages/PersonalInfo';
import ShareLink from './src/Pages/ShareLink';
import Transaction from './src/Pages/Transaction';

const reducer = (state = {
        mainIsReady: false,
        isLogin: false,
        username: '未登录',
    }, action) => {
    console.log('action type:' + action.type);
    switch(action.type) {
    case 'LOGIN_SUCCESS':
        return Object.assign({}, state, {
            isLogin: true,
            token: action.data.token,
            id: action.data.id,
            username: action.data.username,
        });
    case 'SET_TOAST_MSG':
        return Object.assign({}, state, {
            message: action.message,
        });
    case 'UPDATE_USER_INFO':
        return Object.assign({}, state, action.userInfo);
    default:
        return state;
    }
};
let store = createStore(reducer);

const Navigator = createStackNavigator({
    Root,
    Team,
    Buy,
    MyOrder,
    HangUp,
    PersonalInfo,
    Transaction,
    BuyHistory,
    TotalDetail,
    Maintain,
    DynamicIncome,
    ShareLink
},{
    defaultNavigationOptions: ({ navigation })=> {
        const { routeName } = navigation.state;
        console.log(routeName)
        if(routeName == 'Root') {
            return {
                header: null,
            }
        }
        else {
            return {
                headerStyle: {
                    backgroundColor: 'black',
                },
                headerTintColor: 'white',
                headerBackTitle: '返回',
            }
        }
    },
    initialRouteName: 'Root',
});
const RootContainer = createAppContainer(createSwitchNavigator({
    SignIn,
    Navigator,
},{
    initialRouteName: 'SignIn'
    // initialRouteName: 'Navigator'
}));
export default class App extends Component {
  onRef = (ref) => global.toast = ref
  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" translucent={true} animated={true}/>
        <RootContainer />
        <Toast onRef={this.onRef}/>
      </Provider>
    );
  }
}
