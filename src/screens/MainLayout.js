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
import LinearGradient from "react-native-linear-gradient";
import { connect } from "react-redux";

import { setSelectedTab } from "../stores/tab/tabActions";
import { Home, Search, CartTab, Favourite, Notification } from "../screens";
import Header from "../components/Header";
import TabButton from "../components/TabButton";

import Icon from "react-native-vector-icons/AntDesign";

const MainLayout = ({
  drawerAnimationStyle,
  navigation,
  selectedTab,
  setSelectedTab,
}) => {
  // const homeTabFlex = useSharedValue(1);
  // const homeTabColor = useSharedValue("#fff");
  // const notificationTabFlex = useSharedValue(1);
  // const notificationTabColor = useSharedValue("#fff");
  // const cartTabFlex = useSharedValue(1);
  // const cartTabColor = useSharedValue("#fff");
  // const myInformationTabFlex = useSharedValue(1);
  // const myInformationTabColor = useSharedValue("#fff");

  // const homeFlexStyle = useAnimatedStyle(() => {
  //   return { flex: homeTabFlex.value };
  // });
  // const homeColorStyle = useAnimatedStyle(() => {
  //   return { backgroundColor: homeTabColor.value };
  // });
  // const notificationFlexStyle = useAnimatedStyle(() => {
  //   return { flex: notificationTabFlex.value };
  // });
  // const notificationColorStyle = useAnimatedStyle(() => {
  //   return { backgroundColor: notificationTabColor.value };
  // });
  // const cartFlexStyle = useAnimatedStyle(() => {
  //   return { flex: cartTabFlex.value };
  // });
  // const cartColorStyle = useAnimatedStyle(() => {
  //   return { backgroundColor: cartTabColor.value };
  // });
  // const myInformationFlexStyle = useAnimatedStyle(() => {
  //   return { flex: myInformationTabFlex.value };
  // });
  // const myInformationColorStyle = useAnimatedStyle(() => {
  //   return { backgroundColor: myInformationTabColor.value };
  // });

  useEffect(() => {
    setSelectedTab("Home");
  }, []);

  // useEffect(() => {
  //   if (selectedTab === "Home") {
  //     homeTabFlex.value = withTiming(4, { duration: 500 });
  //     homeTabColor.value = withTiming("#af1", { duration: 500 });
  //   } else {
  //     homeTabFlex.value = withTiming(1, { duration: 500 });
  //     homeTabColor.value = withTiming("#fff", { duration: 500 });
  //   }
  //   if (selectedTab === "notification") {
  //     notificationTabFlex.value = withTiming(4, { duration: 500 });
  //     notificationTabColor.value = withTiming("#af1", { duration: 500 });
  //   } else {
  //     notificationTabFlex.value = withTiming(1, { duration: 500 });
  //     notificationTabColor.value = withTiming("#fff", { duration: 500 });
  //   }
  //   if (selectedTab === "cart") {
  //     cartTabFlex.value = withTiming(4, { duration: 500 });
  //     cartTabColor.value = withTiming("#af1", { duration: 500 });
  //   } else {
  //     cartTabFlex.value = withTiming(1, { duration: 500 });
  //     cartTabColor.value = withTiming("#fff", { duration: 500 });
  //   }
  //   if (selectedTab === "myInformation") {
  //     myInformationTabFlex.value = withTiming(4, { duration: 500 });
  //     myInformationTabColor.value = withTiming("#af1", { duration: 500 });
  //   } else {
  //     myInformationTabFlex.value = withTiming(1, { duration: 500 });
  //     myInformationTabColor.value = withTiming("#fff", { duration: 500 });
  //   }
  // }, [selectedTab]);

  return (
    <Animated.View
      style={{
        flex: 1,
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
      <View style={{ height: 100, justifyContent: "flex-end" }}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 4 }}
          colors={["transparent", "#DDDDDD"]}
          style={{
            position: "absolute",
            top: -20,
            left: 0,
            right: 0,
            height: 100,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingHorizontal: 12,
            paddingBottom: 10,
            // borderTopLeftRadius: 20,
            // borderTopRightRadius: 20,
            // borderWidth: 1,
            backgroundColor: "#fff",
          }}>
          <TabButton
            label={"Home"}
            icon={"home"}
            isFocused={selectedTab === "Home"}
            // outerContainerStyle={homeFlexStyle}
            // innerContainerStyle={homeColorStyle}
            onPress={() => setSelectedTab("Home")}
          />
          <TabButton
            label={"notification"}
            icon={"notification"}
            isFocused={selectedTab === "notification"}
            // outerContainerStyle={notificationFlexStyle}
            // innerContainerStyle={notificationColorStyle}
            onPress={() => setSelectedTab("notification")}
          />
          <TabButton
            label={"cart"}
            icon={"shoppingcart"}
            isFocused={selectedTab === "cart"}
            // outerContainerStyle={cartFlexStyle}
            // innerContainerStyle={cartColorStyle}
            onPress={() => setSelectedTab("cart")}
          />
          <TabButton
            label={"myInformation"}
            icon={"user"}
            isFocused={selectedTab === "myInformation"}
            // outerContainerStyle={myInformationFlexStyle}
            // innerContainerStyle={myInformationColorStyle}
            onPress={() => setSelectedTab("myInformation")}
          />
        </View>
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
