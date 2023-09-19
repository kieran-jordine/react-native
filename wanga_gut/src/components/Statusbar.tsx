import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';
import {useTheme} from '@react-navigation/native';

export default function Statusbar() {
  const theme = useTheme();
  return (
    <StatusBar
      barStyle={theme.dark ? 'light-content' : 'dark-content'}
      backgroundColor={theme.colors.card}
    />
  );
}
