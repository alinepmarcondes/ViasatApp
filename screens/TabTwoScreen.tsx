import { ImageBackground, StyleSheet, Dimensions, Alert } from 'react-native';
import EditScreenInfo from '../components/LoginScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import MapView, { Callout } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { useEffect, useState } from 'react';

export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {
  const aux = 0.025
  const [data, setData] = useState([]);

  const data2 = [{ id: 1, name: "asda", lat: -22.250522654772414, lng: -45.703926083621134 }]

  useEffect(() => {
    fetch('https://app-challenge-api.herokuapp.com/installers')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson[0]);
        setData(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <MapView style={styles.map}
      region={{
        latitude: -22.250522654772414,
        longitude: -45.703926083621134,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04,
      }}>

      {data.map((item, index) => (
        <Marker
          key={item.id}
          coordinate={{
            latitude: item.lat,
            longitude: item.lng
          }}>
          <Callout style={styles.calloutStyle} onPress={() => getItem(item)}>
            <View style={styles.viewStyle}  >
              <Text style={styles.nameStyle} >
                {item.name}
              </Text>
              <Text style={styles.textStyle}>
                {"Nota: "}
                {item.rating}
                {"/10"}
              </Text>
              <Text style={styles.textStyle}>
                {"Preço por km: "}
                {item.price_per_km}
              </Text>
            </View>
          </Callout>
        </Marker>
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  calloutStyle: {
    width: 150,
    height: 60,
    alignItems: 'center',
    alignSelf: 'center'
  },
  viewStyle: {
    backgroundColor: "rgba(0,0,0,0)",
    color: 'black',
  },
  textStyle: {
    color: 'black',
  },
  nameStyle: {
    fontWeight: 'bold',
    color: 'black',
  }
});

const getItem = (item) => {
  Alert.alert('Contratar esse instalador?', ' ', [
    {
      text: 'Contratar',
      onPress: () => console.log('Contratar Pressed'),
      style: 'default',
    },
    {
      text: 'Visualizar disponibilidade',
      onPress: () => console.log('Visualizar disponibilidade pressed'),
    },
    {
      text: 'Cancelar',
      onPress: () => console.log('Cancelar Pressed'),
      style: 'cancel',
    },

  ]
  )
};

