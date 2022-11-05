import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  FlatList,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { connect } from "react-redux";

import { setSelectedTab } from "../stores/tab/tabActions";
import { Home, Search, CartTab, Favourite, Notification } from "../screens";
import Header from "../components/Header";

import Icon from "react-native-vector-icons/AntDesign";

const MainLayout = ({
  drawerAnimationStyle,
  navigation,
  selectedTab,
  setSelectedTab,
}) => {
  useEffect(() => {
    setSelectedTab("Home");
  }, []);

  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        ...drawerAnimationStyle,
      }}>
      <Header
        containerStyle={{
          height: 50,
          paddingHorizontal: 24,
          marginTop: 40,
          alignItems: "center",
        }}
        title={selectedTab.toUpperCase()}
        leftComponent={
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.openDrawer()}>
            <Icon name="menufold" size={25} color="#000" />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
            }}
            // onPress={() => navigation.openDrawer()}
          >
            <Icon name="shoppingcart" size={25} color="#000" />
          </TouchableOpacity>
        }
      />
      <View style={{ flex: 1 }}>
        <Text>MainLayout</Text>
      </View>
    </Animated.View>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
