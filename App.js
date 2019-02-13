import React from 'react';
import { AppLoading, Font, SplashScreen } from 'expo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Root from './src/Root';
import SignIn from './src/Components/Form/SignIn';
import SignUp from './src/Components/Form/SignUp';
const reducer = (state = {
        mainIsReady: false
    }, action) => {
    console.log('action type:' + action.type);
    const count = state.count;
    switch(action.type) {
    case 'add':
        return {count: count + 1};
    default:
        return state;
    }
};
let store = createStore(reducer);
const RootNavigator = createStackNavigator({
  Root,
  SignIn,
  SignUp,
},{
  //全屏
  headerMode: 'none',
  //初始化路由页面
  initialRouteName: "SignIn"
});
const RootContainer = createAppContainer(RootNavigator);
export default class App extends React.Component {
  constructor (props) {
    super(props);
    StatusBar.setHidden(true);
    this.state = {
      isReady: false,
      theme: null,
    }
    this.login();
  }
//   static setHidden
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
  login() {
      console.log(1);
    axios({
        method: 'post',
        url: '/User/login',
        baseURL: 'http://www.blyl1888.com/index.php/Api',
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded',
        },
        params: {
            username: 'test111',
            password: '123456',
        },
        responseType: 'json',
    }).then((res)=> {
        console.log(res);
    })
  }
  render() {
    const { isReady, theme } = this.state;
    console.log('render')
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
      </Provider>
    );
  }
}
