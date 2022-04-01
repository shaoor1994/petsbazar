import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function HenMedicines() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('MedicinesDetailScreen')}
      >
        <View style={styles.cardView}>
          <Image
            style={styles.cardImage}
            source={require("../../assets/HenMedicinesPics/HM1.jpg")}
          />
          <Text style={styles.nameStyling}>Sokra</Text>
          <Text style={styles.SokraStyling}>Rawalpindi</Text>
          <Text style={styles.priceStyling}>Rs.400/-</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <View style={styles.cardView}>
          <Image
            style={styles.cardImage}
            source={require("../../assets/HenMedicinesPics/HM2.jpg")}
          />
          <Text style={styles.nameStyling}>Hazam</Text>
          <Text style={styles.LoctStyling}>Rawalpindi</Text>
          <Text style={styles.priceStyling}>Rs.400/-</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <View style={styles.cardView}>
          <Image
            style={styles.cardImage}
            source={require("../../assets/HenMedicinesPics/HM3.jpg")}
          />
          <Text style={styles.nameStyling}>GAR-VIT</Text>
          <Text style={styles.locationStyling}>Rawalpindi</Text>
          <Text style={styles.priceStyling}>Rs.400/-</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <View style={styles.cardView}>
          <Image
            style={styles.cardImage}
            source={require("../../assets/HenMedicinesPics/HM4.jpeg")}
          />
          <Text style={styles.nameStyling}>GrowForte</Text>
          <Text style={styles.GrowForteStyling}>Rawalpindi</Text>
          <Text style={styles.priceStyling}>Rs.400/-</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <View style={styles.cardView}>
          <Image
            style={styles.cardImage}
            source={require("../../assets/HenMedicinesPics/HM5.jpg")}
          />
          <Text style={styles.nameStyling}>ENROSYM</Text>
          <Text style={styles.EnrosymStyling}>Rawalpindi</Text>
          <Text style={styles.priceStyling}>Rs.400/-</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

var styles = StyleSheet.create({
  ImageStyling: {
    height: 100,
    width: 100,
    //margin:-10
    // marginLeft:-10,
    //marginRight:-10,
    resizeMode: "cover",
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 10,
    marginLeft: "2%",
    width: "100%",
    shadowColor: "#000",
    /* shadowOpacity:1,
    shadowOffset:{
        height:3,
        width:3
    }*/
  },
  cardImage: {
    width: "50%",
    height: 120,
    resizeMode: "contain",
    borderRadius: 10,
  },
  nameStyling: {
    marginLeft: 5,
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 25,
  },
  locationStyling: {
    marginLeft: -80,
    marginTop: 50,
    fontWeight: "bold",
    fontSize: 20,
  },
  priceStyling: {
    marginLeft: -80,
    marginTop: 80,
    fontWeight: "bold",
    fontSize: 20,
  },
  cardView: {
    flexDirection: "row",
    alignContent:'space-around'
  },
  LoctStyling: {
    marginLeft: -65,
    marginTop: 50,
    fontWeight: "bold",
    fontSize: 20,
  },
  EnrosymStyling: {
    marginLeft: -90,
    marginTop: 50,
    fontWeight: "bold",
    fontSize: 20,
  },
  SokraStyling:{
    marginLeft: -55,
    marginTop: 50,
    fontWeight: "bold",
    fontSize: 20,
  },
  GrowForteStyling:{
    marginLeft: -90,
    marginTop: 50,
    fontWeight: "bold",
    fontSize: 20,
  },
});
