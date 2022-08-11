import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "react-navigation";
import { Image, Text } from "react-native";

import DrawerItems from "../../constants/DrawerItems";
import Grooming from "./Grooming";
import Sellnow from "./Sellnow";

import HomeScreen from "./Home";
import DogsScreenHome from "../PetsScreen/DogsScreen";
import CatsScreenHome from "../PetsScreen/CatsScreen";
import HamstersScreenHome from "../PetsScreen/HamsterScreen";
import HensScreenHome from "../PetsScreen/HenScreen";
import WildAnimalScreenHome from "../PetsScreen/WildAnimaScreen";
import ParrotsScreenHome from "../PetsScreen/ParrotsScreen";
import RabbitsScreenHome from "../PetsScreen/RabbitScreen";
import MonkeysScreenHome from "../PetsScreen/MonkeyScreen";
import WildBirdsScreenHome from "../PetsScreen/WildBirds";
import AquaticAnimalScreenHome from "../PetsScreen/AquaticAnimalScreen";


import BirdsFoodScreen from "../FoodScreen/BirdsFoodScreen";
import CatFoodScreen from "../FoodScreen/CatFoodScreen";
import DogFoodScreen from "../FoodScreen/DogFoodScreen";
import HamsterFoodScreen from "../FoodScreen/HamsterFoodScreen";
import HenFoodScreen from "../FoodScreen/HamsterFoodScreen";
import LionFoodScreen from "../FoodScreen/LionFoodScreen";
import MonkeyFoodScreen from "../FoodScreen/MokneyFoodScreen";
import RabbitFoodScreen from "../FoodScreen/RabbitFoodScreen";
import AquaticFoodScreen from "../FoodScreen/AquaticFoodScreen";

import CatAccessoriesScreen from "../AccessoriesScreen/CatAccessories";
import DogAccessoriesScreen from "../AccessoriesScreen/DogAccessories";
import HamsterAccessoriesScreen from "../AccessoriesScreen/HamsterAccessories";
import HenAccessoriesScreen from "../AccessoriesScreen/HenAccessories";
import LionAccessoriesScreen from "../AccessoriesScreen/LionAccessories";
import AquaticAccessoriesScreen from "../AccessoriesScreen/AquaticAccessories";
import ParrotAccessoriesScreen from "../AccessoriesScreen/ParrotAccessories";
import RabbitAccessoriesScreen from "../AccessoriesScreen/RabbitAccessories"

import BirdsMedicines from "../MedicinesScreen/BirdsMedicines";
import CatMedicines from "../MedicinesScreen/CatMedicines";
import DogMedicines from "../MedicinesScreen/DogMedicines";
import HamsterMedicines from "../MedicinesScreen/HamsterMedicines";
import HenMedicine from "../MedicinesScreen/HenMedicines";
import LionMedicines from "../MedicinesScreen/LionMedicines";
import MonkeyMedicines from "../MedicinesScreen/MonkeyMedicines";
import RabbitMedicines from "../MedicinesScreen/RabbitMedicines";


import Medicines from "../StaticScreens/Medicines"
import Contactus from "./Contactus";
import Cities from "./Cities";
import DetailScreen from "./DetailsScreen";
import VeterinaryScreen from "./VeterinaryClinic";
import AccessoriesDetailScreen from "../../components/AccessoriesDetails/AccesoriesDetails";
import MedicinesDetailScreen from "../../components/MedicineDetails/MedicinesDetails";
import SerachResult from "./SerachResult";

import TempSellNow from "../TempScreens/TempSellNow";
import LocalData from "../TempScreens/LocalData";
import PeacockScreenHome from "../PetsScreen/PeaCockScreen";
import FeaturePetScreenOne from "../TempScreens/FeaturePetScreenOne";
import FeaturePetScreenTwo from "../TempScreens/FeaturePetScreenTwo";
import FeaturePetScreenThree from "../TempScreens/FeaturePetScreenThree";
import FeaturePetScreenFour from "../TempScreens/FeaturePetScreenFour";
//import FlatListDemo from "../TempScreens/FlatListDemo";


