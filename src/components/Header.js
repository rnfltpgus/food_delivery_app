import React from "react";
import { View, Text } from "react-native";

const Header = ({ containerStyle, title, leftComponent, rightComponent }) => {
  return (
    <View style={{ flexDirection: "row", ...containerStyle }}>
      {leftComponent}
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 22,
            fontWeight: "bold",
          }}>
          {title}
        </Text>
      </View>
      {rightComponent}
    </View>
  );
};

export default Header;
