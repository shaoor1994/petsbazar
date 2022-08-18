import React , {useState,useEffect} from 'react'
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { 
     StyleSheet,
    Text,
    View,
    TouchableOpacity,
    StatusBar,
    FlatList,
    Image,
    ImageBackground,
    Platform,
TextInput} from 'react-native'
export default function Medicines() {
    const navigation = useNavigation();
  const [data, setData] = useState([]);
  const getDataUsingSimpleGetCall = () => {
    axios
      .get(
        Platform.OS === "android"
          ? "http://192.168.77.23:4000/pets"
          : " http://10.0.2.2:4000/pets"
      )
      .then((json) => setData(json.data))
      .finally(() => setLoading(false));
    console.log("Display Data", data);
  };

  useEffect(() => {
    getDataUsingSimpleGetCall();
  }, []);

  const _renderItem = (itemData) => {
    let url =
      Platform.OS === "android"
        ? `http://192.168.77.23:2000/image/${itemData.item.image}`
        : `http://10.0.2.2:2000/image/${itemData.item.image}`;
if (itemData.item.category == "Medicines") {
    return (
      console.log(itemData),
      (
        <View style={styles.containerFlate}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("DetailScreen", { itemData })}
          >
            <View style={styles.innerContainer}>
              <View style={{ marginLeft: 162 ,flex:1}}>
                <Image style={styles.imgsettings} source={{ uri: url }} />
              </View>

              <View style={{ marginLeft: -195, marginTop: -20 ,flex:1}}>
                <Text style={styles.title}>{itemData.item.name}</Text>
                <Text style={styles.details}>Rs.{itemData.item.price}/-</Text>
                <Text style={styles.details}>{itemData.item.city}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )
    );} 
      
  };



  return (
    <View style ={{flexDirection:'column'}}>
    <Text style={styles.mainText}>Search For Medicines</Text>
        <View style={styles.SectionStyle}>
          <Image
            style={styles.SearchImage}
            source={require("../../assets/searchicon.png")}
          />
          <TextInput
            style={styles.searchPets}
            placeholder="search"
            placeholderTextColor="black"
            onFocus={() =>navigation.navigate("Search")}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Cities")}>
            <Image
              style={styles.gpsImage}
              source={require("../../assets/gps.png")}
            />
          </TouchableOpacity>
        </View>
    <View style={styles.container}>

      <FlatList
        data={data}
        renderItem={_renderItem}
        keyExtractor={(item) => item.id}
        //contentContainerStyle={{paddingBottom:50}}
                 width={400}
               // maxHeight={200}
                marginLeft={-5}
                ////marginRight={5}
                //marginHorizontal={50}
                contentContainerStyle={{ 
                  //paddingBottom: 70,
                  alignContent:'center',
                  paddingTop:30
                   }}
      />

    

      
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerFlate: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 14,
    height: 130,
    width: "93%",
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "#ffffff",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
  },
  buttonStyle: {
    justifyContent: "center",
    // alignItems: 'center',
    // backgroundColor: '#DDDDDD',
    // padding: 10,
    alignSelf: "center",
    width: "100%",
    //marginTop: 400,
  },
  innerContainer: {
    // flex: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    // padding:5,
    alignItems: "center",
  },
  title: {
    //fontWeight: "bold",
    fontSize: 22,
    color: "black",
    marginRight: -30,
    //marginVertical:5
    // marginLeft:10
  },
  details: {
    //fontWeight: "bold",
    fontSize: 17,
    color: "black",
    marginRight: -10,
    //marginVertical:5
    // marginLeft:10
  },
  imgsettings: {
    height: 127,
    width: 127,
    resizeMode: "cover",
    marginLeft: -160,
    borderColor: "grey",
    borderRadius: 15,
    borderWidth: 1,
    marginRight:55
  },
  mainText: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 20,
    marginLeft: 15,
  },
  SectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#000",
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  SearchImage: {
    padding: 10,
    marginLeft: 10,
    marginTop: 8,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    alignItems: "center",
  },
  gpsImage: {
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 8,
    height: 20,
    width: 20,
    resizeMode: "stretch",
    alignItems: "center",
  },
  searchPets: {
    flex: 1,
  },
});
