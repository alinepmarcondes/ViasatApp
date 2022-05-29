import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import navigation from '../navigation';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('https://app-challenge-api.herokuapp.com/plans')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text: React.SetStateAction<string>) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.isp
          ? item.isp.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item

      // Flat List Item
      <TouchableOpacity onPress={() => navigation.navigate("TabTwo")}>
        <View style={styles.itemStyle}>

          <Text style={styles.titleStyle}>
            {item.isp.toUpperCase()}
          </Text>

          <Text style={styles.descStyle}>
            {item.description}
          </Text>

          <Text>
            {'Capacidade de dados: '}
            {item.data_capacity}
          </Text>

          <Text>
            {'Velocidade de download: '}
            {item.download_speed}
          </Text>

          <Text>
            {'Velocidade de upload: '}
            {item.upload_speed}
          </Text>

          <Text>
            {'Tipo de internet: '}
            {item.type_of_internet}
          </Text>

          <Text style={styles.priceStyle}>
            {'Preço mensal (R$): '}
            {item.price_per_month}
          </Text>

        </View>
      </TouchableOpacity>

    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 1,
          width: '100%',
        }}
      />
    );
  };

  const getItem = (item: { id: string; isp: string; }) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.isp);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text: any) => searchFilterFunction('')}
          placeholder="Digite aqui..."
          value={search}
        //backgroundColor='darkblue'
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: 'darkblue',
    borderWidth: 0,
    borderRadius: 15,
    margin: 10,

    shadowColor: 'gray',
    shadowRadius: 5,
    shadowOpacity: 0.5
  },
  titleStyle: {
    fontWeight: "bold"
  },
  descStyle: {
    fontStyle: "italic",
    color: "grey",
    marginBottom: 10
  },
  priceStyle: {
    marginTop: 10,
    fontWeight: "bold",
  }
});

