/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import Statusbar from '../components/Statusbar';
import {Button} from 'react-native-paper';
// import {useNavigation} from '@react-navigation/native';
import {DrawerProps} from '../app/navigation/types';

export default function HelpScreen({navigation}: DrawerProps<'Help'>) {
  return (
    <>
      <Statusbar />
      <View>
        <Text style={{fontSize: 24, justifyContent: 'center'}}>HelpScreen</Text>
        <Button mode="contained" onPress={() => navigation.toggleDrawer()}>
          Toggle Drawer
        </Button>
      </View>
    </>
  );
}
