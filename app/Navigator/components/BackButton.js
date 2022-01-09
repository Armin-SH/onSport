import React from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Svg from '../../Components/Svg';

import {BACK} from '../../assets/icons/Svgs';

export default BackButton = () => {
  const navigation = useNavigation();

  return (
    <Svg
      xml={BACK}
      style={styles.backButton}
      onPress={() => navigation.goBack()}
    />
  );
};

const styles = StyleSheet.create({
  backButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    // paddingHorizontal: 20,
  },
});
