import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform ,TouchableOpacity,Text,StyleSheet} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

   /* if (!result.cancelled) {
      setImage(result.uri);
    }*/

    if (!result.cancelled){
      serImage(uploadImage(result.uri).then(()=>{
        Alert.alert("Success")
      }).catch((error)=>{
        Alert.alert('error:',error.message)
      }))
    }
  };

  let uploadImage = async (uri,imgforsell) => {
    const response = await fetch(uri);
    const blob  = await response.blob();
    var ref = axios.post("http://192.168.10.12:4000/pets/addpets",imgforsell);
    return ref.put(blob);
  }

  return (
    <View >
     { /*<Button  title="Pick an image from camera roll" onPress={pickImage} /> */}
      <TouchableOpacity style={styles.btn} onPress={pickImage}>
      <Text style={styles.btnTxt}> Choose File</Text> 
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200,marginLeft:50 }} />}
    </View>
  );
}

var styles = StyleSheet.create({

    btn:{
        margin:15,
        height:35,
        width:120,
        backgroundColor:'#FF642E',
        borderRadius:20,
        alignSelf:'center'
    },
    btnTxt:{

        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        color:'white',
        margin:5
    }

})