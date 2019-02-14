import React, { Component } from 'react';
import { ImageBackground, Text, View, StyleSheet, TextInput, Alert } from 'react-native';
import { Button, Flex } from '@ant-design/react-native';
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
	},
	content: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
	confirmBtn: {
		minWidth: 140,
		marginTop: 30,
		height: 40,
	},
	money: {
		backgroundColor: '#fff',
		height: 40,
		minWidth: 100,
		marginRight: 15,
		textAlign: 'center',
		lineHeight: 40,
		fontSize: 16
	},
	inputStyle: {
		height: 40,
		backgroundColor: '#ffffff',
		width: '60%',
		paddingLeft: 10,
		paddingRight: 10,
	},
	moneyActive: {
		color: '#cc9933'
	}
});

const money = [
	{
		number: '5000',
		key: '0'
	},{
		number: '10000',
		key: '1'
	}
]
export default class Team extends Component {
	constructor (props) {
	    super(props);
	    this.state = {
	    	isActive: '',
	    	code: ''
	    };
	}
	render () {
		return (
			<View style={styles.container}>
				<ImageBackground source={appBg} style={styles.backgroundImage}>
					<Text style={styles.title}>矿机规格</Text>
					<View style={styles.content}>
						<Flex
						justify="center" 
						align="center" 
						direction="column"
						style={{height: '100%'}}
						>
							<Flex
							justify="center" 
							align="center"
							>
								{money.map((item, index) => {
									return <Text onPress={() => {
										this.setState({isActive: item.key})
									}} style={(this.state.isActive == item.key) ? [styles.money, styles.moneyActive] : styles.money} key={item.key}>{item.number}</Text>
								})}
							</Flex>

						    <Button 
						    style={styles.confirmBtn}
				            onPress={() => {
				                let formData=new FormData();
								formData.append('id', '10000');
								formData.append('token', 'f542d311a9d1a368cd241d2aa9ba7f1e');
								formData.append('machine_specifications', money[this.state.isActive].number);
								fetch('http://www.blyl1888.com/index.php/Api/Order/user_buy', {
								  method: 'POST',
								  headers: {},
								  body: formData,
								}).then((response) => response.json()).then((responseJson) => {
							      	Alert.alert(responseJson.message);
							    }).catch(function (err) {
							    	console.log(err);
							  	});
				            }}
				            type="primary"
				            >
					            确定
					        </Button>
						</Flex>
					</View>
			    </ImageBackground>
			</View>
		)
	}
}


//<Text style={{color: '#fff', marginTop:10, marginBottom:10}}>请输入支付宝/银行卡号</Text>
// <TextInput
// 	keyboardType="numeric" 
// 	placeholder="请输入交易方式(支付宝号/银行卡号)" 
// 	style={styles.inputStyle}
//     onChangeText={(code) => {
//     	this.setState({code: newText})
//     }}
//     value={this.state.code}
// />