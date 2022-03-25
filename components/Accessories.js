import React from 'react';
import {View, 
  ScrollView ,
   Image,
   TouchableOpacity,
  StyleSheet
  } from 'react-native';
  
  import { useNavigation } from '@react-navigation/native';


export default function AccessoriesScreen() {

  const navigation = useNavigation();
  return (
    <ScrollView horizontal={true} 
    showsHorizontalScrollIndicator={false}
    >
      
     
      <TouchableOpacity
      
      onPress={()=>navigation.navigate(AccessoriesScreen)}
      
      >
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/Accessories/BirdsHouse.png')}   />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/Accessories/CatHouseUpdated.png')}   />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/Accessories/DogJacket.png')}   />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/Accessories/HamsterHouse.png')}   />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/Accessories/RabbitJacket.png')}   />
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
