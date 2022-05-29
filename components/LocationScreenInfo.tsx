import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity, TextInput } from 'react-native';

import Colors from '../constants/Colors';
import React from 'react';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import SelectDropdown from 'react-native-select-dropdown';

export default function LocationScreenInfo({ path }: { path: string }) {

  const states = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI",
                    "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"]

  return (
    <View style={{ backgroundColor: "rgba(255,255,255,0)" }}>

      <View style={styles.getStartedContainer}>

        <SelectDropdown
          defaultButtonText={'Selecione o seu Estado'}
          data={states}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
          }}
        />

      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    borderRadius: 30,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 20,
    marginHorizontal: 100,
    backgroundColor: "rgba(0,0,0,0)",
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 5,
  },
  helpLinkText: {
    textAlign: "auto",
    width: "100%",
  },
  input: {
    height: 40,
    width: "80%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "darkblue",
  },
});
