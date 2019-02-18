import React, { Component } from 'react';
import { ImageBackground, Alert, Text, View, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Icon } from '@ant-design/react-native';
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
		backgroundColor: theme.opacityWhite,
		paddingTop: 15,
		paddingBottom:15,
		paddingLeft: 10,
		paddingRight:10,
		marginTop: 15,
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
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
      <TouchableWithoutFeedback 
      	onPress={() => {
            if(!id) {
                Alert.alert('暂未开放')
                return;
            }
		    nav.navigate(id);
  		}}>
        <View style={ styles.itemList }>
        	<View style={{ flexDirection: 'row', flex: 0 }}>
  	      		<Icon name={this.props.icon} color='#cc9933' size='md'/>
  	      		<Text style={{ paddingLeft:15, color: 'white', fontSize: 18, fontWeight: 'bold' }}>{this.props.name}</Text>
        	</View>
        	<View style={{ flex: 0 }}>
        		<Icon name="right" color="white" size="xs"/>
        	</View>
        </View>
      </TouchableWithoutFeedback>
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
			<View style={styles.container}>
				<ImageBackground source={appBg} style={styles.backgroundImage}>
          <UserProfile editable={true} style={styles.userProfile}/>
          <ScrollView>
  					<List name="个人信息" icon="contacts" id="PersonalInfo" nav={nav}/>
  					<List name="交易大厅" icon="skin" id="Transaction"  nav={nav}/>
  					<List name="分享链接" icon="phone" nav={nav}/>
  					<List name="收获地址" icon="tags" nav={nav}/>
          </ScrollView>
				</ImageBackground>
			</View>
		)
	}
}
