import React, { Component } from 'react'

import {

    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Linking,
    ImageBackground
} from 'react-native'

export default class TempSellNow extends Component {
    render() {
        return (
           
            <View style={styles.container}>
            
            <View style={styles.txtContiner}>
                <Text style={styles.bannerTxt}>Do you want to sell your </Text>
                <Text style={styles.bannerTxt}>pets/products ? </Text>

                </View>

                <View style={styles.btnContainer}>

            <TouchableOpacity style={styles.whtsappBtn}
            
            onPress={ () => {
            Linking.openURL(
              'http://api.whatsapp.com/send?phone=923320565978' 
            );
          }}
            
            >

                <Text style={styles.btnTxt}>Whatsapp Now</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.webBtn}
            
            onPress={ () => {
            Linking.openURL(
              'https://www.petsbazar.online/sell-now/' 
            );
          }}
            
            >

            <Text style={styles.btnTxt}>Sell Now</Text>

            </TouchableOpacity>

                </View>

                
                
            </View>
            
        )
    }
}


var styles = StyleSheet.create({

bkgroundImg:{

resizeMode:'cover'

},
container:{
flexDirection:'column',
flex:1,
alignContent:'center'
},
txtContiner:{

margin:40,
padding:15,
alignSelf:'center'
},
bannerTxt:{
    fontSize: 25,
    fontWeight: "bold",
    textAlign:'center',
    //margin:30
},
btnContainer:{

flexDirection:'column',
margin:40,
padding:7,
//alignContent:'center',
alignContent:'space-between',
alignSelf:'center',

},
whtsappBtn:{
width:250,
height:50,
padding:10,
alignSelf:'center',
backgroundColor:'rgb( 0,168,132)',
alignContent:"center",
margin:20,
borderRadius:20
},
webBtn:{
    width:250,
    height:50,
    alignSelf:'center',
    backgroundColor:'rgb(244,169,71)',
    alignContent:"center",
    padding:10,
    margin:20,
    borderRadius:20
},
btnTxt:{
color:'white',
alignSelf:'center',
fontSize: 20,
fontWeight: "bold",
textAlign: "center",
}


})