/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar, Text, View} from 'react-native';

export default function FeedScreen() {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'red'} />
      <View>
        <Text style={{fontSize: 24}}>FeedScreen</Text>
      </View>
    </>
  );
}
