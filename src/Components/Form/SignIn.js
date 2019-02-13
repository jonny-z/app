import React from 'react';
import { TouchableWithoutFeedback, Text, View, ImageBackground, TextInput } from 'react-native';
import { appBg, theme } from "../../Index";
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
    },
    inputField: {
        width: '80%',
        fontSize: 16,
        color: '#fff',
        marginBottom: 20,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: 'center',
        backgroundColor: theme.opacityWhite,
    },
    btnLogin: {
        container: {
            width: 160,
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 30,
            paddingTop: 15,
            paddingBottom: 15,
            borderRadius: 60,
            backgroundColor: theme.opacityWhite,
        },
        text: {
            fontSize: 18,
            color: '#fff',
        }
    }
}
export default class SignUp extends React.Component {
    static navigationOptions = {
        title: '登录'
    }
    constructor(props) {
        super(props);
        this.state = {
            username: '233',
            password: '',

        };
    }
    render() {
        return (
            <ImageBackground source={appBg} style={Styles.background}>
                <View style={Styles.title.container}>
                    <Text style={Styles.title.cnName}>恒泰</Text>
                    <Text style={Styles.title.enName}>HENGTAI</Text>
                </View>
                <View style={Styles.form}>
                    <TextInput
                        style={Styles.inputField}
                        onChangeText={(username) => console.log(username)}
                        // value={this.state.username}
                        placeholder="账号"
                        placeholderTextColor={theme.lightGray}
                        selectionColor="#fff"
                        maxLength={12}
                    />
                    <TextInput
                        style={Styles.inputField}
                        onChangeText={(password) => console.log(password)}
                        placeholder="密码"
                        placeholderTextColor={theme.lightGray}
                        selectionColor="#fff"
                        maxLength={8}
                        secureTextEntry={true}
                    />
                    <TouchableWithoutFeedback onPress={()=>console.log('login')}>
                        <View style={Styles.btnLogin.container}>
                            <Text style={Styles.btnLogin.text}>登录</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                {/* <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Root')}>
                    <Text>注册</Text>
                </TouchableWithoutFeedback> */}
            </ImageBackground>
        )
    }
}
