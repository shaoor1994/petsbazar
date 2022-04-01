import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    
} from 'react-native'
import * as OpenAnything from 'react-native-openanything';
export default function RawalpindiClinics() {
  return (
    <View style={styles.container}>

    <Text style={styles.hdgtxt}>List of veterinary hospitals in Rawalpindi :</Text>
    <TouchableOpacity style={styles.cardStyle}
    
    onPress={()=> OpenAnything.Map('Pioneer Pets Hospitals – Block B Sattelite Town, Rawalpindi')}
    >
    <Text style={styles.clinictxt}>Pioneer Pets Hospitals – Block B Sattelite Town, Rawalpindi</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.cardStyle}
    onPress={()=> OpenAnything.Map('Pet care clinic Rawalpindi  – Chaklala Housing Scheme 3, Rawalpindi')}
    >
    <Text style={styles.clinictxt}>Pet care clinic Rawalpindi  – Chaklala Housing Scheme 3, Rawalpindi</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.cardStyle}
    onPress={()=> OpenAnything.Map('Military Veternity Hospital – Khadim Hussain Rd, Lalazar, Rawalpindi')}
    >
    <Text style={styles.clinictxt}>Military Veternity Hospital – Khadim Hussain Rd, Lalazar, Rawalpindi</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.cardStyle}
    
    onPress={()=> OpenAnything.Map('Junni Vets  Veternity Clinic – New Gulzar-e-Quaid, Near Army Check Post, Rawalpindi')}
    
    >
    <Text style={styles.clinictxt}>Junni Vets  Veternity Clinic – New Gulzar-e-Quaid, Near Army Check Post, Rawalpindi</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.cardStyle}
    onPress={()=> OpenAnything.Map('Pet Care 2 Clinic and Store  – Asian Business Centre, Bahria Expy, Rawalpindi')}
    
    >
    <Text style={styles.clinictxt}>Pet Care 2 Clinic and Store  – Asian Business Centre, Bahria Expy, Rawalpindi</Text>
    </TouchableOpacity>


    </View>
  )
}

var styles = StyleSheet.create({

container:{

    alignSelf:'center',
    margin:10
},

hdgtxt:{
fontWeight:'bold',
textAlign:'left',
fontSize:20,
margin:5
},
clinictxt:{
    
    textAlign:'left',
    fontSize:20,
    margin:5
},
cardStyle:{

marginVertical:5,
marginHorizontal:5,
borderWidth:2,
height:90,
borderRadius:10,
backgroundColor:'#fff',
borderColor:'#696969'

}

})
