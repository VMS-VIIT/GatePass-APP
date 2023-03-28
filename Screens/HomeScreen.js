import * as React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => alert('This is the "Home" screen.')}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Home Screen
      </Text>
      <button
        style={{
          fontSize: 26,
          fontWeight: "bold",
          backgroundColor: "#FFBF00",
          borderRadius: 50,
          marginTop: 20,
          width: 200,
          height: 40,
          borderRadius: 5,
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Entry
      </button>
      <button
      style={{
        fontSize: 26,
        fontWeight: "bold",
        backgroundColor: "#FFBF00",
        borderRadius: 50,
        marginTop: 20,
        width: 200,
        height: 40,
        borderRadius: 5,
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Exit
    </button> <button
    style={{
      fontSize: 26,
      fontWeight: "bold",
      backgroundColor: "#FFBF00",
      borderRadius: 50,
      marginTop: 20,
      width: 200,
      height: 40,
      borderRadius: 5,
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    Visitor Details 
  </button>
    </View>
  );
}
