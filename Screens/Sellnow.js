import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Picker
} from "react-native";

import React, { Component } from "react";
//import { Dropdown } from "react-native-material-dropdown";
import { Icon } from "react-native-elements";
import ImagePickerExample from "../components/CameraFunc";
import SelectDropdown from 'react-native-select-dropdown'



export default class Sellnow extends Component {
  static navigationOptions = {
    //  title: 'PetsBazar',

    headerTitle: () => (
      <Image
        style={{
          resizemode: "cover",
          width: 30,
          height: 30,
          marginBottom: 5,
          marginTop: 5,
          marginLeft: 60,
        }}
        source={require("../assets/PETSBAZAR-Favicon.png")}
      />
    ),
    headerRight: (
      <Text style={{ fontWeight: "bold", marginRight: 80, fontSize: 25 }}>
        PetsBazar
      </Text>
    ),
    headerLeft: (
      <TouchableOpacity
      //onPress={()=> this.props.navigation.push('sDrwaer')}
      >
        <Icon
          // containerStyle={styles.icon}
          style={{ paddingLeft: 10 }}
          type="ionicon"
          name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
          //name={Platform.OS === "android" ? "android-menu" : "md-menu"}
        />
      </TouchableOpacity>
    ),

    headerStyle: {
      backgroundColor: "#ffffff",
    },

    //headerTintColor: '#0ff',
    headerTitleStyle: {
      fontWeight: "bold",
    },
    headerTitleAlign: "left",
  };

   
  //state={category:''}
   // state={citySelect:''}
  render() {
    const categories = ["Lion", "Cat", "Dog", "Parrot","Hamster","Monkey"]
    const citySelect= ["Islamabad","Rawalpindi","Lahore","Peshawar","Karachi","Quetta"]
    return (
      <View style={styles.container}>
        <Text style={styles.sellText}>Sell Now</Text>

        <ScrollView nestedScrollEnabled={true}>
          <View style={styles.formContainer}>
            <Text style={styles.conText}>Please Fill the Below Form </Text>

            <View style={styles.borderForm}>
              <Text style={styles.formText}>Your Name</Text>
              <TextInput style={styles.formInput} />
              <Text style={styles.formText}>Title</Text>
              <TextInput style={styles.formInput} />
              <Text style={styles.formText}>Category</Text>
             

          <SelectDropdown

        style={{height:100}}
	data={categories}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/>

              <Text style={styles.formText}>City</Text>
             
            <SelectDropdown
	data={citySelect}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/>
            
        
              <Text style={styles.formText}> Contact Number </Text>
              <TextInput style={styles.formInput} />
              <Text style={styles.formText}>Price</Text>
              <TextInput style={styles.formInput} />
              <Text style={styles.formText}>Image of Product</Text>
              <ImagePickerExample />
              <Text style={styles.formText}>Description(Optional)</Text>
              <TextInput style={styles.descriptionInput} />
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    height: "auto",
    width: "auto",
  },

  sellText: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },

  formContainer: {
    backgroundColor: "#ff9933",
    flex: 1,
    flexDirection: "column",
  },
  conText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    margin: 10,
  },
  inputContainer: {},
  formInput: {
    //flex:1,
    height: 40,
    // marginLeft:7,
    //marginRight:7,
    margin: 7,
    width: 300,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    textAlign: "center",
    borderRadius: 20,
  },
  formText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    margin: 7,
  },
  descriptionInput: {
    height: 80,
    margin: 5,
    width: 300,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    textAlign: "center",
    borderRadius: 20,
  },
  borderForm: {
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#FF642E",
    margin: 7,
    height: "auto",
    width: "auto",
  },
  btn: {
    margin: 15,
    height: 35,
    width: 120,
    backgroundColor: "#FF642E",
    borderRadius: 20,
  },
  btnTxt: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    margin: 5,
  },
  dropdown:{
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'black'

  }
});
