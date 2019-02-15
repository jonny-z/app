import React from 'react';
import { connect } from 'react-redux'
import { TouchableOpacity, Text, View, ImageBackground, TextInput } from 'react-native';
import { appBg, theme } from "../../Index";
import MyButton from './MyButton';
import Api from "../../Api/Api";
const Styles = {
    background: {
        flex: 1,
        resizeMode: 'cover',
        width: null,
        justifyContent: 'center',
    },
    title: {
        container: {
            alignItems: 'center',
            marginBottom: 160,
        },
        cnName: {
            fontSize: 42,
            color: theme.shitYellow,
        },
        enName: {
            fontSize: 18,
            color: theme.shitYellow,
        }
    },
    form: {
        alignItems: 'center',
    }
}

class SignIn extends React.Component {
    static navigationOptions = {
        title: '登录'
    }
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            editable: true,
        };
    }
    lock = () => {
        console.log('lock');
    }
    login = () => {
        if(!this.state.username) {
            this.props.setToastMsg('请输入用户名');
            global.toast.show();
            return;
        }
        if(!this.state.password) {
            this.props.setToastMsg('请输入密码');
            global.toast.show();
            return;
        }
        this.setState({ editable: false });
        let fd = new FormData();
        fd.append('username', this.state.username);
        fd.append('password', this.state.password);
        Api.requestLogin(fd).then((res) => {
            switch(res.code) {
                case 'success':
                this.props.loginSuccess(res.data);
                    this.props.setToastMsg('登录成功');
                    global.toast.show();
                    this.setState({ editable: true });
                    this.props.navigation.navigate('Root');
                break;
                case 'error':
                    this.props.setToastMsg(res.message);
                    global.toast.show();
                    this.setState({ editable: true });
                break;
            }
        });
    }
    render() {
        const { editable } = this.state;
        return (
            <ImageBackground source={appBg} style={Styles.background}>
                <View style={Styles.title.container}>
                    <Text style={Styles.title.cnName}>恒泰</Text>
                    <Text style={Styles.title.enName}>HENGTAI</Text>
                </View>
                <View style={Styles.form}>
                    <TextInput
                        style={this.state.editable ? theme.textInput : [theme.textInput, theme.textInputDisable]}
                        onChangeText={(username) => this.state.username = username}
                        // value={this.state.username}
                        placeholder="账号"
                        placeholderTextColor={theme.lightGray}
                        selectionColor="#fff"
                        maxLength={12}
                        defaultValue={this.state.username}
                        editable={this.state.editable}
                        autoCapitalize="none"
                        autoComplete="off"
                    />
                    <TextInput
                        style={this.state.editable ? theme.textInput : [theme.textInput, theme.textInputDisable]}
                        onChangeText={(password) => this.state.password = password}
                        placeholder="密码"
                        placeholderTextColor={theme.lightGray}
                        selectionColor="#fff"
                        maxLength={8}
                        secureTextEntry={true}
                        defaultValue={this.state.password}
                        editable={this.state.editable}
                    />
                    <MyButton title="登录" activeOpacity={.5} onPress={editable ? this.login : this.lock}/>
                </View>
            </ImageBackground>
        )
    }
}
export default connect(
    // (state) => {
    //     console.log('sign in map state to props')
    //     return state;
    // },
    null,
    (dispatch, ownProps) => {
        return {
            loginSuccess: (data) =>{
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    data,
                })
            },
            setToastMsg: (msg)=> {
                dispatch({
                    type: 'SET_TOAST_MSG',
                    message: msg,
                })
            }
        }
    }
)(SignIn);
