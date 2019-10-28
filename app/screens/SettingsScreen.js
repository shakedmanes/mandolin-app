import React, { useState } from 'react';
import { SectionList, TextInput, StyleSheet, Text, Button, View } from 'react-native';

import SettingsConfig from '../constants/Settings';
import Colors from '../constants/Colors';

// Section data type for rendering different items
const SectionDataTypes = {
  TEXT_INPUT: 'textInput',
  BUTTON: 'button'
};

export default function SettingsScreen() {
  // User id state manager
  const [userId, setUserId] = useState('');

  /**
   * Syncing data by current user id
   */
  const _syncPressed = () => {
    // TODO: Here should sync all the user playlist and stuff from `mandolin-cloud`
    console.log('Sync Button Pressed');
  };
  
  /**
   * Update input text of user id
   * @param {string} newUserId New user id received
   */
  const _changeUserId = (newUserId) => {
    setUserId(newUserId);
  };
  
  /**
   * Function for render each section in SectionList
   */
  const _renderSectionHeader = ({ section }) => {
    return <SectionHeader title={section.title} />;
  };

  /**
   * Function for render each item in SectionList
   */
  const _renderItem = ({ item }) => {
    let returnItem = null;
    switch (item.type) {  
  
      case SectionDataTypes.TEXT_INPUT:
        returnItem = (
          <SectionContent>
            <TextInput 
              style={styles.sectionContentTextInput}
              placeholder={item.placeholder}
              onChangeText={item.onChangeText}
              value={item.value}
            />                          
          </SectionContent>
        );
        break;
      
      case SectionDataTypes.BUTTON:
        returnItem = (
          <SectionContent>
            <Button 
              style={styles.sectionContentButton}
              title={item.value}
              color={'green'}
              onPress={item.onPress}
              disabled={item.disabled}             
            />                          
          </SectionContent>
        );
        break;
  
      default:
        returnItem = (
          <SectionContent>
            <Text styles={styles.sectionContentText}>{item.value}</Text>
          </SectionContent>
        )
        break;
    }
  
    return returnItem;
  };

  // Full sections structure
  const sections = [
    {
      data: [{
        value: userId,
        placeholder: SettingsConfig.userIdSectionValue,
        onChangeText: _changeUserId,   
        type: SectionDataTypes.TEXT_INPUT     
      }],
      title: SettingsConfig.userIdSectionTitle     
    },
    {
      data: [{
        value: SettingsConfig.syncUserSectionValue,
        onPress: _syncPressed,
        disabled: userId === '',
        type: SectionDataTypes.BUTTON
      }],
      title: SettingsConfig.syncUserSectionTitle
    },
  ];  

  return (
    <SectionList
      style={styles.container}
      renderItem={_renderItem}
      renderSectionHeader={_renderSectionHeader}
      stickySectionHeadersEnabled={true}
      keyExtractor={(item, index) => index}
      ListHeaderComponent={ListHeader}
      sections={sections}
    />
  );
}

// Utility component for using SectionList ListHeaderComponent
const ListHeader = () => {

  return (
    <View style={styles.titleContainer}>

      <View style={styles.titleTextContainer}>
        <Text style={styles.settingsDesctiptionTitle} numberOfLines={1}>
          {SettingsConfig.settingsDescriptionUpper}
        </Text>

        <Text style={styles.descriptionText}>{SettingsConfig.settingsDescriptionLower}</Text>
      </View>
    </View>
  );
};

// Utility component for having at each section header
const SectionHeader = ({ title }) => {
  return (
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );
};

// Utility component for having at each section content
const SectionContent = props => {
  return <View style={styles.sectionContentContainer}>{props.children}</View>;
};

SettingsScreen.navigationOptions = {
  title: SettingsConfig.pageTitle,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkThemePrimary,
  },
  titleContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
  },
  sectionHeaderContainer: {
    backgroundColor: Colors.darkThemePrimaryLight,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderLeftWidth: StyleSheet.hairlineWidth,
    // borderColor: '#ededed',
    borderColor: 'green'
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.darkThemeSecondary
  },
  sectionContentContainer: {
    paddingTop: 8,
    paddingBottom: 12,
    paddingHorizontal: 15,
  },
  sectionContentText: {
    color: '#808080',
    fontSize: 14,
    width: '99%',
  },
  sectionContentTextInput: {
    color: '#808080',
    fontSize: 14,
    width: '99%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.darkThemeSecondaryLight
  },
  sectionContentButton: {
    width: '99%',
    fontSize: 16,
    
  },
  settingsDesctiptionTitle: {
    fontWeight: '600',
    fontSize: 18,
    color: 'green'
  },
  descriptionText: {
    fontSize: 14,
    marginTop: 6,
    // color: '#4d4d4d',
    color: Colors.darkThemeSecondaryLight
  },
});