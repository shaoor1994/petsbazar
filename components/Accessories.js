import React from 'react';
import {View, 
  ScrollView ,
   Image,
   TouchableOpacity,
  StyleSheet
  } from 'react-native';
  
  import { useNavigation } from '@react-navigation/native';


const AccessoriesScreen = () => {

  const navigation = useNavigation();
  return (
    <ScrollView horizontal={true} 
    showsHorizontalScrollIndicator={false}
    >
      
     
      <TouchableOpacity
      
      onPress={()=>navigation.navigate('Bird Accessories')}
      
      >
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/Accessories/BirdsHouse.png')}   />
      </TouchableOpacity>
      <TouchableOpacity

onPress={()=>navigation.navigate('Cat Accessories')}

      >
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/Accessories/CatHouseUpdated.png')}   />
      </TouchableOpacity>
      <TouchableOpacity

onPress={()=>navigation.navigate('Hen Accessories')}

      >
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/Accessories/HenHouse.png')}   />
      </TouchableOpacity>
      <TouchableOpacity

onPress={()=>navigation.navigate('Aquatic Accessories')}

      >
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/Accessories/Aquarium.png')}   />
      </TouchableOpacity>
      <TouchableOpacity
      
      onPress={()=>navigation.navigate('Dog Accessories')}
      
      >
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/Accessories/DogJacket.png')}   />
      </TouchableOpacity>
      <TouchableOpacity
      
      onPress={()=>navigation.navigate('Hamster Accessories')}
      
      >
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/Accessories/HamsterHouse.png')}   />
      </TouchableOpacity>
      <TouchableOpacity
      
      onPress={()=>navigation.navigate('Rabbit Accessories')}
      
      >
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/Accessories/RabbitJacket.png')}   />
      </TouchableOpacity>
      
    </ScrollView>
  );
}

export default React.memo(AccessoriesScreen)

var styles = StyleSheet.create({



ImageStyling:{
    height:150,
    width:150,
    //margin:-10
    marginLeft:-10,
    marginRight:-10
}

});
