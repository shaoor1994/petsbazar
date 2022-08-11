import React, { useState, useEffect } from "react";
import { Icon } from "react-native-elements";
import Header from "../StaticScreens/header";

import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Linking,
  Alert,
  Platform,
} from "react-native";
import axios from "axios";
import App from "../TempScreens/LocalData";
const whatsappHandler = () => {
  Alert.alert(
    "Contact us",
    "+923042224537 ",

    [
      {
        text: "Whatsapp",

        onPress: () => {
          Linking.openURL("http://api.whatsapp.com/send?phone=923320565978");
        },
      },
      {
        text: "Call",

        onPress: () => {
          OpenAnything.Call("+923042224537");
        },
      },
      {
        text: "SMS",
        //onPress: () => console.log('No Pressed'), style: 'cancel'
        onPress: () => {
          OpenAnything.Text("+923042224537");
        },
      },
    ],
    {
      cancelable: true,
    }
  );
};





const FeaturePetScreenOne = ({ route }) => {
 let url =
    Platform.OS === "android"
      ?  `http://192.168.77.23:2000/image/file-1659429603017.png`
      : `http://10.0.2.2:2000/image/file-1659429603017.png`;

  <Header />;

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.imgContainer}>
          <Image source={{ uri: url }} style={styles.img} />
        </View>

        <View style={styles.txtContainer}>
          <Text style={styles.nameTxt}>Lions</Text>
          <Text style={styles.priceTxt}>
            Rs.265000/-
          </Text>

          <Text style={styles.HeadingTxt}>Rawalpindi</Text>
          <Text style={styles.HeadingTxt}>Description:</Text>

          <Text style={styles.desc}>Lion Cubs available in rawalpindi age 2.5 months</Text>
        </View>
        <View>
          <TouchableOpacity onPress={whatsappHandler} style={styles.btn}>
            <Text style={styles.btnText}> BUY NOW </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  HeadingTxt: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },
  nameTxt: {
    fontWeight: "bold",
    fontSize: 30,
    color: "black",
    marginVertical: 5,
  },
  priceTxt: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#ff642e",
    marginVertical: 5,
  },
  Description: {
    fontSize: 20,
    color: "black",
    marginVertical: 5,
  },
  img: {
    height: 300,
    width: "100%",
  },
  mainContainer: {
    flexDirection: "column",
    padding: 10,
  },
  imgContainer: {
    flex: 1,
  },
  txtContainer: {
    // flex: 1,
    paddingVertical: 10,
  },
  touchView: {
    marginTop: 10,
    flex: 1,
    //alignSelf:'center',
    //height:'50'
    //marginBottom:'40'
  },
  btn: {
    backgroundColor: "#ff9933",
    width: "25%",
    height: "25%",
    alignSelf: "center",
    marginTop:15,
    borderRadius: 10,
    marginBottom: 40,
  },
  btnText: {
    fontWeight: "bold",
    alignSelf: "center",
   marginTop: 12,
    fontSize: 15,
  },
});

export default FeaturePetScreenOne;
