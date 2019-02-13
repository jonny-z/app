import React, { Component } from 'react';
import { View, Text, Animated } from "react-native";
const Styles = {
    container: {
        position: 'absolute',
        left: '50%',
        bottom: -50,
    },
    inner: {
        position: 'relative',
        right: '50%',
        backgroundColor: 'rgba(255, 255, 255, .2)',
        borderRadius: 50,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
    },
    text: {
        fontSize: 16,
        color: '#fff',
    }
}
export default class Toast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fade: new Animated.Value(0),
            duration: 1000,
            showTime: 1000.
        };
    }
    componentDidUpdate () {
        let animeFade = Animated.sequence([
            Animated.timing(
                this.state.fade,
                {
                  toValue: 1,
                  duration: this.state.duration,
                }
            ),
            Animated.delay(this.state.showTime),
            Animated.timing(
                this.state.fade,
                {
                  toValue: 0,
                  duration: this.state.duration,
                }
            )
        ])
        if(this.props.show) {
            animeFade.start();
        }
    }
    render() {
        const { message } = this.props;
        return (
            <Animated.View style={{opacity: this.state.fade}}>
                <View style={Styles.container}>
                    <View style={Styles.inner}>
                        <Text style={Styles.text}>{message}</Text>
                    </View>
                </View>
            </Animated.View>
        )
    }
}
