import React, { Component } from 'react';
import { ImageBackground, Alert, Text, View, Image, StyleSheet } from 'react-native';
import { Icon, Button, Flex, WhiteSpace, WingBlank } from '@ant-design/react-native';
import { appBg, theme } from '../Index';

const styles = StyleSheet.create({
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	itemList: {
		backgroundColor: '#483D8B',
		paddingTop: 15,
		paddingBottom:15,
		paddingLeft: 10,
		paddingRight:10,
		marginTop: 15,
	},
	container: {
        flex: 1,
    },
	backgroundImage:{
	    flex:1,
	    resizeMode: 'cover',
	    width:null,
	    width:null,
	    backgroundColor:'rgba(0,0,0,0)',
	}
});

class List extends Component {
    constructor(props) {
        super(props);
    }
  render() {
      const {id, nav} = this.props;
    return (
      <Flex
      	justify="between"
      	style={ styles.itemList }
      	onPress={() => {
            if(!id) {
                Alert.alert('暂未开放')
                return;
            }
		    nav.navigate(id);
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
        const {nav} = this.props;
        console.log(nav)
		return (
			// <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
			//     <Text style={{ margin: 50 }}>{this.props.name}</Text>
			// </View>
			<View style={styles.container}>
				<ImageBackground source={appBg} style={styles.backgroundImage}>
					<Flex style={{ marginTop: 20, paddingTop: 20, paddingBottom: 20, paddingLeft: 15, paddingRight: 15 }}>
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
					<List name="个人信息" icon="contacts" id="PersonalInfo" nav={nav}/>
					<List name="交易大厅" icon="skin" id="Transaction"  nav={nav}/>
					<List name="分享链接" icon="phone" nav={nav}/>
					<List name="收获地址" icon="tags" nav={nav}/>
				</ImageBackground>
			</View>
		)
	}
}
