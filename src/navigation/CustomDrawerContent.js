import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";

import CustomDrawerItem from "./CustomDrawerItem";

import Icon from "react-native-vector-icons/AntDesign";
import Logo from "../../assets/images/Shinstarr_logo.png";

const CustomDrawerContent = ({ navigation, selectedTab, setSelectedTab }) => {
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
          <CustomDrawerItem
            label={"Home"}
            icon={"home"}
            isFocused={selectedTab === "Home"}
            onPress={() => {
              setSelectedTab("Home");
              navigation.navigate("MainLayout");
            }}></CustomDrawerItem>
          <CustomDrawerItem
            label={"My Wallet"}
            icon={"wallet"}
            isFocused={selectedTab === "My Wallet"}
            onPress={() => {
              setSelectedTab("My Wallet");
              navigation.navigate("MainLayout");
            }}></CustomDrawerItem>
          <CustomDrawerItem
            label={"Notification"}
            icon={"notification"}
            isFocused={selectedTab === "Notification"}
            onPress={() => {
              setSelectedTab("Notification");
              navigation.navigate("MainLayout");
            }}></CustomDrawerItem>
          <CustomDrawerItem
            label={"Favourite"}
            icon={"hearto"}
            isFocused={selectedTab === "Favourite"}
            onPress={() => {
              setSelectedTab("Favourite");
              navigation.navigate("MainLayout");
            }}></CustomDrawerItem>

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
            icon={"enviromento"}
            isFocused={selectedTab === "Track Your Order"}
            onPress={() => {
              setSelectedTab("Track Your Order");
              navigation.navigate("MainLayout");
            }}></CustomDrawerItem>
          <CustomDrawerItem
            label={"Coupons"}
            icon={"rest"}
            isFocused={selectedTab === "Coupons"}
            onPress={() => {
              setSelectedTab("Coupons");
              navigation.navigate("MainLayout");
            }}></CustomDrawerItem>
          <CustomDrawerItem
            label={"Settings"}
            icon={"setting"}
            isFocused={selectedTab === "Settings"}
            onPress={() => {
              setSelectedTab("Settings");
              navigation.navigate("MainLayout");
            }}></CustomDrawerItem>
          <CustomDrawerItem
            label={"Help Center"}
            icon={"message1"}
            isFocused={selectedTab === "Help Center"}
            onPress={() => {
              setSelectedTab("Help Center");
              navigation.navigate("MainLayout");
            }}></CustomDrawerItem>
          <CustomDrawerItem label={"Logout"} icon={"export2"} />
        </View>

        {/* 마진이 안 먹는 중 나중에 체크, 일단은 위에 나란히
        <View style={{ marginBottom: 24 }}>
          <CustomDrawerItem label={"Logout"} icon={"export2"} />
        </View> */}
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
