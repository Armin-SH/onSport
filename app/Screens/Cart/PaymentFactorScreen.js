import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import FactorItem from '../../Components/FactorItems';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as userActions from '../../Store/action/auth';
import * as cartActions from '../../Store/action/cart';
import * as shopAction from '../../Store/action/Shop';
import CartItem from '../../Components/CartItem';

const paymentFactorScreen = (props) => {
  const dispatch = useDispatch();
  const stat = 'پیش پرداخت';
  let today = new Date();
  const date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const amount = cartTotalAmount - 200000;
  const userId = useSelector((state) => state.auth.userId);
  const userToken = useSelector((state) => state.auth.userToken);
  const cartItems = useSelector((state) => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
        image: state.cart.items[key].image,
      });
    }
    return transformedCartItems;
  });
  console.log(cartItems);
  const Product = useSelector((state) => state.Shop.availableProducts);
  console.log(Product);
  const todo = () => {
    for (let index = 0; index < cartItems.length; index++) {
      for (let index2 = 0; index2 < Product.length; index2++) {
        if (cartItems[index].productId === Product[index2].objectId) {
          dispatch(
            shopAction.updateProducts(
              Product[index2].objectId,
              Product[index2].count - cartItems[index].quantity,
            ),
          );
        }
      }
    }
    dispatch(
      userActions.UserBuy(userId, userToken, cartItems, date, amount, stat),
    );
    dispatch(cartActions.emptyCart());
    dispatch(shopAction.fetchProducts());
    props.navigation.pop(2);
  };
  return (
    <View style={styles.screen}>
      <Text style={styles.sucsess}>پرداخت شما با موفقیت انجام شد</Text>
      <Text style={{...styles.sucsess, color: 'black'}}>اجناس خریداری شده</Text>
      <FlatList
        data={cartItems}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.productId}
        renderItem={(itemData) => (
          <FactorItem
            quantity={itemData.item.quantity}
            title={itemData.item.productTitle}
            amount={itemData.item.sum}
          />
        )}
      />
      <View style={styles.info}>
        <Text style={styles.infoText}>مبلغ پرداخت شده : </Text>
        <Text style={styles.infoText}>200،000 تومان</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoText}>مبلغ قابل پرداخت : </Text>
        <Text style={styles.infoText}>{amount} تومان</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoText}>تاریخ خریداری شده : </Text>
        <Text style={styles.infoText}>{date}</Text>
      </View>
      <TouchableOpacity onPress={() => todo()}>
        <Text style={{...styles.sucsess, color: 'black'}}>تایید</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
    backgroundColor: 'white',
  },
  sucsess: {
    color: '#008000',
    marginBottom: 20,
    fontSize: 20,
    fontFamily: 'Shabnam-Bold',
  },
  info: {
    flexDirection: 'row-reverse',
    marginVertical: 10,
    justifyContent: 'space-around',
  },
  infoText: {
    fontFamily: 'Shabnam-Light',
    fontSize: 16,
  },
});

export default paymentFactorScreen;
