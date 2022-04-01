import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as OpenAnything from "react-native-openanything";
export default function FasialabadClinics() {
  return (
    <View style={styles.container}>
      <Text style={styles.hdgtxt}>
        List of veterinary hospitals in Faisalabad :
      </Text>
      <TouchableOpacity
        style={styles.cardStyle}
        onPress={() =>
          OpenAnything.Map(
            "Happy Paws Pet Clinic, Civil Lines, Faisalabad"
          )
        }
      >
        <Text style={styles.clinictxt}>
          Happy Paws Pet Clinic, Civil Lines, Faisalabad
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardStyle}
        onPress={() =>
          OpenAnything.Map(
            "Pet Aid Clinic, Block B Samanabad, Faisalabad"
          )
        }
      >
        <Text style={styles.clinictxt}>
        Pet Aid Clinic, Block B Samanabad, Faisalabad
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardStyle}
        onPress={() =>
          OpenAnything.Map(
            "Veterinary Hospital, Department of CMS, New Campus Drive, Faisalabad"
          )
        }
      >
        <Text style={styles.clinictxt}>
          Veterinary Hospital, Department of CMS, New Campus Drive, Faisalabad
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardStyle}
        onPress={() =>
          OpenAnything.Map(
            "Pet Care Clinic, Block A People’s Colony No 1, Faisalabad"
          )
        }
      >
        <Text style={styles.clinictxt}>
        Pet Care Clinic, Block A People’s Colony No 1, Faisalabad
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardStyle}
        onPress={() =>
          OpenAnything.Map("Cms Outdoor Clinic, Faisalabad")
        }
      >
        <Text style={styles.clinictxt}>
          Cms Outdoor Clinic, Faisalabad
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardStyle}
        onPress={() =>
          OpenAnything.Map(
            "City Pet Clinic, Faisalabad Cricket Stadium, Civil Lines, Faisalabad"
          )
        }
      >
        <Text style={styles.clinictxt}>
          City Pet Clinic, Faisalabad Cricket Stadium, Civil Lines, Faisalabad
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
