import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";

const HorizontalFoodCard = ({ containerStyle, imageStyle, item, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        borderRadius: 12,
        backgroundColor: "#F5F5F8",
        ...containerStyle,
      }}>
      <Image
        // source={item.image}
        style={imageStyle}
      />
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            lineHeight: 22,
            fontSize: 20,
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: "#FE833D",
            marginTop: 10,
            fontSize: 18,
            lineHeight: 30,
          }}>
          ${item.price}
        </Text>
        <Text
          style={{
            color: "#757D85",
            lineHeight: 22,
            fontSize: 14,
          }}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalFoodCard;
