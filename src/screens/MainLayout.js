import React, { useEffect, useRef } from "react";
import { View, TouchableOpacity, FlatList, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import LinearGradient from "react-native-linear-gradient";
import { connect } from "react-redux";

import { setSelectedTab } from "../stores/tab/tabActions";
import { Home, CartTab, MyInformation, Notification } from "../screens";
import { constants } from "../../constants";
import Header from "../components/Header";
import TabButton from "../components/TabButton";

import Icon from "react-native-vector-icons/AntDesign";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const MainLayout = ({
  drawerAnimationStyle,
  navigation,
  selectedTab,
  setSelectedTab,
}) => {
  const flatListRef = useRef();
  const homeTabFlex = useSharedValue(1);
  const homeTabColor = useSharedValue("#fff");
  const notificationTabFlex = useSharedValue(1);
  const notificationTabColor = useSharedValue("#fff");
  const cartTabFlex = useSharedValue(1);
  const cartTabColor = useSharedValue("#fff");
  const myInformationTabFlex = useSharedValue(1);
  const myInformationTabColor = useSharedValue("#fff");

  const homeFlexStyle = useAnimatedStyle(() => {
    return { flex: homeTabFlex.value };
  });
  const homeColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: homeTabColor.value };
  });
  const notificationFlexStyle = useAnimatedStyle(() => {
    return { flex: notificationTabFlex.value };
  });
  const notificationColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: notificationTabColor.value };
  });
  const cartFlexStyle = useAnimatedStyle(() => {
    return { flex: cartTabFlex.value };
  });
  const cartColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: cartTabColor.value };
  });
  const myInformationFlexStyle = useAnimatedStyle(() => {
    return { flex: myInformationTabFlex.value };
  });
  const myInformationColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: myInformationTabColor.value };
  });

  useEffect(() => {
    setSelectedTab("Home");
  }, []);

  useEffect(() => {
    if (selectedTab === "Home") {
      flatListRef?.current?.scrollToIndex({ index: 0, animated: false });

      homeTabFlex.value = withTiming(4, { duration: 500 });
      homeTabColor.value = withTiming("#fff", { duration: 500 });
    } else {
      homeTabFlex.value = withTiming(1, { duration: 500 });
      homeTabColor.value = withTiming("#fff", { duration: 500 });
    }
    if (selectedTab === "Notification") {
      flatListRef?.current?.scrollToIndex({ index: 1, animated: false });

      notificationTabFlex.value = withTiming(4, { duration: 500 });
      notificationTabColor.value = withTiming("#fff", { duration: 500 });
    } else {
      notificationTabFlex.value = withTiming(1, { duration: 500 });
      notificationTabColor.value = withTiming("#fff", { duration: 500 });
    }
    if (selectedTab === "Cart") {
      flatListRef?.current?.scrollToIndex({ index: 2, animated: false });

      cartTabFlex.value = withTiming(4, { duration: 500 });
      cartTabColor.value = withTiming("#fff", { duration: 500 });
    } else {
      cartTabFlex.value = withTiming(1, { duration: 500 });
      cartTabColor.value = withTiming("#fff", { duration: 500 });
    }
    if (selectedTab === "MyInformation") {
      flatListRef?.current?.scrollToIndex({ index: 3, animated: false });

      myInformationTabFlex.value = withTiming(4, { duration: 500 });
      myInformationTabColor.value = withTiming("#fff", { duration: 500 });
    } else {
      myInformationTabFlex.value = withTiming(1, { duration: 500 });
      myInformationTabColor.value = withTiming("#fff", { duration: 500 });
    }
  }, [selectedTab]);

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
            onPress={() => alert("CartTab Click!!!")}>
            <Icon name="shoppingcart" size={25} color="#000" />
          </TouchableOpacity>
        }
      />
      <View style={{ flex: 1 }}>
        <FlatList
          ref={flatListRef}
          horizontal
          scrollEnabled={false}
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={SCREEN_WIDTH}
          showsHorizontalScrollIndicator={false}
          data={constants.bottom_tabs}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  height: SCREEN_HEIGHT,
                  width: SCREEN_WIDTH,
                }}>
                {item.label === "Home" && <Home />}
                {item.label === "Notification" && <Notification />}
                {item.label === "Cart" && <CartTab />}
                {item.label === "MyInformation" && <MyInformation />}
              </View>
            );
          }}
        />
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
            backgroundColor: "#fff",
          }}>
          <TabButton
            label={"Home"}
            icon={"home"}
            isFocused={selectedTab === "Home"}
            outerContainerStyle={homeFlexStyle}
            innerContainerStyle={homeColorStyle}
            onPress={() => setSelectedTab("Home")}
          />
          <TabButton
            label={"Notification"}
            icon={"notification"}
            isFocused={selectedTab === "Notification"}
            outerContainerStyle={notificationFlexStyle}
            innerContainerStyle={notificationColorStyle}
            onPress={() => setSelectedTab("Notification")}
          />
          <TabButton
            label={"Cart"}
            icon={"shoppingcart"}
            isFocused={selectedTab === "Cart"}
            outerContainerStyle={cartFlexStyle}
            innerContainerStyle={cartColorStyle}
            onPress={() => setSelectedTab("Cart")}
          />
          <TabButton
            label={"MyInformation"}
            icon={"user"}
            isFocused={selectedTab === "MyInformation"}
            outerContainerStyle={myInformationFlexStyle}
            innerContainerStyle={myInformationColorStyle}
            onPress={() => setSelectedTab("MyInformation")}
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
