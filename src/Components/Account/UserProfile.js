import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import { Icon } from '@ant-design/react-native';
import { defaultAvatar } from '../../Index';
import { connect } from 'react-redux';
const Styles = {
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarWrapper: {
        marginRight: 10
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 32,
		height: 32,
		borderRadius: 16,
    },
    name: {
        color: '#fff',
    },
    edit: {
        name: "edit",
        color: '#fff',
        size: 'xs',
    }
}
class UserProfile extends Component {
    constructor (props) {
        super(props);
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
        const { editable, style: customStyle={}, avatar=defaultAvatar, name='昵称'} = this.props;
        return (
            <View style={[Styles.container, customStyle.container]}>
                <View style={[Styles.avatarWrapper, customStyle.avatarWrapper]}>
                    <Image style={[Styles.avatar, customStyle.avatar]}
                        source={avatar.toString().indexOf('http') === 0 ? {uri: avatar} : avatar}
                    />
                </View>
                <View style={[Styles.content, customStyle.content]}>
                    <Text style={[Styles.name, customStyle.name]}>{name}</Text>
                    {this.showEdit(editable, customStyle.edit)}
                </View>
            </View>
        )
    }
}
export default connect((state)=>{ return {avatar: state.avatar, name: state.name}})(UserProfile)
