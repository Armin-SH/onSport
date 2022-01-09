import React, {useCallback, useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Modal,
  Alert,
  FlatList,
  Dimensions,
  TouchableNativeFeedback,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Colors from '../Constetns/Color';
import * as cartActions from '../Store/action/cart';
import * as shopAction from '../Store/action/Shop';
import Button from '../Components/Button';
import LinearGradient from 'react-native-linear-gradient';
import device from '../Config/device';
import routes from '../Navigator/routes';
import Header from '../Navigator/components/Header';

const ProductDetailScreen = ({navigation, route}) => {
  const userInfo = useSelector((state) => state.auth);
  const [visibilty, setVisibilty] = useState(false);
  const [productCount, setProductCount] = useState(1);
  const {productId, productTitle} = route.params;
  const cartItems = useSelector((state) => state.cart.items);
  let counter = 0;
  for (const property in cartItems) {
    if (property === productId) {
      counter = cartItems[property].quantity;
    }
  }
  const selectedProduct = useSelector((state) =>
    state.Shop.availableProducts.find((prod) => prod.objectId === productId),
  );
  console.log(selectedProduct);
  const dispatch = useDispatch();
  const countProducts = () => {
    setVisibilty(!visibilty);
  };

  const Request = () => {
    dispatch(
      shopAction.sendRequest(
        selectedProduct.objectId,
        selectedProduct.myImage[0].image,
        userInfo.userPhoneNumber,
        userInfo.userFirstName + ' ' + userInfo.userLastName,
        selectedProduct.title,
      ),
    );
    Alert.alert('موفقیت آمیز', 'درخواست شما با موفقیت ثبت شد', ['باشه']);
  };

  const BuyHandler = async () => {
    await dispatch(
      cartActions.addToCart(selectedProduct, parseInt(productCount)),
    );
    Alert.alert('موفقیت آمیز', 'محصول شما با موفقیت با سبد خرید اضافه شد', [
      'باشه',
    ]);
    setVisibilty(!visibilty);
    setProductCount(1);
  };
  const MinHandler = () => {
    if (productCount > 1) {
      setProductCount(productCount - 1);
    } else return;
  };
  const MaxHandler = () => {
    if (productCount < selectedProduct.count - counter) {
      setProductCount(productCount + 1);
    } else return;
  };
  const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

  const ImageList = selectedProduct.myImage.map((Pimage) => {
    return (
      <View
        key={Pimage.index}
        style={{
          flex: 1,
          flexDirection: 'row',
          marginHorizontal: 5,
          width: 20,
          height: 30,
        }}>
        <Image style={{}} resizeMode="contain" source={{uri: Pimage.image}} />
      </View>
    );
  });

  return (
    <LinearGradient
      style={styles.gradient}
      colors={[Colors.primary, Colors.second]}
      start={{x: 2, y: 2}}
      end={{x: 1, y: 0}}>
      <Header title={productTitle} />
      <FlatList
        ListHeaderComponent={
          <>
            <FlatList
              horizontal
              pagingEnabled
              keyExtractor={(item) => item.index}
              showsHorizontalScrollIndicator={false}
              data={selectedProduct.myImage}
              renderItem={(itemData) => (
                <View>
                  <TouchableNativeFeedback
                    onPress={() => {
                      navigation.navigate(routes.PRODUCT_IMAGE, {
                        productImage: itemData.item.image,
                      });
                    }}>
                    <Image
                      resizeMode="contain"
                      style={{
                        width: windowWidth,
                        height: 250,
                        borderRadius: 50,
                      }}
                      source={{uri: itemData.item.image}}
                    />
                  </TouchableNativeFeedback>
                </View>
              )}
            />
          </>
        }
        numColumns={4}
        style={{}}
        keyExtractor={(item) => item.index}
        showsHorizontalScrollIndicator={false}
        data={selectedProduct.myImage}
        renderItem={({item}) => (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                flex: 1,
              }}>
              <Image
                style={{
                  borderRadius: 40,
                  width: 40,
                  height: 60,
                  marginHorizontal: 10,
                }}
                resizeMode="contain"
                source={{uri: item.image}}
              />
            </View>
          </View>
        )}
        ListFooterComponent={
          <>
            <View style={styles.modal}>
              <Modal
                animationType="slide"
                visible={visibilty}
                transparent={true}>
                <View style={styles.modal}>
                  <View style={styles.modalView}>
                    <LinearGradient
                      style={{
                        padding: 30,
                        borderRadius: 20,
                        alignItems: 'center',
                      }}
                      colors={[Colors.primary, Colors.second]}
                      start={{x: 2, y: 2}}
                      end={{x: 1, y: 0}}>
                      <Text
                        style={{
                          fontSize: 30,
                          color: 'white',
                          fontFamily: 'Shabnam-Bold',
                        }}>
                        تعداد جین
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row-reverse',
                          marginHorizontal: 50,
                          paddingTop: 20,
                        }}>
                        <View style={{marginHorizontal: 40}}>
                          <View style={{marginVertical: 10, width: 30}}>
                            <Button
                              width={40}
                              height={40}
                              title="+"
                              textStyle={{
                                fontSize: 40,
                                fontFamily: 'Shabnam-Bold',
                              }}
                              onPress={MaxHandler}
                              style={{height: 40, width: 70}}
                            />
                          </View>
                          <View>
                            <Button
                              width={40}
                              height={40}
                              title="-"
                              textStyle={{
                                fontSize: 40,
                                fontFamily: 'Shabnam-Bold',
                              }}
                              onPress={MinHandler}
                              style={{height: 40, width: 70}}
                            />
                          </View>
                        </View>
                        <View
                          style={{
                            borderRadius: 10,
                            marginTop: 30,
                            //backgroundColor: Color.primary,
                            width: 50,
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 40,
                              fontFamily: 'Shabnam-Bold',
                              color: 'white',
                            }}>
                            {productCount}
                          </Text>
                        </View>
                      </View>
                      <View style={{flexDirection: 'row-reverse'}}>
                        <View
                          style={{
                            paddingTop: 40,
                            width: 100,
                            marginHorizontal: 10,
                          }}>
                          <Button
                            height={40}
                            width={100}
                            title="تایید"
                            onPress={BuyHandler}
                            style={{height: 40, width: 100}}
                          />
                        </View>
                        <View style={{paddingTop: 40, width: 100}}>
                          <Button
                            width={100}
                            height={40}
                            style={{height: 40, width: 100}}
                            title="انصراف"
                            onPress={() => {
                              setVisibilty(!visibilty);
                              setProductCount(1);
                            }}
                          />
                        </View>
                      </View>
                    </LinearGradient>
                  </View>
                </View>
              </Modal>
            </View>
            <View style={styles.actions}>
              <Button
                width={130}
                height={40}
                title="افزودن به سبد خرید"
                onPress={countProducts}
                disabled={selectedProduct.count - counter === 0}
                style={{height: 40, width: 150}}
              />
              <View>
                {selectedProduct.count - counter === 0 ? (
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'Shabnam-Bold',
                      fontSize: 20,
                      marginBottom: 5,
                    }}>
                    ناموجود
                  </Text>
                ) : (
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'Shabnam-Bold',
                      fontSize: 20,
                      marginBottom: 5,
                    }}>
                    موجود
                  </Text>
                )}
                {selectedProduct.count - counter === 0 ? (
                  <Button
                    height={40}
                    width={130}
                    style={{height: 40, width: 150}}
                    onPress={Request}
                    title="درخواست محصول"
                  />
                ) : null}
              </View>
            </View>
            <View style={styles.seperator} />
            <Text style={styles.productTitle}>{selectedProduct.title}</Text>
            <Text style={styles.price}>تومان {selectedProduct.price}</Text>
            <View style={styles.seperator} />
            <Text
              style={{
                color: 'white',
                alignSelf: 'center',
                marginBottom: 20,
                fontSize: 20,
                fontFamily: 'Shabnam-Bold',
              }}>
              ویژگی ها
            </Text>
            <Text style={styles.description}>
              {selectedProduct.description}
            </Text>
          </>
        }
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  price: {
    fontSize: 20,
    color: '#ccc',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'Shabnam-Bold',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 5,
    fontFamily: 'Shabnam-Light',
    color: 'white',
  },
  productTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
    fontFamily: 'Shabnam-Bold',
    color: 'white',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    //backgroundColor: "white",
    borderRadius: 20,
    //padding: 35,
    alignItems: 'center',
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 7,
  },
  seperator: {
    height: 0.5,
    width: device.width * 0.9,
    backgroundColor: 'yellow',
    alignSelf: 'center',
    marginVertical: 20,
  },
});

export default ProductDetailScreen;
