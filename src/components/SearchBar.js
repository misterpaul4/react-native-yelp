import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <AntDesign style={styles.icon} name="search1" size={24} color="black" />

      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="Search"
        onEndEditing={(e) => onSubmit(e.nativeEvent.text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    height: 50,
    borderRadius: 5,
    marginVertical: 15,
    marginRight: 20,
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 12,
  },
  input: {
    fontSize: 20,
    flex: 1,
  },
});

export default SearchBar;
