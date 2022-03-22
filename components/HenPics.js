import { View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text

} from 'react-native'
import React from 'react'

export default function HenPics() {
return (
<View>
<TouchableOpacity style={styles.card}>
<View style={styles.cardView}>
  <Image  style={styles.cardImage}
  
  source = {require('../assets/HenPics/Hen1.jpg')}   />
  <Text style={styles.nameStyling}>Turkey Chicks</Text>
      <Text style={{marginLeft:-130,
        marginTop:50,
        fontWeight:'bold',
        fontSize:20}}>Rawalpindi</Text>
      <Text style={styles.priceStyling}>Rs.4000/-</Text>
  </View>
  </TouchableOpacity>

  <TouchableOpacity style={styles.card}>
  <View style={styles.cardView}>
  <Image  style={styles.cardImage}
  
  source = {require('../assets/HenPics/Hen2.jpg')}   />
  <Text style={styles.nameStyling}>White Silky </Text>
      <Text style={styles.locationStyling}>Rawalpindi</Text>
      <Text style={styles.priceStyling}>Rs.4000/-</Text>
  </View>
  </TouchableOpacity>

  <TouchableOpacity style={styles.card}>
  <View style={styles.cardView}>
  <Image  style={styles.cardImage}
  
  source = {require('../assets/HenPics/Hen3.jpg')}   />
  <Text style={styles.nameStyling}>White Bantom</Text>
      <Text style={{marginLeft:-120,
        marginTop:50,
        fontWeight:'bold',
        fontSize:20}}>Rawalpindi</Text>
      <Text style={styles.priceStyling}>Rs.4000/-</Text>
  </View>
  </TouchableOpacity>

  <TouchableOpacity style={styles.card}>
  <View style={styles.cardView}>
  <Image  style={styles.cardImage}
  
  source = {require('../assets/HenPics/Hen4.jpg')}   />
  <Text style={styles.nameStyling}>Golden Buff</Text>
      <Text style={styles.locationStyling}>Rawalpindi</Text>
      <Text style={styles.priceStyling}>Rs.4000/-</Text>
  </View>
  </TouchableOpacity>

  <TouchableOpacity style={styles.card}>
  <View style={styles.cardView}>
  <Image  style={styles.cardImage}
  
  source = {require('../assets/HenPics/Hen5.jpg')}   />
  <Text style={styles.nameStyling}>Silver Buff</Text>
      <Text style={{marginLeft:-90,
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
      marginLeft:-100,
      marginTop:50,
      fontWeight:'bold',
      fontSize:20,
      
    },
    priceStyling:{
      marginLeft:-80,
      marginTop:80,
      fontWeight:'bold',
      fontSize:20
    },
    cardView:{
      flexDirection:'row'
    }
  
    
    });