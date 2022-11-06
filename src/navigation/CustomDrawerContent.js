import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";

import CustomDrawerItem from "./CustomDrawerItem";
import Logo from "../../assets/images/Shinstarr_logo.png";

import Icon from "react-native-vector-icons/AntDesign";

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
            marginLeft: 6,
          }}
          onPress={() => navigation.closeDrawer()}>
          <Icon name="close" size={35} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 12,
          }}
          onPress={() => console.log("Profile")}>
          <Image
            source={Logo}
            style={{ width: 50, height: 50, borderRadius: 12 }}
          />
          <View style={{ marginLeft: 12 }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
                lineHeight: 22,
              }}>
              정센니
            </Text>
            <Text
              style={{
                color: "#fff",
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
            }}
          />
          <CustomDrawerItem
            label={"My Wallet"}
            icon={"wallet"}
            isFocused={selectedTab === "My Wallet"}
            onPress={() => {
              setSelectedTab("My Wallet");
              navigation.navigate("MainLayout");
            }}
          />
          <CustomDrawerItem
            label={"Notification"}
            icon={"notification"}
            isFocused={selectedTab === "Notification"}
            onPress={() => {
              setSelectedTab("Notification");
              navigation.navigate("MainLayout");
            }}
          />
          <CustomDrawerItem
            label={"Favourite"}
            icon={"hearto"}
            isFocused={selectedTab === "Favourite"}
            onPress={() => {
              setSelectedTab("Favourite");
              navigation.navigate("MainLayout");
            }}
          />
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
            }}
          />
          <CustomDrawerItem
            label={"Coupons"}
            icon={"rest"}
            isFocused={selectedTab === "Coupons"}
            onPress={() => {
              setSelectedTab("Coupons");
              navigation.navigate("MainLayout");
            }}
          />
          <CustomDrawerItem
            label={"Settings"}
            icon={"setting"}
            isFocused={selectedTab === "Settings"}
            onPress={() => {
              setSelectedTab("Settings");
              navigation.navigate("MainLayout");
            }}
          />
          <CustomDrawerItem
            label={"Help Center"}
            icon={"message1"}
            isFocused={selectedTab === "Help Center"}
            onPress={() => {
              setSelectedTab("Help Center");
              navigation.navigate("MainLayout");
            }}
          />
          <CustomDrawerItem
            label={"Logout"}
            icon={"export2"}
            onPress={() => alert("Logout!!!")}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
