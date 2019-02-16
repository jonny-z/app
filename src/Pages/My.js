import React, { Component } from 'react';
import { ImageBackground, Alert, Text, View, StyleSheet } from 'react-native';
import { Icon, Flex, } from '@ant-design/react-native';
import { appBg, theme } from '../Index';
import UserProfile from '../Components/Account/UserProfile';
const styles = {
	userProfile: {
        container: {
            marginTop: theme.appTopHeight,
        },
        avatar: {
            width: 80,
            height: 80,
            borderRadius: 40,
            marginLeft: 15.
        },
        name: {
            color: '#fff',
        }
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
};

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
		return (
			// <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
			//     <Text style={{ margin: 50 }}>{this.props.name}</Text>
			// </View>
			<View style={styles.container}>
				<ImageBackground source={appBg} style={styles.backgroundImage}>
                    <UserProfile editable={true} style={styles.userProfile}/>
					<List name="个人信息" icon="contacts" id="PersonalInfo" nav={nav}/>
					<List name="交易大厅" icon="skin" id="Transaction"  nav={nav}/>
					<List name="分享链接" icon="phone" nav={nav}/>
					<List name="收获地址" icon="tags" nav={nav}/>
				</ImageBackground>
			</View>
		)
	}
}
