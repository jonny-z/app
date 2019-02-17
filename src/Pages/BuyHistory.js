import React, { Component } from 'react';
import { ImageBackground, Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
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
	viewmore: {
		color: '#fff'
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
export default class BuyHistory extends Component {
    static navigationOptions = {
        title: '购买记录',
    }
	constructor (props) {
	    super(props);
	    this.state = {
	    	Buy: null
	    }
	}
	componentDidMount() {
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
					<ScrollView>
						<View style={{marginBottom: 20, marginTop: 10}}>
							<TransactionList name="id" number="购买数量" time="挂单时间"/>
							<FlatList
								keyExtractor={(item, index) => index.toString()}
								data={this.state.Buy}
								renderItem={({item}) => <TransactionList name={item.id} number={item.purchase_quantity} time={item.purchase_time}/>}
							/>
						</View>
					</ScrollView>
			    </ImageBackground>
			</View>
		)
	}
}
