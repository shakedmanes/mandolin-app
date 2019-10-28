import React, { useState } from 'react';
import { View, FlatList, Touchable, Image, Text, StyleSheet } from 'react-native';

import ListItemsTypes from '../../constants/ListItemsTypes';
import MultiListItem from './MultiListItem';


export default function MultiList(props) {
    return (
        <View>
            <FlatList data={props.data} renderItem={_renderItem} />
        </View>
    );


}

const _renderItem = ({ item }) => {
    let returnItem = null;

    switch (item.type) {

        case ListItemsTypes.MUSIC_SOURCE:
            returnItem = (
                <MultiListItem
                    type={ListItemsTypes.MUSIC_SOURCE}
                    imageSource={item.imageSource}
                    contentTitle={item.contentTitle}
                    contentDescText={item.contentDescText}
                />
            );
            break;

        case ListItemsTypes.PLAYLIST:
            returnItem = (
                <MultiListItem
                    type={ListItemsTypes.PLAYLIST}
                    imageSource={item.imageSource}
                    contentTitle={item.contentTitle}
                    contentDescText={item.contentDescText}
                />
            );
            break;
        
        case ListItemsTypes.SONG:
            returnItem = (
                <MultiListItem
                    type={ListItemsTypes.SONG}
                    imageSource={item.imageSource}
                    contentTitle={item.contentTitle}
                    contentDescText={item.contentDescText}
                    contentDescUpper={item.contentDescUpper}
                />
            );
            break;
        default:
            returnItem = (
                <MultiListItem
                    imageSource={item.imageSource}
                    contentTitle={item.contentTitle}
                    contentDescText={item.contentDescText}
                />
            );
            break;
    }
    return returnItem;
};


const styles = StyleSheet.create({

});