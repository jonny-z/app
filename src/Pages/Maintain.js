import React, { Component } from 'react';
import { ImageBackground, Text, View, StyleSheet, TextInput, Alert } from 'react-native';
import { Button, Flex } from '@ant-design/react-native';
import { appBg, theme } from '../Index';
import { connect } from 'react-redux';
import MyButton from '../Components/Form/MyButton';

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
		textAlign: 'center',
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 15
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
		marginTop: 20,
		height: 40,
	}
});

class Maintain extends Component {
    static navigationOptions = {
        title: '矿机维护',
    }
	constructor (props) {
	    super(props);
	    this.state = {
	    	number: '',
	    	receiveId: ''
	    };
	}
	render () {
		const { id, token } = this.props;
		return (
			<View style={styles.container}>
				<ImageBackground source={appBg} style={styles.backgroundImage}>
					<View style={styles.content}>
						<Flex
						justify="center"
						align="center"
						direction="column"
						style={{height: '100%'}}
						>	
							<Text style={styles.title}>维护币数量</Text>
							<TextInput
								keyboardType="numeric"
								placeholder="请输入数量"
								style={[styles.inputStyle, {marginBottom: 20}]}
						        onChangeText={(number) => {
						        	const newMoney = number.replace(/[^\d]+/, '');
						        	this.setState({number: newMoney})
						        }}
						        value={this.state.number}
						    />
						    <Text style={styles.title}>ID</Text>
							<TextInput
								keyboardType="numeric"
								placeholder="请输入ID"
								style={styles.inputStyle}
						        onChangeText={(number) => {
						        	const newText = number.replace(/[^\d]+/, '');
						        	this.setState({receiveId: newText})
						        }}
						        value={this.state.receiveId}
						    />
						    <MyButton 
						    title="确定" 
						    style={{container: {marginTop: 20}}}
				            onPress={() => {
				                let formData=new FormData();
								formData.append('send_id', id);
								formData.append('token', token);
								formData.append('number', this.state.number);
								formData.append('receive_id', this.state.receiveId);
								console.log(formData);
								fetch('http://www.blyl1888.com/index.php/Api/User/transfer', {
								  method: 'POST',
								  headers: {},
								  body: formData,
								}).then((response) => response.json()).then((responseJson) => {
							        Alert.alert(responseJson.message);
							    }).catch(function (err) {
							    	console.log(err);
							  	});
				            }}
				             />
						</Flex>
					</View>
			    </ImageBackground>
			</View>
		)
	}
}
export default connect((state)=>{return {id: state.id, token: state.token}})(Maintain)