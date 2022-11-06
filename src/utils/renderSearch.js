import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/AntDesign";

const renderSearch = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 50,
        alignItems: "center",
        marginTop: 20,
        marginHorizontal: 15,
        marginVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 12,
        backgroundColor: "#F5F5F8",
      }}>
      <Icon name="search1" size={20} color="#000" />
      <TextInput
        style={{
          flex: 1,
          marginLeft: 12,
          fontSize: 16,
          lineHeight: 22,
        }}
        placeholder="Please search for the menu."
      />
      <TouchableOpacity onPress={() => alert("Filter Click!!!")}>
        <Icon name="filter" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default renderSearch;
