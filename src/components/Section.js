import { Text, View, TouchableOpacity } from "react-native";

const Section = ({ title, onPress, children }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 24,
          marginTop: 20,
          marginBottom: 20,
        }}>
        <Text
          style={{ flex: 1, fontSize: 16, lineHeight: 22, fontWeight: "bold" }}>
          {title}
        </Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={{ color: "#C83C2B", fontSize: 16, lineHeight: 22 }}>
            {title === "OLHSO Magazine" ? null : "Show all"}
          </Text>
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
};

export default Section;
