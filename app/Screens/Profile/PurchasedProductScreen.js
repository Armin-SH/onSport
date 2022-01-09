import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import * as authActions from '../../Store/action/auth';
import {useDispatch, useSelector} from 'react-redux';
import Color from '../../Constetns/Color';
import LinearGradient from 'react-native-linear-gradient';
import device from '../../Config/device';
import Button from '../../Components/Button';
import routes from '../../Navigator/routes';
import Header from '../../Navigator/components/Header';

const PurchasedProductScreen = (props) => {
  const Data = useSelector((state) => state.auth.userBuy);
  const UserId = useSelector((state) => state.auth.userId);
  const userData = [];
  if (Data) {
    for (let index = 0; index < Data.length; index++) {
      if (Data[index].userId === UserId) {
        userData.push(Data[index]);
      }
    }
  }
  return (
    <LinearGradient
    colors={[Color.primary, Color.second]}
    style={styles.gradient}
      start={{x: 2, y: 2}}
      end={{x: 1, y: 0}}>
      <Header title={"اجناس خریداری شده"} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
        }}>
        <FlatList
          data={userData}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.objectId}
          renderItem={({item}) => (
            <View style={{flex: 1}}>
              <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                <Text style={styles.productId}>شماره خرید : </Text>
                <Text style={styles.productId}>{item.objectId}</Text>
              </View>
              <View style={{marginTop: 10, flexDirection: 'row-reverse'}}>
                <Text style={styles.productId}>اقلام خریداری شده : </Text>
                <Text style={styles.productId}>
                  {item.products.length} قلم{' '}
                </Text>
              </View>
              <View style={{marginTop: 10, flexDirection: 'row-reverse'}}>
                <Text style={styles.productId}>تاریخ خرید : </Text>
                <Text style={styles.productId}>{item.Date}</Text>
              </View>
              <View style={{marginTop: 10, flexDirection: 'row-reverse'}}>
                <Text style={styles.productId}>مبلغ قابل پرداخت : </Text>
                <Text style={styles.productId}>{item.Amount} تومان </Text>
              </View>
              <View style={{marginTop: 10, flexDirection: 'row-reverse'}}>
                <Text style={styles.productId}>وضعیت خرید : </Text>
                {item.Status === 'پیش پرداخت' ? (
                  <Text style={styles.status}>{item.Status}</Text>
                ) : null}
                {item.Status === 'پرداخت شده' ? (
                  <Text style={styles.statusSucess}>{item.Status}</Text>
                ) : null}
              </View>
              <View style={{marginTop: 15}}>
                <Button
                height={40}
                  title={'مشاهده جزئیات'}
                  onPress={() => {
                    props.navigation.navigate(
                      routes.PURCHASED_PRODUCT_DETAILS,
                      {Data: item},
                    );
                  }}
                  style={styles.button}
                />
              </View>
              <View style={styles.seperator} />
            </View>
          )}
        />
      </View>
    </LinearGradient>
  );
};

PurchasedProductScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'اجناس خریداری شده',
  };
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: 'center',
  },
  productId: {
    color: 'white',
    fontFamily: 'Shabnam-Light',
    fontSize: 20,
  },
  seperator: {
    height: 0.5,
    width: device.width * 0.9,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginVertical: 20,
  },
  status: {
    color: '#d2b309',
    fontFamily: 'Shabnam-Bold',
    fontSize: 20,
  },
  button: {
    width: device.width * 0.4,
    height: 40,
  },
  statusSucess: {
    color: 'green',
    fontFamily: 'Shabnam-Bold',
    fontSize: 20,
  },
});

export default PurchasedProductScreen;
