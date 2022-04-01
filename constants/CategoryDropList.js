import React, { Component } from "react";
import { Picker, View, Text, StyleSheet } from "react-native";

export default class CategoryDropList extends Component {
  state = {
    selectedcat: "",
    category: [
      {
        itemName: "Pets"
      },
      {
        itemName: "Pets Food"
      },
      {
        itemName: "Pets Products"
      },
      {
        itemName: "Pets Accessories"
      }
    ]
  };

  async onValueChangeCat(value) {
    this.setState({ selectedcat: value });
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <View style={{ flex: 0.3 }}>
          {/*<Text style={styles.textStyle}>Categories</Text>*/}
        </View>
        <View style={{ flex: 0.7, fontSize: 14 }}>
          <Picker
          
            itemStyle={styles.itemStyle}
            mode="dropdown"
            style={styles.pickerStyle}
            selectedValue={this.state.selectedcat}
            onValueChange={this.onValueChangeCat.bind(this)}
        
          >
            {this.state.category.map((item, index) => (
              <Picker.Item
               
                color="black"
                label={item.itemName}
                value={item.itemName}
                index={index}
              />
            ))}
          </Picker>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
   // flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    width: "99%",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderWidth:1,
    height:'5%',
    backgroundColor:'white',
    borderRadius:10,
    margin:7
  },
  itemStyle: {
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    color: "black",
    
    
    
  },
  pickerStyle: {
    width: "140%",
    height: 40,
    color: "black",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    marginLeft:-100

},
  textStyle: {
    fontSize: 14,
    fontFamily: "Roboto-Regular",

    
  }
});
