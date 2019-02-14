import React from 'react';
import { AppLoading, Font, SplashScreen } from 'expo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import Root from './src/Root';
import SignIn from './src/Components/Form/SignIn';
import SignUp from './src/Components/Form/SignUp';
import Toast from "./src/Components/Modal/Toast";
const reducer = (state = {
        mainIsReady: false,
        isLogin: false,
        username: '未登录',
    }, action) => {
    console.log('action type:' + action.type);
    switch(action.type) {
    case 'LOGIN_SUCCESS':
        return Object.assign(state, {
            isLogin: true,
            token: action.data.token,
            id: action.data.id,
            username: action.data.username,
        });
    case 'SHOW_TOAST':
        return Object.assign(state, {
            refs: action.refs,
            message: action.message,
        })
    default:
        return state;
    }
};
let store = createStore(reducer);
const RootNavigator = createStackNavigator({
    Root,
});
const RootContainer = createAppContainer(createSwitchNavigator({
    SignIn,
    SignUp,
    RootNavigator,
},{
    //全屏
    headerMode: 'none',
    initialRouteName: 'SignIn'
}));
export default class App extends React.Component {
  constructor (props) {
    super(props);
    StatusBar.setHidden(true);
    this.state = {
      isReady: false,
    }

  }
  async componentDidMount() {
    await Font.loadAsync(/*  */
      'antoutline',
      // eslint-disable-next-line
      require('@ant-design/icons-react-native/fonts/antoutline.ttf')
    );
    await Font.loadAsync(
      'antfill',
      // eslint-disable-next-line
      require('@ant-design/icons-react-native/fonts/antfill.ttf')
    );
  }
  render() {
    const { isReady } = this.state;
    if (!isReady) {
      return <AppLoading
        startAsync={this.componentDidMount}
        onFinish={() => {
            this.setState({ isReady: true })
            setTimeout(()=>{
                StatusBar.setHidden(false);
                SplashScreen.hide();
                console.log('loading completed')
            }, 1000)

        }}
        autoHideSplash={false}
      />;
    }
    return (
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" translucent={true} animated={true}/>
        <RootContainer />
        <Toast />
      </Provider>
    );
  }
}
