import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DrawerContent from './drawer/DrawerContent';
import {HeaderLeft, HeaderRight} from './drawer/DrawerHeader';
import HomeScreen from '../../screens/HomeScreen';
import RecipeScreen from '../../screens/RecipeScreen';
import FeedScreen from '../../screens/FeedScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import HelpScreen from '../../screens/HelpScreen';

import {DrawerParamList, RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

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
    <Drawer.Navigator
      screenOptions={{
        headerLeft: () => HeaderLeft(),
        headerRight: () => HeaderRight(),
      }}
      drawerContent={props => DrawerContent(props)}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Feed" component={FeedScreen} />
      <Drawer.Screen name="Help" component={HelpScreen} />
    </Drawer.Navigator>
  );
}
