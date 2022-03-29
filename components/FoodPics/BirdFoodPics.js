import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function BirdFoodPics() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("DetailScreen")}
      >
        <View style={styles.cardView}>
          <Image
            style={styles.cardImage}
            source={require("../../assets/BirdsFoodPics/BirdFood1.jpeg")}
          />
          <Text style={styles.nameStyling}>G-5 Plus Syrup</Text>
          <Text style={styles.locationStyling}>Rawalpindi</Text>
          <Text style={styles.priceStyling}>Rs.1000/-</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <View style={styles.cardView}>
          <Image
            style={styles.cardImage}
            source={require("../../assets/BirdsFoodPics/BirdFood2.png")}
          />
          <Text style={styles.nameStyling}>Calcium Tablets</Text>
          <Text style={styles.locationStyling}>Rawalpindi</Text>
          <Text style={styles.priceStyling}>Rs.1000/-</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <View style={styles.cardView}>
          <Image
            style={styles.cardImage}
            source={require("../../assets/BirdsFoodPics/BirdFood3.png")}
          />
          <Text style={styles.nameStyling}>Calcium Tablets</Text>
          <Text style={styles.locationStyling}>Rawalpindi</Text>
          <Text style={styles.priceStyling}>Rs.1000/-</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <View style={styles.cardView}>
          <Image
            style={styles.cardImage}
            source={require("../../assets/BirdsFoodPics/BirdFood4.png")}
          />
          <Text style={styles.nameStyling}>Calcium Tablets</Text>
          <Text style={styles.locationStyling}>Rawalpindi</Text>
          <Text style={styles.priceStyling}>Rs.1000/-</Text>
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
    marginLeft: 10,
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 25,
  },
  locationStyling: {
    marginLeft: -110,
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
  },
});
