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
import CatPics from "../../components/PetPicsapis/CatPics";
import DogPics from "../../components/PetPicsapis/DogPics";
import HenMedicines from "../../components/MedicinesPics/HenMedicines";




export default class RabbitMedicines extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "",
    };
  }

 

  state = { active: null };

  setTab = (tab) => {
    this.setState({ selectedTab: tab });
  };
  selectedTab = () => {
    switch (this.state.selectedTab) {
      case "Cat":
        return <Text>Cat Medicine comming soon.....!</Text>;
      case "Lion":
        return <Text>Lion Medicines comming soon.....!</Text>;
      case "Parrot":
        return <Text>Bird Medicines comming soon.....!</Text>;
      case "Hamster":
        return <Text> Hamster Medicines comming soon.....!</Text>;
      case "Hen":
        return <HenMedicines />;
      case "Dog":
        return <Text>Dog Medicines comming soon.....!</Text>;
      case "Rabbit":
        return <Text>Rabbit Medicines comming soon.....!</Text>;
      case "Monkey":
        return <Text>Monkey Medicines comming soon.....!</Text>;
      default:
        return <Text>Rabbit Medicine comming soon.....!</Text>;
    }
  };

  static navigationOptions = {
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
          style={{ paddingLeft: 10 }}
          type="ionicon"
          name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
        />
      </TouchableOpacity>
    ),

    headerStyle: {
      backgroundColor: "#ffffff",
    },

    headerTitleStyle: {
      fontWeight: "bold",
    },
    headerTitleAlign: "left",
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.mainText}>Search Medicines for Pet</Text>
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
          <Image
            style={styles.gpsImage}
            source={require("../../assets/gps.png")}
          />
        </View>

        <View style={styles.ViewContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
          >
            <View style={styles.petsListView}>
              
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <TouchableOpacity onPress={() => {this.setTab("Cat");
                
                this.setState({ active: 0 });
                
                }}
                
                style={this.state.active === 0 ? styles.activebutton : null}
                >
                  <Image
                    style={styles.ImageStyling}
                    source={require("../../assets/petslist/cat.png")}
                  />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.setTab("Lion");
                
                this.setState({ active: 1 });
                
                }}
                
                style={this.state.active === 1 ? styles.activebutton : null}
                >
                  <Image
                    style={styles.ImageStyling}
                    source={require("../../assets/petslist/lion.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.setTab("Parrot");
                
                this.setState({ active: 2 });
                
                }}
                
                style={this.state.active === 2 ? styles.activebutton : null}
                >
                  <Image
                    style={styles.ImageStyling}
                    source={require("../../assets/petslist/birds.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.setTab("Hamster");
                
                this.setState({ active: 3 });
                
                }}
                
                style={this.state.active === 3 ? styles.activebutton : null}
                >
                  <Image
                    style={styles.ImageStyling}
                    source={require("../../assets/petslist/hamster.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.setTab("Hen");
                
                this.setState({ active: 4 });
                
                }}
                
                style={this.state.active === 4 ? styles.activebutton : null}
                >
                  <Image
                    style={styles.ImageStyling}
                    source={require("../../assets/petslist/Hen.png")}
                  />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.setTab("Dog");
                
                this.setState({ active: 5 });
                
                }}
                
                style={this.state.active === 5 ? styles.activebutton : null}
                >
                  <Image
                    style={styles.ImageStyling}
                    source={require("../../assets/petslist/dog.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.setTab("Monkey");
                
                this.setState({ active: 6 });
                
                }}
                
                style={this.state.active === 6 ? styles.activebutton : null}
                >
                  <Image
                    style={styles.ImageStyling}
                    source={require("../../assets/petslist/monkey.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.setTab("Rabbit");
                
                this.setState({ active: 7 });
                
                }}
                
                style={this.state.active === 7 ? styles.activebutton : null}
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
    
    marginLeft: -10,
    marginRight: -10,
    resizeMode: "cover",
  },
  petsListView: {
    
  },
  petsApiView: {
    marginVertical: 15,
  },
  ViewContainer: {
    flex: 1,
   
    flexDirection: "column",
   
  },
  activebutton: {
    borderColor: "#FF642E",
    borderWidth: 2,
    margin: 5,
    padding: 3,
    borderRadius: 10,
  }
});
