import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../../screens/HomeScreen';
import RecipeScreen from '../../screens/RecipeScreen';
import FeedScreen from '../../screens/FeedScreen';

import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drawer"
        options={{headerShown: false}}
        component={DrawerScreen}
      />
      <Stack.Screen
        name="Recipe"
        options={{
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTitle: '',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          // headerTintColor: 'black',
        }}
        component={RecipeScreen}
      />
    </Stack.Navigator>
  );
}

function DrawerScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Feed" component={FeedScreen} />
    </Drawer.Navigator>
  );
}
