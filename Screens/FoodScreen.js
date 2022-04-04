import React, { Component, useState, TouchableHighlight } from "react";
import { Icon } from "react-native-elements";

import { search } from "react-native-vector-icons/FontAwesome";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  NativeModules,
  LayoutAnimation,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import HenPics from "../components/HenPics";
import CatFoodPics from "../components/FoodPics/CatFoodPics";
import DogFoodPics from "../components/FoodPics/DogFoodPics";
import BirdFoodPics from "../components/FoodPics/BirdFoodPics";
import Constants from 'expo-constants';
//import PetsList from '../components/PetsList';
//import Api from '../components/Api';

export default class FoodScreenHome extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "",
      
      
    };
  }

  state = {active: null};

 

  setTab = (tab) => {
    this.setState({ selectedTab: tab });
  };

  selectedTab = () => {
    switch (this.state.selectedTab) {
      case "Cat":
        return <CatFoodPics />;
      case "Lion":
        return <Text>Lion Food comming soon.....!</Text>;
      case "Parrot":
        return <BirdFoodPics />;
      case "Hamster":
        return <Text>Hamster Food comming soon.....!</Text>;
      case "Hen":
        return <Text>Hen Food comming soon.....!</Text>;
      case "Dog":
        return <DogFoodPics />;
      case "Rabbit":
        return <Text>Rabbit Food comming soon.....!</Text>;
      case "Monkey":
        return <Text>Monkey Food Comming soon.....!</Text>;
      default:
        return <CatFoodPics />;
    }
  };

  render() {
    const { index } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.mainText}>Search For Pet Food</Text>
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
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Cities")}
          >
            <Image
              style={styles.gpsImage}
              source={require("../assets/gps.png")}
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
                  onPress={() => {
                    this.setTab("Cat");
                    this.setState({ active: 0 })
                  }}
                  style={this.state.active === 0 ? styles.activebutton : null}
                >
                  <Image
                    style={styles.ImageStyling}
                    source={require("../assets/petslist/cat.png")}
                  />
                </TouchableOpacity>
                
                
                <TouchableOpacity
                  onPress={() => {
                    this.setTab("Lion");
                    this.setState({ active: 1 })
                  }}
                  
                  style={this.state.active === 1 ? styles.activebutton : null}
                
                >
                  <Image
                    style={styles.ImageStyling}
                    source={require("../assets/petslist/lion.png")}
                  />
                </TouchableOpacity>
              
                <TouchableOpacity onPress={() =>{ this.setTab("Parrot")
                
                this.setState({ active: 2 })
                }}
                
                style={this.state.active === 2 ? styles.activebutton : null}
                >
                  <Image
                    style={styles.ImageStyling}
                    source={require("../assets/petslist/birds.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.setTab("Hamster")
                
                this.setState({ active: 3 })

                }}
                
                style={this.state.active === 3 ? styles.activebutton : null}

                >
                  <Image
                    style={styles.ImageStyling}
                    source={require("../assets/petslist/hamster.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.setTab("Hen")
                
                this.setState({ active: 4 })

                }}
                
                style={this.state.active === 4 ? styles.activebutton : null}
                
                >
                  <Image
                    style={styles.ImageStyling}
                    source={require("../assets/petslist/Hen.png")}
                  />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.setTab("Dog")
                
                this.setState({ active: 5 })

                }}
                
                style={this.state.active === 5 ? styles.activebutton : null}
                
                >
                  <Image
                    style={styles.ImageStyling}
                    source={require("../assets/petslist/dog.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.setTab("Monkey")
                
                this.setState({ active: 6 })
                
                }}
                
                style={this.state.active === 6 ? styles.activebutton : null}

                >
                  <Image
                    style={styles.ImageStyling}
                    source={require("../assets/petslist/monkey.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.setTab("Rabbit")
                this.setState({ active: 7 })

                }}
                
                style={this.state.active === 7 ? styles.activebutton : null}

                >
                  <Image
                    style={styles.ImageStyling}
                    source={require("../assets/petslist/rabbit.png")}
                  />
                </TouchableOpacity>
              </ScrollView>
            </View>

            <View style={styles.petsApiView}>{this.selectedTab()}</View>
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
  activebutton:{
    borderColor:'#FF642E',
    borderWidth:2,
    marginHorizontal:5,
    padding:3,
    borderRadius:10
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    borderColor: '#dc00ff',
   // borderRadius: 10,
    borderWidth: 1,
    //padding: 10,
  }
});
