import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from "react-redux";
import Color from "../Constetns/Color";
import ProductItem from "../Components/AllProductItem";
import * as productsActions from "../Store/action/Shop";
import routes from '../Navigator/routes';

const AllProductsScreen = ({navigation, route}) => {
  useEffect(() => {
    dispatch(productsActions.fetchProducts());
  }, [dispatch]);
  const [search, setSearch] = useState("");
  const products = useSelector((state) => state.Shop.availableProducts);
  const dispatch = useDispatch();

  const selectItemHandler = (id, title) => {
    navigation.navigate(routes.PRODUCT_DETAILS, {
      productId: id,
      productTitle: title,
    });
  };

  const Sproducts = products;
  const Sfiled = search;
  const filteredProducts = Sproducts.filter((Sproduct) =>
    Sproduct.title.includes(Sfiled)
  );

    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <LinearGradient
          style={styles.gradient}
          colors={[Color.primary, Color.second]}
          start={{ x: 2, y: 2 }}
          end={{ x: 1, y: 0 }}
        >
          <View style={styles.SearchBar}>
            <TextInput
              onChangeText={(text) => setSearch(text)}
              placeholder="جستجو"
              style={styles.search}
              placeholderTextColor="#ccc"
              textAlign="right"
              value={search}
            />
          </View>
          <FlatList
            data={filteredProducts}
            keyExtractor={(item) => item.objectId}
            renderItem={(itemData) => (
              <ProductItem
                image={itemData.item.myImage[0].image}
                title={itemData.item.title}
                price={itemData.item.price}
                onSelect={() => {
                  selectItemHandler(
                    itemData.item.objectId,
                    itemData.item.title
                  );
                }}
              ></ProductItem>
            )}
          />
        </LinearGradient>
      </View>
    );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: "center",
    paddingTop: 70,
  },
  SearchBar: {
    width: "90%",
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    paddingRight: 15,
    borderWidth: 1,
    borderColor: 'white',
  },
  search: {
    fontSize: 18,
    color: 'white',
    fontFamily : 'Shabnam-Light'

  },
});

export default AllProductsScreen;
