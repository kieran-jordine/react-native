import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../../screens/HomeScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Tab 1"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTintColor: '#fff',
      }}>
      <Tab.Screen
        name="Tab 1"
        component={HomeScreen}
        options={{title: 'RN Form'}}
      />
      <Tab.Screen
        name="Tab 2"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen
        name="Tab 3"
        component={StackScreen}
        options={({route}: NavProp) => ({
          title: route.params?.name,
          tabBarIcon: ({focused, color, size}) =>
            tabBarIcon(focused, color, size),
          tabBarActiveTintColor: 'tomato',
          tabBarBadge: 'badge',
          tabBarShowLabel: true,
        })}
      />
    </Tab.Navigator>
  );
}

function tabBarIcon(focused: boolean, color: string, size: number) {
  const name = focused ? 'shuffle' : 'shuffle-outline';
  return <Ionicons name={name} color={color} size={size} />;
}

function StackScreen() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ReduxStart"
        component={HomeScreen}
        options={({route}: NavProp) => ({
          title: route.params?.name,
        })}
      />
      <Stack.Screen
        name="RtkQuery"
        component={HomeScreen}
        initialParams={{postId: 19}}
      />
    </Stack.Navigator>
  );
}

export interface NavProp {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}
