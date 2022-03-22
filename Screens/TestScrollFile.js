import React, { Component } from 'react'
import {Icon} from 'react-native-elements'

import {
    Image,
    View,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Text,
    Navigation

} from 'react-native';

import Swiper from "react-native-web-swiper";
//import { Swiper} from 'react-native-gesture-handler'
import { ScrollView } from 'react-native-gesture-handler';
//import ArrayCode from '../components/ArrayCode';
import PetsScreen from '../components/Pets';
import FoodScreen from '../components/Food';
import AccessoriesScreen from '../components/Accessories';
import FeaturedPets from '../components/FeaturedPets';
//import {DrawerNavigator,navigation,navigate} from 'react-navigation';
//import { useNavigation } from '@react-navigation/native'
//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
//import navigation from 'react-navigation'
import sDrawer from './Drawers'
//import Drawer from 'react-native-drawer'

//import { createDrawerNavigator } from '@react-navigation/drawer';



export default class TestScrollFile extends Component {
    /* Drawer = createDrawerNavigator();

 MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}*/
    
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
          //  onPress={()=> this.MyDrawer()}
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
            <View style={styles.mainView}>
                <ScrollView showsVerticalScrollIndicator={false}
                    nestedScrollEnabled={true} >

                    <View style={styles.slider}>
                        <Swiper
                            nestedScrollEnabled={true}
                            horizantal
                            loop
                            timeout={-1.5}
                            controlsProps={{
                                dotActiveStyle: { backgroundColor: 'red' },
                                cellsContent: {
                                    //'bottom-left': (<Text>SOME LOGO</Text>),
                                }
                            }}
                        >
                            <View style={styles.imgContainer}>

                                <Image style={styles.images} source={require('../assets/Slider.jpg')} />
                            </View>
                            <View style={styles.imgContainer}>
                                <Image style={styles.images} source={require('../assets/slide2.jpeg')} />
                            </View>

                        </Swiper>
                    </View>

                    {/* Adding view for lager touchableopacity */}

                    <View style={styles.opacityView} >
                        <TouchableOpacity >

                            <View style={styles.verticalOpacity}>
                                <Image style={styles.verrticalImage}
                                    source={require('../assets/vertical_imageupdated.png')} />
                            </View>
                        </TouchableOpacity>

                        {/* adding view to aligh items vertically */}

                        <View style={styles.dualOpacityView}>
                            <TouchableOpacity>

                                <View style={styles.horizantalOpacity}>
                                    <Image style={styles.foodImage}

                                        source={require('../assets/Food_Horizantal_Img.png')}

                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>

                                <View style={styles.horizantalOpacity}>
                                    <Image
                                        style={styles.accessoriesImage}
                                        source={require('../assets/Accessories_Horizantal_img.png')}

                                    />
                                </View>
                            </TouchableOpacity>
                        </View>


                    </View>
                    {/* Pets View */}
                    <View style={styles.petsView}  >

                        <Text style={styles.sliderViewStatictText}>Pets</Text>
                        


                     {   /*<View style={styles.petsArrayView}>*/ }




                            {<PetsScreen />}

                        {/*</View>*/}

                    </View>
                    {/* Foods View */}
                    <View style={styles.FoodsView}  >

                        <Text style={styles.sliderViewStatictText}>Food</Text>
                        {<FoodScreen/>}
                    </View>
                    {/* Accessories View */}
                    <View style={styles.AccessoriesView}  >

                        <Text style={styles.accessoriesStatictText}>Accessories</Text>
                        {<AccessoriesScreen/>}
                    </View>
                    { /* Featured Pets View */}
                    <View style={styles.featuredPetsView}  >

                        <Text style={styles.featuredPetsStaticText}>Featured Pets</Text>
                        {<FeaturedPets/>}


                    </View>
                </ScrollView>
            </View>

        )
    }
}

