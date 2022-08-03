import React, { Component } from "react";
import { TouchableOpacity, Image } from "react-native";
console.disableYellowBox = true;
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Drawers from "./Screens/StaticScreens/Drawers";
//import SplashScreen from "./Screens/TempScreens/SplashScreen";
import CatAccessoriesScreen from "./Screens/AccessoriesScreen/CatAccessories";
import HomeScreen from "./Screens/StaticScreens/Home";
import Grooming from "./Screens/StaticScreens/Grooming";
import PetsScreenHome from "./Screens/PetsScreen/CatsScreen";
import CatFoodScreen from "./Screens/FoodScreen/CatFoodScreen";
import CatAccessoriesPics from "./components/AccessoryPics/CatAccessoriessPics";
import DetailScreen from "./Screens/StaticScreens/DetailsScreen";
import HenMedicine from "./components/MedicinesPics/HenMedicines";
import Sellnow from "./Screens/StaticScreens/Sellnow";
//import Medicines from "./Screens/MedicinesScreen/HenMedicines";
import { Stack } from "native-base";
import Contactus from "./Screens/StaticScreens/Contactus";
import Cities from "./Screens/StaticScreens/Cities";
import VeterinaryScreen from "./Screens/StaticScreens/VeterinaryClinic";
import MedicinesDetailScreen from "./components/MedicineDetails/MedicinesDetails";
import DogPetsScreenHome from "./Screens/PetsScreen/DogsScreen"
import TempSellNow from "./Screens/TempScreens/TempSellNow";
import HenMedicines from "./components/MedicinesPics/HenMedicines";
//for side menu

const Navigation = createStackNavigator(
  {
   

    /*HomeScreen: {
     screen: HomeScreen,
     //screen:Drawers,
      navigationOptions: {
        headerShown: 'true',
        
      }
    },*/
    
    Drawers: {
      screen: Drawers,
      //screen:Drawers,
      navigationOptions: {
        headerShown: null,
      },
    },
    PetsScreenHome: {
      screen: PetsScreenHome,
      navigationOptions: {
        headerShown: "true",
      },
    },
    CatFoodScreen: {
      screen: CatFoodScreen,
      navigationOptions: {
        headerShown: "true",
      },
    },
    HenMedicine: {
      screen: HenMedicine,
      navigationOptions: {
        headerShown: "true",
      },
    },
    Grooming: {
      screen: Grooming,
      navigationOptions: {
        headerShown: "true",
      },
    },
    CatAccessoriesScreen: {
      screen: CatAccessoriesScreen,
      navigationOptions: {
        headerShown: "true",
      },
    },
    Cities: {
      screen: Cities,
      navigationOptions: {
        headerShown: "true",
      },
    },
    DetailScreen: {
      screen: DetailScreen,
      navigationOptions: {
        headerShown: "true",
        // title: 'Pets Bazar'
      },
    },
    MedicinesDetailScreen: {
      screen: MedicinesDetailScreen,
      navigationOptions: {
        headerShown: "true",
        // title: 'Pets Bazar'
      },
    },

    DogPetsScreenHome: {
      screen: DogPetsScreenHome,
      navigationOptions: {
        headerShown: "true",
      },
    },
  
    Sellnow: {
      screen: Sellnow,
      navigationOptions: {
        headerShown: "true",
        // title: 'Pets Bazar'
      },
    },

    TempSellNow:{
      screen: TempSellNow,
      navigationOptions: {
        headerShown: "true",
        // title: 'Pets Bazar'
      },
    },
    Contactus: {
      screen: Contactus,
      navigationOptions: {
        headerShown: "true",
        // title: 'Pets Bazar'
      },
    },
    VeterinaryScreen: {
      screen: VeterinaryScreen,
      navigationOptions: {
        headerShown: "true",
      },
    },
  },
  {
    initialRouteName: "Drawers",
    mode: "modal",
  }
);

const Appcontainer = createAppContainer(Navigation);

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Appcontainer />
      </NavigationContainer>
    );
  }
}
