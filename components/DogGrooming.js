import React from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { Paragraph } from "react-native-paper";

export default function DogGrooming() {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.ImageContainer}>
          <Image
            style={styles.Picture}
            source={require("../assets/grooming.jpg")}
          />
        </View>

        <View style={styles.txtMainContainer}>
          <View style={styles.TextContainer}>
            <Paragraph style={styles.txtDecrotaion}>
              Brushing: Brushing and combing should happen daily or at least
              several times each week, no matter what kind of coat your cat has.
              If you plan to give your pet a bath, do the brushing part first.
              Brushing and combing will feel good to your pet; it removes dead
              hair and tangles, and distributes natural skin oils.
            </Paragraph>
          </View>

          <View style={styles.TextContainer}>
            <Paragraph style={styles.txtDecrotaion}>
              Baths: The water should be warm, even in summer, because very cold
              water can chill cats and leave your pet with a bad association to
              bathing in general. If you are bathing small animals, support them
              in the tub so they don’t panic. Give your pet a full body massage
              while lathering up the shampoo, then rinse. If you wish, add
              conditioner and comb through the coat before a final rinse.
            </Paragraph>
          </View>

          <View style={styles.TextContainer}>
            <Paragraph style={styles.txtDecrotaion}>
              Nails: Begin by picking up each foot and handling the nails. Then,
              without clipping, hold the clippers near a nail and squeeze the
              nail as though you are clipping. Look carefully for the quick –
              where the blood supply ends. You’ll want to avoid cutting into the
              quick, since it is painful and will bleed.
            </Paragraph>
          </View>

          <View style={styles.TextContainer}>
            <Paragraph style={styles.txtDecrotaion}>
              Teeth: You can gently massage the gums and brush the teeth on any
              pet – from the smallest rodents to the largest horses. If taught
              with patience and kindness, most animals enjoy a mouth massage.
              The benefits are healthy mouths and fresh breath. Remember to use
              animal toothpaste appropriate for each type of pet.
            </Paragraph>
          </View>

          <View style={styles.TextContainer}>
            <Paragraph style={styles.txtDecrotaion}>
              Ears: You should periodically check your animal’s ears. If they
              are clean and free of debris, then give your pet a nice ear rub.
              Again, a gentle massage is going to give your pet a good
              association to your touch. If the ears are dirty, smell bad or
              look sore, make an appointment with your veterinarian. The doctor
              can check for infection or parasites, and can get you started with
              a cleaning lesson.
            </Paragraph>
          </View>

          <View style={styles.TextContainer}>
            <Paragraph style={styles.txtDecrotaion}>
              Grooming can be a pleasurable activity for both you and your pets.
              Enjoy your animal family members and the time you spend
              interacting with them.
            </Paragraph>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

var styles = StyleSheet.create({
  mainContainer: {
    // flex:1,
    flexDirection: "column",
    flexWrap: "wrap",
    marginTop: 10,
    alignContent: "flex-start",
  },
  ImageContainer: {
    //flex: 1,
    height: 500,
    width: 380,
    marginLeft: -20,
    marginTop:-150
  },
  txtMainContainer: {
    flex: 1,
    alignSelf: "center",
    marginTop:-120
  },
  TextContainer: {
    backgroundColor: "#FF642E",
    margin: 10,
    paddingRight: 10,
    borderRadius:5
  },
  Picture: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  txtDecrotaion: {
    color: "white",
    margin: 20,
    fontWeight: "bold",
  },
});
