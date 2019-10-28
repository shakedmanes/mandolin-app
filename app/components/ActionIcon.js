import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function ActionIcon(props) {

    let icon = null;

    if (props.name.startsWith('ios') || props.name.startsWith('md')) {
        icon = (
            <Ionicons
                name={props.name}
                size={props.size}
                style={{ marginBottom: -3 }}
                color={Colors.buttonColor}
            />
        );
    } else {
        icon = (
            <MaterialCommunityIcons
                name={props.name}
                size={props.size}
                style={{ marginBottom: -3 }}
                color={Colors.buttonColor}
            />
        );
    }


    return (
        <TouchableOpacity>
            <View style={props.style}>
                {icon}
            </View>
        </TouchableOpacity>
    );
}
