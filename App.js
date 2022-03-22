import React, { Component } from 'react';
import {

  TouchableOpacity,
  Image
}
from 'react-native'
console.disableYellowBox = true;
import {  createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Drawers  from './Screens/Drawers';
import SplashScreen from './Screens/SplashScreen';

import HomeScreen from './Screens/Home';
import Grooming from './Screens/Grooming';
import PetsScreenHome from './Screens/PetsScreen';
import FoodScreenHome from './Screens/FoodScreen';
import AccessoriesScreenHome from './Screens/AccessoriesScreen';
import DetailScreen from './Screens/DetailsScreen';
import CatApiList from './Screens/CatApiList';
import Sellnow from './Screens/Sellnow';
import Medicines from './Screens/Medicines';
import { Stack } from 'native-base';
import Contactus from './Screens/Contactus';

//for side menu


const Navigation = createStackNavigator(

  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        headerShown: null
      }
    },
    
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
         
       }
     },
    PetsScreenHome: {
      screen: PetsScreenHome,
      navigationOptions: {
        headerShown: 'true',
        
      }
    },
    FoodScreenHome: {
      screen: FoodScreenHome,
      navigationOptions: {
        headerShown: 'true',
        
      }
    },
    Medicines: {
      screen: Medicines,
      navigationOptions: {
        headerShown: 'true',
        
      }
    },
    Grooming: {
      screen: Grooming,
      navigationOptions: {
        headerShown: 'true',
        
      }
    },
    AccessoriesScreenHome: {
      screen: AccessoriesScreenHome,
      navigationOptions: {
        headerShown: 'true',
        
      }
    },
    DetailScreen: {
      screen: DetailScreen,
      navigationOptions: {
        headerShown: 'true',
       // title: 'Pets Bazar' 
      }
    },
    CatApiList: {
      screen: CatApiList,
      navigationOptions: {
        headerShown: 'true',
       // title: 'Pets Bazar' 
      }
    },
    Sellnow: {
      screen: Sellnow,
      navigationOptions: {
        headerShown: 'true',
       // title: 'Pets Bazar' 
      }

  },
  Contactus: {
    screen: Contactus,
    navigationOptions: {
      headerShown: 'true',
     // title: 'Pets Bazar' 
    }
  },
  

  },
  {
    initialRouteName: 'Drawers',
    mode:'modal'
  }

)

const Appcontainer = createAppContainer(Navigation);



export default class App extends React.Component {

  render() {
    
    return (
    <NavigationContainer>
<Appcontainer />
</NavigationContainer>

 


     
    
    )
  }
}





