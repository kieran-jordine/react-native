import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AppDrawerContent from './AppDrawerContent';
import HomeScreen from '../../screens/HomeScreen';
import RecipeScreen from '../../screens/RecipeScreen';
import FeedScreen from '../../screens/FeedScreen';
import SettingsScreen from '../../screens/SettingsScreen';

import {RootStackParamList} from './types';
import HelpScreen3 from '../../screens/HelpScreen3';
import HelpScreen2 from '../../screens/HelpScreen2';
import HelpScreen1 from '../../screens/HelpScreen1';

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
    <Drawer.Navigator
      screenOptions={
        {
          // drawerActiveBackgroundColor: 'red',
          // drawerActiveTintColor: 'cyan',
          // drawerIcon: props => <IconButton {...props} icon="menu" />,
          // drawerType: 'front',
        }
      }
      defaultStatus="open"
      drawerContent={props => AppDrawerContent(props)}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Feed" component={FeedScreen} />
      <Drawer.Screen name="Help1" component={HelpScreen1} />
      <Drawer.Screen name="Help2" component={HelpScreen2} />
      <Drawer.Screen name="Help3" component={HelpScreen3} />
    </Drawer.Navigator>
  );
}
