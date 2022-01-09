import React from 'react';
import {View, Text, FlatList, StyleSheet, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Colors from '../../Constetns/Color';
import CartItem from '../../Components/CartItem';
import * as cartActions from '../../Store/action/cart';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../Components/Button';
import routes from '../../Navigator/routes';

const CartScreen = (props) => {
  const User = useSelector((state) => state.auth);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
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
  const dispatch = useDispatch();
  return (
    <LinearGradient
      style={styles.gradient}
      colors={[Colors.primary, Colors.second]}
      start={{x: 2, y: 2}}
      end={{x: 1, y: 0}}>
      <View style={styles.screen}>
        <View style={styles.summary}>
          <Text style={styles.summaryText}>
            <Text style={styles.amount}>{cartTotalAmount} تومان</Text>
          </Text>
          <Button
            width={120}
            height={40}
            title="ثبت سفارش"
            disabled={cartItems.length === 0}
            onPress={() => {
              if (
                User.userFirstName === undefined ||
                User.userLastName === undefined ||
                User.userPhoneNumber === undefined
              ) {
                Alert.alert(
                  'خطا',
                  'برای ادامه خرید اطلاعات پروفایل خود را کامل کنید',
                );
              } else {
                props.navigation.navigate(routes.PAYMENT);
              }
            }}
          />
        </View>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.productId}
          renderItem={(itemData) => (
            <CartItem
              quantity={itemData.item.quantity}
              title={itemData.item.productTitle}
              amount={itemData.item.sum}
              onRemove={() => {
                dispatch(cartActions.removeFromCart(itemData.item.productId));
              }}
            />
          )}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
  },
  screen: {
    paddingTop: 80,
    paddingBottom: 80,
    margin: 20,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  summaryText: {
    fontSize: 18,
    fontFamily: 'Shabnam-Light',
  },
  amount: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Shabnam-Bold',
  },
});

export default CartScreen;
