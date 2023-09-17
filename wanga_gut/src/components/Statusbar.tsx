import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';
import {useTheme} from '@react-navigation/native';

export default function Statusbar() {
  return (
    <StatusBar
      barStyle={useTheme().dark ? 'light-content' : 'dark-content'}
      backgroundColor={'red'}
    />
  );
}
