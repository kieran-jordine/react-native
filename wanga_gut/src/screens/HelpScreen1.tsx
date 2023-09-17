/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import Statusbar from '../components/Statusbar';

export default function HelpScreen1() {
  return (
    <>
      <Statusbar />
      <View>
        <Text style={{fontSize: 24}}>HelpScreen 1</Text>
      </View>
    </>
  );
}
