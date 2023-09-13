import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationProp, RouteProp} from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Tab 1"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTintColor: '#fff',
      }}>
      <Drawer.Screen
        name="Tab 1"
        component={HomeScreen}
        options={{title: 'RN Form'}}
      />
      <Drawer.Screen
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
      <Drawer.Screen
        name="Tab 3"
        component={StackScreen}
        options={({route}: NavProp) => ({
          title: route.params?.name,
          tabBarActiveTintColor: 'tomato',
          tabBarBadge: 'badge',
          tabBarShowLabel: true,
        })}
      />
    </Drawer.Navigator>
  );
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
