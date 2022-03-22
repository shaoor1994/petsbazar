import React from 'react'
import {

    View,
    Image,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'
import { Paragraph } from 'react-native-paper'

export default function DogGrooming() {
  return (
    <View style={styles.mainContainer}>
        <ScrollView>

        <View style={styles.ImageContainer}>

        <Image style={styles.Picture}
        source={require('../assets/grooming.jpg')}/>

        </View>
        <View style={styles.TextContainer}>

        <Paragraph>



        </Paragraph>

        </View>

        </ScrollView>
    </View>
  )
}


var styles = StyleSheet.create({

    mainContainer:{
       // flex:1,
        flexDirection:'column'

    },
    ImageContainer:{
        flex:1,
        height:'50%',
        width:'50%'
    },
    TextContainer:{
       // flex:1
    },
    Picture:{
        width:'100%',
        height:'100%',
        resizeMode:'cover'
    },
    txtDecrotaion:{

    }

})