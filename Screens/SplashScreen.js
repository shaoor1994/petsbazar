import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Dimensions
} from 'react-native';
import HomeScreen from './Home';

//import HomeScreen from './Home';
//import TestScrollFile from './TestScrollFile';

export default class SplashScreen extends Component {
  
  constructor() {
    super();
    this.state = {
      isVisible: true,
    }
  }
  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false
    });
  }

  componentDidMount() {
    var that = this;
    setTimeout(function () {
      that.Hide_Splash_Screen();
    }, 5000);
  }

  render() {
    let Splash_Screen = (
      <View style={styles.SplashScreen_RootView}>
        <View style={styles.SplashScreen_ChildView}>
          <Image source={require('../assets/PETSBAZAR-LOGO.png')}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
        </View>
        <View style={styles.SplashScreen_CopyRights}>
        <Text>petsbazar.online 2022 | All Rights Reserved</Text>
        <Text>Powered By: mh9 solutions</Text>
        </View>
      </View>)
    return (
      <View style={styles.MainContainer}>
        {/*<Text style={{textAlign: 'center'}}> Splash Screen Example</Text>*/}
        {
          <HomeScreen />
          
        
        }
        {
          (this.state.isVisible === true) ? Splash_Screen : null
          
        }
        
      </View>
      
    );
  }
}
const styles = StyleSheet.create(
  {
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      //alignItems: 'center',  
      paddingTop: (Platform.OS === 'ios') ? 20 : 0,
      //paddingTop: (Platform.OS ==='android')? 20:0,
      //paddingTop:(Platform.OS ==='android' ) ? 40:0,
      paddingBottom: (Platform.OS ==='android')? 20:0
    },

    SplashScreen_RootView:
    {
      justifyContent: 'center',
      flex: 1,
       margin: 10,
      marginLeft:0,
      position: 'absolute',
      height:Dimensions.get('screen').height,
      width:Dimensions.get('screen').width

     // width: '100%',
      //height: '100%',
    },

    SplashScreen_ChildView:
    {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      width:'100%',
      height:'100%',
     flex: 1,
    },
    SplashScreen_CopyRights:{
      
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
     // flex: 1,
      marginBottom:30

    }
  });  