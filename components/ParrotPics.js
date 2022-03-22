import { View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text

} from 'react-native'
import React from 'react'

export default function ParrotPics() {
return (
<View>
<TouchableOpacity style={styles.card}>
<View style={styles.cardView}>
  <Image  style={styles.cardImage}
  source = {require('../assets/ParrotPics/AfricanGrey.jpg')}   />
  <Text style={styles.nameStyling}>African Grey</Text>
  <Text style={styles.locationStyling}>Rawalpindi</Text>
  <Text style={styles.priceStyling}>Rs.4000/-</Text>
  </View>
  </TouchableOpacity>

  <TouchableOpacity style={styles.card}>
  <View style={styles.cardView}>
  <Image  style={styles.cardImage}
  
  source = {require('../assets/ParrotPics/GreenRingNeck.jpeg')}   />
  <Text style={styles.nameStyling}>Green Ring Neck</Text>
  <Text style={{  marginLeft:-160,
    marginTop:50,
    fontWeight:'bold',
    fontSize:20}}>Rawalpindi</Text>
  <Text style={styles.priceStyling}>Rs.4000/-</Text>
  </View>
  </TouchableOpacity>
  <TouchableOpacity style={styles.card}>
  <View style={styles.cardView}>
  <Image  style={styles.cardImage}
  
  source = {require('../assets/ParrotPics/LoveBirds.jpeg')}   />
  <Text style={styles.nameStyling}>Love Birds</Text>
  <Text style={ {marginLeft:-100,
    marginTop:50,
    fontWeight:'bold',
    fontSize:20}}>Rawalpindi</Text>
  <Text style={styles.priceStyling}>Rs.4000/-</Text>
  </View>
  </TouchableOpacity>
  <TouchableOpacity style={styles.card}>
  <View style={styles.cardView}>
  <Image  style={styles.cardImage}
  
  source = {require('../assets/ParrotPics/RawPair.jpeg')}   />
  <Text style={styles.nameStyling}>Raw Pair</Text>
  <Text style={{ marginLeft:-85,
    marginTop:50,
    fontWeight:'bold',
    fontSize:20}}>Rawalpindi</Text>
  <Text style={styles.priceStyling}>Rs.4000/-</Text>
  </View>
  </TouchableOpacity>
  <TouchableOpacity style={styles.card}>
  <View style={styles.cardView}>
  <Image  style={styles.cardImage}
  
  source = {require('../assets/ParrotPics/Crimno.jpeg')}   />
  <Text style={styles.nameStyling}>Crimno</Text>
  <Text style={{ marginLeft:-70,
    marginTop:50,
    fontWeight:'bold',
    fontSize:20}}>Rawalpindi</Text>
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
    resizeMode:'cover',
    borderRadius:10
},
nameStyling:{
  marginLeft:10,
  marginTop:10,
  fontWeight:'bold',
  fontSize:25
  
},
locationStyling:{
  marginLeft:-120,
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
lastThreeStyling:{
    marginLeft:-100,
    marginTop:50,
    fontWeight:'bold',
    fontSize:20
    
  },
cardView:{
  flexDirection:'row'
}


});