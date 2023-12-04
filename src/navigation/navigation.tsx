import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigation from './stackNavigation';

const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ color }: any) => {
//             return <Icon name={'ios-home'} size={25} color={color} />;
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ color }: any) => {
//             return <Icon name={'ios-settings'} size={25} color={color} />;
//           },
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

const MainNavigation = () => {
  return (
    <NavigationContainer>
      {/* <DrawerNavigation /> */}
      <StackNavigation />
    </NavigationContainer>
  );
};

export default MainNavigation;
