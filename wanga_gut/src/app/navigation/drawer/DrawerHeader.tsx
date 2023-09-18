/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {IconButton, Menu} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {DrawerProps} from '../types';

export function HeaderLeft() {
  const navigation = useNavigation<DrawerProps<'Home'>['navigation']>();
  return <IconButton icon="menu" onPress={() => navigation.toggleDrawer()} />;
}

export function HeaderRight() {
  const [menuVisible, setMenuVisible] = React.useState(false);

  function menu() {
    return <IconButton icon="more-vert" onPress={() => setMenuVisible(true)} />;
  }

  return (
    <View style={{flexDirection: 'row'}}>
      <IconButton icon="search" />
      <Menu
        visible={menuVisible}
        onDismiss={() => setMenuVisible(false)}
        anchor={menu()}>
        <Menu.Item title="Item 1" onPress={() => setMenuVisible(false)} />
        <Menu.Item title="Item 2" onPress={() => setMenuVisible(false)} />
        <Menu.Item title="Item 3" onPress={() => setMenuVisible(false)} />
      </Menu>
    </View>
  );
}
