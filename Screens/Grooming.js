import React, { Component , useState  } from 'react'
import {Icon} from 'react-native-elements'

import {search} from 'react-native-vector-icons/FontAwesome'
import
 { 
    Text ,
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    TextInput,
    Dimensions
    
}
 from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import CatPics from '../components/CatPics';
import DogPics from '../components/DogPics';
import HenPics from '../components/HenPics';
import DogGrooming from '../components/DogGrooming';
//import PetsList from '../components/PetsList';
//import Api from '../components/Api';

export default class Grooming extends Component {
    constructor(props) {
        super(props)
        this.state = {
          selectedTab: ''
         
        }
       
      }
      
   setTab = (tab) => {
        this.setState({selectedTab: tab})
    }

    selectedTab = () => {
        switch(this.state.selectedTab){
            case 'Cat':
                return <CatPics/>
            case 'Lion':
                return <Text>Lion Grooming</Text>
            case 'Parrot':
                return <Text>Bird Grooming</Text>
            case 'Hamster':
                return <Text> Hamster Grooming</Text>
            case 'Hen':
                return <HenPics/>
            case 'Dog':
                return <DogGrooming/>
             case 'Rabbit':
                return <Text>Rabbit Grooming</Text>
                case 'Monkey':
                return <Text>Monkey Grooming</Text>
            default:
                return <CatPics/>
        }
    }
   
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
             onPress={()=> this.props.navigation.push('sDrwaer')}
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
       //const {isVisible} = this.state
        return (
            <View style={{flex:1}}>
                <Text style={styles.mainText}>Pets Grooming Tips</Text>
               <View style={styles.SectionStyle}>
                <Image style={styles.SearchImage} source={require('../assets/searchicon.png')}/> 
               <TextInput
                
                style={styles.searchPets}
                placeholder="search"
                placeholderTextColor='black'
                                  
                /> 
                <Image style={styles.gpsImage} source={require('../assets/gps.png')} />
                </View>

                <View style={styles.ViewContainer}>
                
                <ScrollView
                showsVerticalScrollIndicator={false}
                    nestedScrollEnabled={true}
                >
                <View style={styles.petsListView}>
                {/*<PetsList/>*/}
                <ScrollView
                 horizontal={true} 
    showsHorizontalScrollIndicator={false}
    >
      
     
      <TouchableOpacity onPress={ () =>this.setTab('Cat')}
      >
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/petslist/cat.png')}   />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>this.setTab('Lion')}>
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/petslist/lion.png')}   />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> this.setTab('Parrot')}>
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/petslist/birds.png')}   />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>this.setTab('Hamster')}>
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/petslist/hamster.png')}   />
      </TouchableOpacity>
      <TouchableOpacity  onPress={()=>this.setTab('Hen')}>
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/petslist/Hen.png')}   />
      </TouchableOpacity>
     
      <TouchableOpacity onPress={()=>this.setTab('Dog')}>
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/petslist/dog.png')}   />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>this.setTab('Monkey')}>
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/petslist/monkey.png')}   />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>this.setTab('Rabbit')}>
      <Image  style={styles.ImageStyling}
      
      source = {require('../assets/petslist/rabbit.png')}   />
      </TouchableOpacity>
      
    </ScrollView>
                
                </View>

                <View style={styles.petsApiView}>
                {/*
                  this.state.isVisible ?
                    
                        <Api/>
                        
                        :null
                        */

                        this.selectedTab()
                }
              
                
                </View>
                
                
                
                </ScrollView>
                
                
                </View>
                
              

            </View>
        )
    }
}


var styles = StyleSheet.create({

    mainText:{
        fontWeight:'bold',
        fontSize:30,
        marginTop:20,
        marginLeft:15
    },
    searchPets:{
       /* height:40,
        marginLeft:10,
        width:200,
        borderWidth:1,
        borderColor:'black',
        backgroundColor: 'rgba(255, 255,255,0.5)',
        textAlign:'center',
        borderRadius:20,*/
        flex:1
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5 ,
        margin: 10
    },
    SearchImage: {
        padding: 10,
        marginLeft:10,
        marginTop:8,
        height: 25,
        width: 25,
        resizeMode : 'stretch',
        alignItems: 'center'
    },
    gpsImage: {
        padding: 10,
        marginLeft:10,
        marginRight:10,
        marginTop:8,
        height: 20,
        width: 20,
        resizeMode : 'stretch',
        alignItems: 'center'
    },
    ImageStyling:{
      height:100,
      width:100,
      //margin:-10
      marginLeft:-10,
      marginRight:-10,
      resizeMode:'cover'
  } ,
    petsListView:{
      //marginTop:10,
//flex:1,
//flexWrap:'wrap'
    },
    petsApiView:{
      marginVertical:15,
      
      
    },
    ViewContainer:{

      flex: 1,
        /*alignContent:'flex-start' ,*/
        flexDirection: 'column',
        //height:Dimensions.get('window').height,
        //width:Dimensions.get('window').width,
        //width: '100%'
    }

    
});