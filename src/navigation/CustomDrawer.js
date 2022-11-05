import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import Animated from "react-native-reanimated";

import { MainLayout } from "../screens";

import Icon from "react-native-vector-icons/AntDesign";
import Logo from "../../assets/images/Shinstarr_logo.png";

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ label, icon }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 40,
        marginBottom: 8,
        alignItems: "center",
        paddingLeft: 12,
        borderRadius: 8,
      }}>
      <Icon name={icon} size={25} color="#fff" />
      <Text
        style={{
          marginLeft: 15,
          color: "#fff",
          fontFamily: "Poppins-SemiBold",
          fontSize: 16,
          lineHeight: 22,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const CustomDrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1, paddingHorizontal: 12 }}>
      <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.closeDrawer()}>
          <Icon name="close" size={35} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: "12",
          }}
          onPress={() => console.log("Profile")}>
          <Image
            source={Logo}
            style={{ width: 50, height: 50, borderRadius: "12" }}
          />
          <View style={{ marginLeft: "12" }}>
            <Text
              style={{
                color: "#fff",
                fontFamily: "Poppins-SemiBold",
                fontSize: 16,
                lineHeight: 22,
              }}>
              정센니
            </Text>
            <Text
              style={{
                color: "#fff",
                fontFamily: "Poppins-Regular",
                fontSize: 14,
                lineHeight: 22,
              }}>
              View your profile
            </Text>
          </View>
        </TouchableOpacity>

        <View style={{ flex: 1, marginTop: 24 }}>
          <CustomDrawerItem label={"Home"} icon={"home"}></CustomDrawerItem>
          <CustomDrawerItem
            label={"My Wallet"}
            icon={"wallet"}></CustomDrawerItem>
          <CustomDrawerItem
            label={"Notification"}
            icon={"notification"}></CustomDrawerItem>
          <CustomDrawerItem
            label={"Favourite"}
            icon={"hearto"}></CustomDrawerItem>

          <View
            style={{
              height: 1,
              marginVertical: 12,
              marginLeft: 12,
              backgroundColor: "#DDDDDD",
            }}
          />

          <CustomDrawerItem
            label={"Track Your Order"}
            icon={"enviromento"}></CustomDrawerItem>
          <CustomDrawerItem label={"Coupons"} icon={"rest"}></CustomDrawerItem>
          <CustomDrawerItem
            label={"Settings"}
            icon={"setting"}></CustomDrawerItem>
          <CustomDrawerItem
            label={"Help Center"}
            icon={"message1"}></CustomDrawerItem>
          <CustomDrawerItem label={"Logout"} icon={"export2"} />
        </View>

        {/*
        <View style={{marginBottom: 24}}>
          <CustomDrawerItem label={'Logout'} icon={'export2'} />
        </View> */}
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = () => {
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

          return <CustomDrawerContent navigation={props.navigation} />;
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

export default CustomDrawer;