var styles = StyleSheet.create({

    mainView: {
        flex: 1,
        /*alignContent:'flex-start' ,*/
        flexDirection: 'column',
        //height:Dimensions.get('window').height,
        //width:Dimensions.get('window').width,
        width: '100%'




    },

    images: {
        width: '100%',
        height: '100%',
        resizeMode: "cover"
    },

    imgContainer: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        height: 'auto'
    },
    verrticalImage: {

        //width:'null',
        //height:'null',
        height: 275,
        width: 375,
        resizeMode: 'stretch',
        marginTop: 73,
        marginLeft: -115,
        marginBottom: 30,
    },
    foodImage: {

        height: 200,
        width: 230,
        resizeMode: 'contain',
        marginTop: 95,
        paddingRight: 90,
        paddingLeft: 0,
        aspectRatio: 1.5,
        //paddingLeft:80,
        marginLeft: -65,
        // marginRight:-65,
        marginBottom: 60,
    },
    accessoriesImage: {

        //width:'null',
        //height:'null',
        height: 200,
        width: 270,
        resizeMode: 'stretch',
        marginTop: 100,
        marginLeft: -45,
        marginBottom: 30,
    },

    slider: {
        flexDirection: 'column',
        height: '20%',
        marginBottom: '3.5%',
        position: 'relative',
        padding: 0
    },

    opacityView: {

        paddingLeft: 60,
        paddingRight: 60,
        flexDirection: 'row',
        //alignItems:'flex-start',
        alignContent: 'flex-start',
        justifyContent: 'center',
        alignContent: 'stretch',
        marginTop: -10,
        marginBottom:20,
        alignContent: 'flex-start',
        display: 'flex',
        resizeMode: 'cover'


    },

    verticalOpacity: {
        height: 200,
        width: 170,
        //borderRadius:30, 
        alignContent: 'stretch',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        //backgroundColor:'#8B0000',
        justifyContent: 'center'

    },

    horizantalOpacity: {
        flex: 1,
        height: 100,
        paddingBottom: 10,
        marginRight: -20,
        width: 170,
        borderRadius: 30,
        alignContent: 'center',
        //backgroundColor: '#464643',
        justifyContent: 'center'
    },

    dualOpacityView: {

        flexDirection: 'column',
        paddingLeft: 10,
        justifyContent: 'space-around'
    },

    petsView: {
        marginTop: 35,
        
        //marginBottom:20,
        flexDirection: 'column',
        marginBottom:-30,
        //alignItems:'center',
        height: 200,
        width: Dimensions.get('screen').width
        //marginRight:50,
        //alignContent: 'center',
        //justifyContent: 'center',
        //justifyContent:'flex-start',
        // height:Dimensions.get('screen').height,
        //width:Dimensions.get('screen').width,



    },
    sliderViewStatictText: {
        justifyContent: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: '1.5%',
        marginRight: '80%'



    },
    FoodsView: {
        marginTop: 20,
        flexDirection: 'column',
        //marginRight:50,
        //alignContent: 'center',
        //justifyContent: 'center',
        alignItems: 'center',
        marginBottom:-25

    },

    AccessoriesView: {
        marginTop: 35,
        flexDirection: 'column',
        //marginRight:50,
        //alignContent: 'center',
        //justifyContent: 'center',
        alignItems: 'center'

    },
    accessoriesStatictText: {
        justifyContent: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 0,
        marginRight: '60%'


    },

    featuredPetsView: {

        marginTop: 10,
        flexDirection: 'column',
        //marginRight:50,
        //alignContent: 'center',
        //justifyContent: 'center',
        alignItems: 'center',
        
        marginBottom:35

    },

    featuredPetsStaticText: {

        justifyContent: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 0,
        marginRight: '56%'

    },
    petsArrayView: {
        //height:'100%',
        //width:'100%',
        flex: 1,
        height: 300,
        width: Dimensions.get('screen').width,
        flexDirection: 'row',
        alignItems:'center'
        //backgroundColor:'black'


    },
    petsImageOpacity: {

        backgroundColor: 'red',
        //height:'100%',
        //width:"100%",
        flexDirection: 'row'

    },
    icon: {
        paddingLeft: 10
      },
      iconContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: 120
      }



});