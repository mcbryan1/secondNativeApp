import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import image from "./assets/picture.png";

export default function App() {
  const myIcon = (
    <Icon name="arrow-left" size={20} color="rgb(85, 168, 241)" padding={20} />
  );
  const secIcon = <Icon name="camera" size={20} color="#fff" />;
  const tedIcon = <Icon name="phone" size={20} color="gray" />;

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.icon}>{myIcon}</View>
        <View style={styles.text}>
          <Text style={styles.text_info}>Edit Profile</Text>
        </View>
      </View>
      <View style={styles.image_container}>
        <View style={styles.image_container_text}>
          <View style={styles.image_container_text_info}>
            <View>
              <View style={styles.image_container_text_info_wrapper}>
                <Text style={styles.image_container_text1}>School</Text>
                <Text style={styles.image_container_text2}>
                  The Painters' Guild of Florence
                </Text>
              </View>
              <View style={styles.image_container_text_info_wrapper}>
                <Text style={styles.image_container_text1}>Email Address</Text>
                <Text style={styles.image_container_text2}>
                  davinci@demons.com
                </Text>
              </View>
            </View>
            <View style={styles.bottom_component}>
              <View style={styles.bottom_component_text}>
                <Text style={styles.bottom_component_text1}>Name</Text>
                <Text style={styles.bottom_component_text2}>
                  Leonardo da Vinci
                </Text>
              </View>
              <View style={styles.bottom_component_text}>
                <Text style={styles.bottom_component_text1}>Nick Name</Text>
                <Text style={styles.bottom_component_text2}>di ser Piero</Text>
              </View>
              <View style={styles.bottom_component_text}>
                <Text style={styles.bottom_component_text1}>Nick Name</Text>
                <Text style={styles.bottom_component_text2}>di ser Piero</Text>
                <View style={styles.ted_icon}>{tedIcon}</View>
              </View>
            </View>
            <View style={styles.button}>
              <TouchableOpacity >
                <Text style={styles.button_inner}>Click Me!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.image}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={styles.secIcon}>{secIcon}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(85, 168, 241)",
  },
  top: {
    backgroundColor: "#fff",
    height: 70,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
    marginHorizontal: 3,
  },
  flex: 10,
  icon: {
    marginTop: 40,
    marginLeft: 10,
    flex: 4,
  },
  text: {
    marginVertical: 40,
    flex: 6,
  },
  text_info: {
    color: "rgb(85, 168, 241)",
    fontSize: 17,

    fontWeight: "bold",
  },
  image: {
    width: 150,
    height: 150,
    position: "absolute",
    borderRadius: 75,
    top: -20,
  },
  image_container: {
    marginTop: 65,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 23,
  },
  image_container_text: {
    backgroundColor: "#fff",
    position: "absolute",
    height: 495,
    width: 353,
    borderRadius: 5,
    top: 50,
    marginHorizontal: 10,
  },
  secIcon: {
    position: "absolute",
    top: 60,
    left: 215,
    backgroundColor: "rgb(85, 168, 241)",
    width: 40,
    height: 40,
    padding: 9,
    borderRadius: 50,
  },
  image_container_text_info: {
    marginTop: 80,
    justifyContent: "center",
    marginHorizontal: 25,
  },
  image_container_text1: {
    color: "gray",
    fontSize: 12,
    paddingBottom: 3,
    fontWeight: "700",
  },
  image_container_text2: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  image_container_text_info_wrapper: {
    paddingBottom: 15,
  },
  bottom_component: {
    marginTop: 20,
    flexDirection: "column",
  },
  bottom_component_text: {
    borderBottomColor: "rgb(218, 218, 218)",
    borderBottomWidth: 1,
    padding: 5,
    marginBottom: 8,
  },
  bottom_component_text1: {
    color: "rgb(85, 168, 241)",
    fontSize: 12,
    fontWeight: "700",
  },
  bottom_component_text2: {
    color: "#000",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 3,
  },
  ted_icon: {
    position: "absolute",
    left: 270,
    top: 15,
    borderWidth: 1,
    padding: 5,
    borderColor: "gray",
  },
  button: {
    alignItems: "center",
    marginVertical: 30,
    fontSize: 70,
  },
  button_inner: {
    backgroundColor: 'blue',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    color: 'rgb(85, 168, 241)',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
  },
});
