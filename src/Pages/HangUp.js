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
	inputStyle: {
		height: 40,
		backgroundColor: '#ffffff',
		width: '60%',
		paddingLeft: 10,
		paddingRight: 10,
	},
	confirmBtn: {
		minWidth: 140,
		marginTop: 30,
		height: 40,
	}
});

export default class HangUp extends Component {
    static navigationOptions = {
        title: '卖出',
    }
	constructor (props) {
	    super(props);
	    this.state = {
	    	money: ''
	    };
	}
	render () {
		return (
			<View style={styles.container}>
				<ImageBackground source={appBg} style={styles.backgroundImage}>
					<Text style={styles.title}>矿金挂卖</Text>
					<View style={styles.content}>
						<Flex
						justify="center"
						align="center"
						direction="column"
						style={{height: '100%'}}
						>
							<TextInput
								keyboardType="numeric"
								placeholder="请输入金额(元)"
								style={styles.inputStyle}
						        onChangeText={(money) => {
						        	const newText = money.replace(/[^\d]+/, '');
						        	this.setState({money: newText})
						        }}
						        value={this.state.money}
						    />
						    <Button
						    style={styles.confirmBtn}
				            onPress={() => {
				                let formData=new FormData();
								formData.append('id', '10000');
								formData.append('token', 'f542d311a9d1a368cd241d2aa9ba7f1e');
								formData.append('mine_balance', this.state.money);
								fetch('http://www.blyl1888.com/index.php/Api/Order/user_sale', {
								  method: 'POST',
								  headers: {},
								  body: formData,
								}).then((response) => response.json()).then((responseJson) => {
									console.log(responseJson);
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
