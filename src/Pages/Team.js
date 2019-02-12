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

class UserList extends Component {
  render() {
    return (
      <Flex 
      	align="center" 
      	justify="center">
      	<UserItem type={this.props.name} />
      	<UserItem type={this.props.level} />
      	<UserItem type={this.props.standard} />
      	<UserItem type={this.props.superior} />
      </Flex>
    );
  }
}

export default class Team extends Component {
	constructor (props) {
	    super(props);
	}
	render () {
		return (
			<View style={styles.container}>
				<ImageBackground source={appBg} style={styles.backgroundImage}>
					<Text style={styles.title}>团队成员</Text>
					<View>
						<UserList name="名称" level="推广级" standard="矿机规格" superior="上线" />
						<FlatList
							data={[{key: '1', name: '李四', level: '直推', standard: '5000', superior: '张三'}, {key: '2', name: '李四', level: '直推', standard: '5000', superior: '张三'}]}
							renderItem={({item}) => <UserList name={item.name} level={item.level} standard={item.standard} superior={item.superior} />}
						/>
					</View>
			    </ImageBackground>
			</View>
		)
	}
}