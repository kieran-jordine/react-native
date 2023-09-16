import {DrawerScreenProps} from '@react-navigation/drawer';
import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Recipe: {recipeId: number};
  Drawer: NavigatorScreenParams<DrawerParamList>;
};
export type RootStackProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type DrawerParamList = {
  Settings: undefined;
  Feed: {sort: 'latest' | 'top'};
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
