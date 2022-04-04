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



export default class AccessoriesDetailScreen extends Component {

    render() {
        return (
            <View style={{alignContent:'space-around'}}>
               
                <ScrollView>
                
                <View style={styles.imageView}>
                
                <Image 
                style={styles.imageStyling}
                source={require('../../assets/CatAccessories/CatAccessory1.jpg')}/>
                
                </View>
                <View style={styles.textView}>
                <Text style={styles.nameText}>Cat Nail Cutter</Text>
                <Text style={styles.priceText}>Rs. 400/-</Text>
                
                </View>
            
                <View style={styles.descriptionView}>
                
                <Text style={styles.descriptionText}>Description:</Text>
                <Text style={styles.detailsText}>*Made with Stainless Steel</Text>
                <Text style={styles.detailsText}>*Scissor Fingure Grip</Text>
                
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
        width:350,
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
        backgroundColor:"#FF642E",
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
        fontSize:20,
        color:'white'
    }



})