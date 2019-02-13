import React, { Component } from 'react';
import { ImageBackground, Text, View, StyleSheet, TextInput } from 'react-native';
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
	text: {
		color: '#fff',
		fontSize: 16,
		marginBottom: 10
	},
	btn: {
		marginRight: 10
	},
	infoWrapper: {
		backgroundColor: 'rgba(255,255,255,0.2)',
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 10,
		paddingBottom: 10,
		borderRadius: 5
	}
});
const orderInfo = {
	name: '李四',
	orderType: '支付宝'
}
export default class Team extends Component {
	constructor (props) {
	    super(props);
	    this.state = { 
	    	isBuy: true,
	    	isMatch: false
	    };
	}
	render () {
		let dom = null;
		let btn = null;
		if(this.state.isBuy) {
			btn = <Button style={styles.btn} type="primary" size="small">打出款项</Button>;
		}else {
			btn = <Button style={styles.btn} type="primary" size="small">收到款项</Button>;
		}
		if(this.state.isMatch) {
			dom = <Text style={{color: '#fff'}}>排单匹配中</Text>;
		}else {
			dom = (<View style={styles.infoWrapper}>
					<Text style={styles.text}>已出单</Text>
					<Text style={styles.text}>{this.state.isBuy ? '购入人姓名' : '售卖人姓名' } : {orderInfo.name}</Text>
					<Text style={styles.text}>交易方式: {orderInfo.orderType}</Text>
					<Flex 
					justify="center" 
					align="center" 
					>
						{btn}
						<Text style={{color: '#fff'}}>进入交易中心查看</Text>
					</Flex>
					</View>
				)

		}
		return (
			<View style={styles.container}>
				<ImageBackground source={appBg} style={styles.backgroundImage}>
					<Text style={styles.title}>当前交易状态</Text>
					<View style={styles.content}>
						<Flex
						justify="center" 
						align="center" 
						direction="column"
						style={{height: '100%'}}
						>
							{dom}
						</Flex>
					</View>
			    </ImageBackground>
			</View>
		)
	}
}