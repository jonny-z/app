import React, { Component } from 'react';
import { ImageBackground, Text, View, StyleSheet, ScrollView } from 'react-native';
import { Button, Flex, List, InputItem } from '@ant-design/react-native';
import { appBg, theme } from '../Index';

const styles = StyleSheet.create({
	container: {
        flex: 1,
    },
	backgroundImage:{
	    flex:1,
	    resizeMode: 'cover',
	    width:null,
	    width:null,
	    backgroundColor:'rgba(0,0,0,0)',
	},
	title: {
		marginTop: theme.appTopHeight,
		textAlign: 'center',
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 30
	}
});

export default class Team extends Component {
    static navigationOptions = {
        title: '个人信息',
    }
	constructor (props) {
	    super(props);
	    this.state = {
	    	userName: '',
	    	idCard: '',
	    	phoneNumber: '',
	    	bankCard: '',
	    	aPay: '',
	    	spreadCode: ''
	    }
	}
	componentDidMount() {
		let formData=new FormData();
		formData.append('id', '10000');
		formData.append('token', 'f542d311a9d1a368cd241d2aa9ba7f1e');
		fetch('http://www.blyl1888.com/index.php/Api/User/getUserInfo', {
		  method: 'POST',
		  headers: {},
		  body: formData,
		}).then((response) => response.json()).then((responseJson) => {
			console.log(responseJson);
	      // this.setState({Info: responseJson.data})
	    }).catch(function (err) {
	    	console.log(err);
	  	});
	}
	render () {
		return (
			<View style={styles.container}>
				<ImageBackground source={appBg} style={styles.backgroundImage}>
					<Text style={styles.title}>个人信息</Text>
					<ScrollView
					>
						<List>
							<InputItem
				            clear
				            value={this.state.userName}
				            onChange={value => {
				              this.setState({
				                userName: value,
				              });
				            }}
				            placeholder="请输入名字"
				          	>
				            	姓名
				            </InputItem>

				            <InputItem
				            clear
				            value={this.state.idCard}
				            onChange={value => {
				              this.setState({
				                idCard: value,
				              });
				            }}
				            placeholder="请输入身份证"
				          	>
				            	身份证
				            </InputItem>

				            <InputItem
				            clear
				            type="phone"
				            value={this.state.phoneNumber}
				            onChange={value => {
				              this.setState({
				                phoneNumber: value,
				              });
				            }}
				            placeholder="请输入手机号"
				          	>
				            	手机号
				            </InputItem>
				            <InputItem
				            clear
				            type="bankCard"
				            value={this.state.bankCard}
				            onChange={value => {
				              this.setState({
				                bankCard: value,
				              });
				            }}
				            placeholder="请输入银行卡"
				          	>
				            	银行卡
				            </InputItem>
				            <InputItem
				            clear
				            value={this.state.aPay}
				            onChange={value => {
				              this.setState({
				                aPay: value,
				              });
				            }}
				            placeholder="请输入支付宝"
				          	>
				            	支付宝
				            </InputItem>
				            <InputItem
				            clear
				            value={this.state.spreadCode}
				            onChange={value => {
				              this.setState({
				                spreadCode: value,
				              });
				            }}
				            placeholder="请输入推广码"
				          	>
				            	推广码
				            </InputItem>
				            <List.Item>
					            <Button
					              onPress={() => {

					              }}
					              type="primary"
					            >
					              确定
					            </Button>
					        </List.Item>
						</List>
					</ScrollView>
			    </ImageBackground>
			</View>
		)
	}
}
