import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet,ImageBackground,Image } from 'react-native';

import LocationScreenInfo from '../components/LocationScreenInfo';
import { Text, View } from '../components/Themed';

export default function LocationScreen() {
  return (
    <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require("../assets/images/back.jpg")}>
    
      <View style={styles.container}>
    
        <Image style={styles.logo} source={require("../assets/images/logo.png")}/>

        <LocationScreenInfo path="/screens/LocationScreen.tsx" />
    
    
      </View>
    
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"rgba(0,0,0,0)",
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  backgroundImage:{
    flex:1,
    justifyContent:'center'
  }
,  logo:{
  resizeMode:'contain', 
  height: 80,
  marginBottom:20,
  marginLeft:30,
},
});
