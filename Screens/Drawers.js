import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "react-navigation";
import { Image, Text } from "react-native";

import Grooming from "./Grooming";
import Medicines from "./Medicines";
import AccessoriesScreenHome from "./AccessoriesScreen";
import Sellnow from "./Sellnow";
import FoodScreenHome from "./FoodScreen";
import React from "react";
import HomeScreen from "./Home";
import PetsScreenHome from "./PetsScreen";
import Contactus from "./Contactus";
import Cities from "./Cities";
import DetailScreen from "../Screens/DetailsScreen";
import VeterinaryClinic from "../Screens/VeterinaryClinic";
import VeterinaryScreen from "../Screens/VeterinaryClinic";
import AccessoriesDetailScreen from "../components/AccessoriesDetails/AccesoriesDetails";
import MedicinesDetailScreen from "../components/MedicineDetails/MedicinesDetails";


Drawer = createDrawerNavigator();
export default class Drawers extends React.Component {
  // static na

  render() {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#FF642E",
          },
          overlayColor: "transparent",
          drawerInactiveTintColor: "#ffff",
          drawerActiveTintColor: "black",
          drawerActiveBackgroundColor: "#ffff",
          
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            
            headerTitleAlign:"center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100, }}
                source={require("../assets/hdricon.png")}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Pets"
          component={PetsScreenHome}
          options={{
            
            headerTitleAlign:"center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100, }}
                source={require("../assets/hdricon.png")}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Pets Food"
          component={FoodScreenHome}
          options={{
            
            headerTitleAlign:"center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100, }}
                source={require("../assets/hdricon.png")}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Pets Accessories"
          component={AccessoriesScreenHome}
          options={{
            
            headerTitleAlign:"center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100, }}
                source={require("../assets/hdricon.png")}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Sell now"
          component={Sellnow}
          options={{
            
            headerTitleAlign:"center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100, }}
                source={require("../assets/hdricon.png")}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Medicines for Pets"
          component={Medicines}
          options={{
            
            headerTitleAlign:"center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100, }}
                source={require("../assets/hdricon.png")}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Grooming"
          component={Grooming}
          options={{
            
            headerTitleAlign:"center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100, }}
                source={require("../assets/hdricon.png")}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Veterinary Clinic"
          component={VeterinaryScreen}
          options={{
            
            headerTitleAlign:"center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100, }}
                source={require("../assets/hdricon.png")}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Contact us"
          component={Contactus}
          options={{
            
            headerTitleAlign:"center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100, }}
                source={require("../assets/hdricon.png")}
              />
            )
          }}
        />

        {/* <Drawer.Screen name="DetailScreen" component={DetailScreen} /> */}

        <Drawer.Screen
          name="Cities"
          component={Cities}
          options={{
            drawerLabel: () => null,
           // title: null,
            drawerIcon: () => null,
            headerTitleAlign:"center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100, }}
                source={require("../assets/hdricon.png")}
              />
            )
          }}
        />
        <Drawer.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{
            drawerLabel: () => null,
           // title: null,
            drawerIcon: () => null,
            headerTitleAlign:"center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100, }}
                source={require("../assets/hdricon.png")}
              />
            )
          }}
        />

<Drawer.Screen
          name="MedicinesDetailScreen"
          component={MedicinesDetailScreen}
          options={{
            drawerLabel: () => null,
           // title: null,
            drawerIcon: () => null,
            headerTitleAlign:"center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100, }}
                source={require("../assets/hdricon.png")}
              />
            )
          }}
        />

<Drawer.Screen
          name="AccessoriesDetailScreen"
          component={AccessoriesDetailScreen}
          options={{
            drawerLabel: () => null,
           // title: null,
            drawerIcon: () => null,
            headerTitleAlign:"center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100, }}
                source={require("../assets/hdricon.png")}
              />
            )
          }}
        />

      </Drawer.Navigator>
    );
  }
}
