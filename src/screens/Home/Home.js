import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { HorizontalFoodCard, MagazineCard, Section } from "../../components";
import { dummyData } from "../../../constants";
import { renderSearch } from "../../utils";

const SCREEN_WIDTH = Dimensions.get("window").width;

const Home = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [magazine, setMagazine] = useState([]);
  const [recommends, setRecommends] = useState([]);
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);

  const handleChangeCategory = (categoryId, menuTypeId) => {
    let selectedMagazine = dummyData.menu.find(a => a.name === "Magazine");
    let selectedRecommend = dummyData.menu.find(a => a.name === "Recommended");
    let selectedMenu = dummyData.menu.find(a => a.id === menuTypeId);

    setMagazine(
      selectedRecommend?.list.filter(a => a.categories.includes(categoryId)),
    );
    setRecommends(
      selectedRecommend?.list.filter(a => a.categories.includes(categoryId)),
    );
    setMenuList(
      selectedMenu?.list.filter(a => a.categories.includes(categoryId)),
    );
  };

  const renderMenuTypes = () => {
    return (
      <FlatList
        horizontal
        data={dummyData.menu}
        keyExtractor={item => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ margin: 0, marginBottom: 20 }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              marginLeft: 24,
              marginRight: index === dummyData.menu.length - 1 ? 24 : 0,
            }}
            onPress={() => {
              setSelectedMenuType(item.id);
              handleChangeCategory(selectedCategoryId, item.id);
            }}>
            <Text
              style={{
                padding: 10,
                borderWidth: 1,
                borderRadius: 15,
                borderColor:
                  selectedMenuType === item.id ? "#FE833D" : "#BBBDC1",
                fontWeight: "bold",
                color: selectedMenuType === item.id ? "#FE833D" : "#BBBDC1",
                fontSize: 16,
                lineHeight: 22,
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  };

  const renderRecommendedSection = () => {
    return (
      <Section
        title="Recommended"
        onPress={() => console.log("Show all recommended")}>
        <FlatList
          data={recommends}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <HorizontalFoodCard
              containerStyle={{
                height: 180,
                width: SCREEN_WIDTH * 0.75,
                marginLeft: index === 0 ? 24 : 18,
                marginRight: index === recommends.length - 1 ? 24 : 0,
                paddingRight: 12,
                alignItems: "center",
                marginBottom: 20,
              }}
              imageStyle={{
                borderRadius: 12,
                backgroundColor: "#DDDDDD",
                margin: 25,
                height: 150,
                width: 150,
              }}
              item={item}
              onPress={() => console.log("HorizontalFoodCard")}
            />
          )}
        />
      </Section>
    );
  };

  const renderPopularSection = () => {
    return (
      <Section
        title="OLHSO Magazine"
        onPress={() => console.log("Show all popular items")}>
        <FlatList
          data={magazine}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <MagazineCard
              containerStyle={{
                marginLeft: index === 0 ? 24 : 18,
                marginRight: index === magazine.length - 1 ? 24 : 0,
              }}
              item={item}
              onPress={() => console.log("HorizontalFoodCard")}
            />
          )}
        />
      </Section>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 12,
        }}>
        <View style={{ marginHorizontal: 20 }}>
          <Text
            style={{
              color: "#898B9A",
              fontSize: 16,
              lineHeight: 22,
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
            borderRadius: 20,
            borderWidth: 1,
            borderColor: "#FE833D",
          }}
          onPress={() => alert("Click!!!")}>
          <Text style={{ color: "#FE833D", fontSize: 16 }}>Change</Text>
        </TouchableOpacity>
      </View>
      <View>{renderSearch()}</View>
      <FlatList
        data={menuList}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {renderPopularSection()}
            {renderRecommendedSection()}
            {renderMenuTypes()}
          </View>
        }
        renderItem={({ item, index }) => {
          return (
            <HorizontalFoodCard
              containerStyle={{
                height: 130,
                alignItems: "center",
                marginHorizontal: 16,
                marginBottom: 12,
              }}
              imageStyle={{
                margin: 20,
                height: 110,
                width: 110,
                backgroundColor: "#DDDDDD",
                borderRadius: 20,
              }}
              item={item}
              onPress={() => console.log("HorizontalFoodCard")}
            />
          );
        }}
      />
    </View>
  );
};

export default Home;
