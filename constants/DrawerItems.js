import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Text } from "react-native";
import React, { useState } from "react";
//import { AntDesign } from '@expo/vector-icons';
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { Drawer } from "native-base";
export default function DrawerItems(props) {
  const navigation = useNavigation();
  const [focus, setfocus] = useState(1);
  const [petNestedItems, setpetNestedItems] = useState(false);
  const [foodNestedItems, setfoodNestedItems] = useState(false);
  const [accessoriesNestedItems, setaccessoriesNestedItems] = useState(false);
  const [medicinesNestedItems, setmedicinesNestedItems] = useState(false);

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          focused={focus == 1 ? true : false}
          label={({ focused, color }) => (
            <Text style={{ color: "white", focused }}>Home</Text>
          )}
          onPress={() => {
            setfocus(1);
            navigation.navigate("Home");
          }}
        />

        <DrawerItem
          focused={focus == 1 ? true : false}
          label={({ focused, color }) => (
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "white", focused }}>Pets</Text>
              {petNestedItems == true && (
                <AntDesign name="up" color="white" size={20} />
              )}

              {petNestedItems == false && (
                <AntDesign name="down" color="white" size={20} />
              )}
            </View>
          )}
          onPress={() => {
            setfocus(1);
            //nestedDrawerFunction();
            if (petNestedItems == false) {
              setpetNestedItems(true);
            } else if (petNestedItems == true) {
              setpetNestedItems(false);
            }
          }}
        />
        {petNestedItems == true && (
          <Text
            style={{ textAlign: "left", marginHorizontal: 70, color: "white" }}
          >
            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Cats</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Cats");
              }}
            />

            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Wild Animals</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Wild Animals");
              }}
            />
            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Parrots</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Parrots");
              }}
            />
            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Wild Birds</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Wild Birds");
              }}
            />
            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Aquatic Animals</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Aquatic Animals");
              }}
            />
            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Peacock</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Peacock");
              }}
            />
            {/* <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Tortoise</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Pets");
              }}
            />

           <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Leopard </Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Pets");
              }}
            />*/}

            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Hamsters</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Hamsters");
              }}
            />
            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Hens</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Hen");
              }}
            />

            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Dogs</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Dogs");
              }}
            />

            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Monkeys</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Monkeys");
              }}
            />

            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Rabbits</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Rabbits");
              }}
            />
          </Text>
        )}

        <DrawerItem
          focused={focus == 1 ? true : false}
          label={({ focused, color }) => (
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "white", focused }}>Food</Text>
              {foodNestedItems == true && (
                <AntDesign name="up" color="white" size={20} />
              )}

              {foodNestedItems == false && (
                <AntDesign name="down" color="white" size={20} />
              )}
            </View>
          )}
          onPress={() => {
            setfocus(1);

            if (foodNestedItems == false) {
              setfoodNestedItems(true);
            } else if (foodNestedItems == true) {
              setfoodNestedItems(false);
            }
          }}
        />
        {foodNestedItems == true && (
          <Text
            style={{ textAlign: "left", marginHorizontal: 70, color: "white" }}
          >
            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Cat Food</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Cat Food");
              }}
            />

           {/* <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Lion Food</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Lion Food");
              }}
            />*/}
            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Bird Food</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Birds Food");
              }}
            />
            {/*<DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Eagle Food</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Pets");
              }}
            />*/}
            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Aquatic Food</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Aquatic Food");
              }}
            />
            {/*<DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Peacock Food</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Pets");
              }}
            />
            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Tortoise Food</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Pets");
              }}
            />

            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Leopard Food</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Pets");
              }}
            />

            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Owl Food</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Pets");
              }}
            />*/}

            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Hamster Food</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Hamster Food");
              }}
            />
            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Hen Food</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Hen Food");
              }}
            />

            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Dog Food</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Dog Food");
              }}
            />

           { /*<DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Monkey Food</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Monkey Food");
              }}
            />*/}

            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Rabbit Food</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Rabbit Food");
              }}
            />
          </Text>
        )}

        <DrawerItem
          focused={focus == 1 ? true : false}
          label={({ focused, color }) => (
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "white", focused }}>Accessories</Text>
              {accessoriesNestedItems == true && (
                <AntDesign name="up" color="white" size={20} />
              )}

              {accessoriesNestedItems == false && (
                <AntDesign name="down" color="white" size={20} />
              )}
            </View>
          )}
          onPress={() => {
            setfocus(1);

            if (accessoriesNestedItems == false) {
              setaccessoriesNestedItems(true);
            } else if (accessoriesNestedItems == true) {
              setaccessoriesNestedItems(false);
            }
          }}
        />
        {accessoriesNestedItems == true && (
          <Text
            style={{ textAlign: "left", marginHorizontal: 70, color: "white" }}
          >
            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Cat Accessories</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Cat Accessories");
              }}
            />

           {/* <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>
                  Lion Accessories
                </Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Lion Accessories");
              }}
            />*/}
            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>
                  Bird Accessories
                </Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Parrot Accessories");
              }}
            />
           {/* <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>
                  Eagle Accessories
                </Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Pets");
              }}
            />*/}
            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>
                  Aquatic Accessories
                </Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Aquatic Accessories");
              }}
            />
            {/*<DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>
                  Peacock Accessories
                </Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Pets");
              }}
            />
            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>
                  Tortoise Accessories
                </Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Pets");
              }}
            />

            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>
                  Leopard Accessories
                </Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Pets");
              }}
            />

            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Owl Accessories</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Pets");
              }}
            />*/}

            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>
                  Hamster Accessories
                </Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Hamster Accessories");
              }}
            />
            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Hen Accessories</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Hen Accessories");
              }}
            />

            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Dog Accessories</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Dog Accessories");
              }}
            />

           {/*<DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>
                  Monkey Accessories
                </Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Monkey Accessories");
              }}
            />*/}

            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>
                  Rabbit Accessories
                </Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Rabbit Accessories");
              }}
            />
          </Text>
        )}

       {/* <DrawerItem
          focused={focus == 1 ? true : false}
          label={({ focused, color }) => (
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "white", focused }}>Medicines</Text>
              {medicinesNestedItems == true && (
                <AntDesign name="up" color="white" size={20} />
              )}

              {medicinesNestedItems == false && (
                <AntDesign name="down" color="white" size={20} />
              )}
            </View>
          )}
          onPress={() => {
            setfocus(1);
            //nestedDrawerFunction();
            if (medicinesNestedItems == false) {
              setmedicinesNestedItems(true);
            } else if (medicinesNestedItems == true) {
              setmedicinesNestedItems(false);
            }
          }}
        />
        {medicinesNestedItems == true && (
          <Text
            style={{ textAlign: "left", marginHorizontal: 70, color: "white" }}
          >
            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Cat Medicines</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Cat Medicines");
              }}
            />

            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Lion Medicines</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Lion Medicines");
              }}
            />
            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>
                  Parrot Medicines
                </Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Birds Medicines");
              }}
            />
            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Eagle Medicines</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Pets");
              }}
            />
            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Fish Medicines</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Pets");
              }}
            />
            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>
                  Peacock Medicines
                </Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Pets");
              }}
            />
            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>
                  Tortoise Medicines
                </Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Pets");
              }}
            />

            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>
                  Leopard Medicines
                </Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Pets");
              }}
            />

            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>
                  Hamster Medicines
                </Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Hamster Medicines");
              }}
            />
            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Hen Medicines</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Hen Medicines");
              }}
            />

            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Dog Medicines</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Dog Medicines");
              }}
            />

            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>
                  Monkey Medicines
                </Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Monkey Medicines");
              }}
            />

            <DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>
                  Rabbit Medicines
                </Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Rabbit Medicines");
              }}
            />
          </Text>
        )}*/}

        <DrawerItem
          focused={focus == 1 ? true : false}
          label={({ focused, color }) => (
            <Text style={{ color: "white", focused }}>Medicines</Text>
          )}
          onPress={() => {
            setfocus(1);
            navigation.navigate("Medicines");
          }}
        />


        <DrawerItem
          focused={focus == 1 ? true : false}
          label={({ focused, color }) => (
            <Text style={{ color: "white", focused }}>Sell now</Text>
          )}
          onPress={() => {
            setfocus(1);
            navigation.navigate("Temp Sell now");
          }}
        />

        <DrawerItem
          focused={focus == 1 ? true : false}
          label={({ focused, color }) => (
            <Text style={{ color: "white", focused }}>Veterinary Clinic</Text>
          )}
          onPress={() => {
            setfocus(1);
            navigation.navigate("Veterinary Clinic");
          }}
        />

        <DrawerItem
          focused={focus == 1 ? true : false}
          label={({ focused, color }) => (
            <Text style={{ color: "white", focused }}>Grooming</Text>
          )}
          onPress={() => {
            setfocus(1);
            navigation.navigate("Grooming");
          }}
        />
        <DrawerItem
          focused={focus == 1 ? true : false}
          label={({ focused, color }) => (
            <Text style={{ color: "white", focused }}>Contact us</Text>
          )}
          onPress={() => {
            setfocus(1);
            navigation.navigate("Contact us");
          }}
        />
        {/*<DrawerItem
              label={({ focused, color }) => (
                <Text style={{ color: "white", focused }}>Data Demo</Text>
              )}
              onPress={() => {
                setfocus(1);
                navigation.navigate("Data Demo");
              }}
            />

        <DrawerItem
          label={({ focused, color }) => (
            <Text style={{ color: "white", focused }}>Fetched Data</Text>
          )}
          onPress={() => {
            setfocus(1);
            navigation.navigate("Local Data");
          }}
        />*/}
      </DrawerContentScrollView>
    </View>
  );
}
