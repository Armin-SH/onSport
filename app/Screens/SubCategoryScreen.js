import React, { useEffect } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Category from "../Components/Category";
import LinearGradient from 'react-native-linear-gradient';
import Color from '../Constetns/Color';
import routes from "../Navigator/routes";
import Header from '../Navigator/components/Header';

const SubCategoryScreen = ({navigation, route}) => {
  const {CategoryID, Title} = route.params;
  const SubCat = useSelector((state) => state.Shop.SubCategories);
  const Item = SubCat.filter((prod) => prod.categoryId === CategoryID);
  return (
    <LinearGradient
      style={styles.gradient}
      colors={[Color.primary, Color.second]}
      start={{ x: 2, y: 2 }}
      end={{ x: 1, y: 0 }}
    >
      <Header title={Title} />
      {Title === "لباس مردانه" ?
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Item}
        renderItem={(itemData) => (
          <Category
            Men = {true}
            title={itemData.item.title}
            Source={itemData.item.image}
            icon = {itemData.item.icon}
            onSelect={() =>
              navigation.navigate(routes.PRODUCTS, {
                ProductId: itemData.item.id,
                Title: itemData.item.title,
              })
            }
          />
        )}
      /> : <FlatList
      showsVerticalScrollIndicator={false}
      data={Item}
      renderItem={(itemData) => (
        <Category
          title={itemData.item.title}
          Source={itemData.item.image}
          icon={itemData.item.icon}
          onSelect={() =>
            navigation.navigate(routes.PRODUCTS, {
              ProductId: itemData.item.id,
              Title: itemData.item.title,
            })
          }
        />
      )}
    />}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
  },
});

export default SubCategoryScreen;
