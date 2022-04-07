import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Picker,
  Platform,
} from "react-native";

//const bodyParser = require('body-parser')
//router.use(bodyParser.json());
//router.use(bodyParser.urlencoded({ extended: true }));

import { withRouter } from "react-router";
import React, { Component } from "react";
import axios from "axios";
//import { Dropdown } from "react-native-material-dropdown";
//import { Icon } from "react-native-elements";
import ImagePickerExample from "../components/CameraFunc";
import SelectDropdown from "react-native-select-dropdown";
import Constants from "expo-constants";
import DropDownPicker from "react-native-dropdown-picker";
import CategoryDropList from "../constants/CategoryDropList";
import CityDropList from "../constants/CityDropList";

export default class Sellnow extends Component {
  constructor(props) {
    super(props);
    this.onChangePetName = this.onChangePetName.bind(this);
    this.onChangePetTitle = this.onChangePetTitle.bind(this);
    this.onChangePetContact = this.onChangePetContact.bind(this);
    this.onChangePetPrice = this.onChangePetPrice.bind(this);
    this.onChangePetDescription = this.onChangePetDescription.bind(this);
    this.onValueChangeCat= this.onValueChangeCat.bind(this);
    this.onValueChangeCity= this.onValueChangeCity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // State
    this.state = {
      name: "",
      title: "",
      contact: "",
      price: "",
      description: "",
      selectedcat:"",
      selectedcity:"",

      //collection categories
      category: [
        {
          itemName: "Pets"
        },
        {
          itemName: "Pets Food"
        },
        {
          itemName: "Pets Products"
        },
        {
          itemName: "Pets Accessories"
        }
      ],

      // cities category
      cityCategory:[

        {
          itemName: "Islamabad"
        },
        {
          itemName: "Rawalpindi"
        },
        {
          itemName: "Lahore"
        },
        {
          itemName: "Peshawar"
        },
        {
          itemName: "Karachi"
        },
        {
          itemName: "Quetta"
        }

      ]
    };
  }


  /*componentDidMount() {
    axios.get('http://localhost:3000/PetsBazar/pets/' )
      .then(res => {
        this.setState({
          name: res.data.name,
          title: res.data.title,
          contact: res.data.contact
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }*/
  onChangePetName(e) {
    this.setState({ name: e.target.value });
  }
  onChangePetTitle(e) {
    this.setState({ title: e.target.value });
  }
  onChangePetContact(e) {
    this.setState({ contact: e.target.value });
  }
  onChangePetPrice(e) {
    this.setState({ price: e.target.value });
  }
  onChangePetDescription(e) {
    this.setState({ description: e.target.value });
  }
  // categories function
  onValueChangeCat(e) {
    this.setState({ selectedcat: e.targetvalue })
  }

