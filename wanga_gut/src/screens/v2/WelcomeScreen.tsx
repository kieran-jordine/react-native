/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import {Avatar, Divider, Text} from 'react-native-paper';
import {insetsToMargins} from '../../app/style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Statusbar from '../../components/Statusbar';

export default function WelcomeScreen() {
  return (
    <>
      <Statusbar />
      <View style={{backgroundColor: 'cyan'}}>
        <Text>The Meal DB Categories</Text>
        <ScrollView
          horizontal
          style={{backgroundColor: 'red'}}
          contentContainerStyle={{backgroundColor: 'teal'}}>
          {[1, 2, 3, 4].map(cat => (
            <Avatar.Text key={cat} label={cat.toString()} />
          ))}
        </ScrollView>
        <Text>After scroll view</Text>
        <Divider />
      </View>
      <View
        style={[
          {
            flex: 1,
            backgroundColor: 'orange',
            alignItems: 'center',
            justifyContent: 'center',
          },
          insetsToMargins(useSafeAreaInsets(), ['top']),
        ]}>
        <ActivityIndicator size={'large'} />
      </View>
    </>
  );
}
