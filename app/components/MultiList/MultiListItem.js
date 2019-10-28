import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

import ActionIcon from '../ActionIcon';
import Colors from '../../constants/Colors';
import ListItemsTypes from '../../constants/ListItemsTypes';

export default function MultiListItem(props) {

    let contentDesc = null;
    
    switch (props.type) {

        case (ListItemsTypes.MUSIC_SOURCE):
            contentDesc = (
                <Text style={styles.contentDesc}>
                    {props.contentDescText}
                </Text>
            );
            break;

        case (ListItemsTypes.PLAYLIST):
            contentDesc = (
                <View style={styles.contentMultDescContainer}>
                    <Text style={styles.contentMultDescUpper}>
                        {props.contentDescText}
                    </Text>
                    <View style={styles.contentMultDescActions}>
                        <ActionIcon style={styles.iconContainer} name='delete' size={40} />
                        <ActionIcon style={styles.iconContainer} name='play' size={40} />
                    </View>
                </View>
            );
            break;

        case (ListItemsTypes.SONG):

            contentDesc = (
                <View style={styles.contentDescContainerOnlyText}>
                    <Text style={styles.contentMultDescUpper}>
                        {props.contentDescUpper}
                    </Text>
                    <Text style={styles.contentMultDescText}>
                        {props.contentDescText}
                    </Text>
                </View>
            );
            break;

        default:
            break;
    }

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={props.imageSource}
                    />
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.contentText}>
                        {props.contentTitle}
                    </Text>
                    {contentDesc}
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        backgroundColor: Colors.darkThemePrimaryLight,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        borderRadius: 5,
        shadowColor: "white",
        shadowOffset: {
            width: 7,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 1
        // borderColor: 'red',
        // borderWidth: 2
    },
    imageContainer: {
        flex: 1,
        // borderColor: 'red',
        // borderWidth: 2
    },
    contentContainer: {
        flex: 3,
        // borderColor: 'blue',
        // borderWidth: 2
    },
    image: {
        height: 80,
        width: 80,
        // borderColor: 'red',
        // borderWidth: 2
    },
    contentText: {
        flex: 1,
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.darkThemeSecondary,
        // borderColor: 'red',
        // borderWidth: 2
    },
    contentDesc: {
        fontSize: 18,
        color: Colors.darkThemeSecondaryLight,
        // borderColor: 'red',
        // borderWidth: 2
    },
    contentMultDescContainer: {
        flex: 2,
        flexDirection: 'row',
        // borderColor: 'red',
        // borderWidth: 2
    },
    contentMultDescUpper: {
        fontSize: 14,
        color: Colors.darkThemeSecondaryLight,
        marginBottom: 3
    },
    contentMultDescText: {
        fontSize: 18,
        color: Colors.darkThemeSecondaryLight
    },  
    contentMultDescActions: {
        flex: 2,
        justifyContent: 'flex-start',
        flexDirection: 'row-reverse',
        // borderColor: 'green',
        // borderWidth: 2
    },
    iconContainer: {
        marginRight: 4,
        marginLeft: 4,
    },
    contentDescContainerOnlyText: {        
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // borderColor: 'yellow',
        // borderWidth: 2
    }
});
