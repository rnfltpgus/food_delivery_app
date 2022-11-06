import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";

const MagazineCard = ({ containerStyle, item, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: 230,
        height: 250,
        padding: 12,
        borderRadius: 5,
        backgroundColor: "#BBBDC1",
        ...containerStyle,
      }}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            lineHeight: 22,
            fontSize: 20,
          }}>
          Excellent and plentiful
        </Text>
        <Text
          style={{
            color: "#fff",
            marginTop: 10,
            fontSize: 15,
          }}>
          the steaks were great as usual
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MagazineCard;
