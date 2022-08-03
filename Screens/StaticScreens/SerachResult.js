// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/

// import React in our code
import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import { SafeAreaView, Text, StyleSheet, View, FlatList ,Platform,TouchableOpacity,Image} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";

const SearchResult = () => {
  const [search, setSearch] = useState('');

  const navigation = useNavigation();

  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch( Platform.OS === "android"
    ? "http://192.168.77.23:4000/pets"
    : " http://10.0.2.2:4000/pets")
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.name
          ? item.name.toUpperCase()
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

  const _renderItem = (itemData) => {
    let url =
      Platform.OS === "android"
        ? `http://192.168.77.23:2000/image/${itemData.item.image}`
        : `http://10.0.2.2:2000/image/${itemData.item.image}`;
//if (itemData.item.category == "Dog") {
    return (
      console.log(itemData),
      (
        <View style={styles.containerFlate}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("DetailScreen", { itemData })}
          >
            <View style={styles.innerContainer}>
              <View style={{ marginLeft: 10 ,alignContent:'flex-start'}}>
                <Image style={styles.imgsettings} source={{ uri: url }} />
              </View>

              <View style={{ marginLeft: 25, marginTop: -20 }}>
                <Text numberOfLines={2} style={styles.title}>{itemData.item.name}</Text>
                <Text style={styles.details}>{itemData.item.price}</Text>
                <Text style={styles.details}>{itemData.item.city}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )
    );}

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
        //  height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' name : ' + item.name);
  };

  return (
    <SafeAreaView style={{ flex: 1,marginBottom:90}}>
      <View style={styles.container}>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Type Here..."
          value={search}
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={_renderItem}
          nestedScrollEnabled={true}
          
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
  },
  containerFlate: {
    flex: 1,
    marginVertical: 9,
    marginHorizontal: 9,
    height: 130,
    width: "98%",
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "#ffffff",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
  },
  buttonStyle: {
    justifyContent: "center",
    // alignItems: 'center',
    // backgroundColor: '#DDDDDD',
    // padding: 10,
    alignSelf: "center",
    width: "100%",
    //marginTop: 400,
  },
  innerContainer: {
    // flex: 1,
    borderRadius: 8,
    justifyContent:"center",
    alignItems: "center",
    flexDirection: "row",
    // padding:5,

    //position:'relative'
    
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    color: "black",
    marginRight: -30,
    textAlign:'center',
    
    //flex:1
    //marginVertical:5
    // marginLeft:10
  
  },
  details: {
    fontWeight: "bold",
    fontSize: 17,
    color: "black",
    marginRight: -10,
    //marginVertical:5
    // marginLeft:10
  },
  imgsettings: {
    height: 127,
    width: 127,
    resizeMode: "cover",
    marginLeft: -60,
    borderColor: "grey",
    borderRadius: 15,
    borderWidth: 1,
    //position:'relative'
  }
});

export default SearchResult;
