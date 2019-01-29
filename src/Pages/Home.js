import React, { Component } from 'react';
import { ImageBackground, Alert, Text, View, Image, StyleSheet } from 'react-native';
import { Icon, Button, Flex, WhiteSpace, WingBlank } from '@ant-design/react-native';

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
	}
});

export default class My extends Component {
	constructor (props) {
	    super(props);
	}
	render () {
		return (
			<View style={styles.container}>
				<ImageBackground source={require('../../assets/hengtai/bg.png')} style={styles.backgroundImage}>
				
			    </ImageBackground>
			</View>
		)
	}
}