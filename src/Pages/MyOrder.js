import React, { Component } from 'react';
import { ImageBackground, Text, View, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Button, Flex } from '@ant-design/react-native';
import { appBg, theme } from '../Index';
import { connect } from 'react-redux';
import Api from '../Api/Api';

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
		borderRadius: 5,
		width: '90%',
		marginBottom: 10
	}
});
const orderInfo = {
	name: '李四',
	orderType: '支付宝'
}
class MyOrder extends Component {
	static navigationOptions = {
        title: '当前交易',
    }
	constructor (props) {
	    super(props);
	    this.state = {
	    	Info: []
	    };
	}
	componentDidMount() {
        const { id, token } = this.props;
		let formData = new FormData();
		formData.append('id', id);
		formData.append('token', token);
		Api.getMyOrder(formData).then((responseJson) => {
	      this.setState({Info: responseJson.data});
	    });
    }
	render () {
		return (
			<View style={styles.container}>
				<ImageBackground source={appBg} style={styles.backgroundImage}>
					<ScrollView style={{marginTop: 10}}>
						<Flex
						direction="column"
						style={{height: '100%'}}
						>
							{this.state.Info.map((item, index) => (
								<View style={styles.infoWrapper} key={index}>
									<Text style={styles.text}>已出单</Text>
									<Text style={styles.text}>{(item.role == 1) ? '购入人姓名' : '售卖人姓名' } : {(item.role == 1) ? item.buy_name : item.sale_name}</Text>
									<Text style={styles.text}>支付宝: {(item.role == 1) ? item.buy_alipay : item.sale_alipay}</Text>
									<Text style={styles.text}>银行卡: {(item.role == 1) ? item.buy_bank_card : item.sale_bank_card}</Text>
									<Flex 
									justify="between" 
									align="center" 
									>
										<Button style={styles.btn} type="primary" size="small">{(item.role == 1) ? '打出款项' : '收到款项'}</Button>
										<Text style={{color: '#fff'}}>进入交易中心查看</Text>
									</Flex>
								</View>
							))}
						</Flex>
					</ScrollView>
			    </ImageBackground>
			</View>
		)
	}
}
export default connect((state)=>{return {id: state.id, token: state.token}})(MyOrder)