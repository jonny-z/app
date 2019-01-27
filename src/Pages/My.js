import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { List, Icon, Button, Flex, WhiteSpace, WingBlank } from '@ant-design/react-native';

const Item = List.Item;
const styles = StyleSheet.create({
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 50,
	}
});

// class Greeting extends Component {
//   render() {
//     return (
//       <Flex>
//       	<Flex.Item>
      		
//       	</Flex.Item>
//       </Flex>
//     );
//   }
// }

export default class My extends Component {
	constructor (props) {
	    super(props);
	}
	render () {
		return (
			// <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
			//     <Text style={{ margin: 50 }}>{this.props.name}</Text>
			// </View>
			<View>
				<Flex style={{ marginTop: 80, paddingTop: 20, paddingBottom: 20, paddingLeft: 15, paddingRight: 15, backgroundColor: '#cc9933' }}>
					<Flex.Item style={{flex: 0, marginRight: 15}}>
						<Image
							style={styles.avatar}
							source={{uri: 'http://img5.duitang.com/uploads/item/201411/07/20141107164412_v284V.jpeg'}} 
						/>
					</Flex.Item>
					<Flex.Item>
						<Flex>
							<Text style={{ paddingRight:15, color: 'white', fontSize: 20, fontWeight: 'bold' }}>昵称</Text>
							<Icon name="edit" color="white" size="xs"/>
						</Flex>
					</Flex.Item>
				</Flex>
				<List>
					<Item disabled arrow="horizontal" onPress={() => {alert('1')}}>昵称</Item>
					<Item disabled arrow="horizontal" onPress={() => {}}>性别</Item>
					<Item disabled arrow="horizontal" onPress={() => {}}>手机号</Item>
					<Item disabled arrow="horizontal" onPress={() => {}}>收获地址</Item>
				</List>
			</View>
		)
	}
}