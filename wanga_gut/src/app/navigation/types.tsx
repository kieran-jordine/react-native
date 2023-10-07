import {NavigatorScreenParams} from '@react-navigation/native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Drawer: NavigatorScreenParams<DrawerParamList>;
  RecipeCategory: {category: string};
  RecipeDetail: {recipeId: string};
};
export type RootStackProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type DrawerParamList = {
  Home: undefined;
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
