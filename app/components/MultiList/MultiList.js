import React, { useState } from 'react';
import { View, FlatList, Touchable, Image, Text, StyleSheet } from 'react-native';

import MultiListItem from './MultiListItem';

export const ListItemsTypes = {
    MUSIC_SOURCE: 'MUSIC_SOURCE',
    PLAYLIST: 'PLAYLIST'
};

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
                    imageSource={item.imageSource}
                    contentTitle={item.contentTitle}
                    contentDescText={item.contentDescText}
                />
            );
            break;

        case ListItemsTypes.PLAYLIST:
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