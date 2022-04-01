import React, { Component } from 'react'
import {Icon} from 'react-native-elements'

import {
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Linking,
    Alert
} from 'react-native'
import * as OpenAnything from "react-native-openanything";

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



export default class MedicinesDetailScreen extends Component {
/*
    static navigationOptions = {  
        //  title: 'PetsBazar',
          
              headerTitle: () => (
                <Image style={{ resizemode:'cover',width: 30, height: 30 , marginBottom:5,marginTop:5, marginLeft:60}} source={require("../assets/PETSBAZAR-Favicon.png")} />
                
                
              ),
              headerRight:( 
  
                  <Text style={{fontWeight:'bold',marginRight:80,fontSize:25}}>PetsBazar</Text>
              )
              ,
           
          headerLeft: (
              <TouchableOpacity
             //onPress={()=> this.props.navigation.push('sDrwaer')}
              >
              <Icon
              
              
               // containerStyle={styles.icon}
               style={{paddingLeft: 10}} 
               type="ionicon"
                name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
                //name={Platform.OS === "android" ? "android-menu" : "md-menu"}
              />
              </TouchableOpacity>
            ),
            
          headerStyle: {  
              backgroundColor: '#ffffff', 
      
              
          },  
      
          
          //headerTintColor: '#0ff',  
          headerTitleStyle: {  
              fontWeight: 'bold',  
          }, 
          headerTitleAlign:"left" 
      }; */

    render() {
        return (
            <View style={{alignContent:'space-around'}}>
               
                <ScrollView>
                
                <View style={styles.imageView}>
                
                <Image 
                style={styles.imageStyling}
                source={require('../../assets/HenMedicinesPics/HM1.jpg')}/>
                
                </View>
                <View style={styles.textView}>
                <Text style={styles.nameText}>Medicine for Sokra</Text>
                <Text style={styles.priceText}>Rs. 400/-</Text>
                
                </View>
            
                <View style={styles.descriptionView}>
                
                <Text style={styles.descriptionText}>Description:</Text>
                <Text style={styles.detailsText}>*Helps in recovering from Sokra</Text>
                <Text style={styles.detailsText}>*Best Results</Text>
                
                </View>

                <View style={styles.touchView}>
                <TouchableOpacity style={styles.btn}
                onPress={whatsappHandler}
                >
                   <Text style={styles.btnText}> BUY NOW </Text>
                </TouchableOpacity>
                  
                </View>
                
                </ScrollView>

            </View>
        )
    }
}


var styles = StyleSheet.create({


    imageView:{
        flex:1,
        alignContent:'flex-start',
    
        
    
    },
    imageStyling:{

        resizeMode:'cover',
        width:200,
        height:350,
        alignSelf:'center'
        
    

    },
    textView:{
        flex:1

    },
    nameText:{
                fontWeight:'bold',
                fontSize:40,
                marginLeft:10
    },
    priceText:{
        color:"#ff9933",
        fontSize:25,
        marginLeft:10
    },
    descriptionView:{
        flex:1,
        margin:20
    },
    descriptionText:{
        fontSize:30,
        fontWeight:'bold',
        marginLeft:-10
    },
    detailsText:{
        fontSize:20,
        marginLeft:-10
    },
    touchView:{
       marginVertical:20,
        flex:1,
        //alignSelf:'center',
       //height:'50'
       //marginBottom:'40'
    },
    btn:{
        backgroundColor:"#ff9933",
        width:'30%',
        height:'100%',
        alignSelf:'center',
        borderRadius:10,
        marginBottom:20
    },
    btnText:{
        fontWeight:'bold',
        alignSelf:'center',
        marginTop:15,
        fontSize:20
    }



})