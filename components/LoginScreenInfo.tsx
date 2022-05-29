import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity, TextInput } from 'react-native';

import Colors from '../constants/Colors';
import React from 'react';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function EditScreenInfo({ path }: { path: string }) {

  const [login, onChangeLogin] = React.useState(null);
  const [senha, onChangeSenha] = React.useState(null);

  return (
    <View style={{ backgroundColor: "rgba(255,255,255,0)" }}>

      <View style={styles.getStartedContainer}>

        <TextInput
          style={styles.input}
          onChangeLogin={onChangeLogin}
          value={login}
          placeholder="Nome do usuário"
        />

        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeSenha={onChangeSenha}
          value={senha}
          placeholder="Senha"
        />

        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handlePasswordPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
              Esqueci a senha
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}
function handlePasswordPress() {
  WebBrowser.openBrowserAsync(
    'https://www.instagram.com/'
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginBottom: 80,
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
