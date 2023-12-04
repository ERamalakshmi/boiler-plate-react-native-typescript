import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/homeScreen';
import ProfileScreen from '../screens/profile/profileScreen';
import { screenName } from '../utils/screenNames';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={screenName.HomeScreen} screenOptions={{headerShown : false}}>
      <Stack.Screen name={screenName.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={screenName.ProfileScreen} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
