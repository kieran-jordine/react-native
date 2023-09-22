import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DrawerContent from './drawer/DrawerContent';
import {HeaderLeft, HeaderRight} from './drawer/DrawerHeader';
import HomeScreen from '../../screens/v1/HomeScreen';
import RecipeScreen from '../../screens/v1/RecipeScreen';
import IngredientListScreen from '../../screens/v1/IngredientListScreen';
import IngredientScreen from '../../screens/v1/IngredientScreen';
import CategoryListScreen from '../../screens/v1/CategoryListScreen';
import CategoryScreen from '../../screens/v1/CategoryScreen';
import FeedScreen from '../../screens/v1/FeedScreen';
import SettingsScreen from '../../screens/v1/SettingsScreen';
import HelpScreen from '../../screens/v1/HelpScreen';

import CategoriesScreen from '../../screens/v2/CategoriesScreen';
import RecipeDetailScreen from '../../screens/v2/RecipeDetailScreen';

import {DrawerParamList, RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
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
        }}
        component={RecipeScreen}
      />
      <Stack.Screen
        name="IngredientList"
        initialParams={{recipeTitle: ''}}
        component={IngredientListScreen}
      />
      <Stack.Screen
        name="Ingredient"
        initialParams={{ingredientName: ''}}
        component={IngredientScreen}
      />
      <Stack.Screen name="Categories" component={CategoryListScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
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
      <Drawer.Screen name="HomeV2" component={CategoriesScreen} />
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Feed" component={FeedScreen} />
      <Drawer.Screen name="Help" component={HelpScreen} />
    </Drawer.Navigator>
  );
}
