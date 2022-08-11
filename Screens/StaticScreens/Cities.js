import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  FlatList,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { Value } from "react-native-reanimated";
import Header from "./header";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const Cities = () => {
  //Creating simple states for static functions
  // need to create array of objects for api and then map that array with array functions using flat list or can use loop also

  const [islamabad, setislamabad] = useState(false);
  const [rawalpindi, setrawalpindi] = useState(false);
  const [lahore, setlahore] = useState(false);
  const [peshawar, setpeshawar] = useState(false);
  const [quetta, setquetta] = useState(false);
  const [karachi, setkarachi] = useState(false);
  const [deraismailkhan, setderaismailkhan] = useState(false);
  const [faisalabad, setfaisalabad] = useState(false);
  const [gujranwala, setgujranwala] = useState(false);
  const [hyderabad, sethyderabad] = useState(false);
  const [sargodha, setsargodha] = useState(false);
  const [multan, setmultan] = useState(false);

  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [indexState, setindexState] = useState(false);
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

  let City = [];

  const renderItem = (itemData) => {
    let url =
      Platform.OS === "android"
        ? `http://192.168.77.23:2000/image/${itemData.item.image}`
        : `http://10.0.2.2:2000/image/${itemData.item.image}`;
    if (
      (islamabad == true && itemData.item.city == "Islamabad") ||
      (peshawar == true && itemData.item.city == "Peshawar") ||
      (rawalpindi == true && itemData.item.city == "Rawalpindi") ||
      (lahore == true && itemData.item.city == "Lahore") ||
      (faisalabad == true && itemData.item.city == "Faisalabad") ||
      (quetta == true && itemData.item.city == "Quetta") ||
      (hyderabad == true && itemData.item.city == "Hyderabad") ||
      (deraismailkhan == true && itemData.item.city == "Deraismailkhan") ||
      (sargodha == true && itemData.item.city == "Sargodha") ||
      (gujranwala == true && itemData.item.city == "Gujranwala") ||
      (multan == true && itemData.item.city == "Multan") ||
      (karachi == true && itemData.item.city == "Karachi")
    ) {
      return (
        console.log(itemData),
        (
          <View style={styles.containerFlate}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => navigation.navigate("DetailScreen", { itemData })}
            >
              <View style={styles.innerContainer}>
                <View
                  style={
                    gujranwala
                      ? styles.imgstyleforgrw
                      : multan
                      ? styles.multanimgstyling
                      : quetta
                      ? styles.quettaimgstyling
                      : faisalabad
                      ? styles.faisalabadimgStyling
                      : lahore
                      ? styles.lhrtxtstyling
                      : deraismailkhan
                      ? styles.dikhanimgstyling
                        ? hyderabad
                        : styles.hyderabadimgStyling
                      : styles.nrmimgstyling
                  }
                >
                  <Image style={styles.imgsettings} source={{ uri: url }} />
                </View>

                <View
                  style={
                    gujranwala
                      ? styles.grwtxtstyling
                      : multan
                      ? styles.multantxtstyling
                      : quetta
                      ? styles.quettatxtstyling
                      : faisalabad
                      ? styles.faisalabadtxtstyling
                      : lahore
                      ? styles.lhrtxtstyling
                      : deraismailkhan
                      ? styles.dikhantxtstyling
                        ? hyderabad
                        : styles.hyderabadtxtstyling
                      : styles.nrmtxtstyling
                  }
                >
                  <Text style={styles.title}>{itemData.item.name}</Text>
                  <Text style={styles.details}>Rs.{itemData.item.price}/-</Text>
                  <Text style={styles.details}>{itemData.item.city}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )
      );
    }

    City.toString();
  };
  <Header />;
  return (
    <View>
      <View>
        <Text style={styles.mainText}>Search For a Pet</Text>
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
          <TouchableOpacity
            onPress={() => {
              setislamabad(false),
                setrawalpindi(false),
                setlahore(false),
                setpeshawar(false),
                setkarachi(false),
                setlahore(false),
                setfaisalabad(false),
                sethyderabad(false),
                setmultan(false),
                setsargodha(false),
                setgujranwala(false),
                setderaismailkhan(false);
            }}
          >
            <Image
              style={styles.gpsImage}
              source={require("../../assets/gps.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.ViewContainer}>
          <View style={styles.petsListView}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <TouchableOpacity onPress={() => navigation.navigate("Cats")}>
                <Image
                  style={styles.ImageStyling}
                  source={require("../../assets/petslist/cat.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Lions")}>
                <Image
                  style={styles.ImageStyling}
                  source={require("../../assets/petslist/lion.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Parrots")}>
                <Image
                  style={styles.ImageStyling}
                  source={require("../../assets/petslist/birds.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.ImageStyling}
                  source={require("../../assets/petslist/hamster.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Hamsters")}>
                <Image
                  style={styles.ImageStyling}
                  source={require("../../assets/petslist/Hen.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Dogs")}>
                <Image
                  style={styles.ImageStyling}
                  source={require("../../assets/petslist/dog.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Monkeys")}>
                <Image
                  style={styles.ImageStyling}
                  source={require("../../assets/petslist/monkey.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Rabbits")}>
                <Image
                  style={styles.ImageStyling}
                  source={require("../../assets/petslist/rabbit.png")}
                />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </View>
      <ScrollView nestedScrollEnabled={true} vertical={true}>
        <View>
          {islamabad != true &&
          rawalpindi != true &&
          lahore != true &&
          peshawar != true &&
          karachi != true &&
          quetta != true &&
          deraismailkhan != true &&
          hyderabad != true &&
          sargodha != true &&
          faisalabad != true &&
          multan != true &&
          gujranwala != true ? (
            <View style={{ flex: 1, marginTop: 10, marginBottom: 230 }}>
              <ScrollView
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
              >
                <CheckBox
                  title="Islamabad"
                  checked={islamabad}
                  checkedColor="#FF642E"
                  onPress={() => setislamabad(!islamabad)}
                />
                <CheckBox
                  title="Rawalpindi"
                  checked={rawalpindi}
                  checkedColor="#FF642E"
                  onPress={() => setrawalpindi(!rawalpindi)}
                />
                <CheckBox
                  title="Lahore"
                  checked={lahore}
                  checkedColor="#FF642E"
                  onPress={() => setlahore(!lahore)}
                />
                <CheckBox
                  title="Peshawar"
                  checked={peshawar}
                  checkedColor="#FF642E"
                  onPress={() => setpeshawar(!peshawar)}
                />
                <CheckBox
                  title="Karachi"
                  checked={karachi}
                  checkedColor="#FF642E"
                  onPress={() => setkarachi(!karachi)}
                />
                <CheckBox
                  title="Quetta"
                  checked={quetta}
                  checkedColor="#FF642E"
                  onPress={() => setquetta(!quetta)}
                />
                <CheckBox
                  title="DeraIsmailKhan"
                  checked={quetta}
                  checkedColor="#FF642E"
                  onPress={() => setderaismailkhan(!deraismailkhan)}
                />
                <CheckBox
                  title="Faisalabad"
                  checked={quetta}
                  checkedColor="#FF642E"
                  onPress={() => setfaisalabad(!faisalabad)}
                />
                <CheckBox
                  title="Gujranwala"
                  checked={gujranwala}
                  checkedColor="#FF642E"
                  onPress={() => setgujranwala(!gujranwala)}
                />
                <CheckBox
                  title="Hyderabad"
                  checked={hyderabad}
                  checkedColor="#FF642E"
                  onPress={() => sethyderabad(!hyderabad)}
                />
                <CheckBox
                  title="Sargodha"
                  checked={sargodha}
                  checkedColor="#FF642E"
                  onPress={() => setsargodha(!sargodha)}
                />
                <CheckBox
                  title="Multan"
                  checked={multan}
                  checkedColor="#FF642E"
                  onPress={() => setmultan(!multan)}
                />
              </ScrollView>
            </View>
          ) : null}

          <View style={{ flexDirection: "column", flex: 1, marginBottom: 225 }}>
            {islamabad ||
            rawalpindi ||
            //lahore ||
            karachi ||
            peshawar ||
            quetta ||
            faisalabad ||
            multan ||
            gujranwala ||
            hyderabad ||
            sargodha ? (
              <FlatList
                nestedScrollEnabled={true}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            ) : null}

            {lahore ? (
              <FlatList
                nestedScrollEnabled={true}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                width={370}
              />
            ) : null}

            {deraismailkhan ? (
              <FlatList
                nestedScrollEnabled={true}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                width={410}
                marginLeft={-7}
                //marginRight={30}
                //maxHeight={200}
                contentContainerStyle={{
                  paddingBottom: 50,
                }}
              />
            ) : null}
            {gujranwala ? (
              <FlatList
                nestedScrollEnabled={true}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                // maxHeight={200}
                width={380}
                maxHeight={200}
                marginLeft={-10}
                marginRight={5}
                //marginHorizontal={50}
                contentContainerStyle={{ paddingBottom: 30 }}
              />
            ) : null}
            {multan ? (
              <FlatList
                nestedScrollEnabled={true}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                // maxHeight={200}
                width={370}
                // maxHeight={200}
                marginLeft={-2}
                marginRight={-5}
                //marginHorizontal={50}
                contentContainerStyle={{ paddingBottom: 30 }}
              />
            ) : null}

            {quetta ? (
              <FlatList
                nestedScrollEnabled={true}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                // maxHeight={200}
                width={410}
                maxHeight={200}
                marginLeft={-10}
                marginRight={5}
                //marginHorizontal={50}
                contentContainerStyle={{ paddingBottom: 30 }}
              />
            ) : null}
            {faisalabad ? (
              <FlatList
                nestedScrollEnabled={true}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                marginLeft={-13}
                width={385}
                padding={5}
                contentContainerStyle={{ paddingBottom: 50 }}
              />
            ) : null}
          </View>
        </View>
      </ScrollView>
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

    alignSelf: "center",
    width: "100%",
  },
  innerContainer: {
    borderRadius: 8,
    justifyContent: "center",
    // justifyContent:'space-between',
    alignItems: "center",
    flexDirection: "row",

    alignItems: "center",
  },
  title: {
    fontSize: 22,
    color: "black",
    marginRight: -30,
  },
  details: {
    fontSize: 17,
    color: "black",
    marginRight: -10,
  },
  imgsettings: {
    height: 127,
    width: 127,
    resizeMode: "cover",
    marginLeft: -60,
    borderColor: "grey",
    borderRadius: 15,
    borderWidth: 1,
  },

  mainText: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 20,
    marginLeft: 15,
  },
  searchPets: {
    flex: 1,
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
  ImageStyling: {
    height: 100,
    width: 100,
    marginLeft: -10,
    marginRight: -10,
    resizeMode: "cover",
    overflow: "hidden",
  },
  petsListView: {},
  petsApiView: {
    marginVertical: 15,
  },
  ViewContainer: {
    flexDirection: "column",
  },
  activebutton: {
    borderColor: "#FF642E",
    borderWidth: 2,
    margin: 5,
    padding: 3,
    borderRadius: 10,
  },

  imgstyleforgrw: {
    top: 0,
    left: 62,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  nrmimgstyling: {
    // marginLeft: 10,
    top: 0,
    left: 62,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  grwtxtstyling: {
    marginLeft: 80,
    marginTop: 20,
  },
  nrmtxtstyling: {
    // marginLeft: 25,
    //marginTop: -20,
    marginLeft: 90,
    marginTop: 20,
  },
  dikhanimgstyling: {},

  dikhantxtstyling: {
    marginRight: 7,
    marginLeft: 1,
  },

  multanimgstyling: {
    marginRight: 50,
  },
  multantxtstyling: {},

  quettaimgstyling: {
    marginRight: 105,
  },
  quettatxtstyling: {
    marginLeft: -20,
  },
  faisalabadimgStyling: {
    marginRight: 2,
    marginLeft: -10,
  },
  faisalabadtxtstyling: {
    marginLeft: 70,
  },
  lhrimgstyling: {},
  lhrtxtstyling: {
    marginLeft: 10,
  },
  hyderabadimgStyling: {
    marginLeft: -20,
    marginRight: 10,
  },
  hyderabadtxtstyling: {
    marginLeft: 20,
  },
});

export default Cities;
