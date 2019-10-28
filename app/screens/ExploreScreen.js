import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ListItemsTypes from '../constants/ListItemsTypes'; 
import MultiList from '../components/MultiList/MultiList';
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
    },
    {
      key: 'somegoodplaylist',
      type: ListItemsTypes.PLAYLIST,
      imageSource: require('../assets/images/youtube_logo.png'),
      contentTitle: 'Liked Songs',
      contentDescText: 'Tracks: 40'
    },
    {
      key: 'newSong',
      type: ListItemsTypes.SONG,
      imageSource: require('../assets/images/song.png'),
      contentTitle: 'KIKA',
      contentDescUpper: '3:02',
      contentDescText: '6ix9ine, Tory Lanez',
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
