import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as OpenAnything from "react-native-openanything";
export default function KarachiClinics() {
  return (
    <View style={styles.container}>
      <Text style={styles.hdgtxt}>
        List of veterinary hospitals in Karachi :
      </Text>
      <TouchableOpacity
        style={styles.cardStyle}
        onPress={() =>
          OpenAnything.Map(
            "Defence Veterinary Hospital – Sailor Street DHA Phase 2, PNS Shifa, near Masjid AlKaremi, Karachi"
          )
        }
      >
        <Text style={styles.clinictxt}>
          Defence Veterinary Hospital – Sailor Street DHA Phase 2, PNS Shifa, near Masjid AlKaremi, Karachi
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardStyle}
        onPress={() =>
          OpenAnything.Map(
            "RC Veternity Hospital  – MA Jinnah Rd, Saddar Town, Karachi"
          )
        }
      >
        <Text style={styles.clinictxt}>
        RC Veternity Hospital  – MA Jinnah Rd, Saddar Town, Karachi
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardStyle}
        onPress={() =>
          OpenAnything.Map(
            "Rajput Vet. Clinic  – FB Indus-Area Block 21 Block 21 Gulberg Town, Karachi"
          )
        }
      >
        <Text style={styles.clinictxt}>
          Rajput Vet. Clinic  – FB Indus-Area Block 21 Block 21 Gulberg Town, Karachi
        </Text>
      </TouchableOpacity>
     
     <TouchableOpacity
        style={styles.cardStyle}
        onPress={() =>
          OpenAnything.Map("RPK Critter Care and Animal Hospital – Phase-6 Ext Defence Housing Authority, Karachi")
        }
      >
        <Text style={styles.clinictxt}>
          RPK Critter Care and Animal Hospital – Phase-6 Ext Defence Housing Authority, Karachi
        </Text>
      </TouchableOpacity>

    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    margin: 10,
  },

  hdgtxt: {
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 20,
    margin: 5,
  },
  clinictxt: {
    textAlign: "left",
    fontSize: 20,
    margin: 5,
  },
  cardStyle: {
    marginVertical: 5,
    marginHorizontal: 5,
    borderWidth: 2,
    height: 90,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderColor: "#696969",
  },
});
