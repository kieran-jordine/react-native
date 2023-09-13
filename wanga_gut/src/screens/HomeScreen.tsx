import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

function HomeScreen(): JSX.Element {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'red'} />
      <View style={styles.center}>
        <Text style={styles.textStyle}>HomeScreen</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 24,
  },
});

export default HomeScreen;
