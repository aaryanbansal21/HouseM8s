// src/navigation/TabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons }                  from '@expo/vector-icons';

import HomeScreen     from '../screens/HomeScreen';
import TimelineScreen from '../screens/TimelineScreen';
import ChatScreen     from '../screens/ChatScreen';
import AccountScreen  from '../screens/AccountScreen';

type TabParamList = {
  Home: undefined;
  Timeline: undefined;
  Chat: undefined;
  Account: undefined;
};
const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        const icons: Record<string,string> = {
          Home:     'home-outline',
          Timeline: 'time-outline',
          Chat:     'chatbubble-ellipses-outline',
          Account:  'person-outline',
        };
        return <Ionicons name={icons[route.name]} size={size} color={color} />;
      },
    })}>
      <Tab.Screen name="Home"     component={HomeScreen}/>
      <Tab.Screen name="Timeline" component={TimelineScreen}/>
      <Tab.Screen name="Chat"     component={ChatScreen}/>
      <Tab.Screen name="Account"  component={AccountScreen}/>
    </Tab.Navigator>
  );
}
