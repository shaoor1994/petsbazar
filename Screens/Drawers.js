import {  createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from 'react-navigation';

import Grooming from './Grooming';
import Medicines from './Medicines';
import AccessoriesScreenHome from './AccessoriesScreen';
import Sellnow from './Sellnow';
import FoodScreenHome from './FoodScreen';
import React from 'react';
import HomeScreen from './Home';
import PetsScreenHome from './PetsScreen';
import Contactus from './Contactus'


  Drawer = createDrawerNavigator();
  export default class Drawers extends React.Component{

    static na

      render(){
          return(
           
        
                  <Drawer.Navigator initialRouteName="Contactus" >
                    <Drawer.Screen name="Home" component={HomeScreen}/>
                    <Drawer.Screen name="PetsScreen" component={PetsScreenHome} />
                    <Drawer.Screen name="FoodScreen" component={FoodScreenHome} />
                    <Drawer.Screen name="Accessories" component={AccessoriesScreenHome} />
                    <Drawer.Screen name="Sell now" component={Sellnow} />
                    <Drawer.Screen name="Medicines" component={Medicines} />
                    <Drawer.Screen name="Grooming" component={Grooming} />
                    <Drawer.Screen name="Contact us" component={Contactus} />
                  </Drawer.Navigator>
                  

          )
      }
  }