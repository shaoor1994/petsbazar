import React ,{useState} from 'react';
import {View, 
  ScrollView ,
   Image,
   TouchableOpacity,
   TouchableHighlight,
  StyleSheet
  } from 'react-native';

  //import Api from './api';



export default function PetsList() {
  const [selecedTab, setSelectedTab] = useState('');
  return (
    <ScrollView horizontal={true} 
    showsHorizontalScrollIndicator={false}
    >
      
     
      <TouchableOpacity>
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/petslist/cat.png')}   />
      </TouchableOpacity>

      <TouchableOpacity>
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/petslist/lion.png')}   />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/petslist/birds.png')}   />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/petslist/hamster.png')}   />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/petslist/Hen.png')}   />
      </TouchableOpacity>
     
      <TouchableOpacity>
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/petslist/dog.png')}   />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/petslist/monkey.png')}   />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/petslist/rabbit.png')}   />
      </TouchableOpacity>
      
    </ScrollView>
  );
}


var styles = StyleSheet.create({



    ImageStyling:{
        height:100,
        width:100,
        //margin:-10
        marginLeft:-10,
        marginRight:-10,
        resizeMode:'cover'
    } 
    
    });