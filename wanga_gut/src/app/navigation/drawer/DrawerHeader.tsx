/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {DrawerProps} from '../types';

export function HeaderLeft() {
  const navigation = useNavigation<DrawerProps<'Home'>['navigation']>();
  return <IconButton icon="menu" onPress={() => navigation.toggleDrawer()} />;
}

export function HeaderRight() {
  return (
    <View style={{flexDirection: 'row'}}>
      <IconButton icon="search" />
      <IconButton icon="more-vert" />
    </View>
  );
}
