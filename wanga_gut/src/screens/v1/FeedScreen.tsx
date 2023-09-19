/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {Text} from 'react-native-paper';

export default function FeedScreen() {
  function renderItem(item: number) {
    return (
      <Pressable
        style={style.container}
        onPress={() => Alert.alert('title', 'message', [])}>
        <View>
          <Text style={{backgroundColor: 'transparent'}}>{item}</Text>
        </View>
      </Pressable>
    );
  }
  return (
    <>
      <View>
        <Text style={{fontSize: 24}}>FeedScreen</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={cols}
          data={[1, 2, 3]}
          renderItem={item => renderItem(item.item)}
        />
      </View>
    </>
  );
}

const cols = 3;
const {width} = Dimensions.get('screen');
const margin = 10;
const numerator = width - (cols + 1) * margin; // extra 1 for margin-right of last column
const denominator = cols;
const widthOfItem = numerator / denominator;

const style = StyleSheet.create({
  container: {
    borderWidth: 0.4,
    borderColor: 'grey',
    marginLeft: margin,
    width: widthOfItem,
    height: widthOfItem,
    justifyContent: 'center',
    alignItems: 'center',
  },
});