import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as OpenAnything from "react-native-openanything";
export default function IslamabadClinics() {
  return (
    <View style={styles.container}>
      <Text style={styles.hdgtxt}>
        List of veterinary hospitals in Islamabad :
      </Text>
      <TouchableOpacity
        style={styles.cardStyle}
        onPress={() =>
          OpenAnything.Map(
            "The pet’s Hospital Islamabad – Block 14, Street 40, G 10/4, Islamabad"
          )
        }
      >
        <Text style={styles.clinictxt}>
          The pet’s Hospital Islamabad – Block 14, Street 40, G 10/4, Islamabad
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardStyle}
        onPress={() =>
          OpenAnything.Map(
            "Dr. Awan’s Animal Hospital – Pagh Chowk, Hussain Abad, Expressway, Islamabad"
          )
        }
      >
        <Text style={styles.clinictxt}>
          Dr. Awan’s Animal Hospital – Pagh Chowk, Hussain Abad, Expressway,
          Islamabad
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardStyle}
        onPress={() =>
          OpenAnything.Map(
            "Paws N Claws Pets Clinic – Pakeeza Market Street، I-8/4, Islamabad"
          )
        }
      >
        <Text style={styles.clinictxt}>
          Paws N Claws Pets Clinic – Pakeeza Market Street، I-8/4, Islamabad
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardStyle}
        onPress={() =>
          OpenAnything.Map(
            "PetVet Veternity Hospital – PWD Main NFP, Stadium Rd, Block D Police Foundation, Islamabad"
          )
        }
      >
        <Text style={styles.clinictxt}>
          PetVet Veternity Hospital – PWD Main NFP, Stadium Rd, Block D Police
          Foundation, Islamabad
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardStyle}
        onPress={() =>
          OpenAnything.Map("Civil Veterinary Hospital – Tarlai, Islamabad")
        }
      >
        <Text style={styles.clinictxt}>
          Civil Veterinary Hospital – Tarlai, Islamabad
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardStyle}
        onPress={() =>
          OpenAnything.Map(
            "Islamabad Animal Care Center – St 2, MPCHS E-11/1, Islamabad"
          )
        }
      >
        <Text style={styles.clinictxt}>
          Islamabad Animal Care Center – St 2, MPCHS E-11/1, Islamabad
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardStyle}
        onPress={() =>
          OpenAnything.Map(
            "Dr Afzal Animal Hospital – Akash Plaza, 10th Ave N, F-10/3, Islamabad"
          )
        }
      >
        <Text style={styles.clinictxt}>
          Dr Afzal Animal Hospital – Akash Plaza, 10th Ave N, F-10/3, Islamabad
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardStyle}
        onPress={() =>
          OpenAnything.Map("Animal Hospital – Iqbal Town, Islamabad")
        }
      >
        <Text style={styles.clinictxt}>
          Animal Hospital – Iqbal Town, Islamabad
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
