import React from "react";
import { View, Text, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = () => {
  return (
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 12,
      }}>
      <View style={{ marginLeft: 20 }}>
        <Text
          style={{
            color: "#000",
            fontSize: 16,
            lineHeight: 22,
            color: "#898B9A",
          }}>
          Address
        </Text>
        <Text
          style={{
            color: "#000",
            fontSize: 15,
            lineHeight: 22,
          }}>
          서울특별시 영등포구 양산로 91 리드원센터 B109호
        </Text>
      </View>
      <TouchableOpacity
        style={{
          padding: 8,
          marginLeft: 15,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "#FE833D",
        }}
        onPress={() => alert("Click!!!")}>
        <Text style={{ color: "#FE833D", fontSize: 16 }}>Change</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
