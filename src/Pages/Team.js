import React, { Component } from 'react';
import { ImageBackground, Text, View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Flex } from '@ant-design/react-native';
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
	    paddingTop: 10
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

class Team extends Component {
    static navigationOptions = {
        title: '团队',
    }
	constructor (props) {
	    super(props);
	    this.state = {
	    	Team: ''
	    }
	}
	componentDidMount() {
        const { id, token } = this.props;
		let formData = new FormData();
		formData.append('id', id);
		formData.append('token', token);
		Api.getUserFamily(formData).then((responseJson) => {
	      this.setState({Team: responseJson.data});
	    });
    }
    keyExtractor = (item, index) => item.id;
	render () {
		return (
			<View style={styles.container}>
				<ImageBackground source={appBg} style={styles.backgroundImage}>
					<ScrollView>
						<UserList name="名称" level="推广级" standard="矿机规格" superior="推广码" />
						<FlatList
                            data={this.state.Team}
                            keyExtractor={this.keyExtractor}
                            renderItem={({item}) =>
                                <UserList
                                    id={item.id}
                                    name={item.name}
                                    level={item.level}
                                    standard={item.machine_specifications}
                                    superior={item.promotion_code}
                                />
                            }
						/>
					</ScrollView>
			    </ImageBackground>
			</View>
		)
	}
}
export default connect((state)=>{return {id: state.id, token: state.token}})(Team)