  // city function
  onValueChangeCity(e) {
    this.setState({ selectedcity: e.targetvalue })
  }
  onSubmit(e) {
    e.preventDefault();
    const petsObject = {
      name: this.state.name,
      title: this.state.title,
      contact: this.state.contact,
      price: this.state.price,
      description: this.state.description,
      selectedcat:this.state.selectedcat
      
    };
    /*axios.put('http://localhost:3000/pets/update-pets/' + petsObject)
      .then((res) => {
        console.log(res.data)
        console.log('Pet successfully updated')
      }).catch((error) => {
        console.log(error)
      })
    // Redirect to Student List 
    this.props.push('/pets-list')*/
    //axios.post('http://localhost:4000/pets/addpets', petsObject)

    axios
      .post(
        //"http://10.0.2.2:4000/pets/addpets",
        //"http://localhost:4000/pets/addpets",
        "http://192.168.88.45:4000/pets/addpets",
        petsObject
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({
      name: "",
      title: "",
      contact: "",
      price: "",
      description: "",
      selectedcat:"",
      selectedcity:""
    });
  }

  render() {
    //let {name,title,contact} = this.state;
    return (
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <Text style={styles.conText}>Please Fill the Below Form </Text>

            <View style={styles.borderForm}>
              <Text style={styles.formText}>Your Name</Text>
              <TextInput
                style={styles.formInput}
                multiline
                placeholder="Please Enter Your Name"
                maxLength={15}
                value={this.state.name}
                onChange={this.onChangePetName}
                blurOnSubmit={true}
                onChangeText={(name) => this.setState({ name })}
              />

              <Text style={styles.formText}>Category</Text>

             { /*<CategoryDropList />*/ }

             <View style={styles.viewStyle}>
            
             <Picker
          
           itemStyle={styles.itemStyle}
            mode="dropdown"
           style={styles.pickerStyle}
            selectedValue={this.state.selectedcat}
           // onValueChange={this.onValueChangeCat.bind(this)}
           //onValueChange={(selectedcat)=>this.setState({selectedcat})}
           onValueChange={(itemValue,itemIndex)=> this.setState({selectedcat:itemValue})}
        
          >
            {this.state.category.map((item, index) => (
              <Picker.Item
               
                color="black"
                label={item.itemName}
                value={item.itemName}
                index={index}
              />
            ))}
          </Picker>
         
          </View>

              

              <Text style={styles.formText}>Pet/Product Title</Text>
              <TextInput
                style={styles.formInput}
                placeholder="Enter Product Title"
                maxLength={15}
                value={this.state.title}
                blurOnSubmit={true}
                onChange={this.onChangePetTitle}
                onChangeText={(title) => this.setState({ title })}
              />

              <Text style={styles.formText}>City</Text>

              {/*<CityDropList />*/}

              <View style={styles.viewStyle}>

              <Picker
          
           itemStyle={styles.itemStyle}
            mode="dropdown"
           style={styles.pickerStyle}
            selectedValue={this.state.selectedcity}
           onValueChange={(itemValue,itemIndex)=> this.setState({selectedcity:itemValue})}
        
          >
            {this.state.category.map((item, index) => (
              <Picker.Item
               
                color="black"
                label={item.itemName}
                value={item.itemName}
                index={index}
              />
            ))}
          </Picker>

          </View>
              <Text style={styles.formText}> Contact Number </Text>
              <TextInput
                style={styles.formInput}
                placeholder="Phone Number"
                inputType="number"
                maxLength={11}
                keyboardType="number-pad"
                blurOnSubmit={true}
                value={this.state.contact}
                onChange={this.onChangePetContact}
                onChangeText={(contact) => this.setState({ contact })}
              />
              <Text style={styles.formText}>Price</Text>
              <TextInput
                style={styles.formInput}
                multiline
                placeholder="Enter Price"
                inputType="number"
                keyboardType="number-pad"
                blurOnSubmit={true}
                maxLength={7}
                value={this.state.price}
                onChange={this.onChangePetPrice}
                onChangeText={(price) => this.setState({ price })}
              />
              <Text style={styles.formText}>Image of Product</Text>
              <ImagePickerExample />
              <Text style={styles.formText}>
                Description(Optional max 150 words)
              </Text>
              <TextInput
                style={styles.descriptionInput}
                multiline
                placeholder="Describe your product"
                maxLength={150}
                blurOnSubmit={true}
                value={this.state.description}
                onChange={this.onChangePetDescription}
                onChangeText={(description) => this.setState({ description })}
              />
              <TouchableOpacity style={styles.btn} onPress={this.onSubmit}>
                <Text style={styles.btnTxt}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

//export default withRouter(Sellnow);

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
    alignSelf: "center",
  },
  conText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    marginVertical: 10,
    marginHorizontal: 15,
  },

  formInput: {
    //flex:1,
    height: 50,
    // marginLeft:7,
    //marginRight:7,
    fontSize: 18,
    margin: 10,
    width: 350,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    textAlign: "left",
    borderRadius: 10,
    padding: 10,
  },
  formText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    margin: 10,
  },
  descriptionInput: {
    height: 80,
    margin: 10,
    width: 340,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    textAlign: "left",
    borderRadius: 20,
    padding: 10,
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
    alignSelf: "center",
  },
  btnTxt: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    margin: 5,
  },
  dropdown: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
  },
  dropdownContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ff9933",
    padding: 8,
  },
  itemStyle: {
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    color: "black",
    
    
    
  },
  pickerStyle: {
    width: "73%",
    height: 40,
    color: "black",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    //marginLeft:-100,
   // alignItems:"flex-start"

},
  textStyle: {
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign:'left'

    
  },
  viewStyle: {
    // flex: 1,
     alignSelf: "center",
     flexDirection: "row",
     width: "140%",
     justifyContent: "space-between",
     alignItems: "flex-start",
     borderWidth:1,
     height:'5%',
     backgroundColor:'white',
     borderRadius:10,
     margin:7
   }
});
