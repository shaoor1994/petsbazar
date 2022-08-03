import React from 'react';
import {View, 
  ScrollView ,
   Image,
   TouchableOpacity,
  StyleSheet
  } from 'react-native';


import { useNavigation } from '@react-navigation/native';

const FoodScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView horizontal={true} 
    showsHorizontalScrollIndicator={false}
    >
      
     
      <TouchableOpacity
      onPress={()=>navigation.navigate('Cat Food')}
      
      >
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/Food/CatFood.png')}   />
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>navigation.navigate('Dog Food')}
      
      >
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/Food/DogFood.png')}   />
      </TouchableOpacity>
      <TouchableOpacity 
      
      onPress={()=>navigation.navigate('Birds Food')}
      
      >
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/Food/BirdsFood.png')}   />
      </TouchableOpacity>
      <TouchableOpacity  
      
      onPress={()=> navigation.navigate('Hamster Food') }
      
      >
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/Food/HamsterFood.png')}   />
      </TouchableOpacity>
      <TouchableOpacity
      
      onPress={()=>navigation.navigate('Rabbit Food')}
      
      >
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/Food/RabbitFood.png')}   />
      </TouchableOpacity>
      <TouchableOpacity
      
      onPress={()=>navigation.navigate('Hen Food')}
      
      >
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/Food/HenFood.png')}   />
      </TouchableOpacity>

      <TouchableOpacity
      
      onPress={()=>navigation.navigate('Aquatic Food')}
      
      >
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/Food/aquaticfood.png')}   />
      </TouchableOpacity>
      
    </ScrollView>
  );
}

export default React.memo(FoodScreen);


var styles = StyleSheet.create({



ImageStyling:{
    height:150,
    width:150,
    //margin:-10
    marginLeft:-10,
    marginRight:-10
}

});
