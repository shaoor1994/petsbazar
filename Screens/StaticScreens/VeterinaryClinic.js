import React, { Component } from "react";

import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import IslamabadClinics from "../../components/ClinicDetails/IslamabadClinics";
import RawalpindiClinics from "../../components/ClinicDetails/RawalpindiClinics";
import LahoreClinics from "../../components/ClinicDetails/LahoreClinics";
import KarachiClinics from "../../components/ClinicDetails/KarachiClinics";
import FasialabadClinics from "../../components/ClinicDetails/FaisalabadClinics";


export default class VeterinaryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "",
    };
  }

  state = {active: null};

  setTab = (tab) => {
    this.setState({ selectedTab: tab });
  };

  selectedTab = () => {
    switch (this.state.selectedTab) {
      case "Islamabad":
        return <IslamabadClinics />;
      case "Rawalpindi":
        return <RawalpindiClinics/>
      case "Lahore":
        return <LahoreClinics/>;
      case "Karachi":
        return <KarachiClinics/>
      case "Faisalabad":
        return <FasialabadClinics/>

      default:
        return <IslamabadClinics />;
    }
  };

  render() {
    return (
      
      <View>
      <ScrollView vertical={true}>
      {/*<Text style={styles.txt}>Veterinary Clinics located all over Pakistan</Text>*/}
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={() => {this.setTab("Islamabad")
          this.setState({ active: 0 })
          
          }}
          
          
          >
            <Image
              style={this.state.active === 0 ? styles.actvImageStyling : styles.ImageStyling}
              source={require("../../assets/CityPics/Islamabad.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.setTab("Rawalpindi")
          this.setState({ active: 1 })
          }}
          
          >
            <Image
              style={this.state.active === 1 ? styles.actvImageStyling : styles.ImageStyling}
              source={require("../../assets/CityPics/Rawalpindi.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.setTab("Lahore")
          
          this.setState({ active: 2 })

          }}
          
          
          
          >
            <Image
            
              style={this.state.active === 2 ? styles.actvImageStyling : styles.ImageStyling}
              source={require("../../assets/CityPics/Lahore.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.setTab("Karachi")
          
          this.setState({ active: 3 })
          
          }}
          
          
          >
            <Image
              style={this.state.active === 3 ? styles.actvImageStyling : styles.ImageStyling}
              source={require("../../assets/CityPics/Karachi.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.setTab("Faisalabad")
          
          this.setState({ active: 4 })

          }}
          
          >
            <Image
              style={this.state.active === 4 ? styles.actvImageStyling : styles.ImageStyling}
              source={require("../../assets/CityPics/Faisalabad.png")}
            />
          </TouchableOpacity>
        </ScrollView>
       </View>

       <View>
       

        {
            this.selectedTab()
        }
        
       </View>
       </ScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  txt: {
    fontSize: 20,
  },
  ImageStyling:{
    height:100,
    width:100,
    //margin:-10
    //marginLeft:10,
    //marginRight:10,
    resizeMode:'cover',
    //marginTop:10
    margin:10,
    borderRadius:30,
    borderWidth:2,
    borderColor:'#696969'
} ,

actvImageStyling:{
  height:100,
  width:100,
  //margin:-10
  //marginLeft:10,
  //marginRight:10,
  resizeMode:'cover',
  //marginTop:10
  margin:10,
  borderRadius:30,
  borderWidth:2,
  borderColor:'#FF642E',
  
} 
});
