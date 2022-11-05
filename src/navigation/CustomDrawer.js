import React, { useState } from "react";
import { View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Animated from "react-native-reanimated";
import { connect } from "react-redux";

import { setSelectedTab } from "../stores/tab/tabActions";
import { MainLayout } from "../screens";
import CustomDrawerContent from "./CustomDrawerContent";

const Drawer = createDrawerNavigator();

const CustomDrawer = ({ selectedTab, setSelectedTab }) => {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  });
  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <View style={{ flex: 1, backgroundColor: "#C83C2B" }}>
      <Drawer.Navigator
        drawerType="slide"
        screenOptions={{
          drawerStyle: {
            backgroundColor: "transparent",
            width: 240,
          },
          sceneContainerStyle: {
            backgroundColor: "transparent",
          },
          headerShown: false,
        }}
        initialRouteName="MainLayout"
        drawerContent={props => {
          setTimeout(() => {
            setProgress(props.progress);
          }, 0);

          return (
            <CustomDrawerContent
              navigation={props.navigation}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          );
        }}>
        <Drawer.Screen name="MainLayout">
          {props => (
            <MainLayout {...props} drawerAnimationStyle={animatedStyle} />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

const mapStateToProps = state => {
  return { selectedTab: state.tabReducer.selectedTab };
};

const mapDispatchToProps = dispatch => {
  return {
    setSelectedTab: selectedTab => {
      return dispatch(setSelectedTab(selectedTab));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
