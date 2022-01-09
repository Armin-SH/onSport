import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import device from '../Config/device';
import TabIcon from './TabIcon';
import Svg from './Svg';
import * as Svgs from '../assets/icons/Svgs';


const BottomTab = ({
    focused,
    color,
    title,
    style,
    tabIcon,
    labelStyle,
    iconName,
}) => {

    return (
        <View style={styles.container}>
            {focused ? <View style={[styles.active, style]} /> : null}
            {tabIcon ?
                <View style={{ marginTop: 3, }}>
                    {focused ?
                        <Svg xml={Svgs[`${iconName}_ACTIVE`]} />
                        :
                        <Svg xml={Svgs[iconName]} />
                    }
                </View>
                : null}
            {focused ?
                <Text color={color} style={[styles.labelActive, labelStyle]}>
                    {title}
                </Text>
                :
                <Text color={color} style={[styles.label, labelStyle]}>
                    {title}
                </Text>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Shabnam-Light'
    },
    labelActive: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Shabnam-Bold'
    },
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: 'center',
    },
    active: {
        width: device.width * 0.15,
        height: 4,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: 'white',
        marginBottom: 1
    }
});



export default BottomTab;