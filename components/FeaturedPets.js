import React, { useEffect,useState } from 'react';
import * as OpenAnything from "react-native-openanything";
import { useNavigation } from "@react-navigation/native";

import {
    View, 
  Button,
   Image,
 TouchableOpacity,
  StyleSheet,
  Text,
  Linking,
    Alert,
    Platform
  } from 'react-native';
import axios from 'axios';



export default function FeaturedPets(itemData) {

  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getDataUsingSimpleGetCall = () => {
    axios
      .get(
        Platform.OS === "android"
          ? "http://192.168.77.23:4000/pets"
          : " http://10.0.2.2:4000/pets"
      )
      .then((json) => setData(json.data))
      .finally(() => setLoading(false));
    console.log("Display Data", data);
  };

  useEffect(() => {
    getDataUsingSimpleGetCall();
  }, []);


    const whatsappHandler = () => {

      Alert.alert(

        'Shop Now',
        'Whatsapp now',
        [
           { text: 'Whatsapp',
            
           onPress: () => {
            Linking.openURL(
              'http://api.whatsapp.com/send?phone=923042224537' 
            );
          }
        
        },
        { text: 'Call',
            
           onPress: () => {
            OpenAnything.Call("+923042224537")
            
          }
        
        },
        {
            text: 'SMS',
            //onPress: () => console.log('No Pressed'), style: 'cancel'
            onPress: () => {
              OpenAnything.Text("+923042224537")
            }
          },

        ],
        {
          cancelable:true
        }

    );


    }

    Feauter1= (itemData) => {
      
    let url =
    Platform.OS === "android"
      ? `http://192.168.77.23:2000/image/file-1659429603017.png`
      : `http://10.0.2.2:2000/image/file-1659429603017.png`;
    
      return(
        <View>
      <TouchableOpacity
    
      onPress={() => navigation.navigate('FeaturePetScreenOne')}
      
      >
      <Image
      style = {styles.LeftImageStyling}
      source={{ uri: url }}/>

      </TouchableOpacity>
      
      <Text  style={{fontWeight:'bold', alignSelf:'center',marginLeft:17,marginVertical:5}}  >Lions </Text>
      </View>
      
      
      )
    }

    Feauter2= (itemData) => {
      
      let url =
      Platform.OS === "android"
        ? `http://192.168.77.23:2000/image/file-1658921191100.jpg`
        : `http://10.0.2.2:2000/image/file-1658921191100.jpg`;
      
        return(
          <View>
        <TouchableOpacity
      
        onPress={() => navigation.navigate("FeaturePetScreenTwo")}
        
        >
        <Image
        style = {styles.RightImageStyling}
        source={{ uri: url }}/>
  
        </TouchableOpacity>

        <Text  style={{fontWeight:'bold', alignSelf:'center',marginVertical:5}}  >Leapord Gecko </Text>
        
      </View>
        
        )
      }

      Feauter3= (itemData) => {
      
        let url =
        Platform.OS === "android"
          ? `http://192.168.77.23:2000/image/file-1658741958120.jpeg`
          : `http://10.0.2.2:2000/image/file-1658741958120.jpeg`;
        
          return(
            <View>
          <TouchableOpacity
        
          onPress={() => navigation.navigate("FeaturePetScreenThree")}
          
          >
          <Image
          style = {styles.LeftImageStyling}
          source={{ uri: url }}/>
    
          </TouchableOpacity>
          <Text  style={{fontWeight:'bold', alignSelf:'center',marginLeft:17,marginVertical:10}}  >Dwarf Rabbit </Text>
          </View>
          )
        }
    
        Feauter4= (itemData) => {
          
          let url =
          Platform.OS === "android"
            ? `http://192.168.77.23:2000/image/file-1659440227139.png`
            : `http://10.0.2.2:2000/image/file-1659440227139.png`;
          
            return(

              <View>
            <TouchableOpacity
          
            onPress={() => navigation.navigate("FeaturePetScreenFour")}
            
            >
            <Image
            style = {styles.RightImageStyling}
            source={{ uri: url }}/>
      
            </TouchableOpacity>

            <Text  style={{fontWeight:'bold', alignSelf:'center',marginVertical:10,marginRight:5}}  >Monkey</Text>
            
            </View>
            
            )
          }
    

  return (

<>
    <View style={styles.upperView}>

    <View>
   <Feauter1/>
    <TouchableOpacity style={styles.TouchableOpacityStylingLeft}
    
    onPress={whatsappHandler}
    >
    <Text style={styles.textStyling}> Shop Now </Text>
    </TouchableOpacity>
    </View>


     <View>
    <Feauter2/>
    <TouchableOpacity style={styles.TouchableOpacityStylingRight}
    onPress={whatsappHandler}
    >
    <Text style={styles.textStyling}> Shop Now </Text>
    </TouchableOpacity>
    </View>
    </View>


    <View style={styles.bottomView}>
    <View>
   <Feauter3/>
    <TouchableOpacity style={styles.TouchableOpacityStylingLeft}
    onPress={whatsappHandler}
    >
    <Text style={styles.textStyling}> Shop Now</Text>
    </TouchableOpacity>
    </View>
    <View>
  <Feauter4/>
    <TouchableOpacity  style={styles.TouchableOpacityStylingRight}
    onPress={whatsappHandler}
    >
    <Text style={styles.textStyling}>Shop Now</Text>
    </TouchableOpacity>
    </View>
    </View>
</>

  )
}


var styles = StyleSheet.create({

    upperView:{
        flexDirection:'row',
        alignContent:'space-between'

    },
    bottomView:{
        flexDirection:'row'
    },
    RightImageStyling:{
        marginTop:15,
        height:140,
        width:150,
        marginLeft:23,
        marginRight:52,
        resizeMode:'cover'
    },
    LeftImageStyling:{
        marginTop:15,
        height:140,
        width:170,
        marginLeft:53,
        marginRight:-20,
        resizeMode:'cover'
    },
   
        TouchableOpacityStylingRight:{
        marginLeft:55,
        width:100,
        height:30,
        marginRight:60,
        marginTop:10,

        backgroundColor:'#FF642E',
        borderRadius:30,
        justifyContent:'center'
        

    },
    TouchableOpacityStylingLeft:{
        marginLeft:75,
        width:100,
        height:30,
        marginRight:50,
        marginTop:10,

        backgroundColor:'#FF642E',
        borderRadius:30,
        justifyContent:'center'
        

    },
    textStyling:{
        textAlign:'center',
        fontWeight:'bold',
        color:'#FFFF'
    }




});