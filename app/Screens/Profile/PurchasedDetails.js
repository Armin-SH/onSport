import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../../Constetns/Color';
import device from '../../Config/device';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../Navigator/components/Header'
import Svg from '../../Components/Svg';

import * as Svgs from '../../assets/icons/Svgs';

const PurchasedDetails = (props) => {
  const {Data} = props.route.params;
  console.log(Data);

  let Cost = 0;
  for (let index = 0; index < Data.products.length; index++) {
    Cost += Data.products[index].sum;
  }

  console.log(Cost);

  return (
    <LinearGradient
    colors={[Color.primary, Color.second]}
    style={styles.gradient}
      start={{x: 2, y: 2}}
      end={{x: 1, y: 0}}>
      <Header title={'اجناس خریداری شده'} />
      <View style={styles.screen}>
        <View style={styles.views}>
          <Text style={styles.labelText}>شماره خرید</Text>
          <Text style={styles.dataText}>{Data.objectId}</Text>
        </View>
        <View style={styles.seperator} />
        <View style={styles.views}>
          <Text style={styles.labelText}>تاریخ خرید</Text>
          <Text style={styles.dataText}>{Data.Date}</Text>
        </View>
        <View style={styles.seperator} />
        <View style={styles.views}>
          <Text style={styles.labelText}>هزینه پرداخت شده</Text>
          <Text style={styles.dataText}>200،000 تومان</Text>
        </View>
        <View style={styles.seperator} />
        <View style={styles.views}>
          <Text style={styles.labelText}>هزینه خرید شما</Text>
          <Text style={styles.dataText}>{Cost} تومان </Text>
        </View>
        <View style={styles.seperator} />
        <FlatList
          data={Data.products}
          keyExtractor={(item) => item.productId}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.flatView}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: device.width * 0.9,
                }}>
                <Svg xml={Svgs.LEFT} />
                <Text style={{...styles.dataText, fontSize: 25}}>
                  {item.productTitle}
                </Text>
                <Svg xml={Svgs.RIGHT} />
              </View>
              <View style={styles.seperator} />
              <View style={styles.flatRow}>
                <Text style={styles.labelText}>قیمت واحد : </Text>
                <Text style={styles.dataText}>{item.productPrice} تومان </Text>
              </View>
              <View style={styles.flatRow}>
                <Text style={styles.labelText}>تعداد جین :</Text>
                <Text style={styles.dataText}>{item.quantity} جین </Text>
              </View>
              <View style={styles.flatRow}>
                <Text style={styles.labelText}>قیمت کل :</Text>
                <Text style={styles.dataText}>{item.sum} تومان </Text>
              </View>
              <View style={styles.seperator} />
            </View>
          )}
        />
        <View style={styles.views}>
          <Text style={styles.labelText}>مبلغ قابل پرداخت</Text>
          <Text style={styles.dataText}>{Data.Amount} تومان </Text>
        </View>
        <View style={styles.views}>
          <Text style={styles.labelText}>وضعیت خرید شما</Text>
          {Data.Status === 'پیش پرداخت' ? (
            <Text style={styles.status}>{Data.Status}</Text>
          ) : (
            <Text style={styles.statusSucess}>{Data.Status}</Text>
          )}
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    height: device.height,
  },
  labelText: {
    color: 'white',
    fontFamily: 'Shabnam-Bold',
    fontSize: 20,
  },
  views: {
    width: device.width * 0.8,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    marginVertical: 10,
  },
  dataText: {
    color: 'white',
    fontFamily: 'Shabnam-Light',
    fontSize: 20,
  },
  seperator: {
    height: 1,
    width: device.width * 0.8,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginVertical: 5,
  },
  flatView: {
    width: device.width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatRow: {
    width: device.width * 0.7,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    marginVertical: 10,
  },
  status: {
    color: '#d2b309',
    fontFamily: 'Shabnam-Bold',
    fontSize: 20,
  },
  statusSucess: {
    color: 'green',
    fontFamily: 'Shabnam-Bold',
    fontSize: 20,
  },
});

export default PurchasedDetails;
