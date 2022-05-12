import React from 'react';
import {StyleSheet, Image, View, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Cart from './Cart';
import Design from './Design';
import Shop from './Shop';
import Profile from './Profile';
// import Splash from './Splash';
import {Color} from '../color/Color';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Tab = createBottomTabNavigator();

const MainTabScreen = ({navigation}) => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarHideOnKeyboard: true,
      headerShown: false,
      tabBarActiveTintColor: Color.primaryColor,
      tabBarInactiveTintColor: Color.gray,
      // tabBarLabel: true,
      tabBarLabelStyle: ({focused}) => ({
        color: focused ? Color.primaryColor : Color.gray,
      }),
      tabBarStyle: {
        position: 'absolute',
        height: HEIGHT * 0.08,
      },
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        unmountOnBlur: true,
        lazy: false,
        tabBarLabelStyle: styles.tabBar,
        tabBarLabel: '',
        tabBarLabel: 'Home',
        tabBarIcon: ({focused}) => (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../assets/home.png')}
              style={{
                ...styles.icon,
                tintColor: focused ? Color.primaryColor : Color.gray,
              }}
            />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Shop"
      component={Shop}
      options={{
        unmountOnBlur: true,
        tabBarLabelStyle: styles.tabBar,
        tabBarLabel: '',
        tabBarLabel: 'Shop',
        tabBarIcon: ({focused}) => (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../assets/shop.png')}
              style={{
                ...styles.icon,
                tintColor: focused ? Color.primaryColor : Color.gray,
              }}
            />
          </View>
        ),
      }}
    />

    <Tab.Screen
      name="Design"
      component={Design}
      options={{
        unmountOnBlur: true,
        tabBarLabelStyle: styles.tabBar,
        tabBarLabel: '',
        tabBarLabel: 'Design',
        tabBarIcon: ({focused}) => (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../assets/design.png')}
              style={{
                ...styles.icon,
                tintColor: focused ? Color.primaryColor : Color.gray,
              }}
            />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Cart"
      component={Cart}
      options={{
        unmountOnBlur: true,
        tabBarLabelStyle: styles.tabBar,
        tabBarLabel: '',
        tabBarLabel: 'Cart',
        tabBarIcon: ({focused}) => (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../assets/cart.png')}
              style={{
                ...styles.icon,
                tintColor: focused ? Color.primaryColor : Color.gray,
              }}
            />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        unmountOnBlur: true,
        tabBarLabelStyle: styles.tabBar,
        tabBarLabel: '',
        tabBarLabel: 'Profile',
        tabBarIcon: ({focused}) => (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../assets/profile.png')}
              style={{
                ...styles.icon,
                tintColor: focused ? Color.primaryColor : Color.gray,
              }}
            />
          </View>
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: Color.primaryColor,
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  icon: {
    // marginTop: WIDTH * 0.01,
    width: WIDTH * 0.08,
    height: WIDTH * 0.08,
    resizeMode: 'contain',
  },
  tabBar: {
    marginBottom: WIDTH * 0.0125,
  },
});
