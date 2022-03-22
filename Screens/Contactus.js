import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert
} from "react-native";
import { Paragraph } from "react-native-paper";
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
        {
            text: 'Later',
            onPress: () => console.log('No Pressed'), style: 'cancel'
          },

        ]

    );

}

export default class Contactus extends Component {
    
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
        nestedScrollEnabled = {true}
        showsVerticalScrollIndicator ={false}
        >
          <Text style={styles.TextStyle}>Contact info</Text>
        <View style={styles.headingContainer}>
          <Image style={styles.iconImage}
              source={require('../assets/gpsOrange.png')}
          />
          <Text style={styles.paragraphHeading}>
            PetsBazar Support office
          </Text>
          </View>
          
          <Text style={styles.paragraph}>
            305-D, Evacuee Trust Complex, Sector F-5/1, Islamabad, 44000,
            Pakistan.
          </Text>
          <View style={styles.headingContainer}>
          <Image 
              source={require('../assets/callicon.png')}
              style={styles.iconImage}
          />
          <Text style={styles.paragraphHeading}> Phone </Text>
          </View>
          <Text style={styles.paragraph}>+92 302 8561171</Text>
          <TouchableOpacity onPress={whatsappHandler}>
          <Text style={styles.paragraph}>+92 304 2224537</Text>
          </TouchableOpacity>
          <View styles={styles.emailContainer}>
          <Image 
              source={require('../assets/emailicon.png')}
              style={styles.emailIcon}
          />
          <Text style={styles.emailText}>Email</Text>
          </View>
          <Text style={styles.paragraph}>info@petsbazar.online</Text>
          <Text style={styles.formText}>Need Help Send us a Message</Text>
          <TextInput style={styles.formInput} placeholder="Your name" />
          <TextInput style={styles.formInput} placeholder="Your email" />
          <TextInput style={styles.descriptionInput} placeholder="Your message" />
        </ScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
    container:{

        flex:1,
        alignSelf:'center'
    },
  TextStyle: {
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    fontSize:30
  },
  paragraph: {
    textAlign: "center",
    margin: 5,
    fontSize:15
    
  },
  paragraphHeading: {
    textAlign: "center",
    //margin: 5,
    color: "#FF642E",
    fontSize:20,
    fontWeight:'bold'
  },
  formInput: {
    //flex:1,
    height: 40,
    // marginLeft:7,
    //marginRight:7,
    margin: 10,
    width: 300,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    textAlign: "center",
    borderRadius: 20,
    alignSelf:'center'
  },
  descriptionInput:{

    height:100,
    margin:5,
    width:300,
    borderWidth:1,
    borderColor:'black',
    backgroundColor: 'white',
    textAlign:'center',
    borderRadius:20,
    alignSelf:'center'

},
  formText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    margin: 7,
  },
  iconImage: {
   padding: 10,
    marginLeft:10,
    marginTop:3,
    height: 5,
    width: 25,
    resizeMode : 'stretch',
   // alignItems: 'center'
},
headingContainer:{
    
    flexDirection:'row',
    alignSelf:'center',
    margin:10

},
emailText:{
    textAlign: "center",
    marginTop:-30,
    color: "#FF642E",
    fontSize:20,
    fontWeight:'bold',
    marginLeft:20
},
emailIcon:{
    padding: 10,
    marginLeft:125,
    marginBottom:0,
    marginTop:25,
    height: 35,
    width: 25,
    resizeMode : 'cover',
},
emailContainer:{
    flexDirection:'row',
    alignSelf:'center',
    margin:10
}
});
