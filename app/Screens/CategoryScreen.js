import React, { useEffect} from "react";
import { FlatList, View, Dimensions} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Components/Category";
import { StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Colors from "../Constetns/Color";
import * as productsActions from '../Store/action/Shop';
import routes from '../Navigator/routes';

const CategoryScreen = ({ navigation, route }) => {
  const Category = useSelector((state) => state.Shop.Categories);
  const dispatch = useDispatch();
  console.log(Category)
  useEffect(() => {
    dispatch(productsActions.fetchProducts());
  }, [dispatch]);

  return (
    <LinearGradient
      style={styles.gradient}
      colors={[Colors.primary, Colors.second]}
      start={{ x: 2, y: 2 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={{ marginTop: 50 }}>
        <FlatList
          data={Category}
          renderItem={(itemData) => (
            <Card
              onSelect={() => {
                navigation.navigate(routes.SUB_CATEGORY, {
                  CategoryID: itemData.item.id,
                  Title: itemData.item.title,
                });
              }}
              title={itemData.item.title}
              Source={itemData.item.image}
            />
          )}
            />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  sliderItems: {
    marginLeft: 5,
    marginRight: 5,
    height: 250,
    width: Dimensions.get('window').width,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryScreen;
