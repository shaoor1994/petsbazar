import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  ScrollView
} from "react-native";
import { Icon } from "react-native-elements";
import React, { Component } from "react";
import CatPics from "../components/CatPics";

export default class CatApiList extends Component {
  static navigationOptions = {
    //  title: 'PetsBazar',

    headerTitle: () => (
      <Image
        style={{
          resizemode: "cover",
          width: 30,
          height: 30,
          marginBottom: 5,
          marginTop: 5,
          marginLeft: 60,
        }}
        source={require("../assets/PETSBAZAR-Favicon.png")}
      />
    ),
    headerRight: (
      <Text style={{ fontWeight: "bold", marginRight: 80, fontSize: 25 }}>
        PetsBazar
      </Text>
    ),
    headerLeft: (
      <TouchableOpacity
      //onPress={()=> this.props.navigation.push('sDrwaer')}
      >
        <Icon
          // containerStyle={styles.icon}
          style={{ paddingLeft: 10 }}
          type="ionicon"
          name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
          //name={Platform.OS === "android" ? "android-menu" : "md-menu"}
        />
      </TouchableOpacity>
    ),

    headerStyle: {
      backgroundColor: "#ffffff",
    },

    //headerTintColor: '#0ff',
    headerTitleStyle: {
      fontWeight: "bold",
    },
    headerTitleAlign: "left",
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.mainText}>Search For a Pet</Text>
        <View style={styles.SectionStyle}>
          <Image
            style={styles.SearchImage}
            source={require("../assets/searchicon.png")}
          />
          <TextInput
            style={styles.searchPets}
            placeholder="search"
            placeholderTextColor="black"
          />
          <Image
            style={styles.gpsImage}
            source={require("../assets/gps.png")}
          />
        </View>

        <View style={styles.Scroller}>

        <ScrollView>

            <CatPics/>

        </ScrollView>

        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  mainText: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 20,
    marginLeft: 15,
  },
  SectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#000",
    height: 40,
    borderRadius: 5,
    margin: 10,
  },

  SearchImage: {
    padding: 10,
    marginLeft: 10,
    marginTop: 8,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    alignItems: "center",
  },
  gpsImage: {
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 8,
    height: 20,
    width: 20,
    resizeMode: "stretch",
    alignItems: "center",
  },

  searchPets: {
    /* height:40,
         marginLeft:10,
         width:200,
         borderWidth:1,
         borderColor:'black',
         backgroundColor: 'rgba(255, 255,255,0.5)',
         textAlign:'center',
         borderRadius:20,*/
    flex: 1,
  },
  Scroller:{
      flex:1,
      marginTop:10
  }
});
