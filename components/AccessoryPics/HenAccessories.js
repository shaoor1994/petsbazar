import { View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text

} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function HenAccessoriesPics() {
const navigation = useNavigation();
return (
<View>
<TouchableOpacity style={styles.card}

onPress={()=>navigation.navigate('DetailScreen')}

>
<View style={styles.cardView}>
  <Image  style={styles.cardImage}
  source = {require('../../assets/HenAccessories/HenAccessories1.jpg')}   />
  <Text style={styles.nameStyling}>Manual Incubator</Text>
  <Text style={styles.locationStyling}>Rawalpindi</Text>
  <Text style={styles.priceStyling}>Rs.4000/-</Text>
  </View>
  </TouchableOpacity>

  <TouchableOpacity style={styles.card}>
  <View style={styles.cardView}>
  <Image  style={styles.cardImage}
  
  source = {require('../../assets/HenAccessories/HenAccessories2.jpg')}   />
  <Text style={styles.nameStyling}>Automatic Incubator</Text>
  <Text style={styles.AutomaticStyling}>Rawalpindi</Text>
  <Text style={styles.priceStyling}>Rs.20000/-</Text>
  </View>
  </TouchableOpacity>
  <TouchableOpacity style={styles.card}>
  <View style={styles.cardView}>
  <Image  style={styles.cardImage}
  
  source = {require('../../assets/HenAccessories/HenAccessories3.jpeg')}   />
  <Text style={styles.nameStyling}>Manual Incubator</Text>
  <Text style={styles.locationStyling}>Rawalpindi</Text>
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
    borderRadius:10,
    marginLeft:-20
},
nameStyling:{
  marginLeft:0,
  marginTop:10,
  fontWeight:'bold',
  fontSize:20
  
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
AutomaticStyling:{
  marginLeft:-130,
  marginTop:50,
  fontWeight:'bold',
  fontSize:20
}


});