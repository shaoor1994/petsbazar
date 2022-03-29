import { View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text

} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function DogAccessoriesPics() {
const navigation = useNavigation();
return (
<View>
<TouchableOpacity style={styles.card}

onPress={()=>navigation.navigate('DetailScreen')}

>
<View style={styles.cardView}>
  <Image  style={styles.cardImage}
  source = {require('../../assets/DogAccessories/DogAccessories1.jpg')}   />
  <Text style={styles.nameStyling}>Self Cleaner</Text>
  <Text style={styles.selfCleaner}>Rawalpindi</Text>
  <Text style={styles.priceStyling}>Rs.4000/-</Text>
  </View>
  </TouchableOpacity>

  <TouchableOpacity style={styles.card}>
  <View style={styles.cardView}>
  <Image  style={styles.cardImage}
  
  source = {require('../../assets/DogAccessories/DogAccessories2.jpg')}   />
  <Text style={styles.nameStyling}>Harness + Lead</Text>
  <Text style={styles.middleStyling}>Rawalpindi</Text>
  <Text style={styles.priceStyling}>Rs.4000/-</Text>
  </View>
  </TouchableOpacity>
  <TouchableOpacity style={styles.card}>
  <View style={styles.cardView}>
  <Image  style={styles.cardImage}
  
  source = {require('../../assets/DogAccessories/DogAccessories3.jpg')}   />
  <Text style={styles.nameStyling}>Pet Food Bowl</Text>
  <Text style={styles.locationStyling}>Rawalpindi</Text>
  <Text style={styles.priceStyling}>Rs.4000/-</Text>
  </View>
  </TouchableOpacity>
  <TouchableOpacity style={styles.card}>
  <View style={styles.cardView}>
  <Image  style={styles.cardImage}
  
  source = {require('../../assets/DogAccessories/DogAccessories4.jpg')}   />
  <Text style={styles.nameStyling}>Bonnie Cat Food</Text>
  <Text style={styles.middleStyling}>Rawalpindi</Text>
  <Text style={styles.priceStyling}>Rs.4000/-</Text>
  </View>
  </TouchableOpacity>
  <TouchableOpacity style={styles.card}>
  <View style={styles.cardView}>
  <Image  style={styles.cardImage}
  
  source = {require('../../assets/DogAccessories/DogAccessories5.jpg')}   />
  <Text style={styles.nameStyling}>Leather Collar</Text>
  <Text style={styles.collar}>Rawalpindi</Text>
  <Text style={styles.priceStyling}>Rs.4000/-</Text>
  </View>
  </TouchableOpacity>
 

</View>
)
}


var styles = StyleSheet.create({



ImageStyling:{
    height:100,
    width:100,
    //margin:-10
   // marginLeft:-10,
    //marginRight:-10,
    resizeMode:'cover'
} ,
card:{
    backgroundColor:'#fff',
    marginBottom:10,
    marginLeft:'2%',
    width:"100%",
    shadowColor:'#000',
   /* shadowOpacity:1,
    shadowOffset:{
        height:3,
        width:3
    }*/

},
cardImage:{
    width:'50%',
    height:120,
    resizeMode:'contain',
    borderRadius:10
},
nameStyling:{
  marginLeft:3,
  marginTop:10,
  fontWeight:'bold',
  fontSize:25
  
},
locationStyling:{
  marginLeft:-110,
  marginTop:50,
  fontWeight:'bold',
  fontSize:20
  
},
priceStyling:{
  marginLeft:-80,
  marginTop:80,
  fontWeight:'bold',
  fontSize:20
},
cardView:{
  flexDirection:'row'
},
middleStyling:{
  marginLeft:-125,
  marginTop:50,
  fontWeight:'bold',
  fontSize:20
},
collar:{

  marginLeft:-100,
  marginTop:50,
  fontWeight:'bold',
  fontSize:20

},
selfCleaner:{
  marginLeft:-95,
  marginTop:50,
  fontWeight:'bold',
  fontSize:20
}


});