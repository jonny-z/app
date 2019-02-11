import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { theme} from '../Index';
const Styles = {
    container: {
        marginTop: 20,
    },
    menu: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    menuItem: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        width: 110,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    menuItemActiveText: {
        color: theme.shitYellow,
    },
    menuItemText: {
        color: theme.sixGray,
        fontSize: 16,
    }
}
export default class ConvenientServiceMenu extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        activeButton: '',
    }
    render () {
        const { menu } = this.props;
        console.log('render');
        return (
            <View style={Styles.container}>
                <View style={Styles.menu}>
                    {menu.map((item, index) => (
                        <TouchableWithoutFeedback key={index} onPress={()=>{
                            this.setState({activeButton: index});
                        }}>
                            <View style={Styles.menuItem}>
                                <Text style={(this.state.activeButton === index) ? [Styles.menuItemText, Styles.menuItemActiveText]:Styles.menuItemText}>{item.title}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    ))}
                </View>
                <Text>选择买入金额</Text>
            </View>
        )
    }
}
