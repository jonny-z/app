import React, { Component } from 'react';
import { ImageBackground, Text, View, StyleSheet, TextInput } from 'react-native';
import { Button, Flex } from '@ant-design/react-native';
import { appBg, theme } from '../index';

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
		marginBottom: 30
	},
	content: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
	confirmBtn: {
		minWidth: 140,
		marginTop: 30,
		height: 40,
	}
});

export default class Team extends Component {
	constructor (props) {
	    super(props);
	    this.state = {
	    	isActive: true
	    };
	}
	render () {
		return (
			<View style={styles.container}>
				<ImageBackground source={appBg} style={styles.backgroundImage}>
					<Text style={styles.title}>矿机规格</Text>
					<View style={styles.content}>
						<Flex
						justify="center" 
						align="center" 
						direction="column"
						style={{height: '100%'}}
						>
							<Flex
							justify="center" 
							align="center" 
							>

							</Flex>
						    <Button 
						    style={styles.confirmBtn}
				            onPress={() => {
				                
				            }}
				            type="primary"
				            >
					            确定
					        </Button>
						</Flex>
					</View>
			    </ImageBackground>
			</View>
		)
	}
}