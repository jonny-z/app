import React, { Component } from 'react';
import { ImageBackground, Text, View, StyleSheet, FlatList } from 'react-native';
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
		marginBottom: 15
	},
	item: {
		paddingTop: 10,
		paddingBottom: 10,
		backgroundColor: 'rgba(255,255,255,0.2)',
		marginBottom: 6
	},
	itemText: {
		textAlign: 'center',
		fontSize: 16,
		lineHeight: 17,
		height: 17,
		color: '#ffffff'
	},
	subtitle: {
		color: '#fff',
		fontSize: 18
	},
	viewmore: {
		color: '#fff'
	},
	subcontent: {
		paddingLeft: 15,
		paddingRight: 15,
		marginBottom: 10
	}
});
class UserItem extends Component {
	render() {
		return (
			<Flex.Item style={styles.item}>
	      		<Text style={styles.itemText}>{this.props.type}</Text>
	      	</Flex.Item>
		)
	}
}

class TransactionList extends Component {
  render() {
    return (
      <Flex
      	align="center"
      	justify="center">
      	<UserItem type={this.props.name} />
      	<UserItem type={this.props.number} />
      	<UserItem type={this.props.time} />
      </Flex>
    );
  }
}
export default class Transaction extends Component {
    static navigationOptions = {
        title: '交易大厅',
    }
	constructor (props) {
	    super(props);
	    this.state = {
	    	Sale: null,
	    	Buy: null
	    }
	}
	componentDidMount() {
		fetch('http://www.blyl1888.com/index.php/Api/Order/saleList', {
		  method: 'POST',
		  headers: {},
		}).then((response) => response.json()).then((responseJson) => {
	      this.setState({Sale: responseJson.data})
	    }).catch(function (err) {
	    	console.log(err);
	  	});

	  	fetch('http://www.blyl1888.com/index.php/Api/Order/BuyList', {
		  method: 'POST',
		  headers: {},
		}).then((response) => response.json()).then((responseJson) => {
	      this.setState({Buy: responseJson.data})
	    }).catch(function (err) {
	    	console.log(err);
	  	});
	}
	render () {
		return (
			<View style={styles.container}>
				<ImageBackground source={appBg} style={styles.backgroundImage}>
					<Text style={styles.title}>交易中心　</Text>
					<View style={{marginBottom: 20}}>
						<Flex
						justify="between"
						align="center"
						style={styles.subcontent}
						>
							<Text style={styles.subtitle}>买入</Text>
							<Text style={styles.viewmore}>更多</Text>
						</Flex>
						<TransactionList name="姓名" number="规格" time="挂单时间"/>
						<FlatList
							keyExtractor={(item, index) => index.toString()}
							data={this.state.Buy}
							renderItem={({item}) => <TransactionList name={item.id} number={item.purchase_quantity} time={item.purchase_time}/>}
						/>
					</View>
					<View>
						<Flex
						justify="between"
						align="center"
						style={styles.subcontent}
						>
							<Text style={styles.subtitle}>卖出</Text>
							<Text style={styles.viewmore}>更多</Text>
						</Flex>
						<TransactionList name="姓名" number="数量" time="时间"/>
						<FlatList
							keyExtractor={(item, index) => index.toString()}
							data={this.state.Sale}
							renderItem={({item}) => <TransactionList name={item.id} number={item.hanging_amount} time={item.hanging_time}/>}
						/>
					</View>
			    </ImageBackground>
			</View>
		)
	}
}
