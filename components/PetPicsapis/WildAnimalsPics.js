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

const WildAnimalPics = () => {
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
if (itemData.item.category == "Wild-Animals") {
    return (
      console.log(itemData),
      (
        <View style={styles.containerFlate}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("DetailScreen", { itemData })}
          >
            <View style={styles.innerContainer}>
              <View style={ itemData.item.name == "Hedgehog" ? styles.hedgehogStyling: {  marginLeft: -2}}>
                <Image style={styles.imgsettings} source={{ uri: url }} />
              </View>

              <View style={{
                  top: 5,
                  left: 0,
                  bottom: 0,
                  right: 60,
                  position: "relative",
                  padding: 10,
                  //alignItems:'flex-start',
                  flexDirection: "column",
                  marginLeft: 15,}}>
                  <View style={{marginHorizontal:40}}>
                <Text style={styles.title}>{itemData.item.name}</Text>
                </View>
                <View style={{marginHorizontal:40}}>
                <Text style={styles.details}>{itemData.item.price}</Text>
                <Text style={styles.details}>{itemData.item.city}</Text>
                </View>
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
        width={380}

        contentContainerStyle={{paddingVertical:30,paddingHorizontal:-20}}
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
       //marginRight: -20,
       textAlign: "left",
       // alignSelf:'flex-end',
       //marginVertical:5
       //marginLeft: "auto",
       //marginRight: "auto",
       //marginLeft:30,
       //marginRight:-30,
       //margin:'auto',
       writingDirection: "rtl",
       marginBottom: 5,
       textAlignVertical: "top",
       alignSelf:'flex-start'
  },
  details: {
       // fontWeight: "bold",
       fontSize: 17,
       color: "black",
       // marginRight: -70,
       //marginVertical:5
       //marginLeft:10,
       textAlign: "left",
       // alignSelf:'flex-end',
       //marginLeft: "auto",
       marginLeft:10,
       marginRight:-20,
       textAlignVertical: "top",
       alignSelf:'flex-start'
      // marginRight:10
  },
  imgsettings: {
    height: 127,
    width: 127,
    resizeMode: "cover",
    marginLeft: 35,

    borderColor: "grey",
    borderRadius: 15,
    borderWidth: 1,
  },
  hedgehogStyling:{
    height: 127,
    width: 127,
    resizeMode: "cover",
    marginLeft: -40,
    marginRight:35,

    borderColor: "grey",
    borderRadius: 15,
   // borderWidth: 1,
  }
});

export default WildAnimalPics;
