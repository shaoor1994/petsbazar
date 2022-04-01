import React from 'react';
import {
    View, 
  Button,
   Image,
 TouchableOpacity,
  StyleSheet,
  Text,
  Linking,
    Alert
  } from 'react-native';




export default function FeaturedPets() {
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
  return (

<>
    <View style={styles.upperView}>

    <View>
    
    <Image
    style = {styles.LeftImageStyling}
    source = {require('../assets/FeaturedPets/UpdatedDogSquare.jpeg')}/>
    <TouchableOpacity style={styles.TouchableOpacityStylingLeft}
    
    onPress={whatsappHandler}
    >
    <Text style={styles.textStyling}> Shop Now </Text>
    </TouchableOpacity>
    </View>


     <View>
    <Image
    style ={styles.RightImageStyling}
    source = {require('../assets/FeaturedPets/UpdatedCatSquare.jpeg')}/>
    <TouchableOpacity style={styles.TouchableOpacityStylingRight}
    onPress={whatsappHandler}
    >
    <Text style={styles.textStyling}> Shop Now </Text>
    </TouchableOpacity>
    </View>
    </View>


    <View style={styles.bottomView}>
    <View>
    <Image 
    style={styles.LeftImageStyling}
    source={require('../assets/FeaturedPets/LionSquare.jpg')}/>
    <TouchableOpacity style={styles.TouchableOpacityStylingLeft}
    onPress={whatsappHandler}
    >
    <Text style={styles.textStyling}> Shop Now</Text>
    </TouchableOpacity>
    </View>
    <View>
    <Image 
    style={styles.RightImageStyling}
    source={require('../assets/FeaturedPets/ParrotSquare.jpeg')}/>
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