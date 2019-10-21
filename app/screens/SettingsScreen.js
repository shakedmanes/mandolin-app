import React from 'react';
import SettingsConfig from '../constants/Settings';
import { SectionList, TextInput, StyleSheet, Text, Button, View } from 'react-native';

const SectionDataTypes = {
  TEXT_INPUT: 'textInput',
  BUTTON: 'button'
};

export default class SettingsScreen extends React.Component {  
  render() {
    const sections = [
      {
        data: [
          {
            value: SettingsConfig.userIdSectionValue,
            type: SectionDataTypes.TEXT_INPUT
          }
        ],
        title: SettingsConfig.userIdSectionTitle
      },
      {
        data: [
          {
            value: SettingsConfig.syncUserSectionValue,
            type: SectionDataTypes.BUTTON,
            onPress: this._syncPressed
          },
        ],
        title: SettingsConfig.syncUserSectionTitle,
      },
    ];


    return (
      <SectionList
        style={styles.container}
        renderItem={this._renderItem}
        renderSectionHeader={this._renderSectionHeader}
        stickySectionHeadersEnabled={true}
        keyExtractor={(item, index) => index}
        ListHeaderComponent={ListHeader}
        sections={sections}
      />
    );
  }

  _syncPressed = () => {
    console.log('Sync Button Pressed');
  }

  _renderSectionHeader = ({ section }) => {
    return <SectionHeader title={section.title} />;
  };

  _renderItem = ({ item }) => {
    let returnItem = null;
    switch (item.type) {



      case SectionDataTypes.TEXT_INPUT:
        returnItem = (
          <SectionContent>
            <TextInput style={styles.sectionContentText} placeholder={item.value}></TextInput>
          </SectionContent>
        );
        break;
      
      case SectionDataTypes.BUTTON:
        returnItem = (
          <SectionContent>
            <Button 
              style={styles.sectionContentText}
              title={item.value}
              onPress={item.onPress}
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
}

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

const SectionHeader = ({ title }) => {
  return (
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );
};

const SectionContent = props => {
  return <View style={styles.sectionContentContainer}>{props.children}</View>;
};

SettingsScreen.navigationOptions = {
  title: SettingsConfig.pageTitle,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
  },
  sectionHeaderContainer: {
    backgroundColor: '#fbfbfb',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ededed',
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: '500',
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
  settingsDesctiptionTitle: {
    fontWeight: '600',
    fontSize: 18,
  },
  descriptionText: {
    fontSize: 14,
    marginTop: 6,
    color: '#4d4d4d',
  },
});