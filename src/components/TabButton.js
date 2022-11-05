import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

import Icon from "react-native-vector-icons/AntDesign";

const TabButton = ({
  label,
  icon,
  isFocused,
  outerContainerStyle,
  innerContainerStyle,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={[
          {
            marginTop: 20,
            flex: 1,
            alignItems: "center",
          },
          outerContainerStyle,
        ]}>
        <Animated.View
          style={[
            {
              flexDirection: "row",
              width: "43%",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
            },
            innerContainerStyle,
          ]}>
          <Icon name={icon} size={25} color={isFocused ? "#C83C2B" : "#000"} />
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default TabButton;
