import React from 'react';
import {View, 
  ScrollView ,
   Image,
   TouchableOpacity,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
  ImageBackground
  
  } from 'react-native';
  //import PetsList from '../constants/PetsList';
  import { useNavigation } from '@react-navigation/native';


  /*const DATA = [
    {
      id: "1",
      title: "Cat",
      image:<Image source = {require('../assets/Pets/Cat.png')}/>
    },
    {
      id: "2",
      title: "Lion",
      image:<Image source = {require('../assets/Pets/Lion.png')}/>
    },
    {
      id: "3",
      title: "Monkey",
      image:<Image source = {require('../assets/Pets/Monkey.png')}/>
    },
    {
      id: "4",
      title: "Hen",
      image:<Image source = {require('../assets/Pets/Hen.png')}/>
    },
    {
      id: "5",
      title: "Birds",
      image:<Image source = {require('../assets/Pets/Birds.png')}/>
    },
    {
      id: "6",
      title: "Rabbit",
      image:<Image source = {require('../assets/Pets/Rabbit.png')}/>
    },
    {
      id: "7",
      title: "Dog",
      image:<Image source = {require('../assets/Pets/Dog.png')}/>
    },
  ];
  const Item = ({ image }) => (
    <View >
      <Image source={require('image')}/>
    </View>
  );*/

const PetsScreen = ( ) => {


  const navigation = useNavigation();
  return (
   /*
   <SafeAreaView style={styles.container}>

<FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        nestedScrollEnabled={true}
      />


   </SafeAreaView>
   
   */
   
   
    <ScrollView horizontal={true} 
    showsHorizontalScrollIndicator={false}
    >
      
     
      <TouchableOpacity 
   
      onPress={()=>navigation.navigate('Cats')}
      >
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/PetsEdited/Cat.png')}   />
      </TouchableOpacity>
      <TouchableOpacity  
      
      onPress={()=>navigation.navigate('Dogs')}
      
      >
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/PetsEdited/Dog.png')}   />
      </TouchableOpacity>
      <TouchableOpacity 
      
      onPress={()=>navigation.navigate('Hens')}
      
      >
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/PetsEdited/Hen.png')}   />
      </TouchableOpacity>
      <TouchableOpacity 
      
      onPress={()=> navigation.navigate('Rabbits')}
      
      >
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/PetsEdited/Rabbit.png')}   />
      </TouchableOpacity>
      <TouchableOpacity
      
      onPress={()=> navigation.navigate('Wild Animals')}
      
      >
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/PetsEdited/lion1.png')}   />
      </TouchableOpacity>
      <TouchableOpacity 
      
      onPress={()=>navigation.navigate("Parrots")}
      
      >
      <Image style={styles.ImageStyling}
      
      source = {require('../assets/PetsEdited/Birds.png')}   />
      </TouchableOpacity>
      <TouchableOpacity  
      
      onPress={()=> navigation.navigate("Monkeys")}

      >
      <Image style={styles.ImageStyling}
      
      source = {require('../assets/PetsEdited/Monkey.png')}   />
      </TouchableOpacity>
      <TouchableOpacity    
      
      onPress={()=>navigation.navigate("Hamsters")}
      
      >
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/PetsEdited/Hamster.png')}   />
      </TouchableOpacity>
      
    </ScrollView>
    

    
  );
}

export default React.memo(PetsScreen);

var styles = StyleSheet.create({



ImageStyling:{
  height:150,
  width:150,
  //margin:-10
  marginLeft:-8,
  marginRight:-15
}


});
