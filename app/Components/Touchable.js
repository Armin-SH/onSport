import React from 'react';
import { TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';


const Touchable = ({ children, onPress, style, ...otherProps }) => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <TouchableCmp onPress={onPress} style={[style]} {...otherProps}>
            {children}
        </TouchableCmp>
    )
}

export default Touchable;


