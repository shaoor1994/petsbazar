import React, { Component, useState } from "react";
import { Icon } from "react-native-elements";

import { search } from "react-native-vector-icons/FontAwesome";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Constants from "expo-constants";
import HenAccessoriesPics from "../../components/AccessoryPics/HenAccessories";
import CatAccessoriesPics from "../../components/AccessoryPics/CatAccessoriessPics";
import DogAccessoriesPics from "../../components/AccessoryPics/DogAccessoriesPics";
import HamsterAccessoriesPics from "../../components/AccessoryPics/HamsterAccessories";
import ParrotAccessoriesPics from "../../components/AccessoryPics/ParrotAccessories";
import RabbitAccessoriesPics from "../../components/AccessoryPics/RabbitAccessoriesPics"
import AquaticAccessoriesPics from "../../components/AccessoryPics/AquaticAccessoriesPics";
export default class DogAccessoriesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "",
    };
  }

  state = { active: null };

  componentWillUnmount() {
    state = {active:null}
    }

  setTab = (tab) => {
    this.setState({ selectedTab: tab });
  };

  selectedTab = () => {
    switch (this.state.selectedTab) {
      case "Cat":
        return <CatAccessoriesPics />;
      case "Parrot":
        return <ParrotAccessoriesPics />;
      case "Hamster":
        return <HamsterAccessoriesPics />;
      case "Hen":
        return <HenAccessoriesPics />;
      case "Dog":
        return <DogAccessoriesPics />;
      case "Rabbit":
        return <RabbitAccessoriesPics/>
      case "Aquatic":
        return <AquaticAccessoriesPics/>;
      default:
        return <DogAccessoriesPics />;
    }
  };

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
        source={require("../../assets/PETSBAZAR-Favicon.png")}
      />
    ),
    headerRight: (
      <Text style={{ fontWeight: "bold", marginRight: 80, fontSize: 25 }}>
        PetsBazar
      </Text>
    ),
    headerLeft: (
      <TouchableOpacity onPress={() => this.props.navigation.push("sDrwaer")}>
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
    //const {isVisible} = this.state
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.mainText}>Search For Pet Accessories</Text>
        <View style={styles.SectionStyle}>
          <Image
            style={styles.SearchImage}
            source={require("../../assets/searchicon.png")}
          />
          <TextInput
            style={styles.searchPets}
            placeholder="search"
            placeholderTextColor="black"
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Cities")}
          >
            <Image
              style={styles.gpsImage}
              source={require("../../assets/gps.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.ViewContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
          >
            <View style={styles.petsListView}>
              {/*<PetsList/>*/}
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <TouchableOpacity
                /*  onPress={() => {
                    this.setTab("Cat");

                    this.setState({ active: 0 });
                  }}
                  style={this.state.active === 0 ? styles.activebutton : null} */
                  onPress={()=>this.props.navigation.navigate("Cat Accessories")}
                >
                  <Image
                    style={styles.ImageStyling}
                    source={require("../../assets/petslist/cat.png")}
                  />
                </TouchableOpacity>

                
                <TouchableOpacity
               /*   onPress={() => {
                    this.setTab("Parrot");
                    this.setState({ active: 2 });
                  }}
                  style={this.state.active === 2 ? styles.activebutton : null} */

                  onPress={()=>this.props.navigation.navigate("Parrot Accessories")}
                >
                  <Image
                    style={styles.ImageStyling}
                    source={require("../../assets/petslist/birds.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                /*  onPress={() => {
                    this.setTab("Hamster");
                    this.setState({ active: 3 });
                  }}
                  style={this.state.active === 3 ? styles.activebutton : null} */
                  onPress={()=>this.props.navigation.navigate("Hamster Accessories")}
                >
                  <Image
                    style={styles.ImageStyling}
                    source={require("../../assets/petslist/hamster.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity
              /*    onPress={() => {
                    this.setTab("Hen");
                    this.setState({ active: 4 });
                  }}
                  style={this.state.active === 4 ? styles.activebutton : null} */

                  onPress={()=>this.props.navigation.navigate("Hen Accessories")}
                >
                  <Image
                    style={styles.ImageStyling}
                    source={require("../../assets/petslist/Hen.png")}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                /*  onPress={() => {
                    this.setTab("Dog");

                    this.setState({ active: 5 });
                  }}
                  style={this.state.active === 5 ? styles.activebutton : null} */

                  onPress={()=>this.props.navigation.navigate("Dog Accessories")}
                >
                  <Image
                    style={styles.ImageStyling}
                    source={require("../../assets/petslist/dog.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                /*  onPress={() => {
                    this.setTab("Monkey");
                    this.setState({ active: 6 });
                  }}
                  style={this.state.active === 6 ? styles.activebutton : null} */
                  onPress={()=>this.props.navigation.navigate("Aquatic Accessories")}
                >
                  <Image
                    style={styles.ImageStyling}
                    source={require("../../assets/petslist/tortise.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                /*  onPress={() => {
                    this.setTab("Rabbit");
                    this.setState({ active: 7 });
                  }}
                  style={this.state.active === 7 ? styles.activebutton : null} */

                  onPress={()=>this.props.navigation.navigate("Rabbit Accessories")}
                >
                  <Image
                    style={styles.ImageStyling}
                    source={require("../../assets/petslist/rabbit.png")}
                  />
                </TouchableOpacity>
              </ScrollView>
            </View>

            <View style={styles.petsApiView}>
              {
                /*
                  this.state.isVisible ?
                    
                        <Api/>
                        
                        :null
                        */

                this.selectedTab()
              }
            </View>
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
  ImageStyling: {
    height: 100,
    width: 100,
    //margin:-10
    marginLeft: -10,
    marginRight: -10,
    resizeMode: "cover",
  },
  petsListView: {
    //marginTop:10,
    //flex:1,
    //flexWrap:'wrap'
  },
  petsApiView: {
    marginVertical: 15,
  },
  ViewContainer: {
    flex: 1,
    /*alignContent:'flex-start' ,*/
    flexDirection: "column",
    //height:Dimensions.get('window').height,
    //width:Dimensions.get('window').width,
    //width: '100%'
  },
  activebutton: {
    borderColor: "#FF642E",
    borderWidth: 2,
    margin: 5,
    padding: 3,
    borderRadius: 10,
  },
});
