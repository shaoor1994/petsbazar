import React from 'react';
import {View, 
  ScrollView ,
   Image,
   TouchableOpacity,
  StyleSheet
  } from 'react-native';



export default function FoodScreen() {
  return (
    <ScrollView horizontal={true} 
    showsHorizontalScrollIndicator={false}
    >
      
     
      <TouchableOpacity>
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/Food/CatFood.png')}   />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/Food/BirdsFood.png')}   />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/Food/HamsterFood.png')}   />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/Food/RabbitFood.png')}   />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/Food/HenFood.png')}   />
      </TouchableOpacity>
      
    </ScrollView>
  );
}



var styles = StyleSheet.create({



ImageStyling:{
    height:150,
    width:150,
    //margin:-10
    marginLeft:-10,
    marginRight:-10
}

});
