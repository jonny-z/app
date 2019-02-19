import React, { Component } from 'react';
<<<<<<< HEAD
import { Alert, Text, Image, View, TouchableWithoutFeedback } from 'react-native';
import { Icon } from '@ant-design/react-native';
=======
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
>>>>>>> 6a43e08add8cf00ba2e92ff18a5494c8b180f928
import { theme } from '../Index';
const Styles = {
    container: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    item: {
        width: '31%',
        backgroundColor: theme.opacityWhite,
        borderRadius: 5,
        marginBottom: 15,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10

    },
    itemImg: {
        width: 72,
        height: 72,

    },
    itemTitle: {
        fontSize: 16,
        color: '#fff',
        marginTop: 10
    }
}

export default class Navigation extends Component{
    constructor(props) {
        super(props);
        _this = this;
    }
    link (id) {
        if(!id) {
            global.toast.show('该功能暂未开放!!!');
            return;
        }
        this.props.nav.navigate(id);
    }
    onPress () {
        Alert.alert('提示','确认退本还息后此账号将被永久冻结', 
            [{text: '确定', onPress: _this.onConfirm},
            {text: '取消'},]);
    }
    onConfirm() {
        console.log('b');
    }
    render () {
        const { list, out_money } = this.props;
        return (
            <View style={Styles.container}>
                {
                    list.map((item, index) => (
                        <TouchableWithoutFeedback key={index} onPress={() => {
                            const Tip = '您一共可退本金: ' + out_money;
                            if(item.id == ''){
                                if(out_money != '0') {
                                    Alert.alert('提示','没有可退本金', [{text: '确定'}]);
                                }else {
                                    Alert.alert('提示', Tip, [
                                        {text: '确定', onPress: _this.onPress},
                                        {text: '取消'},
                                    ])
                                }
                            }else{
                                this.link(item.id);
                            }}}>
                            <View style={Styles.item}>
                                <FontAwesome name={item.icon} size={22} color="red" />
                                <Text style={Styles.itemTitle}>{item.title}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    ))
                }
            </View>
        )
    }
}
