import React, { Component } from 'react';
import { Text, Image, View, TouchableWithoutFeedback } from 'react-native';
const Styles = {
    container: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    item: {
        width: '30%',
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemImg: {
        width: 72,
        height: 72,

    },
    itemTitle: {
        fontSize: 18,
    }
}

export default class Navigation extends Component{
    constructor(props) {
        super(props);
    }
    render () {
        const { list } = this.props;
        return (
            <View style={Styles.container}>
                {
                    list.map((item, index) => (
                        <TouchableWithoutFeedback key={index}>
                            <View style={Styles.item}>
                                <Image source={item.imgSrc} style={Styles.itemImg}/>
                                <Text style={Styles.itemTitle}>{item.title}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    ))
                }
            </View>
        )
    }
}
