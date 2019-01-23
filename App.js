import React from 'react';
import { AppLoading, Font } from 'expo';
import { Provider } from '@ant-design/react-native';
import Root from './src/Root'
import theme from './src/theme/default'

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isReady: false,
      theme: null,
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
    // eslint-disable-next-line
    this.setState({ isReady: true });
  }
  render() {
    const { isReady, theme } = this.state;
    if (!isReady) {
      return <AppLoading />;
    }
    return (
      <Provider theme={theme}>
        <Root/>
      </Provider>
    );
  }
}