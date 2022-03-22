import { View, Text, TextInput, Image, TouchableOpacity,StyleSheet ,ScrollView} from "react-native";
import React, { Component } from "react";
import {Icon} from 'react-native-elements'
import ImagePickerExample from "../components/CameraFunc";

export default class Sellnow extends Component {
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
      };
  render() {
    return (
        
        
        <View style={styles.container}>

        <Text style={styles.sellText}>Sell Now</Text>

        <ScrollView nestedScrollEnabled={true}>
        <View style={styles.formContainer}>

        <Text style={styles.conText}>Please Fill the Below Form </Text>

        <View style={styles.borderForm}>

        <Text style={styles.formText}>Your Name</Text>
        <TextInput style={styles.formInput}/>
        <Text style={styles.formText}>Title</Text>
        <TextInput style={styles.formInput}/>
        <Text style={styles.formText}>Category</Text>
        <TextInput style={styles.formInput}/>
        <Text style={styles.formText}>City</Text>
        <TextInput style={styles.formInput}/>
        <Text style={styles.formSellnow}> Contact Number </Text>
        <TextInput style={styles.formInput}/>
        <Text style={styles.formText}>Price</Text>
        <TextInput style={styles.formInput}/>
        <Text style={styles.formText}>Image of Product</Text>
        <ImagePickerExample/>
        <Text style={styles.formText}>Description(Optional)</Text>
        <TextInput style={styles.descriptionInput}/>
        <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTxt}>Submit</Text>
        </TouchableOpacity>
        </View>
            
        </View>
        </ScrollView>
        </View>
    
    
    )
  }
}

var styles = StyleSheet.create({

    container:{
        flex:1,
        flexDirection:'column',
        height:'auto',
        width:'auto'
    },
   
 sellText:{
        fontSize:35,
        fontWeight:'bold',
        textAlign:'center'
    },
   
    formContainer:{
        backgroundColor:'#ff9933',
        flex: 1,
        flexDirection:'column'
    },
    conText:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:'left',
        margin:10
    },
    inputContainer:{
        
    },
    formInput:{
        //flex:1,
        height:40,
       // marginLeft:7,
        //marginRight:7,
        margin:7,
        width:300,
        borderWidth:1,
        borderColor:'black',
        backgroundColor: 'white',
        textAlign:'center',
        borderRadius:20
    },
    formText:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'left',
        margin:7
    },
    descriptionInput:{

        height:80,
        margin:5,
        width:300,
        borderWidth:1,
        borderColor:'black',
        backgroundColor: 'white',
        textAlign:'center',
        borderRadius:20

    },
    borderForm:{

        alignSelf:'center',
        borderWidth:1,
        borderColor:'#FF642E',
        margin:7,
        height:'auto',
        width:'auto'
    },
    btn:{
        margin:15,
        height:35,
        width:120,
        backgroundColor:'#FF642E',
        borderRadius:20
    },
    btnTxt:{

        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        color:'white',
        margin:5
    }

})