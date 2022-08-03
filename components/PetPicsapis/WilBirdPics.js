import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Image,
  ImageBackground,
  Platform,
} from "react-native";

const DogPics = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getDataUsingSimpleGetCall = () => {
    axios
      .get(
        Platform.OS === "android"
          ? "http://192.168.77.23:4000/pets"
          : " http://10.0.2.2:4000/pets"
      )
      .then((json) => setData(json.data))
      .finally(() => setLoading(false));
    console.log("Display Data", data);
  };

  useEffect(() => {
    getDataUsingSimpleGetCall();
  }, []);




  const _renderItem = (itemData) => {
    let url =
      Platform.OS === "android"
        ? `http://192.168.77.23:2000/image/${itemData.item.image}`
        : `http://10.0.2.2:2000/image/${itemData.item.image}`;
if (itemData.item.category == "Wild-Birds") {
    return (
      console.log(itemData),
      (
        <View style={styles.containerFlate}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("DetailScreen", { itemData })}
          >
            <View style={styles.innerContainer}>
              <View style={{ marginLeft: 10 }}>
                <Image style={styles.imgsettings} source={{ uri: url }} />
              </View>

              <View style={{ marginLeft: 25, marginTop: -20 }}>
                <Text style={styles.title}>{itemData.item.name}</Text>
                <Text style={styles.details}>{itemData.item.price}</Text>
                <Text style={styles.details}>{itemData.item.city}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )
    );} 
      
  };



  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={_renderItem}
        keyExtractor={(item) => item.id}
      />

      {/*isLoading && 
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={getDataUsingSimpleGetCall}>
                    <Text>Simple Get Call</Text>
                </TouchableOpacity>
           */}

      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  containerFlate: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 14,
    height: 130,
    width: "93%",
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    // padding:5,
    alignItems: "center",
  },
  title: {
    //fontWeight: "bold",
    fontSize: 22,
    color: "black",
    marginRight: 30,
    //marginVertical:5
    // marginLeft:10
  },
  details: {
    //fontWeight: "bold",
    fontSize: 17,
    color: "black",
    marginRight: 60,
    //marginVertical:5
    // marginLeft:10
  },
  imgsettings: {
    height: 127,
    width: 127,
    resizeMode: "cover",
    marginLeft: 0,
    borderColor: "grey",
    borderRadius: 15,
    borderWidth: 1,
    marginRight:50
  },
});

export default DogPics;
