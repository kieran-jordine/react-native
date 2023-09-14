import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationProp, RouteProp} from '@react-navigation/native';

import HomeScreen from '../../screens/HomeScreen';
import RecipeScreen from '../../screens/RecipeScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTintColor: '#fff',
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Recipe" component={RecipeScreen} />
      <Drawer.Screen name="Tab 3" component={StackScreen} />
    </Drawer.Navigator>
  );
}

function StackScreen() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ReduxStart" component={HomeScreen} />
      <Stack.Screen name="RtkQuery" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export interface NavProp {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}
