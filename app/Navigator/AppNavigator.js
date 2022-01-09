import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import routes from './routes';
import {NavigationContainer} from '@react-navigation/native';
import Svg from '../Components/Svg';
import * as Svgs from '../assets/icons/Svgs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CategoryScreen from '../Screens/CategoryScreen';
import SubCategoryScreen from '../Screens/SubCategoryScreen';
import ProductScreen from '../Screens/ProductScreen';
import ProductDetailScreen from '../Screens/ProductDetailsScreen';
import SliderImageScreen from '../Screens/SliderImageScreen';

import ProfileScreen from '../Screens/Profile/ProfileScreen';
import PurchasedProductScreen from '../Screens/Profile/PurchasedProductScreen';
import PurchasedDetails from '../Screens/Profile/PurchasedDetails';

import CartScreen from '../Screens/Cart/CartScreen';
import payScreen from '../Screens/Cart/PayScreen';
import paymentFactorScreen from '../Screens/Cart/PaymentFactorScreen';

import GuideShopScreen from '../Screens/GuideShop';

import AllProductsScreen from '../Screens/AllProductsScreen';

import AuthNavigator from '../Screens/AuthScreen';

import StartupScreen from '../Screens/StartupScreen';
import BottomTab from '../Components/BottomTab';
import color from '../Constetns/Color';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TopStack = ({navigation, route}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'خانه'}
        component={AppNavigatorTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.SUB_CATEGORY}
        component={SubCategoryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.PRODUCTS}
        component={ProductScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.PRODUCT_DETAILS}
        component={ProductDetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.PRODUCT_IMAGE}
        component={SliderImageScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.PURCHASED_PRODUCT}
        component={PurchasedProductScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.PURCHASED_PRODUCT_DETAILS}
        component={PurchasedDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.PAYMENT}
        component={payScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.FACTOR}
        component={paymentFactorScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};


const AppNavigatorTab = ({navigation, route}) => {
  return (
    <Tab.Navigator
      tabBarOptions={{style: {height: 80, backgroundColor: color.primary}}}>
      <Tab.Screen
        name="خانه"
        component={CategoryScreen}
        options={{
          tabBarLabel: ({color, focused}) => (
            <BottomTab
              title="خانه"
              color={color}
              focused={focused}
              iconName={'CLOTHES'}
              tabIcon
            />
          ),
          tabBarColor: 'black',
        }}
      />
      <Tab.Screen
        name="ALL_PRODUCTS"
        component={AllProductsScreen}
        options={{
          tabBarLabel: ({color, focused}) => (
            <BottomTab
              title="محصولات"
              color={color}
              focused={focused}
              iconName={'SEARCH'}
              tabIcon
            />
          ),
          tabBarColor: 'rgb(0,86,87)',
        }}
      />
      <Tab.Screen
        name="PROFILE_NAVIGATOR"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({color, focused}) => (
            <BottomTab
              title="پروفایل"
              color={color}
              focused={focused}
              iconName={'SUGGESTION'}
              tabIcon
            />
          ),
          tabBarColor: 'black',
        }}
      />
      <Tab.Screen
        name="CART_NAVIGATOR"
        component={CartScreen}
        options={{
          tabBarLabel: ({color, focused}) => (
            <BottomTab
              title="سبد خرید"
              color={color}
              focused={focused}
              iconName={'ORDERS'}
              tabIcon
            />
          ),
          tabBarColor: 'rgb(0,86,87)',
        }}
      />
      <Tab.Screen
        name="GUIDE"
        component={GuideShopScreen}
        options={{
          tabBarLabel: ({color, focused}) => (
            <BottomTab
              title="راهنمایی"
              color={color}
              focused={focused}
              iconName={'GUIDE'}
              tabIcon
            />
          ),
          tabBarColor: 'black',
        }}
      />
    </Tab.Navigator>
  );
};

//-------------------------------------------------------------------------------------



const MainNavigator = ({navigation, route}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={routes.START_UP}
          component={StartupScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={routes.AUTH}
          component={AuthNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={routes.MAIN}
          component={TopStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
