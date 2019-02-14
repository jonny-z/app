import React, { Component } from 'react';
import { ImageBackground, Text, View, StyleSheet, ScrollView } from 'react-native';
import { Button, Flex, List, InputItem } from '@ant-design/react-native';
import { appBg, theme } from '../Index';
import { connect } from 'react-redux';

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

class PersonalInfo extends Component {
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
	// componentWillMount() {
	// 	let formData=new FormData();
	// 	formData.append('id', this.props.id);
	// 	formData.append('token', this.props.token);
	// 	fetch('http://www.blyl1888.com/index.php/Api/User/getUserInfo', {
	// 	  method: 'POST',
	// 	  body: formData,
	// 	}).then((response) => response.json()).then((responseJson) => {
	// 		console.log(responseJson);
	//       // this.setState({Info: responseJson.data})
	//     }).catch(function (err) {
	//     	console.log(err);
	//   	});
	// }
	render () {
        const {username, resident_id_card, alipay, bank_card, promotion_code} = this.props;
		return (
			<View style={styles.container}>
				<ImageBackground source={appBg} style={styles.backgroundImage}>
					<Text style={styles.title}>个人信息</Text>
					<ScrollView
					>
						<List>
							<InputItem
				            clear
				            value={username}
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
				            value={resident_id_card}
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
				            value={alipay}
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
				            value={bank_card}
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
				            value={alipay}
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
				            value={promotion_code}
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
export default connect(
    (state) => {
        console.log(state);
        return state;
    }
)(PersonalInfo)
