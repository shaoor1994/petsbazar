import React from 'react';
import {View, 
  ScrollView ,
   Image,
   TouchableOpacity,
  StyleSheet
  } from 'react-native';



export default function PetsScreen() {
  return (
    <ScrollView horizontal={true} 
    showsHorizontalScrollIndicator={false}
    >
      
     
      <TouchableOpacity style={styles.TouchableOpacityStyle}>
      <Image  style={styles.catImage}
      
      source = {require('../assets/Pets/Cat.png')}   />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image  style={styles.lionImage}
      
      source = {require('../assets/Pets/Lion.png')}   />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image  style={styles.monkeyImage}
      
      source = {require('../assets/Pets/Monkey.png')}   />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image  style={styles.henImage}
      
      source = {require('../assets/Pets/Hen.png')}   />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image  style={styles.birdsImage}
      
      source = {require('../assets/Pets/Birds.png')}   />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image  style={styles.rabbitImage}
      
      source = {require('../assets/Pets/Rabbit.png')}   />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image  style={styles.dogImage}
      
      source = {require('../assets/Pets/Dog.png')}   />
      </TouchableOpacity>
      
    </ScrollView>
  );
}



var styles = StyleSheet.create({

catImage:{
  height:250,
  width:200,
  resizeMode:'cover',
  marginTop:-45,
  marginBottom:60,
  marginRight:-120,
  marginLeft:-15
},
lionImage:{
  height:197,
  width:200,
  resizeMode:'cover',
  marginTop:-20,
  marginLeft:29
},
monkeyImage:{
  height:210,
  width:200,
  resizeMode:'cover',
  marginTop:-32,
  marginRight:-30,
  marginLeft:-70
},
henImage:{
  height:233,
  width:200,
  resizeMode:'cover',
  marginTop:-45,
  marginLeft:-37
},
birdsImage:{
  height:193,
  width:200,
  resizeMode:'cover',
  marginTop:-22,
  marginLeft:-82
},
rabbitImage:{
  height:257,
  width:200,
  resizeMode:'cover',
  marginTop:-60,
  marginLeft:-75,
  //marginRight:0
},
dogImage:{
  height:327,
  width:200,
  resizeMode:'cover',
  marginTop:-77,
  marginLeft:-75
},
/*TouchableOpacityStyle:{
  height:90,
  width:70
}*/

});
