import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import { Icon } from '@ant-design/react-native';
import { defaultAvatar, theme } from '../../index';
const Styles = {
    container: {
        marginTop: theme.appTopHeight,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarWrapper: {
        flex: 0,
        marginRight: 10
    },
    content:{
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 32,
		height: 32,
		borderRadius: 16,
    },
    edit: {
        name: "edit",
        color: '#fff',
        size: 'xs',
    }
}
export default class UserProfile extends Component {
    constructor (props) {
        super(props);
        this.state = {
            avatarSrc: defaultAvatar
        }
    }
    showEdit (editable, style) {
        let iconStyle = Object.assign(Styles.edit, style);
        if(editable) {
            return (
                <Icon name={iconStyle.name} color={iconStyle.color} size={iconStyle.size}/>
            )
        }
        return;
    }
    render () {
        const { editable, style: customStyle } = this.props;
        const { avatarSrc } = this.state;
        return (
            <View style={[Styles.container, customStyle.container]}>
                <View style={[Styles.avatarWrapper, customStyle.avatarWrapper]}>
                    <Image style={[Styles.avatar, customStyle.avatar]}
                        source={avatarSrc}
                    />
                </View>
                <View style={[Styles.content, customStyle.content]}>
                    <Text style={[Styles.name, customStyle.name]}>昵称</Text>
                    {this.showEdit(editable, customStyle.edit)}
                </View>
            </View>
        )
    }
}
