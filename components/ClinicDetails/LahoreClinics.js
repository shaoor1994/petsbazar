import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as OpenAnything from "react-native-openanything";
export default function LahoreClinics() {
  return (
    <View style={styles.container}>
      <Text style={styles.hdgtxt}>
        List of veterinary hospitals in Lahore :
      </Text>
      <TouchableOpacity
        style={styles.cardStyle}
        onPress={() =>
          OpenAnything.Map(
            "General Veterinary Hospital – Harbanspura Rd, opp. Pepsi Stop، Taj Bagh Scheme, Lahore"
          )
        }
      >
        <Text style={styles.clinictxt}>
          General Veterinary Hospital – Harbanspura Rd, opp. Pepsi Stop، Taj Bagh Scheme, Lahore
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardStyle}
        onPress={() =>
          OpenAnything.Map(
            "Lahore Animal Hospital – 28 Abdul Haque Rd, Block L Phase 2 Johar Town, Lahore"
          )
        }
      >
        <Text style={styles.clinictxt}>
        Lahore Animal Hospital – 28 Abdul Haque Rd, Block L Phase 2 Johar Town, Lahore
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardStyle}
        onPress={() =>
          OpenAnything.Map(
            "Pets care Animal Hospital Lahore – Lower Mall, Anarkali Bazaar Lahore, Punjab"
          )
        }
      >
        <Text style={styles.clinictxt}>
          Pets care Animal Hospital Lahore – Lower Mall, Anarkali Bazaar Lahore, Punjab
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardStyle}
        onPress={() =>
          OpenAnything.Map(
            "UVAS Pet Center – Data Gunj Buksh Town, Lahore"
          )
        }
      >
        <Text style={styles.clinictxt}>
        UVAS Pet Center – Data Gunj Buksh Town, Lahore
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardStyle}
        onPress={() =>
          OpenAnything.Map("Aamir Veterinary Hospital – Phase 1 Nasheman-e-Iqbal Housing Society, Lahore")
        }
      >
        <Text style={styles.clinictxt}>
          Aamir Veterinary Hospital – Phase 1 Nasheman-e-Iqbal Housing Society, Lahore
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardStyle}
        onPress={() =>
          OpenAnything.Map(
            "K & I Animal Hospital – Street 26, AA-Block Aa Block Sector D Bahria Town, Lahore"
          )
        }
      >
        <Text style={styles.clinictxt}>
          K & I Animal Hospital – Street 26, AA-Block Aa Block Sector D Bahria Town, Lahore
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardStyle}
        onPress={() =>
          OpenAnything.Map(
            "Riphah Veterinary Hospital – Veterinary Clinic Rd, Chamru Pur Lahore"
          )
        }
      >
        <Text style={styles.clinictxt}>
          Riphah Veterinary Hospital – Veterinary Clinic Rd, Chamru Pur Lahore
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
