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
      onPress={()=>navigation.navigate('Pets Food')}
      
      >
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
