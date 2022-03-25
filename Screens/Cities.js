import React, {useEffect,useState} from "react";
import { View,Text,StyleSheet,TouchableOpacity,Button,FlatList, ScrollView } from "react-native";
import { CheckBox } from "react-native-elements";
import { Value } from "react-native-reanimated";


export default function Cities() {
    

    //Creating simple states for static functions
    // need to create array of objects for api and then map that array with array functions using flat list or can use loop also

    const [islamabad,setislamabad] = useState(false);
    const [rawalpindi,setrawalpindi] = useState(false);
    const [lahore,setlahore] = useState(false);
    const [peshawar,setpeshawar] = useState(false);
    const [quetta,setquetta] = useState(false);
    const [karachi,setkarachi] = useState(false);

    let city =[ ]
   // city=''
    const handleCity = () => {

        if (islamabad=== true){
            this.city.push("Pets Available in Islamabad");
        }
        if (rawalpindi=== true){
            city.push("Pets Available in Rawalpindi")
        }
        if (lahore=== true){
            city.push("Pets Available in Lahore")
        } 
        if (peshawar=== true){
            city.push("Pets Available in Peshawar")
        }
        if (quetta=== true){
            city.push("Pets Available in Quetta")
        }
        if (karachi=== true){
            city.push("Pets Available in Karachi")
        } 
        city.toString() 
    }

  return( 
  
  <View>
  <ScrollView>
<View>
    <CheckBox

    title="Islamabad"
    checked={islamabad}
    checkedColor="#FF642E"
    onPress={()=> setislamabad(!islamabad)}

    />
    <CheckBox

title="Rawalpindi"
checked={rawalpindi}
checkedColor="#FF642E"
onPress={()=> setrawalpindi(!rawalpindi)}

/><CheckBox

title="Lahore"
checked={lahore}
checkedColor="#FF642E"
onPress={()=> setlahore(!lahore)}

/><CheckBox

title="Peshawar"
checked={peshawar}
checkedColor="#FF642E"
onPress={()=> setpeshawar(!peshawar)}

/><CheckBox

title="Karachi"
checked={karachi}
checkedColor="#FF642E"
onPress={()=> setkarachi(!karachi)}

/><CheckBox

title="Quetta"
checked={quetta}
checkedColor="#FF642E"
onPress={()=> setquetta(!quetta)}

/>

  <Button
      title="Filter"
      onPress={()=>handleCity}
      color="#FF642E"
      width='40%'

  />
{/*city.map((item,index) => (
<Text >{item}</Text>

))*/}



  <Text>{islamabad?"Pets Available in Islamabad":null
        }</Text>

        <Text>{rawalpindi?"Pets Available in Rawalpindi":null
        }</Text>

        <Text>{lahore?"Pets Available in Lahore":null
        }</Text>

        <Text>{peshawar?"Pets Available in Peshawar":null
        }</Text>

        <Text>{karachi?"Pets Available in karachi":null
        }</Text>

        <Text>{quetta?"Pets Available in Quetta":null
        }</Text>

        
    
    </View>
    <View>

   
    </View>
    <FlatList
    nestedScrollEnabled={true}
        data={city}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          
            <Text >City is{item}</Text>
        )}
        />
        </ScrollView>
    </View>
  )
  
}
