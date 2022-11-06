import React from "react";
import { Text, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/AntDesign";

const CustomDrawerItem = ({ label, icon, isFocused, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 40,
        marginBottom: 8,
        alignItems: "center",
        paddingLeft: 12,
        borderRadius: 8,
        backgroundColor: isFocused ? "rgba(0, 0, 0, 0.1)" : null,
      }}
      onPress={onPress}>
      <Icon name={icon} size={25} color="#fff" />
      <Text
        style={{
          marginLeft: 15,
          color: "#fff",
          fontSize: 16,
          lineHeight: 22,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomDrawerItem;
