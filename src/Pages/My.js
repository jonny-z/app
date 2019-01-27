import React, { Component } from 'react';
import { Alert, Text, View, Image, StyleSheet } from 'react-native';
import { Icon, Button, Flex, WhiteSpace, WingBlank } from '@ant-design/react-native';

const styles = StyleSheet.create({
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 50,
	}
});

class List extends Component {
  render() {
    return (
      <Flex 
      	justify="between" 
      	style={{ backgroundColor: '#483D8B',paddingTop: 15, paddingBottom:15, paddingLeft: 10, paddingRight:10, marginTop: 15 }} 
      	onPress={() => {
		    Alert.alert("你点击了按钮！");
		}}>
      	<Flex.Item style={{ flex: 0 }}>
      		<Flex>
	      		<Icon name={this.props.icon} color='#cc9933' size='md'/>
	      		<Text style={{ paddingLeft:15, color: 'white', fontSize: 18, fontWeight: 'bold' }}>{this.props.name}</Text>
      		</Flex>	
      	</Flex.Item>
      	<Flex.Item style={{ flex: 0 }}>
      		<Icon name="right" color="white" size="xs"/>
      	</Flex.Item>
      </Flex>
    );
  }
}

export default class My extends Component {
	constructor (props) {
	    super(props);
	}
	render () {
		return (
			// <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
			//     <Text style={{ margin: 50 }}>{this.props.name}</Text>
			// </View>
			<View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: '#000080' }}>
				<Flex style={{ marginTop: 40, paddingTop: 20, paddingBottom: 20, paddingLeft: 15, paddingRight: 15, backgroundColor: '#cc9933' }}>
					<Flex.Item style={{flex: 0, marginRight: 20}}>
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
				<List name="昵称" icon="contacts"/>
				<List name="性别" icon="skin"/>
				<List name="手机号" icon="phone"/>
				<List name="收获地址" icon="tags"/>
			</View>
		)
	}
}