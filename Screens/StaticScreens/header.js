import React, { Component } from 'react';
import { Icon } from "react-native-elements";
import {

View,
Image ,
Text,
TouchableOpacity

}
from "react-native"

export default class Header extends Component {
    
            
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
 
      
}
