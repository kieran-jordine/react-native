/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {IconButton, List} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';

export default function CustomDrawerContent(
  props: DrawerContentComponentProps,
) {
  const {navigation, state} = props;
  const {colors} = useTheme();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help1"
        onPress={() => navigation.navigate('Help1')}
        focused={state.index === 3}
      />
      <List.Item
        title="Help2"
        style={{
          marginHorizontal: 10,
          borderRadius: 3,
          backgroundColor: 'purple',
        }}
        onPress={() => navigation.navigate('Help2')}
        right={() => <IconButton icon={'camera'} />}
      />
      <DrawerItem
        label={() => (
          <List.Item
            title="Help3"
            right={() => <IconButton icon={'camera'} />}
            style={{backgroundColor: 'orange'}}
          />
        )}
        labelStyle={{margin: 0, padding: 0}}
        onPress={() => navigation.navigate('Help3')}
        style={{backgroundColor: 'silver', margin: 0}}
      />
    </DrawerContentScrollView>
  );
}
