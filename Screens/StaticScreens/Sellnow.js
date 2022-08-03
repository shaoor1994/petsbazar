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
  Alert,
  input,
  KeyboardAvoidingView,
  Dimensions,
  SafeAreaView,
  Linking,
  

  //fetch
} from "react-native";

import mime from "mime";

//const bodyParser = require('body-parser')
//router.use(bodyParser.json());
//router.use(bodyParser.urlencoded({ extended: true }));

//let path = require("path");
import React, { Component } from "react";
import axios from "axios";
import Blink from '../../constants/Blink'


import * as ImagePicker from 'expo-image-picker';
import Constants from "expo-constants";
import { Permissions } from 'expo-permissions'
import * as FileSystem from 'expo-file-system';
import qs from "qs";
import * as OpenAnything from "react-native-openanything";
import configuration from '../../constants/BaseUrl'
//import RNFetchBlob from 'rn-fetch-blob';


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
    this.onFileChange = this.onFileChange.bind(this);
   // this.pickImage = this.pickImage.bind(this);
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
      imgforsell:"",

      //collection categories
      category: [
        
        {
          itemName: "Select Category...."
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
          itemName: "Select City...."
        },
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

  onFileChange(e) {
    this.setState({ imgforsell: e.targetvalue})}

  // uploading Image


  _getPhotoLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      //base64: true,
      exif: true,
      aspect: [3, 3],
      quality:0.25
    });

    

    if (!result.cancelled) {
      this.setState({ imgforsell: result });
      
      
    }
    this.props.navigation.setParams({
      imgforsell: this.state.imgforsell
    });
  };

  


  async onSubmit(e) {



e.preventDefault();
      const formData = new FormData();
      formData.append("name",this.state.name)
     formData.append("title", this.state.title);
      
      formData.append("contact", this.state.contact);

      
     
     formData.append("price", this.state.price);

     
       formData.append("description", this.state.description);

      
     
      formData.append("selectedcat", this.state.selectedcat);

     
      formData.append("selectedcity", this.state.selectedcity);


     
     
  
    
    formData.append("imgforsell",this.state.imgforsell)
    //formData.append("imgforsell", img);
    /*const newImageUri = "file:///" + imgforsell.split("file:/").join("");*/

    

    /*formData.append('imgforsell', {
      uri: newImageUri,
      //uri:`${fileToUpload.fieldname}-${Date.now()}${path.extname(fileToUpload.originalname)}`,
      type: mime.getType(newImageUri),
      name: newImageUri.split("/").pop()
    }

    )*/


      // from stack overflow

  


      
   /*fetch(`${configuration.url}/pets/addpets`,{
    method:"POST",
    body:JSON.stringify(formData)
   })
  .then((response) => {
   console.log(response.data)


  })
.catch( (error) =>{
  alert(error.message.status);
  console.log(error);
});
 this.setState({
      name: "",
      selectedcat:"",
      title: "",
      selectedcity:"",
      contact: "",
      price: "",
      imgforsell:"",
      description: ""
    })*/
    /*
let data = await axios.post(`${configuration.url}/pets/addpets`)
    .then(({ data }) => {
      console.log(data);
      data = data.data;
    return data;
    })
    .catch((err,formData) => {
      console.error(err.toJSON());
      console.log(Object.fromEntries(formData))
      // res.status(500).json(err) 👈 don't do this, it's not Express
    })
    .finally(() => {
      this.setState({
        name: "",
        title: "",
        contact: "",
        price: "",
        description: "",
        selectedcat: "",
        selectedcity: "",
        imgforsell: "",
      });
    });*/
  const  petsObject = {
      name:this.state.name,
      title:this.state.title,
      contact:this.state.contact,
      price:this.state.price,
      description:this.state.description,
      selectedcat:this.state.selectedcat,
      selectedcity:this.state.selectedcity,
      imgforsell:this.state.imgforsell
    };

    axios.post(`${configuration.url}/pets/addpets`, petsObject)
    .then(function (response) {
      console.log(response);
    })
    .catch((error) => console.log( error.response.request._response ) );
    this.setState({
      name: "",
      title: "",
      contact: "",
      price: "",
      description: "",
      selectedcat:"",
      selectedcity:"",
      imgforsell:" "
    });

}

  

  

  render() {
   
    const {imgforsell} = this.state
    
  
   
    return (

      /*
      <View style={styles.mainView}>
      <SafeAreaView>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        //bounces={true}
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
                //value={this.state.name}
                onChange={this.onChangePetName}
                blurOnSubmit={true}
                onChangeText={(name) => this.setState({ name })}
              />

              <Text style={styles.formText}>Category</Text>

             

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
                //value={this.state.title}
                blurOnSubmit={true}
                onChange={this.onChangePetTitle}
                onChangeText={(title) => this.setState({ title })}
              />

              <Text style={styles.formText}>City</Text>

             

              <View style={styles.viewStyle}>

            <Picker
          
           itemStyle={styles.itemStyle}
            mode="dropdown"
           style={styles.pickerStyle}
            selectedValue={this.state.selectedcity}
           onValueChange={(itemValue,itemIndex)=> this.setState({selectedcity:itemValue})}
        
          >
            {this.state.cityCategory.map((item, index) => (
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
                //value={this.state.contact}
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
                //value={this.state.price}
                onChange={this.onChangePetPrice}
                onChangeText={(price) => this.setState({ price })}
              />
              <Text style={styles.formText}>Image of Product</Text>

        
             

              <TouchableOpacity  style={styles.btn} onPress={this._getPhotoLibrary.bind(this)}>
              <Text style={styles.btnTxt}> Choose File</Text> 
                </TouchableOpacity>
        
                {imgforsell ? (
              <Image source={{ uri: imgforsell.uri} } style={styles.uploadimgstyle} />
              
            ) : (
              <View/>
            )}
            
              
              <Text style={styles.formText}>
                Description(Optional max 150 words)
              </Text>
              <TextInput
                style={styles.descriptionInput}
                multiline
                placeholder="Describe your product"
                maxLength={150}
                blurOnSubmit={true}
                //value={this.state.description}
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
      </SafeAreaView>
      </View>
     
    */
   
   <View style={styles.mainView}>

              <Text style={styles.conText}> Sell Now!!! </Text>

              <TouchableOpacity /*style={styles.btn}*/ 
               onPress={ () => {
            Linking.openURL(
              'http://api.whatsapp.com/send?phone=923320565978' 
            );
          }} >

          <Blink duration={500}
        //repeat_count={3}
        
        >

              <Text style={styles.btnTxt}>  Whatsapp  </Text>

              </Blink>

              </TouchableOpacity>

   </View>
   
   
      );
  }
}

//export default withRouter(Sellnow);

var styles = StyleSheet.create({

  root:{
    flex:1,
    padding:0,
    margin:0
 },

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
    textAlign:"auto",
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
    margin: 20,
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
    //color: "white",
    color:'#006611',
    alignSelf:'center',
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
  // width:Dimensions.get("window").width/1.1,
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
   },
   uploadimgstyle:{

    width: 100,
    height: 100,
    margin:5,
    resizeMode:'cover',
    alignSelf:'center'

   },
   mainView:{
   
   }
});
