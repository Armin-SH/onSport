import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
export default Svg = ({ xml, style, color, onPress, ...otherProps }) => {
  // default component for SVG container
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={onPress == undefined ? true : false}
      {...otherProps}>
      <View style={[styles.svgContainer, style]}>
        <SvgXml xml={xml} style={styles.svg} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  svgContainer: {
    alignItems: 'center',
    alignSelf: 'center',
  },
});
