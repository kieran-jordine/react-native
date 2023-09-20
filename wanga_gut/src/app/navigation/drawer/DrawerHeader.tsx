/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View} from 'react-native';
import {IconButton, Menu} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {DrawerProps} from '../types';
import {
  ThemeContextObject,
  ThemeContext,
  ThemeContextMode,
} from '../../context_providers';

export function HeaderLeft() {
  const navigation = useNavigation<DrawerProps<'Home'>['navigation']>();
  return <IconButton icon="menu" onPress={() => navigation.toggleDrawer()} />;
}

export function HeaderRight() {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const {setTheme} = useContext<ThemeContextObject>(ThemeContext);

  function menu() {
    return <IconButton icon="more-vert" onPress={() => setMenuVisible(true)} />;
  }

  function onChangeTheme(theme: ThemeContextMode) {
    setTheme(theme);
    setMenuVisible(false);
  }

  return (
    <View style={{flexDirection: 'row'}}>
      <IconButton icon="search" />
      <Menu
        visible={menuVisible}
        onDismiss={() => setMenuVisible(false)}
        anchor={menu()}>
        <Menu.Item title="Dark Mode" onPress={() => onChangeTheme('dark')} />
        <Menu.Item title="Light Mode" onPress={() => onChangeTheme('light')} />
      </Menu>
    </View>
  );
}