Drawer = createDrawerNavigator();
export default class Drawers extends React.Component {

  
  render() {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <DrawerItems {...props} />}
        initialRouteName="Home"
        screenOptions={{
          drawerType:'back',
          drawerStyle: {
            backgroundColor: "#FF642E",
            width: 240
          },
          swipeEdgeWidth: 80,
        swipeMinDistance: 80,
          overlayColor: "transparent",
          drawerInactiveTintColor: "#ffff",
          drawerActiveTintColor: "black",
          drawerActiveBackgroundColor: "#ffff",
          unmountOnBlur: true,
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />
        {/* Pets Screen */}
        <Drawer.Screen
          name="Cats"
          component={CatsScreenHome}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}

          
        />
         <Drawer.Screen
          name="Hen"
          component={HensScreenHome}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}

          
        />
        <Drawer.Screen
          name="Dogs"
          component={DogsScreenHome}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />


<Drawer.Screen
          name="Peacock"
          component={PeacockScreenHome}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Hens"
          component={HensScreenHome}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Rabbits"
          component={RabbitsScreenHome}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Aquatic Animals"
          component={AquaticAnimalScreenHome}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

<Drawer.Screen
          name="FeaturePetScreenOne"
          component={FeaturePetScreenOne}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="FeaturePetScreenTwo"
          component={FeaturePetScreenTwo}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

<Drawer.Screen
          name="FeaturePetScreenThree"
          component={FeaturePetScreenThree}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

<Drawer.Screen
          name="FeaturePetScreenFour"
          component={FeaturePetScreenFour}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

<Drawer.Screen
          name="Aquatic Food"
          component={AquaticFoodScreen}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />


<Drawer.Screen
          name="Wild Animals"
          component={WildAnimalScreenHome}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

<Drawer.Screen
          name="Wild Birds"
          component={WildBirdsScreenHome}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Parrots"
          component={ParrotsScreenHome}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Monkeys"
          component={MonkeysScreenHome}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Hamsters"
          component={HamstersScreenHome}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

        {/* Food Screens */}

        <Drawer.Screen
          name="Cat Food"
          component={CatFoodScreen}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Dog Food"
          component={DogFoodScreen}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Hamster Food"
          component={HamsterFoodScreen}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Hen Food"
          component={HenFoodScreen}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Lion Food"
          component={LionFoodScreen}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Monkey Food"
          component={MonkeyFoodScreen}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Rabbit Food"
          component={RabbitFoodScreen}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Birds Food"
          component={BirdsFoodScreen}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

        {/* Accessories Screen */}

        <Drawer.Screen
          name="Cat Accessories"
          component={CatAccessoriesScreen}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

<Drawer.Screen
          name="Dog Accessories"
          component={DogAccessoriesScreen}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

<Drawer.Screen
          name="Hamster Accessories"
          component={HamsterAccessoriesScreen}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

<Drawer.Screen
          name="Hen Accessories"
          component={HenAccessoriesScreen}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

<Drawer.Screen
          name="Lion Accessories"
          component={LionAccessoriesScreen}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />


<Drawer.Screen
          name="Aquatic Accessories"
          component={AquaticAccessoriesScreen}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

<Drawer.Screen
          name="Parrot Accessories"
          component={ParrotAccessoriesScreen}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

<Drawer.Screen
          name="Rabbit Accessories"
          component={RabbitAccessoriesScreen}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Sell now"
          component={Sellnow}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

<Drawer.Screen
          name="Cat Medicines"
          component={CatMedicines}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

<Drawer.Screen
          name="Birds Medicines"
          component={BirdsMedicines}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />


<Drawer.Screen
          name="Dog Medicines"
          component={DogMedicines}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

<Drawer.Screen
          name="Hamster Medicines"
          component={HamsterMedicines}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />


<Drawer.Screen
          name="Hen Medicines"
          component={HenMedicine}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

<Drawer.Screen
          name="Lion Medicines"
          component={LionMedicines}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />


<Drawer.Screen
          name="Monkey Medicines"
          component={MonkeyMedicines}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

<Drawer.Screen
          name="Rabbit Medicines"
          component={RabbitMedicines}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Temp Sell now"
          component={TempSellNow}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

       
        <Drawer.Screen
          name="Grooming"
          component={Grooming}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Veterinary Clinic"
          component={VeterinaryScreen}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Contact us"
          component={Contactus}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
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
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{
            drawerLabel: () => null,
            // title: null,
            drawerIcon: () => null,
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="MedicinesDetailScreen"
          component={MedicinesDetailScreen}
          options={{
            drawerLabel: () => null,
            // title: null,
            drawerIcon: () => null,
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

<Drawer.Screen
          name="Medicines"
          component={Medicines}
          options={{
            drawerLabel: () => null,
            // title: null,
            drawerIcon: () => null,
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="AccessoriesDetailScreen"
          component={AccessoriesDetailScreen}
          options={{
            drawerLabel: () => null,
            // title: null,
            drawerIcon: () => null,
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />
       {/* <Drawer.Screen
          name="Data Demo"
          component={FlatListDemo}
          options={{
            drawerLabel: () => null,
            // title: null,
            drawerIcon: () => null,
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />*/}

        {/*<Drawer.Screen
          name="Local Data"
          component={LocalData}
          options={{
            drawerLabel: () => null,
            // title: null,
            drawerIcon: () => null,
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />*/}

<Drawer.Screen
          name="Search"
          component={SerachResult}
          options={{
            drawerLabel: () => null,
            // title: null,
            drawerIcon: () => null,
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ height: 40, width: 100 }}
                source={require("../../assets/hdricon.png")}
              />
            ),
          }}
        />

      </Drawer.Navigator>
    );
  }
}
