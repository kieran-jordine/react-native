import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {IconButton} from 'react-native-paper';
import {Alert, StyleSheet} from 'react-native';

export default function DrawerContentApp(props: DrawerContentComponentProps) {
  const {state} = props;

  function icon(iconProps: {}) {
    return <IconButton icon="help" {...iconProps} style={style.iconStyle} />;
  }

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="About"
        onPress={() => Alert.alert('Coming')}
        focused={state.index === 4}
      />
      <DrawerItem
        label="Help"
        labelStyle={style.labelStyle}
        icon={iconProps => icon(iconProps)}
        onPress={() => Alert.alert('Coming')}
        focused={state.index === 5}
      />
    </DrawerContentScrollView>
  );
}

const style = StyleSheet.create({
  labelStyle: {marginLeft: -32},
  iconStyle: {position: 'absolute', right: 3},
});
