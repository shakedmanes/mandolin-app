import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';


export default function MultiListItem(props) {
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
                    <Text style={styles.contentDesc}>
                        {props.contentDescText}
                    </Text>
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
        elevation: 15,
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
        // borderColor: 'red',
        // borderWidth: 2
    },
    image: {
        height: 80,
        width: 80,
        // borderColor: 'red',
        // borderWidth: 2
    },
    contentText: {
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
    }
});
