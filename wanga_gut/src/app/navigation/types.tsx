import {DrawerScreenProps} from '@react-navigation/drawer';
import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Drawer: NavigatorScreenParams<DrawerParamList>;
  Recipe: {recipeId: number};
  IngredientList: {recipeId: number; recipeTitle: string};
  Ingredient: {ingredientId: number; ingredientName: string};
  Categories: undefined;
  Category: {categoryId: number};
};
export type RootStackProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type DrawerParamList = {
  Home: undefined;
  Settings: undefined;
  Feed: {sort: 'latest' | 'top'};
  Help: undefined;
};
export type DrawerProps<T extends keyof DrawerParamList> = DrawerScreenProps<
  DrawerParamList,
  T
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
