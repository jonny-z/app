import React, { Component } from 'react';
import { ImageBackground, Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
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
class DynamicIncome extends Component {
    static navigationOptions = {
        title: '动态收益',
    }
	constructor (props) {
	    super(props);
	    this.state = {
	    	Buy: null
	    }
	}
	componentDidMount() {
        const { id, token } = this.props;
		let formData = new FormData();
		formData.append('id', id);
		formData.append('token', token);
		Api.getDynamicIncome(formData).then((responseJson) => {
	      this.setState({Buy: responseJson.data});
	    });
    }
	render () {
		return (
			<View style={styles.container}>
				<ImageBackground source={appBg} style={styles.backgroundImage}>
					<ScrollView>
						<View style={{marginBottom: 20, marginTop: 10}}>
							<TransactionList name="id" number="收益" time="时间"/>
							<FlatList
								keyExtractor={(item, index) => index.toString()}
								data={this.state.Buy}
								renderItem={({item}) => <TransactionList name={item.from_id} number={item.gold} time={item.add_time}/>}
							/>
						</View>
					</ScrollView>
			    </ImageBackground>
			</View>
		)
	}
}
export default connect((state)=>{return {id: state.id, token: state.token}})(DynamicIncome)