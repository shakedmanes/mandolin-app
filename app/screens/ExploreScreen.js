import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import MultiList, { ListItemsTypes } from '../components/MultiList/MultiList';
import ExploreConfig from '../constants/Explore';
import Colors from '../constants/Colors';

export default function ExploreScreen() {

  const listData = [
    {
      key: 'spotify',
      type: ListItemsTypes.MUSIC_SOURCE,
      imageSource: require('../assets/images/spotify_logo.png'),
      contentTitle: 'Spotify',
      contentDescText: 'Explore Spotify for updating your music library'
    },
    {
      key: 'youtube',
      type: ListItemsTypes.MUSIC_SOURCE,
      imageSource: require('../assets/images/youtube_logo.png'),
      contentTitle: 'Youtube',
      contentDescText: 'Explore Youtube for updating your music library'      
    }
  ];


  return (
    <ScrollView style={styles.container}>
      <MultiList data={listData}/>
    </ScrollView>
  );
}

ExploreScreen.navigationOptions = {
  title: ExploreConfig.pageTitle,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: Colors.darkThemePrimary,
  },
});
