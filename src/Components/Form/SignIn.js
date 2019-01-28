import React from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';
import { Button, InputItem, List } from '@ant-design/react-native';
export default class SignUp extends React.Component {
    static navigationOptions = {
        title: '注册'
    }
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            captcha: ''
        };
    }
    render() {
        const { text, phone, captcha, navigation } = this.props;
        return (
            <View>
                <List>
                    <InputItem
                        clear
                        type="phone"
                        value={this.state.phone}
                        onChange={value => {
                        this.setState({
                            phone: value,
                        });
                        }}
                        placeholder="手机号"
                    >
                        账号
                    </InputItem>
                    <InputItem
                        clear
                        type="password"
                        value={this.state.captcha}
                        onChange={value => {
                        this.setState({
                            captcha: value,
                        });
                        }}
                        placeholder="密码"
                    >
                        验证码
                    </InputItem>              
                    <Button type="primary">登录</Button>
                </List>
                <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Root')}>
                    <Text>注册</Text>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
