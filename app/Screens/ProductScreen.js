import React, {useRef} from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import ProductItem from '../Components/ProductItem';
import Color from '../Constetns/Color';
import device from '../Config/device';
import {Image} from 'react-native';
import routes from '../Navigator/routes';
import Header from '../Navigator/components/Header';

const ProductsOverviewScreen = ({navigation, route}) => {
  const {ProductId, Title} = route.params;
  const products = useSelector((state) => state.Shop.availableProducts);
  const Item = products.filter((prod) => prod.subCatId === ProductId);
  console.log(Item);
  const selectItemHandler = (id, title) => {
    navigation.navigate(routes.PRODUCT_DETAILS, {
      productId: id,
      productTitle: title,
    });
  };

  return (
    <LinearGradient
      style={styles.gradient}
      colors={[Color.primary, Color.second]}
      start={{x: 2, y: 2}}
      end={{x: 1, y: 0}}>
      <View style={{flex: 1}}>
        <Header title={Title} />
      </View>
      {Item.length != 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{marginTop: 50}}
          data={Item}
          keyExtractor={(item) => item.objectId}
          renderItem={(itemData) => (
            <ProductItem
              title={itemData.item.title}
              price={itemData.item.price}
              onSelect={() => {
                selectItemHandler(itemData.item.objectId, itemData.item.title);
              }}>
              <FlatList
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                data={itemData.item.myImage}
                keyExtractor={(item) => item.index}
                renderItem={({item}) => (
                  <Image
                    resizeMode="contain"
                    style={{flex: 1, width: device.width, borderRadius: 50}}
                    source={{uri: item.image}}
                  />
                )}
              />
            </ProductItem>
          )}
        />
      ) : (
        <View style={styles.noProduct}>
          <Text style={styles.noProductText}>محصولی موجود نمی باشد</Text>
        </View>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
  },
  noProduct: {
    height: 70,
    width: device.width * 0.9,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientProduct: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noProductText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'shabnam-bold',
  },
});

export default ProductsOverviewScreen;
