import { useNavigation } from "@react-navigation/native";
import { from } from "form-data";
import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
//import { useNavigation } from "@react-navigation/native";

export default function PetsList() {
  const navigation = useNavigation();
  const apiData = [
    {
      id: 1,

      image: require("../assets/petslist/birds.png"),
      title: "Birds",
      button:<TouchableOpacity onPress={() => navigation.navigate("Birds")}/>
    },
    {
      id: 2,

      image: require("../assets/petslist/cat.png"),
      title: "Cat",
      button:<TouchableOpacity onPress={() => navigation.navigate("Cats")}/>
    },
    {
      id: 3,

      image: require("../assets/petslist/dog.png"),
    },
    {
      id: 4,

      image: require("../assets/petslist/Eagle.png"),
    },
    {
      id: 5,

      image: require("../assets/petslist/hamster.png"),
    },
    {
      id: 6,

      image: require("../assets/petslist/Hen.png"),
    },
    {
      id: 7,

      image: require("../assets/petslist/lion.png"),
    },
    {
      id: 8,

      image: require("../assets/petslist/monkey.png"),
    },
    {
      id: 9,

      image: require("../assets/petslist/peacock.png"),
    },
    {
      id: 10,

      image: require("../assets/petslist/rabbit.png"),
    },
    {
      id: 11,

      image: require("../assets/petslist/tortise.png"),
    },
  ];
  const renderItem = ({ item, index }) => (
    
    
    
    
    <View> 
 
    
      <Image
        style={{ height: 30, width: 30 }}
        source={item.image}
        resizeMode="contain"
      />
     
    </View>
  );

  return (
   
      <FlatList
        data={apiData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      horizontal={true}
      />
    
  );
}
