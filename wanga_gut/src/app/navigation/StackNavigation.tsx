import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DrawerParamList, RootStackParamList} from './types';
const RootStack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

import DrawerContent from './drawer/DrawerContent';
import {HeaderLeft, HeaderRight} from './drawer/DrawerHeader';
import HomeScreen from '../../screens/HomeScreen';
import RecipeCategoryScreen from '../../screens/RecipeCategoryScreen';
import RecipeDetailScreen from '../../screens/RecipeDetailScreen';

export default function StackNavigation() {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
      <RootStack.Screen
        name="Drawer"
        options={{headerShown: false}}
        component={DrawerScreen}
      />
      <RootStack.Screen
        name="RecipeCategory"
        component={RecipeCategoryScreen}
        options={({route}) => ({
          title: route.params.category,
          headerSearchBarOptions: {
            placement: 'inline',
          },
        })}
      />
      <RootStack.Screen
        name="RecipeDetail"
        component={RecipeDetailScreen}
        options={{
          headerTitle: '',
          headerTransparent: true,
        }}
      />
    </RootStack.Navigator>
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
    </Drawer.Navigator>
  );
}
